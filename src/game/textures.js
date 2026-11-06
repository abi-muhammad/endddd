import * as THREE from 'three';

// Generator Tekstur PBR Prosedural Resolusi Tinggi (Albedo sRGB, Normal Map, Roughness Map, dan Environment Map)
// Dirancang agar tajam dengan mipmapping & anisotropy tanpa ketergantungan file eksternal yang berisiko gagal muat.

function configureTexture(canvas, { srgb = true, repeatX = 1, repeatY = 1, anisotropy = 4 } = {}) {
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(repeatX, repeatY);
  tex.generateMipmaps = true;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.anisotropy = anisotropy;
  tex.needsUpdate = true;
  return tex;
}

// Konversi heightmap 2D (grayscale canvas) menjadi Normal Map RGB
function heightCanvasToNormalCanvas(heightCanvas, strength = 2.0) {
  const w = heightCanvas.width;
  const h = heightCanvas.height;
  const srcCtx = heightCanvas.getContext('2d');
  const src = srcCtx.getImageData(0, 0, w, h).data;

  const outCanvas = document.createElement('canvas');
  outCanvas.width = w;
  outCanvas.height = h;
  const outCtx = outCanvas.getContext('2d');
  const outImg = outCtx.createImageData(w, h);
  const dst = outImg.data;

  const sample = (x, y) => {
    const wx = ((x % w) + w) % w;
    const wy = ((y % h) + h) % h;
    return src[(wy * w + wx) * 4] / 255;
  };

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const hL = sample(x - 1, y);
      const hR = sample(x + 1, y);
      const hU = sample(x, y - 1);
      const hD = sample(x, y + 1);

      const dx = (hL - hR) * strength;
      const dy = (hU - hD) * strength;
      const dz = 1.0;
      const len = Math.sqrt(dx * dx + dy * dy + dz * dz) || 1;

      const idx = (y * w + x) * 4;
      dst[idx] = Math.round(((dx / len) * 0.5 + 0.5) * 255);
      dst[idx + 1] = Math.round(((dy / len) * 0.5 + 0.5) * 255);
      dst[idx + 2] = Math.round(((dz / len) * 0.5 + 0.5) * 255);
      dst[idx + 3] = 255;
    }
  }

  outCtx.putImageData(outImg, 0, 0);
  return outCanvas;
}

// ===================== NOISE PROSEDURAL TILEABLE (untuk tekstur PBR mulus tanpa sambungan) =====================
function hash2(ix, iy, seed) {
  let h = (ix * 374761393 + iy * 668265263 + seed * 2147483647) | 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  h = h ^ (h >>> 16);
  return (h >>> 0) / 4294967295;
}

// Value noise periodik: period dalam satuan sel (integer) agar tekstur bisa diulang tanpa sambungan
export function tileNoise(u, v, period, seed = 1) {
  const x = u * period;
  const y = v * period;
  const ix = Math.floor(x);
  const iy = Math.floor(y);
  const fx = x - ix;
  const fy = y - iy;
  const sx = fx * fx * (3 - 2 * fx);
  const sy = fy * fy * (3 - 2 * fy);
  const x0 = ((ix % period) + period) % period;
  const y0 = ((iy % period) + period) % period;
  const x1 = (x0 + 1) % period;
  const y1 = (y0 + 1) % period;
  const a = hash2(x0, y0, seed);
  const b = hash2(x1, y0, seed);
  const c = hash2(x0, y1, seed);
  const d = hash2(x1, y1, seed);
  return a + (b - a) * sx + (c - a) * sy + (a - b - c + d) * sx * sy;
}

export function tileFbm(u, v, period = 4, octaves = 4, seed = 1) {
  let amp = 0.5;
  let sum = 0;
  let norm = 0;
  let p = period;
  for (let o = 0; o < octaves; o++) {
    sum += tileNoise(u, v, p, seed + o * 17) * amp;
    norm += amp;
    amp *= 0.5;
    p *= 2;
  }
  return sum / norm;
}

// Mengisi canvas per-piksel dengan fungsi (u, v, x, y) -> [r, g, b, a?]
function pixelCanvas(size, fn, sizeY = size) {
  const c = document.createElement('canvas');
  c.width = size;
  c.height = sizeY;
  const ctx = c.getContext('2d');
  const img = ctx.createImageData(size, sizeY);
  const d = img.data;
  for (let y = 0; y < sizeY; y++) {
    for (let x = 0; x < size; x++) {
      const out = fn(x / size, y / sizeY, x, y);
      const i = (y * size + x) * 4;
      d[i] = out[0];
      d[i + 1] = out[1];
      d[i + 2] = out[2];
      d[i + 3] = out.length > 3 ? out[3] : 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  return c;
}

function hexToRgb(hex) {
  const h = hex.replace('#', '');
  return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
}

const clamp255 = (v) => (v < 0 ? 0 : v > 255 ? 255 : v);

export class TextureLibrary {
  constructor(renderer, maxAnisotropy = 4) {
    this.renderer = renderer;
    this.anisotropy = maxAnisotropy;
    this.cache = {};
  }

  setAnisotropy(aniso) {
    this.anisotropy = aniso;
    Object.values(this.cache).forEach((entry) => {
      if (entry && entry.isTexture) {
        entry.anisotropy = aniso;
        entry.needsUpdate = true;
      } else if (entry && typeof entry === 'object') {
        Object.values(entry).forEach((sub) => {
          if (sub && sub.isTexture) {
            sub.anisotropy = aniso;
            sub.needsUpdate = true;
          }
        });
      }
    });
  }

  // 1. Environment Map Siang Hari Tropis SMA Negeri 1 Pasir Sakti
  getDaylightEnvMap() {
    if (this.cache.envMap) return this.cache.envMap;
    if (!this.renderer) return null;

    const pmrem = new THREE.PMREMGenerator(this.renderer);
    pmrem.compileEquirectangularShader();

    const envScene = new THREE.Scene();

    // Kubah langit siang cerah tropis
    const skyGeo = new THREE.SphereGeometry(40, 24, 16);
    const skyCanvas = document.createElement('canvas');
    skyCanvas.width = 128;
    skyCanvas.height = 128;
    const sctx = skyCanvas.getContext('2d');
    const grad = sctx.createLinearGradient(0, 0, 0, 128);
    grad.addColorStop(0.0, '#2563eb'); // Zenith biru bersih
    grad.addColorStop(0.45, '#93c5fd'); // Langit siang terang
    grad.addColorStop(0.52, '#fef9c3'); // Horizon matahari hangat
    grad.addColorStop(0.6, '#4d7c5b'); // Pantulan pepohonan taman sekolah
    grad.addColorStop(1.0, '#d6d3cb'); // Pantulan lantai keramik hangat
    sctx.fillStyle = grad;
    sctx.fillRect(0, 0, 128, 128);

    const skyTex = new THREE.CanvasTexture(skyCanvas);
    skyTex.colorSpace = THREE.SRGBColorSpace;
    const skyMat = new THREE.MeshBasicMaterial({ map: skyTex, side: THREE.BackSide });
    envScene.add(new THREE.Mesh(skyGeo, skyMat));

    // Titik matahari terang untuk highlight spekular lembut pada keramik, kaca & motor
    const sunBulb = new THREE.Mesh(
      new THREE.SphereGeometry(3.2, 12, 12),
      new THREE.MeshBasicMaterial({ color: 0xfffbeb })
    );
    sunBulb.position.set(-18, 22, 12);
    envScene.add(sunBulb);

    const envRT = pmrem.fromScene(envScene, 0.035);
    this.cache.envMap = envRT.texture;
    pmrem.dispose();
    skyGeo.dispose();
    skyMat.dispose();
    skyTex.dispose();

    return this.cache.envMap;
  }

  // 2. Tekstur PBR Seragam Batik Marun (Motif Putih & Emas sesuai Foto Referensi)
  getBatikMaroonSet() {
    if (this.cache.batik) return this.cache.batik;

    const size = 512;
    const c = document.createElement('canvas');
    c.width = size;
    c.height = size;
    const ctx = c.getContext('2d');

    // Warna dasar kain katun marun tua
    ctx.fillStyle = '#5e141f';
    ctx.fillRect(0, 0, size, size);

    // Serat tenun kain halus
    for (let y = 0; y < size; y += 2) {
      ctx.fillStyle = y % 4 === 0 ? 'rgba(255,255,255,0.025)' : 'rgba(0,0,0,0.04)';
      ctx.fillRect(0, y, size, 1);
    }
    for (let x = 0; x < size; x += 2) {
      ctx.fillStyle = x % 4 === 0 ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.03)';
      ctx.fillRect(x, 0, 1, size);
    }

    // Pola Batik Nusantara (Kawung Floral & Sulur Emas-Putih Tajam)
    const cell = 64;
    for (let gy = 0; gy < size; gy += cell) {
      for (let gx = 0; gx < size; gx += cell) {
        const cx = gx + cell / 2;
        const cy = gy + cell / 2;

        // Ornamen belah ketupat emas halus
        ctx.strokeStyle = '#d49b35';
        ctx.lineWidth = 2.2;
        ctx.beginPath();
        ctx.moveTo(cx, gy + 4);
        ctx.lineTo(gx + cell - 4, cy);
        ctx.lineTo(cx, gy + cell - 4);
        ctx.lineTo(gx + 4, cy);
        ctx.closePath();
        ctx.stroke();

        // 4 Kelopak Kawung Putih Gading
        const petals = [
          [-12, -12, -Math.PI / 4],
          [12, -12, Math.PI / 4],
          [-12, 12, -Math.PI * 0.75],
          [12, 12, Math.PI * 0.75]
        ];
        petals.forEach(([ox, oy, rot]) => {
          ctx.save();
          ctx.translate(cx + ox, cy + oy);
          ctx.rotate(rot);
          ctx.fillStyle = '#f8fafc';
          ctx.beginPath();
          ctx.ellipse(0, 0, 9.5, 5.2, 0, 0, Math.PI * 2);
          ctx.fill();

          // Isen-isen titik emas di dalam kelopak
          ctx.fillStyle = '#e5a93b';
          ctx.beginPath();
          ctx.arc(0, 0, 2.3, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        });

        // Bintang pusat emas & titik putih
        ctx.fillStyle = '#eab308';
        ctx.beginPath();
        ctx.arc(cx, cy, 5.2, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(cx, cy, 2.2, 0, Math.PI * 2);
        ctx.fill();

        // Ornamen sudut sulur emas-putih
        const corners = [
          [gx, gy],
          [gx + cell, gy],
          [gx, gy + cell],
          [gx + cell, gy + cell]
        ];
        corners.forEach(([px, py]) => {
          ctx.fillStyle = '#d99b26';
          ctx.beginPath();
          ctx.arc(px, py, 4.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = '#f1f5f9';
          ctx.beginPath();
          ctx.arc(px, py, 2.0, 0, Math.PI * 2);
          ctx.fill();
        });
      }
    }

    // Heightmap tenun + lipatan kain alami untuk Normal Map
    const hc = document.createElement('canvas');
    hc.width = 256;
    hc.height = 256;
    const hctx = hc.getContext('2d');
    hctx.fillStyle = '#808080';
    hctx.fillRect(0, 0, 256, 256);

    // Lipatan lembut kain pada pinggang & lengan
    for (let i = 0; i < 6; i++) {
      const y = 30 + i * 38;
      const g = hctx.createLinearGradient(0, y - 12, 0, y + 12);
      g.addColorStop(0, '#808080');
      g.addColorStop(0.5, i % 2 === 0 ? '#a8a8a8' : '#5c5c5c');
      g.addColorStop(1, '#808080');
      hctx.fillStyle = g;
      hctx.fillRect(0, y - 12, 256, 24);
    }
    // Serat tenun mikro
    for (let y = 0; y < 256; y += 2) {
      hctx.fillStyle = y % 4 === 0 ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';
      hctx.fillRect(0, y, 256, 1);
    }

    const normCanvas = heightCanvasToNormalCanvas(hc, 1.5);

    this.cache.batik = {
      map: configureTexture(c, { srgb: true, repeatX: 2.2, repeatY: 1.05, anisotropy: this.anisotropy }),
      normalMap: configureTexture(normCanvas, {
        srgb: false,
        repeatX: 2.2,
        repeatY: 1.05,
        anisotropy: this.anisotropy
      })
    };
    return this.cache.batik;
  }

  // 3. Tekstur PBR Kemeja Putih Polos Guru (Pak Wahid) dengan Lipatan Kain
  getWhiteShirtSet() {
    if (this.cache.whiteShirt) return this.cache.whiteShirt;

    const c = document.createElement('canvas');
    c.width = 256;
    c.height = 256;
    const ctx = c.getContext('2d');

    ctx.fillStyle = '#f5f7fa';
    ctx.fillRect(0, 0, 256, 256);

    // Shading halus lipatan kemeja putih agar berdimensi di siang hari
    for (let i = 0; i < 5; i++) {
      const y = 36 + i * 44;
      const g = ctx.createLinearGradient(0, y - 16, 0, y + 16);
      g.addColorStop(0, 'rgba(203,213,225,0)');
      g.addColorStop(0.5, 'rgba(148,163,184,0.18)');
      g.addColorStop(1, 'rgba(203,213,225,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, y - 16, 256, 32);
    }

    const hc = document.createElement('canvas');
    hc.width = 256;
    hc.height = 256;
    const hctx = hc.getContext('2d');
    hctx.fillStyle = '#808080';
    hctx.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 6; i++) {
      const y = 24 + i * 40;
      const g = hctx.createLinearGradient(0, y - 14, 0, y + 14);
      g.addColorStop(0, '#808080');
      g.addColorStop(0.5, '#a2a2a2');
      g.addColorStop(1, '#808080');
      hctx.fillStyle = g;
      hctx.fillRect(0, y - 14, 256, 28);
    }
    const normCanvas = heightCanvasToNormalCanvas(hc, 1.35);

    this.cache.whiteShirt = {
      map: configureTexture(c, { srgb: true, repeatX: 1, repeatY: 1, anisotropy: this.anisotropy }),
      normalMap: configureTexture(normCanvas, {
        srgb: false,
        repeatX: 1,
        repeatY: 1,
        anisotropy: this.anisotropy
      })
    };
    return this.cache.whiteShirt;
  }

  // 4. Tekstur PBR Celana Kain (SMA Abu-Biru & Guru Gelap)
  getTrouserFabricSet(hexColor = '#5b6b82') {
    const key = `trouser_${hexColor}`;
    if (this.cache[key]) return this.cache[key];

    const c = document.createElement('canvas');
    c.width = 256;
    c.height = 256;
    const ctx = c.getContext('2d');
    ctx.fillStyle = hexColor;
    ctx.fillRect(0, 0, 256, 256);

    // Pola diagonal kain twill/drill seragam sekolah
    ctx.strokeStyle = 'rgba(255,255,255,0.04)';
    ctx.lineWidth = 1;
    for (let i = -256; i < 512; i += 4) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i + 256, 256);
      ctx.stroke();
    }

    // Lipatan lutut & paha
    const foldGrad = ctx.createLinearGradient(0, 100, 0, 156);
    foldGrad.addColorStop(0, 'rgba(0,0,0,0)');
    foldGrad.addColorStop(0.5, 'rgba(0,0,0,0.16)');
    foldGrad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = foldGrad;
    ctx.fillRect(0, 100, 256, 56);

    this.cache[key] = {
      map: configureTexture(c, { srgb: true, repeatX: 1, repeatY: 1, anisotropy: this.anisotropy })
    };
    return this.cache[key];
  }

  // 5. Tekstur PBR Lantai Keramik Putih Sekolah (40x40cm Realistis + Nat Tipis + Roughness/Normal)
  getCeramicFloorSet() {
    if (this.cache.ceramic) return this.cache.ceramic;

    const size = 512;
    const tiles = 4; // 4x4 ubin per repeat
    const step = size / tiles;

    const albedo = document.createElement('canvas');
    albedo.width = size;
    albedo.height = size;
    const actx = albedo.getContext('2d');

    const rough = document.createElement('canvas');
    rough.width = size;
    rough.height = size;
    const rctx = rough.getContext('2d');

    const height = document.createElement('canvas');
    height.width = size;
    height.height = size;
    const hctx = height.getContext('2d');

    // Warna dasar nat semen tipis (tidak hitam pekat agar tampak alami)
    actx.fillStyle = '#c4bfb6';
    actx.fillRect(0, 0, size, size);

    // Nat kasar (roughness tinggi = 230/255) & cekung (height rendah = 55)
    rctx.fillStyle = '#e6e6e6';
    rctx.fillRect(0, 0, size, size);

    hctx.fillStyle = '#383838';
    hctx.fillRect(0, 0, size, size);

    // Gambar tiap ubin keramik dengan sedikit variasi rona alami
    let seed = 17;
    const rand = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };

    const groutHalf = 1.5; // Sambungan nat tipis ~3px pada 512x512
    for (let ty = 0; ty < tiles; ty++) {
      for (let tx = 0; tx < tiles; tx++) {
        const x0 = tx * step + groutHalf;
        const y0 = ty * step + groutHalf;
        const w = step - groutHalf * 2;
        const h = step - groutHalf * 2;

        // Variasi halus warna keramik putih-gading sekolah
        const baseL = 235 + Math.floor((rand() - 0.5) * 7);
        actx.fillStyle = `rgb(${baseL}, ${baseL - 2}, ${baseL - 6})`;
        actx.fillRect(x0, y0, w, h);

        // Serat marmer/keramik sangat lembut agar tidak terlihat plastik polos
        const veinGrad = actx.createLinearGradient(x0, y0, x0 + w, y0 + h);
        veinGrad.addColorStop(0, 'rgba(255,255,255,0.14)');
        veinGrad.addColorStop(0.5, 'rgba(205,198,186,0.12)');
        veinGrad.addColorStop(1, 'rgba(255,255,255,0.08)');
        actx.fillStyle = veinGrad;
        actx.fillRect(x0, y0, w, h);

        // Roughness keramik (~0.24 - 0.30 -> nilai 62-76) untuk pantulan cahaya lembut
        const rVal = 64 + Math.floor(rand() * 14);
        rctx.fillStyle = `rgb(${rVal},${rVal},${rVal})`;
        rctx.fillRect(x0, y0, w, h);

        // Heightmap ubin (permukaan rata dengan sedikit bevel tepi)
        hctx.fillStyle = '#b8b8b8';
        hctx.fillRect(x0, y0, w, h);
        hctx.fillStyle = '#e0e0e0';
        hctx.fillRect(x0 + 2, y0 + 2, w - 4, h - 4);
      }
    }

    const normalCanvas = heightCanvasToNormalCanvas(height, 2.2);

    // Lebar koridor ~7.6m, panjang segmen 20m -> 1 repeat = 1.8m (4 ubin @ 45cm)
    const repX = 4.2;
    const repY = 11.0;

    this.cache.ceramic = {
      map: configureTexture(albedo, {
        srgb: true,
        repeatX: repX,
        repeatY: repY,
        anisotropy: this.anisotropy
      }),
      roughnessMap: configureTexture(rough, {
        srgb: false,
        repeatX: repX,
        repeatY: repY,
        anisotropy: this.anisotropy
      }),
      normalMap: configureTexture(normalCanvas, {
        srgb: false,
        repeatX: repX,
        repeatY: repY,
        anisotropy: this.anisotropy
      })
    };
    return this.cache.ceramic;
  }

  // 6. Tekstur PBR Paving Block Area Parkiran Motor
  getParkingFloorSet() {
    if (this.cache.paving) return this.cache.paving;

    const size = 512;
    const c = document.createElement('canvas');
    c.width = size;
    c.height = size;
    const ctx = c.getContext('2d');

    const hc = document.createElement('canvas');
    hc.width = size;
    hc.height = size;
    const hctx = hc.getContext('2d');

    ctx.fillStyle = '#78756e';
    ctx.fillRect(0, 0, size, size);
    hctx.fillStyle = '#303030';
    hctx.fillRect(0, 0, size, size);

    const rows = 8;
    const cols = 4;
    const rw = size / cols;
    const rh = size / rows;

    let s = 41;
    const rand = () => {
      s = (s * 16807) % 2147483647;
      return (s - 1) / 2147483646;
    };

    for (let r = 0; r < rows; r++) {
      const offset = (r % 2) * (rw * 0.5);
      for (let col = -1; col <= cols; col++) {
        const x = col * rw + offset + 2;
        const y = r * rh + 2;
        const shade = 148 + Math.floor((rand() - 0.5) * 24);
        ctx.fillStyle = `rgb(${shade}, ${shade - 3}, ${shade - 7})`;
        ctx.fillRect(x, y, rw - 4, rh - 4);

        hctx.fillStyle = '#d4d4d4';
        hctx.fillRect(x + 1, y + 1, rw - 6, rh - 6);
      }
    }

    const norm = heightCanvasToNormalCanvas(hc, 2.6);
    this.cache.paving = {
      map: configureTexture(c, { srgb: true, repeatX: 5, repeatY: 12, anisotropy: this.anisotropy }),
      normalMap: configureTexture(norm, {
        srgb: false,
        repeatX: 5,
        repeatY: 12,
        anisotropy: this.anisotropy
      })
    };
    return this.cache.paving;
  }

  // 7. Tekstur PBR Dinding Plester Cat Sekolah (Dengan Ketidaksempurnaan Alami & AO Pertemuan Lantai)
  getPlasterWallTexture(baseHex, bottomAO = false) {
    const key = `wall_${baseHex}_${bottomAO}`;
    if (this.cache[key]) return this.cache[key];

    const c = document.createElement('canvas');
    c.width = 256;
    c.height = 256;
    const ctx = c.getContext('2d');

    ctx.fillStyle = baseHex;
    ctx.fillRect(0, 0, 256, 256);

    // Variasi bercak halus cat tembok sekolah alami
    let s = 99;
    const rand = () => {
      s = (s * 16807) % 2147483647;
      return (s - 1) / 2147483646;
    };

    for (let i = 0; i < 220; i++) {
      const x = rand() * 256;
      const y = rand() * 256;
      const r = 6 + rand() * 22;
      ctx.fillStyle = rand() > 0.5 ? 'rgba(255,255,255,0.025)' : 'rgba(0,0,0,0.03)';
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    // Ambient Occlusion & sedikit noda kelembapan tipis pada pertemuan bawah dinding-lantai
    if (bottomAO) {
      const aoGrad = ctx.createLinearGradient(0, 200, 0, 256);
      aoGrad.addColorStop(0, 'rgba(0,0,0,0)');
      aoGrad.addColorStop(0.75, 'rgba(30,25,20,0.12)');
      aoGrad.addColorStop(1, 'rgba(15,12,10,0.32)');
      ctx.fillStyle = aoGrad;
      ctx.fillRect(0, 200, 256, 56);
    }

    const topAO = ctx.createLinearGradient(0, 0, 0, 28);
    topAO.addColorStop(0, 'rgba(0,0,0,0.18)');
    topAO.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = topAO;
    ctx.fillRect(0, 0, 256, 28);

    this.cache[key] = configureTexture(c, {
      srgb: true,
      repeatX: bottomAO ? 4 : 2,
      repeatY: 1,
      anisotropy: this.anisotropy
    });
    return this.cache[key];
  }

  getPlasterNormalMap() {
    if (this.cache.plasterNorm) return this.cache.plasterNorm;
    const hc = document.createElement('canvas');
    hc.width = 128;
    hc.height = 128;
    const ctx = hc.getContext('2d');
    ctx.fillStyle = '#808080';
    ctx.fillRect(0, 0, 128, 128);

    let s = 7;
    const rand = () => {
      s = (s * 16807) % 2147483647;
      return (s - 1) / 2147483646;
    };
    for (let y = 0; y < 128; y += 2) {
      for (let x = 0; x < 128; x += 2) {
        const v = 116 + Math.floor(rand() * 24);
        ctx.fillStyle = `rgb(${v},${v},${v})`;
        ctx.fillRect(x, y, 2, 2);
      }
    }
    const norm = heightCanvasToNormalCanvas(hc, 1.1);
    this.cache.plasterNorm = configureTexture(norm, {
      srgb: false,
      repeatX: 6,
      repeatY: 2,
      anisotropy: this.anisotropy
    });
    return this.cache.plasterNorm;
  }

  // 8. Tekstur Plafon Gypsum Grid Koridor Sekolah
  getCeilingGridTexture() {
    if (this.cache.ceiling) return this.cache.ceiling;
    const c = document.createElement('canvas');
    c.width = 256;
    c.height = 256;
    const ctx = c.getContext('2d');

    ctx.fillStyle = '#e5e7eb';
    ctx.fillRect(0, 0, 256, 256);

    ctx.strokeStyle = '#cbd5e1';
    ctx.lineWidth = 3;
    for (let i = 0; i <= 256; i += 64) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, 256);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(256, i);
      ctx.stroke();
    }

    this.cache.ceiling = configureTexture(c, {
      srgb: true,
      repeatX: 3,
      repeatY: 8,
      anisotropy: this.anisotropy
    });
    return this.cache.ceiling;
  }

  // 9. Tekstur Serat Kayu Alami (Pintu Kelas, Meja Belajar, Meja Kantin)
  getWoodTexture(baseHex = '#7c431e') {
    const key = `wood_${baseHex}`;
    if (this.cache[key]) return this.cache[key];

    const c = document.createElement('canvas');
    c.width = 256;
    c.height = 256;
    const ctx = c.getContext('2d');

    ctx.fillStyle = baseHex;
    ctx.fillRect(0, 0, 256, 256);

    for (let y = 0; y < 256; y += 3) {
      ctx.fillStyle = y % 6 === 0 ? 'rgba(0,0,0,0.08)' : 'rgba(255,220,180,0.04)';
      ctx.fillRect(0, y, 256, 2);
    }

    this.cache[key] = configureTexture(c, {
      srgb: true,
      repeatX: 1,
      repeatY: 1,
      anisotropy: this.anisotropy
    });
    return this.cache[key];
  }

  // 10. Bayangan Kontak (Ambient Occlusion Blob) agar objek & kaki selalu menempel ke lantai
  getContactShadowTexture() {
    if (this.cache.contactShadow) return this.cache.contactShadow;
    const c = document.createElement('canvas');
    c.width = 128;
    c.height = 128;
    const ctx = c.getContext('2d');
    const g = ctx.createRadialGradient(64, 64, 6, 64, 64, 60);
    g.addColorStop(0, 'rgba(15, 23, 42, 0.52)');
    g.addColorStop(0.55, 'rgba(15, 23, 42, 0.22)');
    g.addColorStop(1, 'rgba(15, 23, 42, 0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 128, 128);

    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    this.cache.contactShadow = tex;
    return tex;
  }

  // 11. Pembuat Papan Nama Kelas, Plang Sekolah & Papan Kantin Tajam Proporsional
  createSignboardTexture({
    title,
    subtitle = '',
    bg = '#111827',
    fg = '#f8fafc',
    border = '#e2e8f0',
    accent = '#fbbf24',
    width = 512,
    height = 192
  }) {
    const key = `sign_${title}_${subtitle}_${bg}_${width}x${height}`;
    if (this.cache[key]) return this.cache[key];

    const c = document.createElement('canvas');
    c.width = width;
    c.height = height;
    const ctx = c.getContext('2d');

    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, width, height);

    ctx.strokeStyle = border;
    ctx.lineWidth = Math.max(6, Math.round(height * 0.042));
    const pad = Math.round(height * 0.06);
    ctx.strokeRect(pad, pad, width - pad * 2, height - pad * 2);

    const maxTextWidth = width - pad * 5;
    ctx.fillStyle = fg;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    if (subtitle) {
      ctx.font = `900 ${Math.round(height * 0.31)}px system-ui, Segoe UI, Arial, sans-serif`;
      ctx.fillText(title, width / 2, height * 0.34, maxTextWidth);

      // Garis pemisah tipis antara judul utama (mis. KANTIN SEKOLAH) dan plang nama sekolah di bawahnya
      ctx.strokeStyle = 'rgba(255,255,255,0.28)';
      ctx.lineWidth = Math.max(2, Math.round(height * 0.015));
      ctx.beginPath();
      ctx.moveTo(width * 0.16, height * 0.55);
      ctx.lineTo(width * 0.84, height * 0.55);
      ctx.stroke();

      ctx.fillStyle = accent;
      ctx.font = `800 ${Math.round(height * 0.23)}px system-ui, Segoe UI, Arial, sans-serif`;
      ctx.fillText(subtitle, width / 2, height * 0.74, maxTextWidth);
    } else {
      ctx.font = `800 ${Math.round(height * 0.46)}px system-ui, Segoe UI, Arial, sans-serif`;
      ctx.fillText(title, width / 2, height * 0.52, maxTextWidth);
    }

    const tex = configureTexture(c, { srgb: true, anisotropy: this.anisotropy });
    tex.wrapS = THREE.ClampToEdgeWrapping;
    tex.wrapT = THREE.ClampToEdgeWrapping;
    this.cache[key] = tex;
    return tex;
  }

  // =====================================================================================
  // GENERASI 3 — TEKSTUR PBR BERSKALA DUNIA (repeat = 1, UV dalam meter via geometryUtils)
  // Setiap set mengembalikan { map, normalMap, roughnessMap, meters } — `meters` adalah
  // ukuran nyata satu ulangan tekstur, disalin ke material.userData.uvMeters.
  // =====================================================================================
  _cached(key, builder) {
    if (!this.cache[key]) this.cache[key] = builder();
    return this.cache[key];
  }

  _t(canvas, srgb = true) {
    return configureTexture(canvas, { srgb, anisotropy: this.anisotropy });
  }

  _grayCanvas(size, fn, sizeY = size) {
    return pixelCanvas(
      size,
      (u, v, x, y) => {
        const g = clamp255(Math.round(fn(u, v, x, y) * 255));
        return [g, g, g];
      },
      sizeY
    );
  }

  // Keramik lantai putih mengkilap 60x60 cm (1 ulangan = 1.2 m = 2x2 ubin)
  getFloorTileSet() {
    return this._cached('g3_floorTile', () => {
      const S = 256;
      const tiles = 2;
      const grout = 1.6 / (S / tiles);
      const tileShade = [];
      for (let i = 0; i < 4; i++) tileShade.push(hash2(i, 7, 3) * 6 - 3);
      const tileAt = (u, v) => {
        const tx = Math.floor(u * tiles);
        const ty = Math.floor(v * tiles);
        const fu = u * tiles - tx;
        const fv = v * tiles - ty;
        const edge = Math.min(fu, 1 - fu, fv, 1 - fv);
        return { id: ty * tiles + tx, edge };
      };
      const albedo = pixelCanvas(S, (u, v) => {
        const t = tileAt(u, v);
        if (t.edge < grout) return [196, 192, 184];
        const vein = tileFbm(u + t.id * 0.37, v, 3, 5, 11);
        const veinLine = Math.max(0, 1 - Math.abs(vein - 0.5) * 22) * 10;
        const base = 236 + tileShade[t.id] + (tileFbm(u, v, 8, 3, 5) - 0.5) * 5 - veinLine;
        return [clamp255(base), clamp255(base - 1.5), clamp255(base - 5)];
      });
      const rough = this._grayCanvas(S, (u, v) => {
        const t = tileAt(u, v);
        if (t.edge < grout * 1.4) return 0.88;
        return 0.11 + tileFbm(u, v, 6, 3, 21) * 0.1 + tileShade[t.id] * 0.004;
      });
      const height = this._grayCanvas(S, (u, v) => {
        const t = tileAt(u, v);
        if (t.edge < grout) return 0.2;
        if (t.edge < grout * 2.2) return 0.2 + ((t.edge - grout) / (grout * 1.2)) * 0.6;
        return 0.8 + (tileFbm(u, v, 16, 2, 9) - 0.5) * 0.02;
      });
      return {
        map: this._t(albedo),
        roughnessMap: this._t(rough, false),
        normalMap: this._t(heightCanvasToNormalCanvas(height, 3.2), false),
        meters: 1.2
      };
    });
  }

  // Keramik dinding krem 30x30 cm (pelapis bawah dinding kelas & kaki tiang sesuai foto)
  getWainscotTileSet() {
    return this._cached('g3_wainscot', () => {
      const S = 256;
      const tiles = 3;
      const grout = 1.4 / (S / tiles);
      const tileAt = (u, v) => {
        const tx = Math.floor(u * tiles);
        const ty = Math.floor(v * tiles);
        const fu = u * tiles - tx;
        const fv = v * tiles - ty;
        return { id: ty * tiles + tx, edge: Math.min(fu, 1 - fu, fv, 1 - fv) };
      };
      const albedo = pixelCanvas(S, (u, v) => {
        const t = tileAt(u, v);
        if (t.edge < grout) return [176, 164, 140];
        const shade = (hash2(t.id, 3, 9) - 0.5) * 10 + (tileFbm(u, v, 6, 3, 4) - 0.5) * 8;
        return [clamp255(228 + shade), clamp255(208 + shade), clamp255(166 + shade * 0.8)];
      });
      const rough = this._grayCanvas(S, (u, v) => (tileAt(u, v).edge < grout * 1.5 ? 0.9 : 0.22));
      const height = this._grayCanvas(S, (u, v) => {
        const e = tileAt(u, v).edge;
        return e < grout ? 0.15 : e < grout * 2.5 ? 0.15 + ((e - grout) / (grout * 1.5)) * 0.7 : 0.85;
      });
      return {
        map: this._t(albedo),
        roughnessMap: this._t(rough, false),
        normalMap: this._t(heightCanvasToNormalCanvas(height, 2.6), false),
        meters: 0.9
      };
    });
  }

  // Cat tembok (hijau sekolah, krem, putih) — tekstur kulit jeruk + noda halus (1 ulangan = 2 m)
  getPaintSet(hex = '#2f8f5b', seed = 1) {
    return this._cached(`g3_paint_${hex}_${seed}`, () => {
      const S = 256;
      const [r, g, b] = hexToRgb(hex);
      const albedo = pixelCanvas(S, (u, v) => {
        const n = (tileFbm(u, v, 3, 4, seed) - 0.5) * 0.09;
        const dirt = Math.max(0, tileFbm(u, v, 5, 3, seed + 40) - 0.62) * 0.35;
        const f = 1 + n - dirt;
        return [clamp255(r * f), clamp255(g * f), clamp255(b * f)];
      });
      const rough = this._grayCanvas(S, (u, v) => 0.72 + tileFbm(u, v, 4, 3, seed + 3) * 0.16);
      const height = this._grayCanvas(S, (u, v) => tileFbm(u, v, 32, 2, seed + 7));
      return {
        map: this._t(albedo),
        roughnessMap: this._t(rough, false),
        normalMap: this._t(heightCanvasToNormalCanvas(height, 0.9), false),
        meters: 2.0
      };
    });
  }

  // Beton rabat / cor halus (lantai parkiran & jalan belakang kelas) — 1 ulangan = 3 m
  getConcreteSet(seed = 5) {
    return this._cached(`g3_concrete_${seed}`, () => {
      const S = 256;
      const albedo = pixelCanvas(S, (u, v, x, y) => {
        const blot = tileFbm(u, v, 4, 4, seed);
        const fine = hash2(x, y, seed) * 12 - 6;
        const brush = Math.sin(u * Math.PI * 64) * 2.5;
        const joint = u < 0.007 || v < 0.007 || Math.abs(u - 0.5) < 0.004 ? 22 : 0;
        const base = 166 + (blot - 0.5) * 24 + fine + brush - joint;
        return [clamp255(base), clamp255(base - 1), clamp255(base - 5)];
      });
      const rough = this._grayCanvas(S, (u, v) => 0.72 + tileFbm(u, v, 6, 3, seed + 2) * 0.16);
      const height = this._grayCanvas(S, (u, v, x, y) => {
        const joint = u < 0.007 || v < 0.007 || Math.abs(u - 0.5) < 0.004 ? -0.25 : 0;
        return 0.5 + (tileFbm(u, v, 24, 3, seed + 4) - 0.5) * 0.35 + (hash2(x, y, 3) - 0.5) * 0.12 + joint;
      });
      return {
        map: this._t(albedo),
        roughnessMap: this._t(rough, false),
        normalMap: this._t(heightCanvasToNormalCanvas(height, 1.3), false),
        meters: 3.0
      };
    });
  }

  // Atap seng/spandek bergelombang (1 ulangan = 0.76 m, 10 gelombang)
  getCorrugatedSet() {
    return this._cached('g3_corrugated', () => {
      const S = 256;
      const waves = 10;
      const albedo = pixelCanvas(S, (u, v, x) => {
        const streak = (tileNoise(u, 0.5, 64, 4) - 0.5) * 16 + (tileFbm(u, v, 2, 3, 8) - 0.5) * 14;
        const rust = Math.max(0, tileFbm(u, v, 6, 3, 31) - 0.7) * 160;
        const ridge = Math.cos(u * waves * Math.PI * 2) * 6;
        return [clamp255(186 + streak + ridge + rust * 0.5), clamp255(192 + streak + ridge - rust * 0.1), clamp255(196 + streak + ridge - rust * 0.6)];
      });
      const rough = this._grayCanvas(S, (u, v) => 0.34 + tileNoise(u, 0.5, 64, 4) * 0.14 + Math.max(0, tileFbm(u, v, 6, 3, 31) - 0.7) * 1.2);
      const height = this._grayCanvas(S, (u) => 0.5 + 0.5 * Math.sin(u * waves * Math.PI * 2));
      return {
        map: this._t(albedo),
        roughnessMap: this._t(rough, false),
        normalMap: this._t(heightCanvasToNormalCanvas(height, 6.5), false),
        meters: 0.76
      };
    });
  }

  // Baja ringan galvanis (spangle halus) — 1 ulangan = 1 m
  getGalvanizedSet() {
    return this._cached('g3_galv', () => {
      const S = 128;
      const albedo = pixelCanvas(S, (u, v) => {
        const sp = tileNoise(u, v, 24, 6) * 18 + tileNoise(u, v, 48, 7) * 8;
        return [clamp255(170 + sp), clamp255(176 + sp), clamp255(182 + sp)];
      });
      const rough = this._grayCanvas(S, (u, v) => 0.3 + tileNoise(u, v, 24, 6) * 0.22);
      return { map: this._t(albedo), roughnessMap: this._t(rough, false), meters: 1.0 };
    });
  }

  // Genteng tanah liat merah bata (1 ulangan = 1.2 m)
  getClayRoofSet() {
    return this._cached('g3_clayroof', () => {
      const S = 256;
      const cols = 4;
      const rows = 4;
      const albedo = pixelCanvas(S, (u, v) => {
        const tx = Math.floor(u * cols);
        const ty = Math.floor(v * rows);
        const fu = u * cols - tx;
        const fv = v * rows - ty;
        const shade = (hash2(tx, ty, 2) - 0.5) * 28;
        const curve = Math.sin(fu * Math.PI) * 18;
        const lap = fv > 0.86 ? -40 : 0;
        const moss = Math.max(0, tileFbm(u, v, 4, 3, 12) - 0.64) * 120;
        return [clamp255(152 + shade + curve + lap - moss * 0.7), clamp255(64 + shade * 0.5 + curve * 0.5 + lap * 0.5 + moss * 0.15), clamp255(40 + shade * 0.3 + lap * 0.3)];
      });
      const height = this._grayCanvas(S, (u, v) => {
        const fu = u * cols - Math.floor(u * cols);
        const fv = v * rows - Math.floor(v * rows);
        return Math.sin(fu * Math.PI) * 0.7 + (1 - fv) * 0.3;
      });
      return {
        map: this._t(albedo),
        normalMap: this._t(heightCanvasToNormalCanvas(height, 3.5), false),
        meters: 1.2
      };
    });
  }

  // Tanah kebun sawit (lembap, kerikil, serasah daun) — 1 ulangan = 2.5 m
  getSoilSet() {
    return this._cached('g3_soil', () => {
      const S = 256;
      const albedo = pixelCanvas(S, (u, v, x, y) => {
        const n = tileFbm(u, v, 4, 5, 3);
        const pebble = hash2(x >> 1, y >> 1, 77) > 0.985 ? 40 : 0;
        const litter = tileFbm(u, v, 12, 2, 50) > 0.68 ? 1 : 0;
        const base = 92 + (n - 0.5) * 50 + pebble;
        if (litter) return [clamp255(base + 30), clamp255(base + 10), clamp255(base - 20)];
        return [clamp255(base + 24), clamp255(base), clamp255(base - 24)];
      });
      const height = this._grayCanvas(S, (u, v, x, y) => tileFbm(u, v, 16, 3, 3) * 0.8 + (hash2(x >> 1, y >> 1, 77) > 0.985 ? 0.3 : 0));
      return {
        map: this._t(albedo),
        normalMap: this._t(heightCanvasToNormalCanvas(height, 2.4), false),
        meters: 2.5
      };
    });
  }

  // Rumput halaman sekolah (variasi warna alami) — 1 ulangan = 2 m
  getGrassSet() {
    return this._cached('g3_grass', () => {
      const S = 256;
      const albedo = pixelCanvas(S, (u, v, x, y) => {
        const n = tileFbm(u, v, 4, 4, 9);
        const blade = hash2(x, y, 13) * 26 - 13;
        const dry = Math.max(0, tileFbm(u, v, 3, 3, 70) - 0.62) * 140;
        return [clamp255(62 + (n - 0.5) * 30 + blade * 0.6 + dry * 0.8), clamp255(112 + (n - 0.5) * 46 + blade + dry * 0.25), clamp255(44 + (n - 0.5) * 20 + blade * 0.4)];
      });
      const height = this._grayCanvas(S, (u, v, x, y) => hash2(x, y, 13) * 0.7 + tileFbm(u, v, 8, 2, 9) * 0.3);
      return {
        map: this._t(albedo),
        normalMap: this._t(heightCanvasToNormalCanvas(height, 1.8), false),
        meters: 2.0
      };
    });
  }

  // Plafon gypsum putih panel 60x120 cm — 1 ulangan = 1.2 m
  getCeilingPanelSet() {
    return this._cached('g3_ceiling', () => {
      const S = 256;
      const albedo = pixelCanvas(S, (u, v) => {
        const seam = (u % 0.5 < 0.008 || u % 0.5 > 0.492 || v < 0.006 || v > 0.994) ? -28 : 0;
        const n = (tileFbm(u, v, 4, 3, 2) - 0.5) * 6;
        return [clamp255(242 + seam + n), clamp255(242 + seam + n), clamp255(238 + seam + n)];
      });
      return { map: this._t(albedo), meters: 1.2 };
    });
  }

  // Batang sawit dengan pangkal pelepah (pola belah ketupat spiral khas Elaeis guineensis)
  getPalmTrunkSet() {
    return this._cached('g3_palmTrunk', () => {
      const S = 256;
      const cellsU = 6;
      const cellsV = 6;
      const cell = (u, v) => {
        const a = u * cellsU + v * cellsV;
        const b = u * cellsU - v * cellsV;
        const fa = a - Math.floor(a);
        const fb = b - Math.floor(b);
        return Math.min(fa, 1 - fa, fb, 1 - fb);
      };
      const albedo = pixelCanvas(S, (u, v, x, y) => {
        const e = cell(u, v);
        const fiber = hash2(x, y >> 2, 4) * 22;
        const moss = Math.max(0, tileFbm(u, v, 3, 3, 15) - 0.6) * 160;
        const base = e < 0.08 ? 46 : 92 + e * 70;
        return [clamp255(base + fiber - moss * 0.5), clamp255(base * 0.78 + fiber * 0.8 + moss * 0.2), clamp255(base * 0.55 + fiber * 0.5 - moss * 0.2)];
      });
      const height = this._grayCanvas(S, (u, v, x, y) => cell(u, v) * 1.6 + hash2(x, y >> 2, 4) * 0.12);
      return {
        map: this._t(albedo),
        normalMap: this._t(heightCanvasToNormalCanvas(height, 4.5), false),
        meters: 1.0
      };
    });
  }

  // Tekstur pelepah sawit (alpha cutout): tulang daun + anak daun lanset berbaris
  getPalmFrondTexture() {
    return this._cached('g3_palmFrond', () => {
      const W = 256;
      const H = 512;
      const c = document.createElement('canvas');
      c.width = W;
      c.height = H;
      const ctx = c.getContext('2d');
      ctx.clearRect(0, 0, W, H);
      const cx = W / 2;
      const count = 46;
      for (let side = -1; side <= 1; side += 2) {
        for (let i = 0; i < count; i++) {
          const t = i / (count - 1); // 0 = pangkal (bawah canvas), 1 = ujung (atas)
          const y = H - 18 - t * (H - 40);
          const lenProfile = Math.sin(Math.min(1, t * 1.15 + 0.08) * Math.PI) * 0.92 + 0.08;
          const len = (W / 2 - 6) * lenProfile * (0.85 + hash2(i, side, 3) * 0.15);
          const ang = 0.75 + t * 0.35 + (hash2(i, side, 8) - 0.5) * 0.18;
          const tipX = cx + side * Math.sin(ang) * len;
          const tipY = y - Math.cos(ang) * len;
          const g = 60 + hash2(i, side, 5) * 40;
          ctx.fillStyle = `rgb(${Math.round(36 + g * 0.25)}, ${Math.round(70 + g * 0.6)}, ${Math.round(28 + g * 0.15)})`;
          ctx.beginPath();
          ctx.moveTo(cx, y);
          const mx = (cx + tipX) / 2;
          const my = (y + tipY) / 2;
          ctx.quadraticCurveTo(mx + side * 3, my - 6, tipX, tipY);
          ctx.quadraticCurveTo(mx - side * 1, my + 4, cx, y + 5);
          ctx.closePath();
          ctx.fill();
          // Ujung anak daun sedikit kecokelatan (alami)
          if (hash2(i, side, 21) > 0.7) {
            ctx.strokeStyle = 'rgba(150,120,60,0.8)';
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(tipX - side * 8 * Math.sin(ang), tipY + 8 * Math.cos(ang));
            ctx.lineTo(tipX, tipY);
            ctx.stroke();
          }
        }
      }
      // Tulang daun utama (rachis)
      const rg = ctx.createLinearGradient(0, H, 0, 0);
      rg.addColorStop(0, '#6b6a2a');
      rg.addColorStop(1, '#4d6b2a');
      ctx.strokeStyle = rg;
      ctx.lineCap = 'round';
      for (let i = 0; i < 6; i++) {
        const y0 = H - (i / 6) * H;
        const y1 = H - ((i + 1) / 6) * H;
        ctx.lineWidth = 8 - i * 1.1;
        ctx.beginPath();
        ctx.moveTo(cx, y0);
        ctx.lineTo(cx, y1);
        ctx.stroke();
      }
      const tex = configureTexture(c, { srgb: true, anisotropy: this.anisotropy });
      tex.wrapS = THREE.ClampToEdgeWrapping;
      tex.wrapT = THREE.ClampToEdgeWrapping;
      return tex;
    });
  }

  // Kartu kumpulan daun pohon tropis (mangga/ketapang) — alpha cutout
  getLeafClusterTexture(seed = 1) {
    return this._cached(`g3_leafCard_${seed}`, () => {
      const S = 256;
      const c = document.createElement('canvas');
      c.width = S;
      c.height = S;
      const ctx = c.getContext('2d');
      for (let i = 0; i < 140; i++) {
        const a = hash2(i, 1, seed) * Math.PI * 2;
        const r = Math.sqrt(hash2(i, 2, seed)) * S * 0.42;
        const x = S / 2 + Math.cos(a) * r;
        const y = S / 2 + Math.sin(a) * r;
        const len = 16 + hash2(i, 3, seed) * 14;
        const g = hash2(i, 4, seed);
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(hash2(i, 5, seed) * Math.PI * 2);
        ctx.fillStyle = `rgb(${Math.round(30 + g * 50)}, ${Math.round(78 + g * 70)}, ${Math.round(26 + g * 30)})`;
        ctx.beginPath();
        ctx.ellipse(0, 0, len, len * 0.42, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = 'rgba(200,230,150,0.35)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(-len, 0);
        ctx.lineTo(len, 0);
        ctx.stroke();
        ctx.restore();
      }
      const tex = configureTexture(c, { srgb: true, anisotropy: this.anisotropy });
      tex.wrapS = THREE.ClampToEdgeWrapping;
      tex.wrapT = THREE.ClampToEdgeWrapping;
      return tex;
    });
  }

  // Kain pakaian dengan jahitan, kancing, saku & lipatan (UV lathe: u=0 punggung, u=0.5 depan)
  // kind: 'shirt' | 'pants' | 'sleeve' | 'plain'
  getGarmentSet(kind, hex, opts = {}) {
    const key = `g3_garment_${kind}_${hex}_${JSON.stringify(opts)}`;
    return this._cached(key, () => {
      const S = 512;
      const c = document.createElement('canvas');
      c.width = S;
      c.height = S;
      const ctx = c.getContext('2d');
      ctx.fillStyle = hex;
      ctx.fillRect(0, 0, S, S);
      for (let y = 0; y < S; y += 4) {
        ctx.fillStyle = y % 8 === 0 ? 'rgba(255,255,255,0.025)' : 'rgba(0,0,0,0.03)';
        ctx.fillRect(0, y, S, 2);
      }
      const stitch = (x0, y0, x1, y1, color = 'rgba(0,0,0,0.22)') => {
        ctx.strokeStyle = color;
        ctx.lineWidth = 1.4;
        ctx.setLineDash([4, 3]);
        ctx.beginPath();
        ctx.moveTo(x0, y0);
        ctx.lineTo(x1, y1);
        ctx.stroke();
        ctx.setLineDash([]);
      };
      const seamShadow = (x0, y0, x1, y1) => {
        ctx.strokeStyle = 'rgba(0,0,0,0.12)';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(x0, y0);
        ctx.lineTo(x1, y1);
        ctx.stroke();
      };
      if (kind === 'shirt') {
        // Jahitan samping (u=0.25 & 0.75), yoke punggung, placket kancing depan (u=0.5)
        [0.25, 0.75].forEach((su) => {
          seamShadow(su * S, 0, su * S, S);
          stitch(su * S + 3, 0, su * S + 3, S);
        });
        seamShadow(0, S * 0.12, S * 0.5 - 80, S * 0.12);
        seamShadow(S * 0.5 + 80, S * 0.12, S, S * 0.12);
        // Placket depan
        ctx.fillStyle = 'rgba(0,0,0,0.05)';
        ctx.fillRect(S * 0.5 - 9, 0, 18, S);
        stitch(S * 0.5 - 9, 0, S * 0.5 - 9, S);
        stitch(S * 0.5 + 9, 0, S * 0.5 + 9, S);
        for (let i = 0; i < 6; i++) {
          const by = S * 0.12 + i * S * 0.15;
          ctx.fillStyle = opts.buttonColor || 'rgba(235,235,230,1)';
          ctx.beginPath();
          ctx.arc(S * 0.5, by, 5, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeStyle = 'rgba(0,0,0,0.3)';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
        // Lipatan horizontal di pinggang (baju dimasukkan)
        for (let i = 0; i < 5; i++) {
          const fy = S * (0.84 + i * 0.03);
          const grad = ctx.createLinearGradient(0, fy - 6, 0, fy + 6);
          grad.addColorStop(0, 'rgba(0,0,0,0)');
          grad.addColorStop(0.5, 'rgba(0,0,0,0.08)');
          grad.addColorStop(1, 'rgba(0,0,0,0)');
          ctx.fillStyle = grad;
          ctx.fillRect(S * 0.3, fy - 6, S * 0.4, 12);
        }
        // Saku dada (kiri pemakai = sisi +x dunia saat menghadap -Z => u≈0.62)
        const pocket = (pu, label) => {
          const px = pu * S;
          const py = S * 0.26;
          ctx.strokeStyle = 'rgba(0,0,0,0.25)';
          ctx.lineWidth = 2;
          ctx.strokeRect(px - 26, py, 52, 58);
          stitch(px - 23, py + 3, px + 23, py + 3);
          if (opts.pocketFlap) {
            ctx.fillStyle = 'rgba(0,0,0,0.08)';
            ctx.fillRect(px - 28, py - 4, 56, 18);
            ctx.strokeRect(px - 28, py - 4, 56, 18);
          }
          if (label === 'osis') {
            // Lambang OSIS (tunas kelapa dalam segi lima kuning-cokelat)
            ctx.fillStyle = '#b45309';
            ctx.beginPath();
            ctx.moveTo(px, py + 14);
            ctx.lineTo(px + 14, py + 24);
            ctx.lineTo(px + 9, py + 42);
            ctx.lineTo(px - 9, py + 42);
            ctx.lineTo(px - 14, py + 24);
            ctx.closePath();
            ctx.fill();
            ctx.fillStyle = '#fde047';
            ctx.beginPath();
            ctx.arc(px, py + 29, 6, 0, Math.PI * 2);
            ctx.fill();
          } else if (label === 'tunas') {
            ctx.fillStyle = '#7c2d12';
            ctx.beginPath();
            ctx.arc(px, py + 30, 13, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#facc15';
            ctx.font = 'bold 14px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('✦', px, py + 35);
          }
        };
        if (opts.pockets === 2) {
          pocket(0.39, opts.leftBadge);
          pocket(0.61, opts.rightBadge);
        } else {
          pocket(0.62, opts.leftBadge);
        }
        if (opts.nameTag) {
          ctx.fillStyle = '#111827';
          ctx.fillRect(S * 0.36 - 26, S * 0.27, 52, 14);
          ctx.fillStyle = '#e5e7eb';
          ctx.font = 'bold 10px sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText(opts.nameTag, S * 0.36, S * 0.27 + 11);
        }
      } else if (kind === 'pants') {
        // Jahitan samping, garis setrika depan, saku samping
        [0.25, 0.75].forEach((su) => {
          seamShadow(su * S, 0, su * S, S);
          stitch(su * S - 3, 0, su * S - 3, S);
        });
        ctx.strokeStyle = 'rgba(255,255,255,0.07)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(S * 0.5, 0);
        ctx.lineTo(S * 0.5, S);
        ctx.stroke();
        // Lipatan lutut (v~0.5)
        for (let i = 0; i < 4; i++) {
          const fy = S * (0.44 + i * 0.035);
          ctx.fillStyle = 'rgba(0,0,0,0.07)';
          ctx.fillRect(0, fy, S, 3);
        }
      } else if (kind === 'sleeve') {
        stitch(0, S * 0.08, S, S * 0.08);
        stitch(0, S * 0.92, S, S * 0.92, 'rgba(0,0,0,0.3)');
        if (opts.patch) {
          // Badge lengan (lokasi sekolah / bendera merah putih Pramuka)
          const px = S * 0.25;
          if (opts.patch === 'flag') {
            ctx.fillStyle = '#dc2626';
            ctx.fillRect(px - 30, S * 0.3, 60, 20);
            ctx.fillStyle = '#f8fafc';
            ctx.fillRect(px - 30, S * 0.3 + 20, 60, 20);
          } else {
            ctx.fillStyle = '#1e3a8a';
            ctx.beginPath();
            ctx.ellipse(px, S * 0.42, 36, 46, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#fde047';
            ctx.font = 'bold 13px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(opts.patch, px, S * 0.44);
          }
        }
      }
      if (!this.cache.g3_garment_norm) {
        const hc = this._grayCanvas(128, (u, v, x, y) => {
          const weave = ((x + y) % 2) * 0.12;
          const wrinkle = tileFbm(u, v * 0.35, 4, 3, 33);
          return 0.4 + weave + wrinkle * 0.5;
        });
        this.cache.g3_garment_norm = configureTexture(heightCanvasToNormalCanvas(hc, 2.0), {
          srgb: false,
          anisotropy: this.anisotropy
        });
      }
      return {
        map: configureTexture(c, { srgb: true, anisotropy: this.anisotropy }),
        normalMap: this.cache.g3_garment_norm
      };
    });
  }

  // Rambut: helai searah (normal map bergaris) agar tidak tampak seperti helm plastik
  getHairSet() {
    return this._cached('g3_hair', () => {
      const S = 256;
      const albedo = pixelCanvas(S, (u, v, x) => {
        const s = tileNoise(u, 0.5, 96, 3) * 22 + tileNoise(u, v, 8, 9) * 10;
        return [clamp255(20 + s), clamp255(18 + s * 0.9), clamp255(17 + s * 0.8)];
      });
      const height = this._grayCanvas(S, (u, v) => tileNoise(u, v * 0.1 + 0.5, 128, 3));
      return {
        map: this._t(albedo),
        normalMap: this._t(heightCanvasToNormalCanvas(height, 3.0), false)
      };
    });
  }

  // Kulit: variasi rona halus (pipi lebih merah, pori mikro lewat roughness)
  getSkinSet(hex = '#c98c64') {
    return this._cached(`g3_skin_${hex}`, () => {
      const S = 128;
      const [r, g, b] = hexToRgb(hex);
      const albedo = pixelCanvas(S, (u, v) => {
        const n = (tileFbm(u, v, 4, 4, 61) - 0.5) * 14;
        return [clamp255(r + n + 3), clamp255(g + n * 0.8), clamp255(b + n * 0.7)];
      });
      const height = this._grayCanvas(S, (u, v, x, y) => hash2(x, y, 44) * 0.5 + 0.25);
      return {
        map: this._t(albedo),
        normalMap: this._t(heightCanvasToNormalCanvas(height, 0.35), false)
      };
    });
  }

  // Poster / mading kelas (variasi isi agar tiap kelas berbeda)
  createPosterTexture(seed = 1) {
    return this._cached(`g3_poster_${seed}`, () => {
      const W = 192;
      const H = 256;
      const c = document.createElement('canvas');
      c.width = W;
      c.height = H;
      const ctx = c.getContext('2d');
      const themes = [
        ['JADWAL PIKET', '#0f766e', '#ecfeff'],
        ['STRUKTUR KELAS', '#1d4ed8', '#eff6ff'],
        ['BUANG SAMPAH PADA TEMPATNYA', '#15803d', '#f0fdf4'],
        ['5S: SENYUM SALAM SAPA SOPAN SANTUN', '#b45309', '#fffbeb'],
        ['JUMAT BERSIH', '#7c3aed', '#f5f3ff'],
        ['DILARANG MEROKOK', '#b91c1c', '#fef2f2'],
        ['TATA TERTIB SISWA', '#334155', '#f8fafc'],
        ['AYO MEMBACA!', '#c2410c', '#fff7ed']
      ];
      const [title, accent, bg] = themes[Math.abs(seed) % themes.length];
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = accent;
      ctx.fillRect(0, 0, W, 54);
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 17px system-ui, sans-serif';
      ctx.textAlign = 'center';
      const words = title.split(' ');
      let line = '';
      let ly = 22;
      words.forEach((w) => {
        const test = line ? `${line} ${w}` : w;
        if (ctx.measureText(test).width > W - 16) {
          ctx.fillText(line, W / 2, ly);
          line = w;
          ly += 20;
        } else {
          line = test;
        }
      });
      ctx.fillText(line, W / 2, ly);
      ctx.fillStyle = 'rgba(30,41,59,0.55)';
      for (let i = 0; i < 9; i++) {
        const lw = 60 + hash2(i, seed, 2) * 90;
        ctx.fillRect(16, 72 + i * 18, lw, 6);
      }
      ctx.fillStyle = accent;
      ctx.globalAlpha = 0.25;
      ctx.beginPath();
      ctx.arc(W - 40, H - 40, 26, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
      const tex = configureTexture(c, { srgb: true, anisotropy: this.anisotropy });
      tex.wrapS = THREE.ClampToEdgeWrapping;
      tex.wrapT = THREE.ClampToEdgeWrapping;
      return tex;
    });
  }

  // Rak jajanan warung kantin (bungkus snack renteng warna-warni)
  getSnackShelfTexture() {
    return this._cached('g3_snacks', () => {
      const W = 256;
      const H = 256;
      const c = document.createElement('canvas');
      c.width = W;
      c.height = H;
      const ctx = c.getContext('2d');
      ctx.fillStyle = '#3f2a1c';
      ctx.fillRect(0, 0, W, H);
      const palette = ['#dc2626', '#f59e0b', '#16a34a', '#2563eb', '#db2777', '#facc15', '#7c3aed', '#ea580c'];
      for (let row = 0; row < 4; row++) {
        for (let i = 0; i < 9; i++) {
          const x = 4 + i * 28;
          const y = 6 + row * 64;
          const col = palette[Math.floor(hash2(i, row, 4) * palette.length)];
          ctx.fillStyle = col;
          ctx.fillRect(x, y, 24, 50);
          ctx.fillStyle = 'rgba(255,255,255,0.75)';
          ctx.fillRect(x + 4, y + 16, 16, 10);
          ctx.fillStyle = 'rgba(0,0,0,0.25)';
          ctx.fillRect(x, y + 44, 24, 6);
        }
        ctx.fillStyle = '#8b5a2b';
        ctx.fillRect(0, row * 64 + 58, W, 6);
      }
      return configureTexture(c, { srgb: true, anisotropy: this.anisotropy });
    });
  }

  // Isi etalase makanan (nasi, gorengan, lauk) dilihat dari depan/atas
  getFoodTrayTexture(variant = 0) {
    return this._cached(`g3_food_${variant}`, () => {
      const S = 128;
      const palettes = [
        ['#e8b04a', '#c47a2c', '#f2d388'], // gorengan
        ['#f8f5ec', '#e9e2d0', '#ffffff'], // nasi
        ['#9a3412', '#c2410c', '#7c2d12'], // lauk balado
        ['#4d7c0f', '#65a30d', '#3f6212'] // sayur
      ];
      const pal = palettes[variant % palettes.length];
      const c = pixelCanvas(S, (u, v, x, y) => {
        const n = tileNoise(u, v, 12, variant + 3);
        const col = hexToRgb(pal[n < 0.4 ? 0 : n < 0.75 ? 1 : 2]);
        const sh = (hash2(x, y, variant) - 0.5) * 20;
        return [clamp255(col[0] + sh), clamp255(col[1] + sh), clamp255(col[2] + sh)];
      });
      return configureTexture(c, { srgb: true, anisotropy: this.anisotropy });
    });
  }
}
