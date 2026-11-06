import * as THREE from 'three';

export const LANE_WIDTH = 2.2;
export const LANES = [-LANE_WIDTH, 0, LANE_WIDTH];

export const STORAGE_CHARACTER_KEY = 'kpw_selected_character';

export const OUTFIT_PRESETS = [
  {
    id: 'WHITE_GREY',
    name: 'Siswa SMA (Putih Abu-Abu)',
    badgeName: 'SERAGAM OSIS PUTIH ABU-ABU',
    description:
      'Kemeja putih berkerah rapi dengan badge saku OSIS & lokasi SMAN 1 Pasir Sakti, celana panjang abu-abu bergaris setrika, kaos kaki putih, sepatu sekolah gelap, dan tas ransel.',
    primaryColor: '#f8fafc',
    secondaryColor: '#52637a'
  },
  {
    id: 'PRAMUKA',
    name: 'Siswa Pramuka (Cokelat Lengkap)',
    badgeName: 'SERAGAM PRAMUKA PENEGAK',
    description:
      'Kemeja Pramuka cokelat muda dengan saku dada ganda 3D bertutup, lidah bahu, hasduk merah-putih bercincin rotan, sabuk Pramuka, celana cokelat tua, dan sepatu sekolah gelap.',
    primaryColor: '#c29b68',
    secondaryColor: '#3e2415'
  },
  {
    id: 'BATIK',
    name: 'Siswa Batik (Marun Emas)',
    badgeName: 'SERAGAM BATIK KHAS SEKOLAH',
    description:
      'Seragam batik katun marun bermotif kawung emas-putih khas kebanggaan siswa SMAN 1 Pasir Sakti dengan celana abu-abu dan tas sekolah.',
    primaryColor: '#5e141f',
    secondaryColor: '#52637a'
  }
];

export class Player {
  constructor(scene, texLib) {
    this.scene = scene;
    this.texLib = texLib;
    this.group = new THREE.Group();
    this.rigRoot = new THREE.Group();
    this.group.add(this.rigRoot);

    // State pergerakan 3 jalur (mempertahankan 100% mekanik inti)
    this.currentLane = 1;
    this.targetX = LANES[1];
    this.y = 0;
    this.velocityY = 0;
    this.gravity = -34;
    this.baseJumpForce = 12.8;

    this.isJumping = false;
    this.jumpElapsed = 0;
    this.isSliding = false;
    this.slideTimer = 0;
    this.slideDuration = 0.68;

    this.landCompress = 0;
    this.stumbleTimer = 0;
    this.isCaught = false;
    this.runCycle = 0;
    this.stepPhase = 0;

    // Bobot transisi animasi halus & fisika pegas lateral (Fluid Animation Blending)
    this.jumpBlend = 0;
    this.slideBlend = 0;
    this.laneBank = 0;
    this.laneVelX = 0;
    this.dodgeTimer = 0;
    this.dodgeDir = 0;
    this.glanceClock = 0;

    // Power-up flags
    this.hasSuperJump = false;
    this.hasTurbo = false;
    this.hasMagnet = false;

    // Karakter & Seragam Aktif
    const saved = localStorage.getItem(STORAGE_CHARACTER_KEY);
    this.currentOutfitId = OUTFIT_PRESETS.some((p) => p.id === saved) ? saved : 'WHITE_GREY';

    this.outfitMaterials = {};
    this.initOutfitMaterials();
    this.buildHumanoidStudent();
    this.applyOutfit(this.currentOutfitId);

    if (this.scene) {
      this.scene.add(this.group);
    }
  }

  initOutfitMaterials() {
    const skinSet = this.texLib && this.texLib.getSkinSet ? this.texLib.getSkinSet('#dca074') : null;
    const hairSet = this.texLib && this.texLib.getHairSet ? this.texLib.getHairSet() : null;

    this.skinMat = new THREE.MeshStandardMaterial({
      color: 0xdca074,
      map: skinSet ? skinSet.map : null,
      normalMap: skinSet ? skinSet.normalMap : null,
      normalScale: new THREE.Vector2(0.25, 0.25),
      roughness: 0.64,
      metalness: 0.02
    });

    this.hairMat = new THREE.MeshStandardMaterial({
      color: 0x16181d,
      map: hairSet ? hairSet.map : null,
      normalMap: hairSet ? hairSet.normalMap : null,
      normalScale: new THREE.Vector2(0.6, 0.6),
      roughness: 0.78,
      metalness: 0.04
    });

    // 1. Seragam Putih Abu-Abu (OSIS SMAN 1 Pasir Sakti)
    const whiteShirt = this.texLib && this.texLib.getGarmentSet
      ? this.texLib.getGarmentSet('shirt', '#f4f6f9', { leftBadge: 'osis', nameTag: 'SISWA' })
      : null;
    const greyPants = this.texLib && this.texLib.getGarmentSet
      ? this.texLib.getGarmentSet('pants', '#52637a')
      : null;
    const whiteSleeve = this.texLib && this.texLib.getGarmentSet
      ? this.texLib.getGarmentSet('sleeve', '#f4f6f9', { patch: 'SMAN 1' })
      : null;

    this.outfitMaterials.WHITE_GREY = {
      torso: new THREE.MeshStandardMaterial({
        color: 0xffffff,
        map: whiteShirt ? whiteShirt.map : null,
        normalMap: whiteShirt ? whiteShirt.normalMap : null,
        normalScale: new THREE.Vector2(0.7, 0.7),
        roughness: 0.82,
        metalness: 0.02
      }),
      sleeve: new THREE.MeshStandardMaterial({
        color: 0xffffff,
        map: whiteSleeve ? whiteSleeve.map : null,
        normalMap: whiteSleeve ? whiteSleeve.normalMap : null,
        normalScale: new THREE.Vector2(0.65, 0.65),
        roughness: 0.82,
        metalness: 0.02
      }),
      pants: new THREE.MeshStandardMaterial({
        color: 0xffffff,
        map: greyPants ? greyPants.map : null,
        normalMap: greyPants ? greyPants.normalMap : null,
        normalScale: new THREE.Vector2(0.6, 0.6),
        roughness: 0.84,
        metalness: 0.02
      }),
      collar: new THREE.MeshStandardMaterial({
        color: 0xf8fafc,
        roughness: 0.78,
        metalness: 0.02
      }),
      sock: new THREE.MeshStandardMaterial({
        color: 0xf8fafc,
        roughness: 0.8
      }),
      buckle: new THREE.MeshStandardMaterial({
        color: 0xcbd5e1,
        roughness: 0.28,
        metalness: 0.85
      }),
      hasduk: false,
      pramuka3D: false
    };

    // 2. Seragam Pramuka Cokelat Lengkap dengan Atribut 3D
    const pramukaShirt = this.texLib && this.texLib.getGarmentSet
      ? this.texLib.getGarmentSet('shirt', '#c49a68', {
          leftBadge: 'tunas',
          pocketFlap: true,
          pockets: 2,
          buttonColor: '#4a2c16',
          nameTag: 'PRAMUKA'
        })
      : null;
    const pramukaPants = this.texLib && this.texLib.getGarmentSet
      ? this.texLib.getGarmentSet('pants', '#3e2415')
      : null;
    const pramukaSleeve = this.texLib && this.texLib.getGarmentSet
      ? this.texLib.getGarmentSet('sleeve', '#c49a68', { patch: 'flag' })
      : null;

    this.outfitMaterials.PRAMUKA = {
      torso: new THREE.MeshStandardMaterial({
        color: 0xffffff,
        map: pramukaShirt ? pramukaShirt.map : null,
        normalMap: pramukaShirt ? pramukaShirt.normalMap : null,
        normalScale: new THREE.Vector2(0.75, 0.75),
        roughness: 0.85,
        metalness: 0.02
      }),
      sleeve: new THREE.MeshStandardMaterial({
        color: 0xffffff,
        map: pramukaSleeve ? pramukaSleeve.map : null,
        normalMap: pramukaSleeve ? pramukaSleeve.normalMap : null,
        normalScale: new THREE.Vector2(0.7, 0.7),
        roughness: 0.85,
        metalness: 0.02
      }),
      pants: new THREE.MeshStandardMaterial({
        color: 0xffffff,
        map: pramukaPants ? pramukaPants.map : null,
        normalMap: pramukaPants ? pramukaPants.normalMap : null,
        normalScale: new THREE.Vector2(0.65, 0.65),
        roughness: 0.86,
        metalness: 0.02
      }),
      collar: new THREE.MeshStandardMaterial({
        color: 0xb08654,
        roughness: 0.8,
        metalness: 0.02
      }),
      sock: new THREE.MeshStandardMaterial({
        color: 0x1e2024,
        roughness: 0.82
      }),
      buckle: new THREE.MeshStandardMaterial({
        color: 0xd97706,
        roughness: 0.25,
        metalness: 0.88
      }),
      hasduk: true,
      pramuka3D: true
    };

    // 3. Seragam Batik Marun Khas SMAN 1 Pasir Sakti
    const batikSet = this.texLib && this.texLib.getBatikMaroonSet ? this.texLib.getBatikMaroonSet() : null;
    const batikPants = this.texLib && this.texLib.getTrouserFabricSet
      ? this.texLib.getTrouserFabricSet('#52637a')
      : null;

    this.outfitMaterials.BATIK = {
      torso: new THREE.MeshStandardMaterial({
        color: batikSet ? 0xffffff : 0x6b1824,
        map: batikSet ? batikSet.map : null,
        normalMap: batikSet ? batikSet.normalMap : null,
        normalScale: new THREE.Vector2(0.6, 0.6),
        roughness: 0.85,
        metalness: 0.02
      }),
      sleeve: new THREE.MeshStandardMaterial({
        color: batikSet ? 0xffffff : 0x6b1824,
        map: batikSet ? batikSet.map : null,
        normalMap: batikSet ? batikSet.normalMap : null,
        roughness: 0.85,
        metalness: 0.02
      }),
      pants: new THREE.MeshStandardMaterial({
        color: batikPants ? 0xffffff : 0x52637a,
        map: batikPants ? batikPants.map : null,
        roughness: 0.82,
        metalness: 0.02
      }),
      collar: new THREE.MeshStandardMaterial({
        color: 0x6b1824,
        roughness: 0.85,
        metalness: 0.02
      }),
      sock: new THREE.MeshStandardMaterial({
        color: 0xf8fafc,
        roughness: 0.8
      }),
      buckle: new THREE.MeshStandardMaterial({
        color: 0xcbd5e1,
        roughness: 0.28,
        metalness: 0.85
      }),
      hasduk: false,
      pramuka3D: false
    };
  }

  buildHumanoidStudent() {
    const shadowTex = this.texLib ? this.texLib.getContactShadowTexture() : null;

    const lipMat = new THREE.MeshStandardMaterial({
      color: 0xa85d4c,
      roughness: 0.62
    });

    const eyeWhiteMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.22
    });

    const irisMat = new THREE.MeshStandardMaterial({
      color: 0x1c1917,
      roughness: 0.18
    });

    const beltMat = new THREE.MeshStandardMaterial({
      color: 0x18181b,
      roughness: 0.44,
      metalness: 0.25
    });

    const backpackMat = new THREE.MeshStandardMaterial({
      color: 0x1c1f26,
      roughness: 0.82,
      metalness: 0.04
    });

    const zipperMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      roughness: 0.32,
      metalness: 0.78
    });

    const shoeCanvasMat = new THREE.MeshStandardMaterial({
      color: 0x16181c,
      roughness: 0.84
    });

    const shoeSoleMat = new THREE.MeshStandardMaterial({
      color: 0xf1f5f9,
      roughness: 0.62
    });

    const hasdukRedMat = new THREE.MeshStandardMaterial({
      color: 0xdc2626,
      roughness: 0.72,
      metalness: 0.02
    });
    const hasdukWhiteMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.72,
      metalness: 0.02
    });
    const hasdukRingMat = new THREE.MeshStandardMaterial({
      color: 0xd97706,
      roughness: 0.34,
      metalness: 0.76
    });
    const pramukaDarkBrownMat = new THREE.MeshStandardMaterial({
      color: 0x4a2c16,
      roughness: 0.75
    });
    const badgeWosmPurpleMat = new THREE.MeshStandardMaterial({
      color: 0x6d28d9,
      roughness: 0.5
    });

    // Bayangan Kontak di Lantai
    if (shadowTex) {
      this.contactShadow = new THREE.Mesh(
        new THREE.PlaneGeometry(0.95, 0.95),
        new THREE.MeshBasicMaterial({
          map: shadowTex,
          transparent: true,
          depthWrite: false
        })
      );
      this.contactShadow.rotation.x = -Math.PI / 2;
      this.contactShadow.position.y = 0.012;
      this.group.add(this.contactShadow);
    }

    // ==================== HIERARKI SKELETAL HUMANOID (~1.68m) ====================
    // 1. Pelvis / Pinggul (Tinggi dasar 0.90m dari lantai)
    this.pelvis = new THREE.Group();
    this.pelvis.position.y = 0.9;
    this.rigRoot.add(this.pelvis);

    const dummyPantsMat = this.outfitMaterials.WHITE_GREY.pants;
    this.hipsMesh = new THREE.Mesh(
      new THREE.CylinderGeometry(0.165, 0.15, 0.16, 14),
      dummyPantsMat
    );
    this.hipsMesh.scale.set(1.08, 1, 0.78);
    this.hipsMesh.castShadow = true;
    this.pelvis.add(this.hipsMesh);

    const beltMesh = new THREE.Mesh(
      new THREE.CylinderGeometry(0.169, 0.169, 0.044, 14),
      beltMat
    );
    beltMesh.scale.set(1.09, 1, 0.79);
    beltMesh.position.y = 0.065;
    this.pelvis.add(beltMesh);

    // Gesper Ikat Pinggang 3D di Depan Perut (-Z)
    this.beltBuckleMesh = new THREE.Mesh(
      new THREE.BoxGeometry(0.056, 0.048, 0.022),
      this.outfitMaterials.WHITE_GREY.buckle
    );
    this.beltBuckleMesh.position.set(0, 0.065, -0.135);
    this.pelvis.add(this.beltBuckleMesh);

    // 2. Spine & Torso (Badan Kemeja Berbentuk Anatomis Bahu-Pinggang)
    this.spine = new THREE.Group();
    this.spine.position.y = 0.07;
    this.pelvis.add(this.spine);

    const torsoPoints = [
      new THREE.Vector2(0.172, -0.035),
      new THREE.Vector2(0.162, 0.06),
      new THREE.Vector2(0.166, 0.2),
      new THREE.Vector2(0.194, 0.36),
      new THREE.Vector2(0.206, 0.46),
      new THREE.Vector2(0.09, 0.51)
    ];
    const torsoGeo = new THREE.LatheGeometry(torsoPoints, 18);
    this.chestMesh = new THREE.Mesh(torsoGeo, this.outfitMaterials.WHITE_GREY.torso);
    this.chestMesh.scale.set(1.06, 1.0, 0.68);
    this.chestMesh.castShadow = true;
    this.chestMesh.receiveShadow = true;
    this.spine.add(this.chestMesh);

    // Placket Kancing 3D di Dada Depan (-Z)
    this.frontPlacketMesh = new THREE.Mesh(
      new THREE.BoxGeometry(0.032, 0.42, 0.014),
      this.outfitMaterials.WHITE_GREY.collar
    );
    this.frontPlacketMesh.position.set(0, 0.25, -0.122);
    this.spine.add(this.frontPlacketMesh);

    // Kerah Kemeja Lipat 3D
    this.collarRing = new THREE.Mesh(
      new THREE.TorusGeometry(0.088, 0.023, 8, 14, Math.PI * 1.48),
      this.outfitMaterials.WHITE_GREY.collar
    );
    this.collarRing.rotation.x = Math.PI / 2 + 0.15;
    this.collarRing.rotation.z = -Math.PI * 0.24;
    this.collarRing.position.set(0, 0.49, 0.01);
    this.spine.add(this.collarRing);

    // 3. Detail Pakaian 3D Khusus Seragam Pramuka (Saku Ganda Bertutup, Lidah Bahu, Atribut)
    this.pramukaDetailGroup = new THREE.Group();
    [-0.082, 0.082].forEach((px, idx) => {
      // Saku dada timbul 3D
      const pocketBox = new THREE.Mesh(
        new THREE.BoxGeometry(0.068, 0.078, 0.016),
        this.outfitMaterials.PRAMUKA.collar
      );
      pocketBox.position.set(px, 0.31, -0.124);

      // Tutup saku (flap) Pramuka + kancing cokelat
      const flap = new THREE.Mesh(
        new THREE.BoxGeometry(0.072, 0.024, 0.02),
        pramukaDarkBrownMat
      );
      flap.position.set(px, 0.35, -0.126);

      const btn = new THREE.Mesh(
        new THREE.CylinderGeometry(0.008, 0.008, 0.022, 8),
        pramukaDarkBrownMat
      );
      btn.rotation.x = Math.PI / 2;
      btn.position.set(px, 0.342, -0.128);

      // Badge WOSM Ungu (kanan) & Tunas Kelapa (kiri)
      const badge = new THREE.Mesh(
        new THREE.CylinderGeometry(0.016, 0.016, 0.018, 10),
        idx === 0 ? badgeWosmPurpleMat : hasdukRingMat
      );
      badge.rotation.x = Math.PI / 2;
      badge.position.set(px, idx === 0 ? 0.4 : 0.305, -0.126);

      this.pramukaDetailGroup.add(pocketBox, flap, btn, badge);
    });

    // Lidah Bahu (Epaulets) Pramuka di Pundak Kiri & Kanan
    [-0.155, 0.155].forEach((ex) => {
      const epaulet = new THREE.Mesh(
        new THREE.BoxGeometry(0.09, 0.018, 0.042),
        pramukaDarkBrownMat
      );
      epaulet.position.set(ex, 0.48, 0.0);
      epaulet.rotation.z = ex < 0 ? 0.18 : -0.18;
      this.pramukaDetailGroup.add(epaulet);
    });
    this.pramukaDetailGroup.visible = false;
    this.spine.add(this.pramukaDetailGroup);

    // 4. Aksesori Hasduk Pramuka Merah-Putih 3D Lengkap dengan Lipatan Leher & Ring Rotan
    this.hasdukGroup = new THREE.Group();
    this.hasdukGroup.position.set(0, 0.46, -0.095);

    const hasdukCollarRed = new THREE.Mesh(
      new THREE.TorusGeometry(0.096, 0.018, 8, 16, Math.PI * 1.55),
      hasdukRedMat
    );
    hasdukCollarRed.rotation.x = Math.PI / 2 + 0.14;
    hasdukCollarRed.rotation.z = -Math.PI * 0.26;
    hasdukCollarRed.position.set(0, 0.032, 0.082);

    const hasdukCollarWhite = new THREE.Mesh(
      new THREE.TorusGeometry(0.093, 0.012, 6, 14, Math.PI * 1.45),
      hasdukWhiteMat
    );
    hasdukCollarWhite.rotation.x = Math.PI / 2 + 0.14;
    hasdukCollarWhite.rotation.z = -Math.PI * 0.24;
    hasdukCollarWhite.position.set(0, 0.022, 0.082);

    // Cincin / Ring Hasduk Rotan Kuningan
    const hasdukRing = new THREE.Mesh(
      new THREE.CylinderGeometry(0.026, 0.024, 0.036, 12),
      hasdukRingMat
    );
    hasdukRing.position.set(0, -0.042, -0.032);
    hasdukRing.rotation.x = 0.24;

    // Ujung Kain Hasduk Merah & Putih Berlipat di Dada
    const ribbonRed = new THREE.Mesh(
      new THREE.BoxGeometry(0.042, 0.24, 0.014),
      hasdukRedMat
    );
    ribbonRed.position.set(-0.022, -0.155, -0.028);
    ribbonRed.rotation.z = 0.13;
    ribbonRed.rotation.x = 0.16;

    const ribbonWhite = new THREE.Mesh(
      new THREE.BoxGeometry(0.042, 0.24, 0.014),
      hasdukWhiteMat
    );
    ribbonWhite.position.set(0.022, -0.155, -0.028);
    ribbonWhite.rotation.z = -0.13;
    ribbonWhite.rotation.x = 0.16;

    this.hasdukGroup.add(
      hasdukCollarRed,
      hasdukCollarWhite,
      hasdukRing,
      ribbonRed,
      ribbonWhite
    );
    this.hasdukGroup.visible = false;
    this.spine.add(this.hasdukGroup);

    // 5. Tas Ransel Sekolah Hitam 3D + Tali Bahu Melingkari Pundak
    this.backpack = new THREE.Group();
    this.backpack.position.set(0, 0.27, 0.155);

    const bagBody = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.4, 0.15), backpackMat);
    bagBody.castShadow = true;
    const bagTopArch = new THREE.Mesh(
      new THREE.CylinderGeometry(0.15, 0.15, 0.15, 12, 1, false, 0, Math.PI),
      backpackMat
    );
    bagTopArch.rotation.z = Math.PI / 2;
    bagTopArch.rotation.y = Math.PI / 2;
    bagTopArch.position.y = 0.2;

    const bagPocket = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.21, 0.055), backpackMat);
    bagPocket.position.set(0, -0.07, 0.09);
    bagPocket.castShadow = true;

    const bagZipper = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.014, 0.06), zipperMat);
    bagZipper.position.set(0, 0.03, 0.092);

    // Botol minum kecil di saku samping tas sekolah
    const sideBottle = new THREE.Mesh(
      new THREE.CylinderGeometry(0.032, 0.032, 0.15, 8),
      new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.3 })
    );
    sideBottle.position.set(0.165, -0.08, 0.0);

    this.backpack.add(bagBody, bagTopArch, bagPocket, bagZipper, sideBottle);
    this.spine.add(this.backpack);

    [-0.125, 0.125].forEach((sx) => {
      const strapTop = new THREE.Mesh(new THREE.BoxGeometry(0.044, 0.03, 0.22), backpackMat);
      strapTop.position.set(sx, 0.47, 0.01);
      const strapFront = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.34, 0.025), backpackMat);
      strapFront.position.set(sx, 0.3, -0.118);
      strapFront.rotation.x = 0.08;
      this.spine.add(strapTop, strapFront);
    });

    // 6. Leher, Kepala Proporsional, Wajah Detail & Rambut Berlapis Alami
    this.neckPivot = new THREE.Group();
    this.neckPivot.position.set(0, 0.49, -0.01);
    this.spine.add(this.neckPivot);

    const neckMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.058, 0.066, 0.1, 12), this.skinMat);
    neckMesh.position.y = 0.04;
    this.neckPivot.add(neckMesh);

    this.head = new THREE.Group();
    this.head.position.set(0, 0.165, 0);
    this.neckPivot.add(this.head);

    const cranium = new THREE.Mesh(new THREE.SphereGeometry(0.132, 18, 16), this.skinMat);
    cranium.scale.set(0.92, 1.08, 0.98);
    cranium.castShadow = true;
    this.head.add(cranium);

    [-1, 1].forEach((side) => {
      const ear = new THREE.Mesh(new THREE.SphereGeometry(0.03, 10, 8), this.skinMat);
      ear.scale.set(0.45, 0.95, 0.65);
      ear.position.set(side * 0.122, -0.005, 0.005);
      this.head.add(ear);
    });

    [-0.046, 0.046].forEach((ex) => {
      const sclera = new THREE.Mesh(new THREE.SphereGeometry(0.019, 10, 8), eyeWhiteMat);
      sclera.scale.set(1.15, 0.85, 0.55);
      sclera.position.set(ex, 0.015, -0.118);

      const iris = new THREE.Mesh(new THREE.SphereGeometry(0.011, 8, 8), irisMat);
      iris.scale.set(1, 1, 0.5);
      iris.position.set(ex, 0.015, -0.126);

      const brow = new THREE.Mesh(new THREE.BoxGeometry(0.038, 0.009, 0.012), this.hairMat);
      brow.position.set(ex, 0.042, -0.122);
      brow.rotation.z = ex < 0 ? 0.08 : -0.08;

      this.head.add(sclera, iris, brow);
    });

    const nose = new THREE.Mesh(new THREE.ConeGeometry(0.016, 0.042, 6), this.skinMat);
    nose.rotation.x = -Math.PI / 2 + 0.25;
    nose.position.set(0, -0.008, -0.134);
    this.head.add(nose);

    const mouth = new THREE.Mesh(new THREE.BoxGeometry(0.042, 0.01, 0.01), lipMat);
    mouth.position.set(0, -0.052, -0.12);
    this.head.add(mouth);

    const hairCap = new THREE.Mesh(
      new THREE.SphereGeometry(0.139, 18, 14, 0, Math.PI * 2, 0, Math.PI * 0.62),
      this.hairMat
    );
    hairCap.scale.set(0.95, 1.08, 1.02);
    hairCap.position.set(0, 0.012, 0.008);
    hairCap.rotation.x = -0.14;
    hairCap.castShadow = true;
    this.head.add(hairCap);

    const hairNape = new THREE.Mesh(new THREE.SphereGeometry(0.11, 12, 10), this.hairMat);
    hairNape.scale.set(1.02, 0.85, 0.7);
    hairNape.position.set(0, -0.025, 0.055);
    this.head.add(hairNape);

    [-0.045, 0.0, 0.05].forEach((fx, i) => {
      const tuft = new THREE.Mesh(new THREE.ConeGeometry(0.036, 0.085, 6), this.hairMat);
      tuft.position.set(fx, 0.095, -0.105);
      tuft.rotation.x = 2.45;
      tuft.rotation.z = (i - 1) * 0.25;
      this.head.add(tuft);
    });

    // 7. Lengan Berartikulasi Penuh (Bahu Dinamis -> Lengan Atas -> Siku -> Lengan Bawah -> Tangan)
    this.sleeveMeshes = [];
    const createArmChain = (side) => {
      const shoulderPivot = new THREE.Group();
      shoulderPivot.position.set(side * 0.225, 0.435, 0);

      const sleeve = new THREE.Mesh(
        new THREE.CylinderGeometry(0.064, 0.058, 0.17, 12),
        this.outfitMaterials.WHITE_GREY.sleeve
      );
      sleeve.position.y = -0.075;
      sleeve.rotation.z = side * 0.06;
      sleeve.castShadow = true;
      this.sleeveMeshes.push(sleeve);

      const shoulderCap = new THREE.Mesh(
        new THREE.SphereGeometry(0.064, 10, 10),
        this.outfitMaterials.WHITE_GREY.sleeve
      );
      this.sleeveMeshes.push(shoulderCap);
      shoulderPivot.add(shoulderCap, sleeve);

      const elbowPivot = new THREE.Group();
      elbowPivot.position.set(0, -0.22, 0);
      const upperSkin = new THREE.Mesh(
        new THREE.CylinderGeometry(0.046, 0.042, 0.09, 10),
        this.skinMat
      );
      upperSkin.position.y = -0.175;
      shoulderPivot.add(upperSkin, elbowPivot);

      const elbowJoint = new THREE.Mesh(new THREE.SphereGeometry(0.042, 8, 8), this.skinMat);
      const forearm = new THREE.Mesh(
        new THREE.CylinderGeometry(0.041, 0.033, 0.21, 10),
        this.skinMat
      );
      forearm.position.y = -0.105;
      forearm.castShadow = true;

      const hand = new THREE.Mesh(new THREE.SphereGeometry(0.038, 10, 8), this.skinMat);
      hand.scale.set(0.78, 1.15, 0.95);
      hand.position.set(0, -0.23, -0.008);

      elbowPivot.add(elbowJoint, forearm, hand);
      this.spine.add(shoulderPivot);

      return { shoulderPivot, elbowPivot, baseY: 0.435, side };
    };

    this.leftArm = createArmChain(-1);
    this.rightArm = createArmChain(1);

    // 8. Kaki Berartikulasi Penuh (Pinggul -> Paha -> Lutut -> Betis -> Kaos Kaki -> Sepatu Sekolah)
    this.pantsMeshes = [this.hipsMesh];
    this.sockMeshes = [];
    const createLegChain = (side) => {
      const hipPivot = new THREE.Group();
      hipPivot.position.set(side * 0.095, -0.02, 0);

      const thigh = new THREE.Mesh(
        new THREE.CylinderGeometry(0.082, 0.066, 0.39, 12),
        dummyPantsMat
      );
      thigh.position.y = -0.195;
      thigh.castShadow = true;
      this.pantsMeshes.push(thigh);
      hipPivot.add(thigh);

      const kneePivot = new THREE.Group();
      kneePivot.position.set(0, -0.39, 0);
      const kneeJoint = new THREE.Mesh(new THREE.SphereGeometry(0.065, 10, 8), dummyPantsMat);
      this.pantsMeshes.push(kneeJoint);
      kneePivot.add(kneeJoint);

      const calf = new THREE.Mesh(
        new THREE.CylinderGeometry(0.064, 0.052, 0.38, 12),
        dummyPantsMat
      );
      calf.position.y = -0.19;
      calf.castShadow = true;
      this.pantsMeshes.push(calf);
      kneePivot.add(calf);

      const anklePivot = new THREE.Group();
      anklePivot.position.set(0, -0.4, 0);

      // Kaos Kaki Sekolah (Putih untuk OSIS/Batik, Hitam untuk Pramuka)
      const sock = new THREE.Mesh(
        new THREE.CylinderGeometry(0.055, 0.054, 0.095, 10),
        this.outfitMaterials.WHITE_GREY.sock
      );
      sock.position.set(0, -0.015, 0);
      this.sockMeshes.push(sock);

      // Sol Karet Sepatu
      const sole = new THREE.Mesh(new THREE.BoxGeometry(0.104, 0.034, 0.25), shoeSoleMat);
      sole.position.set(0, -0.072, -0.045);
      sole.castShadow = true;

      // Bodi Sepatu Sekolah Gelap
      const shoeUpper = new THREE.Mesh(
        new THREE.CapsuleGeometry(0.048, 0.12, 6, 10),
        shoeCanvasMat
      );
      shoeUpper.rotation.x = Math.PI / 2;
      shoeUpper.scale.set(1.02, 1.0, 0.86);
      shoeUpper.position.set(0, -0.036, -0.035);
      shoeUpper.castShadow = true;

      // Toe Cap Depan
      const toeCap = new THREE.Mesh(new THREE.SphereGeometry(0.049, 10, 8), shoeSoleMat);
      toeCap.scale.set(1.0, 0.62, 1.05);
      toeCap.position.set(0, -0.048, -0.13);

      [-0.03, -0.06, -0.09].forEach((lz) => {
        const lace = new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.008, 0.012), shoeSoleMat);
        lace.position.set(0, -0.002, lz);
        anklePivot.add(lace);
      });

      anklePivot.add(sock, sole, shoeUpper, toeCap);
      kneePivot.add(anklePivot);
      hipPivot.add(kneePivot);
      this.pelvis.add(hipPivot);

      return { hipPivot, kneePivot, anklePivot };
    };

    this.leftLeg = createLegChain(-1);
    this.rightLeg = createLegChain(1);

    // Aura Indikator Power-up di Lantai
    const shieldGeo = new THREE.RingGeometry(0.62, 0.8, 28);
    const shieldMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.6
    });
    this.auraRing = new THREE.Mesh(shieldGeo, shieldMat);
    this.auraRing.rotation.x = -Math.PI / 2;
    this.auraRing.position.y = 0.025;
    this.auraRing.visible = false;
    this.group.add(this.auraRing);
  }

  // Penggantian Seragam Dinamis (Putih Abu-Abu / Pramuka / Batik)
  setOutfit(outfitId) {
    if (!this.outfitMaterials[outfitId]) return;
    this.currentOutfitId = outfitId;
    try {
      localStorage.setItem(STORAGE_CHARACTER_KEY, outfitId);
    } catch {}
    this.applyOutfit(outfitId);
  }

  applyOutfit(outfitId) {
    const outfit = this.outfitMaterials[outfitId] || this.outfitMaterials.WHITE_GREY;

    if (this.chestMesh) {
      this.chestMesh.material = outfit.torso;
    }
    if (this.collarRing) {
      this.collarRing.material = outfit.collar;
    }
    if (this.frontPlacketMesh) {
      this.frontPlacketMesh.material = outfit.collar;
    }
    if (this.beltBuckleMesh && outfit.buckle) {
      this.beltBuckleMesh.material = outfit.buckle;
    }
    if (this.sleeveMeshes) {
      this.sleeveMeshes.forEach((mesh) => {
        mesh.material = outfit.sleeve;
      });
    }
    if (this.pantsMeshes) {
      this.pantsMeshes.forEach((mesh) => {
        mesh.material = outfit.pants;
      });
    }
    if (this.sockMeshes && outfit.sock) {
      this.sockMeshes.forEach((mesh) => {
        mesh.material = outfit.sock;
      });
    }
    if (this.hasdukGroup) {
      this.hasdukGroup.visible = Boolean(outfit.hasduk);
    }
    if (this.pramukaDetailGroup) {
      this.pramukaDetailGroup.visible = Boolean(outfit.pramuka3D);
    }
  }

  getOutfitInfo() {
    return OUTFIT_PRESETS.find((p) => p.id === this.currentOutfitId) || OUTFIT_PRESETS[0];
  }

  reset() {
    this.currentLane = 1;
    this.targetX = LANES[1];
    this.group.position.set(0, 0, 0);
    this.group.rotation.set(0, 0, 0);
    this.y = 0;
    this.velocityY = 0;
    this.isJumping = false;
    this.jumpElapsed = 0;
    this.isSliding = false;
    this.slideTimer = 0;
    this.landCompress = 0;
    this.stumbleTimer = 0;
    this.isCaught = false;
    this.runCycle = 0;
    this.stepPhase = 0;
    this.jumpBlend = 0;
    this.slideBlend = 0;
    this.laneBank = 0;
    this.laneVelX = 0;
    this.dodgeTimer = 0;
    this.dodgeDir = 0;
    this.glanceClock = 0;
    this.hasSuperJump = false;
    this.hasTurbo = false;
    this.hasMagnet = false;
    this.auraRing.visible = false;
    this.applyOutfit(this.currentOutfitId);

    this.rigRoot.position.set(0, 0, 0);
    this.rigRoot.rotation.set(0, 0, 0);
    this.pelvis.position.set(0, 0.9, 0);
    this.pelvis.rotation.set(0, 0, 0);
    this.spine.rotation.set(0, 0, 0);
    this.neckPivot.rotation.set(0, 0, 0);
    this.head.rotation.set(0, 0, 0);
    this.backpack.rotation.set(0, 0, 0);
  }

  moveLeft(audio) {
    if (this.isCaught) return false;
    if (this.currentLane > 0) {
      this.currentLane--;
      this.targetX = LANES[this.currentLane];
      this.dodgeTimer = 0.24;
      this.dodgeDir = -1;
      if (audio) audio.playLaneSwitch();
      return true;
    }
    return false;
  }

  moveRight(audio) {
    if (this.isCaught) return false;
    if (this.currentLane < 2) {
      this.currentLane++;
      this.targetX = LANES[this.currentLane];
      this.dodgeTimer = 0.24;
      this.dodgeDir = 1;
      if (audio) audio.playLaneSwitch();
      return true;
    }
    return false;
  }

  jump(audio) {
    if (this.isCaught) return false;
    if (!this.isJumping) {
      this.isJumping = true;
      this.jumpElapsed = 0;
      this.isSliding = false;
      this.slideTimer = 0;
      const mult = this.hasSuperJump ? 1.26 : 1.0;
      this.velocityY = this.baseJumpForce * mult;
      if (audio) audio.playJump(this.hasSuperJump);
      return true;
    }
    return false;
  }

  slide(audio) {
    if (this.isCaught) return false;
    if (this.isJumping) {
      this.velocityY = -24;
    }
    this.isSliding = true;
    this.slideTimer = this.slideDuration;
    if (audio) audio.playSlide();
    return true;
  }

  triggerStumble() {
    this.stumbleTimer = 0.55;
  }

  setCaught() {
    this.isCaught = true;
    this.isSliding = false;
  }

  // Hitbox presisi anti-tembus: tinggi mengecil saat slide (0.85m), normal (1.72m)
  getHitbox() {
    const height = this.isSliding ? 0.85 : 1.72;
    const centerY = this.y + height * 0.5;
    return {
      minX: this.group.position.x - 0.32,
      maxX: this.group.position.x + 0.32,
      minY: this.y,
      maxY: this.y + height,
      minZ: this.group.position.z - 0.28,
      maxZ: this.group.position.z + 0.28,
      centerY
    };
  }

  /**
   * Menghitung titik terendah sol sepatu/lutut siswa agar tidak pernah menembus lantai (y < 0).
   */
  computeLowestFootY() {
    const pY = this.pelvis ? this.pelvis.position.y : 0.91;
    const calcLeg = (leg) => {
      const hAng = leg.hipPivot.rotation.x;
      const kAng = hAng + leg.kneePivot.rotation.x;
      const kneeY = pY - 0.02 - 0.39 * Math.cos(hAng);
      const ankleY = kneeY - 0.4 * Math.cos(kAng);
      const soleBottomY = ankleY - 0.088;
      return Math.min(kneeY - 0.06, soleBottomY);
    };
    return Math.min(calcLeg(this.leftLeg), calcLeg(this.rightLeg));
  }

  update(dt, speed, audio, teacherDistance = 15, safetyBounds = null) {
    // 1. Perpindahan Jalur Pegas Teredam Kritis (Critically-Damped Spring) — responsif & natural
    const omega = 23.5;
    const sx = omega * dt;
    const exp = 1 / (1 + sx + 0.48 * sx * sx + 0.235 * sx * sx * sx);
    const changeX = this.group.position.x - this.targetX;
    const tempVel = (this.laneVelX + omega * changeX) * dt;
    this.laneVelX = (this.laneVelX - omega * tempVel) * exp;
    this.group.position.x = this.targetX + (changeX + tempVel) * exp;

    // Batas Keamanan Koridor & Bangunan: tidak boleh menembus dinding kanan atau tiang kiri
    const minSafeX = safetyBounds ? safetyBounds.minX : -2.62;
    const maxSafeX = safetyBounds ? safetyBounds.maxX : 2.62;
    this.group.position.x = THREE.MathUtils.clamp(this.group.position.x, minSafeX, maxSafeX);

    const dx = this.targetX - this.group.position.x;
    const targetBank = THREE.MathUtils.clamp(-this.laneVelX * 0.022 - dx * 0.04, -0.22, 0.22);
    this.laneBank = THREE.MathUtils.lerp(this.laneBank, targetBank, Math.min(1, dt * 14));
    this.rigRoot.rotation.z = this.laneBank;
    this.rigRoot.rotation.y = THREE.MathUtils.clamp(-this.laneVelX * 0.014, -0.14, 0.14);

    if (!this.isCaught) {
      this.group.rotation.set(0, 0, 0);
    }

    if (this.dodgeTimer > 0) {
      this.dodgeTimer = Math.max(0, this.dodgeTimer - dt);
    }

    // 2. State Tertangkap Pak Wahid (Reaksi panik & bernapas organik)
    if (this.isCaught) {
      this.runCycle += dt * 5.2;
      this.y = 0;
      this.group.position.y = 0;
      this.rigRoot.position.y = 0;
      const panicBreathe = Math.sin(this.runCycle * 1.4) * 0.016;
      this.pelvis.position.set(0, 0.9 + panicBreathe, 0);
      this.pelvis.rotation.set(0, Math.PI + Math.sin(this.runCycle * 0.7) * 0.06, 0);
      this.spine.rotation.set(0.09 + panicBreathe * 0.8, Math.sin(this.runCycle * 0.9) * 0.08, 0);

      const armTremor = Math.sin(this.runCycle * 2.2) * 0.06;
      this.leftArm.shoulderPivot.rotation.set(2.32 + armTremor, 0.12, -0.36);
      this.leftArm.elbowPivot.rotation.x = 1.62;
      this.rightArm.shoulderPivot.rotation.set(2.32 - armTremor, -0.12, 0.36);
      this.rightArm.elbowPivot.rotation.x = 1.62;

      this.leftLeg.hipPivot.rotation.x = 0.05;
      this.leftLeg.kneePivot.rotation.x = -0.1;
      this.rightLeg.hipPivot.rotation.x = -0.05;
      this.rightLeg.kneePivot.rotation.x = -0.1;
      this.neckPivot.rotation.set(0, 0, 0);
      this.head.rotation.set(0.05, Math.sin(this.runCycle * 1.5) * 0.22, Math.sin(this.runCycle) * 0.05);
      return;
    }

    // 3. Fisika Lompatan 3-Tahap & Anti-Tembus Lantai/Atap
    const wasInAir = this.isJumping || this.y > 0.02;
    if (this.isJumping || this.y > 0) {
      this.jumpElapsed += dt;
      this.y += this.velocityY * dt;
      this.velocityY += this.gravity * dt;

      // Anti-tembus plafon / rangka atap baja
      const ceilingLimit = safetyBounds ? safetyBounds.ceilingY - 1.72 : 2.05;
      const maxJumpY = Math.min(2.1, ceilingLimit);
      if (this.y > maxJumpY) {
        this.y = maxJumpY;
        this.velocityY = Math.min(0, this.velocityY);
      }

      // Anti-tembus lantai: pemain tidak pernah jatuh di bawah permukaan lantai (y = 0)
      if (this.y <= 0) {
        this.y = 0;
        this.velocityY = 0;
        this.isJumping = false;
        this.jumpElapsed = 0;
        if (wasInAir && !this.isSliding) {
          this.landCompress = 0.24;
          if (audio) audio.playStep(true);
        }
      }
    }
    this.rigRoot.position.y = this.y;

    if (this.contactShadow) {
      const hScale = Math.max(0.42, 1.0 - this.y * 0.18);
      this.contactShadow.scale.set(hScale, hScale, 1);
      this.contactShadow.material.opacity = Math.max(0.18, 0.9 - this.y * 0.25);
    }

    if (this.landCompress > 0) {
      this.landCompress = Math.max(0, this.landCompress - dt * 1.05);
    }

    if (this.isSliding) {
      this.slideTimer -= dt;
      if (this.slideTimer <= 0) {
        this.isSliding = false;
      }
    }

    if (this.stumbleTimer > 0) {
      this.stumbleTimer -= dt;
    }

    // 4. Blending Bobot Animasi Halus (Lari <-> Lompat <-> Meluncur)
    const targetJumpBlend = this.isJumping ? 1.0 : 0.0;
    const targetSlideBlend = this.isSliding && this.y <= 0.08 ? 1.0 : 0.0;
    this.jumpBlend = THREE.MathUtils.lerp(this.jumpBlend, targetJumpBlend, Math.min(1, dt * 15));
    this.slideBlend = THREE.MathUtils.lerp(this.slideBlend, targetSlideBlend, Math.min(1, dt * 15));

    const strideFreq = Math.max(6.4, speed * 0.85);
    this.runCycle += dt * strideFreq;

    const p = this.runCycle;
    const sinP = Math.sin(p);
    const cosP = Math.cos(p);

    if (!this.isJumping && !this.isSliding && audio) {
      const halfStep = Math.floor(p / Math.PI);
      if (halfStep !== this.stepPhase) {
        this.stepPhase = halfStep;
        audio.playStep(halfStep % 2 === 0);
      }
    }

    // --- A. ANIMASI BERLARI BIOMEKANIS (Ayunan Tangan, Kaki, Bahu, Pinggang, Kepala) ---
    const runBounce = (1 - Math.cos(2 * p)) * 0.032;
    const dodgePhase = this.dodgeTimer > 0 ? Math.sin((this.dodgeTimer / 0.24) * Math.PI) : 0;
    const dodgeHop = !this.isJumping && !this.isSliding ? dodgePhase * 0.055 : 0;
    const squatPhase = this.landCompress > 0 ? Math.sin((this.landCompress / 0.24) * Math.PI) : 0;
    const squatOffset = squatPhase * 0.1;

    let pelvisX = -cosP * 0.025 * (1 - this.jumpBlend) * (1 - this.slideBlend);
    let pelvisY = 0.91 + runBounce + dodgeHop - squatOffset;
    let pelvisPitch = Math.sin(2 * p) * 0.024;
    let pelvisYaw = -sinP * 0.08;
    let pelvisRoll = cosP * 0.05;

    // Kontraposto seimbang: rotasi Y pinggul + tulang belakang saling meniadakan (0) agar dada & kepala lurus menghadap ke depan (-Z)
    let spinePitch = -0.18 - Math.sin(2 * p - 0.3) * 0.028 - squatOffset * 0.6;
    let spineYaw = sinP * 0.08;
    let spineRoll = -cosP * 0.05;

    // Kinematika 3-Sendi Kaki Kiri & Kanan dengan Kontak Lantai Presisi
    const calcLegAngles = (phase) => {
      const s = Math.sin(phase);
      const swingLift = 0.5 + 0.5 * Math.cos(phase + 0.15);
      const stanceCushion = 0.5 + 0.5 * Math.cos(phase - Math.PI);
      const hipX = s * 0.76 + 0.06 + squatOffset * 0.85;
      const kneeFlex =
        0.14 +
        1.24 * (swingLift * swingLift) +
        0.16 * (stanceCushion * stanceCushion * stanceCushion) +
        squatOffset * 1.95;
      const kneeX = -kneeFlex;
      const ankleX = 0.24 * Math.sin(phase + 0.42) - 0.12 * swingLift;
      return { hipX, kneeX, ankleX };
    };

    const lRun = calcLegAngles(p);
    const rRun = calcLegAngles(p + Math.PI);

    // Gerakan Bahu (Clavicle Shrug) & Ayunan Lengan Menyilang
    const lArmPhase = -sinP;
    const rArmPhase = sinP;
    const lElbowLag = -Math.sin(p - 0.35);
    const rElbowLag = Math.sin(p - 0.35);

    this.leftArm.shoulderPivot.position.y =
      this.leftArm.baseY + lArmPhase * 0.014 * (1 - this.slideBlend);
    this.rightArm.shoulderPivot.position.y =
      this.rightArm.baseY + rArmPhase * 0.014 * (1 - this.slideBlend);

    let lShoulderX = lArmPhase * 0.78 + 0.06;
    let rShoulderX = rArmPhase * 0.78 + 0.06;
    let lShoulderY = -Math.max(0, lArmPhase) * 0.24;
    let rShoulderY = Math.max(0, rArmPhase) * 0.24;
    let lShoulderZ = -0.11 - Math.max(0, lArmPhase) * 0.045 - dodgePhase * 0.12;
    let rShoulderZ = 0.11 + Math.max(0, rArmPhase) * 0.045 + dodgePhase * 0.12;
    let lElbowX = 0.96 + (lElbowLag * 0.5 + 0.5) * 0.54;
    let rElbowX = 0.96 + (rElbowLag * 0.5 + 0.5) * 0.54;

    // --- B. ANIMASI MELOMPAT 3 TAHAP (1. Tolakan/Persiapan, 2. Melayang di Udara, 3. Mendarat) ---
    if (this.jumpBlend > 0.01) {
      const jb = this.jumpBlend;
      // Tahap 1: Tolakan awal (0 - 0.11s), Tahap 2: Melayang naik/puncak, Tahap 3: Menjelang mendarat
      const takeoffPush = this.jumpElapsed < 0.11 ? 1.0 - this.jumpElapsed / 0.11 : 0.0;
      const airPhase = THREE.MathUtils.clamp(this.velocityY / 13.0, -1, 1);
      const ascend = Math.max(0, airPhase);
      const descend = Math.max(0, -airPhase);

      pelvisPitch = THREE.MathUtils.lerp(
        pelvisPitch,
        0.1 * takeoffPush - 0.1 * ascend + 0.07 * descend,
        jb
      );
      pelvisYaw = THREE.MathUtils.lerp(pelvisYaw, 0, jb);
      pelvisRoll = THREE.MathUtils.lerp(pelvisRoll, 0, jb);

      spinePitch = THREE.MathUtils.lerp(
        spinePitch,
        -0.06 * takeoffPush - 0.16 + airPhase * 0.15,
        jb
      );
      spineYaw = THREE.MathUtils.lerp(spineYaw, 0, jb);
      spineRoll = THREE.MathUtils.lerp(spineRoll, 0, jb);

      // Kaki kanan diangkat sebagai tumpuan lompat depan (hurdle tuck), kaki kiri mendorong saat takeoff lalu menjulur saat mendarat
      const rJumpHip = THREE.MathUtils.lerp(0.96 - descend * 0.44, 0.25, takeoffPush);
      const rJumpKnee = THREE.MathUtils.lerp(-1.12 + descend * 0.76, -0.22, takeoffPush);
      const lJumpHip = THREE.MathUtils.lerp(-0.44 * ascend + 0.3 * descend, -0.52, takeoffPush);
      const lJumpKnee = THREE.MathUtils.lerp(-0.72 - (1 - descend) * 0.46, -0.18, takeoffPush);

      lRun.hipX = THREE.MathUtils.lerp(lRun.hipX, lJumpHip, jb);
      lRun.kneeX = THREE.MathUtils.lerp(lRun.kneeX, lJumpKnee, jb);
      lRun.ankleX = THREE.MathUtils.lerp(lRun.ankleX, -0.24 + descend * 0.32, jb);

      rRun.hipX = THREE.MathUtils.lerp(rRun.hipX, rJumpHip, jb);
      rRun.kneeX = THREE.MathUtils.lerp(rRun.kneeX, rJumpKnee, jb);
      rRun.ankleX = THREE.MathUtils.lerp(rRun.ankleX, 0.16 - descend * 0.24, jb);

      // Ayunan kedua tangan ke atas saat tolakan & menjaga keseimbangan di udara
      lShoulderX = THREE.MathUtils.lerp(lShoulderX, 0.65 + airPhase * 0.48 + takeoffPush * 0.35, jb);
      rShoulderX = THREE.MathUtils.lerp(rShoulderX, 0.42 + airPhase * 0.48 + takeoffPush * 0.35, jb);
      lShoulderY = THREE.MathUtils.lerp(lShoulderY, 0.1, jb);
      rShoulderY = THREE.MathUtils.lerp(rShoulderY, -0.1, jb);
      lShoulderZ = THREE.MathUtils.lerp(
        lShoulderZ,
        -0.34 - (1 - Math.abs(airPhase)) * 0.14,
        jb
      );
      rShoulderZ = THREE.MathUtils.lerp(
        rShoulderZ,
        0.34 + (1 - Math.abs(airPhase)) * 0.14,
        jb
      );
      lElbowX = THREE.MathUtils.lerp(lElbowX, 0.92 + descend * 0.28, jb);
      rElbowX = THREE.MathUtils.lerp(rElbowX, 1.02 + descend * 0.28, jb);
    }

    // --- C. ANIMASI MELUNCUR NATURAL (Parkour Low-Slide Tanpa Tembus Lantai) ---
    if (this.slideBlend > 0.01) {
      const sb = this.slideBlend;
      const slideWave = Math.sin(p * 1.35) * 0.03;
      // Tinggi pinggul dijaga pada 0.44m agar lutut dan sepatu tetap tepat di atas permukaan lantai (y >= 0.02)
      pelvisY = THREE.MathUtils.lerp(pelvisY, 0.44 + Math.abs(slideWave) * 0.2, sb);
      pelvisPitch = THREE.MathUtils.lerp(pelvisPitch, -0.12, sb);
      pelvisYaw = THREE.MathUtils.lerp(pelvisYaw, 0, sb);
      pelvisRoll = THREE.MathUtils.lerp(pelvisRoll, 0, sb);

      // Badan membungkuk lurus ke depan melewati bawah palang
      spinePitch = THREE.MathUtils.lerp(spinePitch, 0.72 + slideWave, sb);
      spineYaw = THREE.MathUtils.lerp(spineYaw, 0, sb);
      spineRoll = THREE.MathUtils.lerp(spineRoll, 0, sb);

      // Kaki kanan lurus meluncur ke depan, kaki kiri ditekuk di belakang
      rRun.hipX = THREE.MathUtils.lerp(rRun.hipX, 1.24 + slideWave, sb);
      rRun.kneeX = THREE.MathUtils.lerp(rRun.kneeX, -0.18, sb);
      rRun.ankleX = THREE.MathUtils.lerp(rRun.ankleX, -0.18, sb);

      lRun.hipX = THREE.MathUtils.lerp(lRun.hipX, 0.68, sb);
      lRun.kneeX = THREE.MathUtils.lerp(lRun.kneeX, -1.48, sb);
      lRun.ankleX = THREE.MathUtils.lerp(lRun.ankleX, -0.15, sb);

      lShoulderX = THREE.MathUtils.lerp(lShoulderX, -0.48 + slideWave * 1.2, sb);
      rShoulderX = THREE.MathUtils.lerp(rShoulderX, 0.52 - slideWave * 1.2, sb);
      lShoulderY = THREE.MathUtils.lerp(lShoulderY, 0.16, sb);
      rShoulderY = THREE.MathUtils.lerp(rShoulderY, -0.14, sb);
      lShoulderZ = THREE.MathUtils.lerp(lShoulderZ, -0.36, sb);
      rShoulderZ = THREE.MathUtils.lerp(rShoulderZ, 0.3, sb);
      lElbowX = THREE.MathUtils.lerp(lElbowX, 0.85, sb);
      rElbowX = THREE.MathUtils.lerp(rElbowX, 1.12, sb);
    }

    // --- KOREKSI KONTAK KAKI DENGAN LANTAI (Ground Contact IK Clamp) ---
    // Menghitung titik terendah kaki kiri & kanan terhadap lantai agar tidak pernah menembus lantai keramik!
    const computeLowestFootY = (pY, leg) => {
      const hAng = leg.hipX;
      const kAng = leg.hipX + leg.kneeX;
      const kneeY = pY - 0.02 - 0.39 * Math.cos(hAng);
      const ankleY = kneeY - 0.4 * Math.cos(kAng);
      const soleBottomY = ankleY - 0.088;
      return Math.min(kneeY - 0.06, soleBottomY);
    };

    const minLeftY = computeLowestFootY(pelvisY, lRun);
    const minRightY = computeLowestFootY(pelvisY, rRun);
    const lowestLimbY = Math.min(minLeftY, minRightY);
    if (lowestLimbY < 0.004) {
      pelvisY += 0.004 - lowestLimbY;
    }

    // Terapkan ke seluruh sendi rig karakter
    this.pelvis.position.set(pelvisX, pelvisY, 0);
    this.pelvis.rotation.set(pelvisPitch, pelvisYaw, pelvisRoll);

    this.spine.rotation.x = spinePitch;
    this.spine.rotation.y = spineYaw;

    this.leftLeg.hipPivot.rotation.x = lRun.hipX;
    this.leftLeg.kneePivot.rotation.x = lRun.kneeX;
    this.leftLeg.anklePivot.rotation.x = lRun.ankleX;

    this.rightLeg.hipPivot.rotation.x = rRun.hipX;
    this.rightLeg.kneePivot.rotation.x = rRun.kneeX;
    this.rightLeg.anklePivot.rotation.x = rRun.ankleX;

    this.leftArm.shoulderPivot.rotation.set(lShoulderX, lShoulderY, lShoulderZ);
    this.leftArm.elbowPivot.rotation.x = lElbowX;

    this.rightArm.shoulderPivot.rotation.set(rShoulderX, rShoulderY, rShoulderZ);
    this.rightArm.elbowPivot.rotation.x = rElbowX;

    // Goyangan inersia tas ransel sekolah
    const bagLagBounce = (1 - Math.cos(2 * p - 0.55)) * 0.032 * (1 - this.slideBlend);
    this.backpack.rotation.x = bagLagBounce + squatOffset * 0.45;
    this.backpack.rotation.y = -Math.sin(p - 0.4) * 0.04 * (1 - this.slideBlend);
    this.backpack.rotation.z = Math.sin(p - 0.35) * 0.042;

    // Goyangan ujung hasduk Pramuka saat berlari/melompat/slide
    if (this.hasdukGroup && this.hasdukGroup.visible) {
      this.hasdukGroup.rotation.x =
        Math.sin(2 * p) * 0.08 + (this.isSliding ? 0.32 : 0) + (this.isJumping ? 0.15 : 0);
      this.hasdukGroup.rotation.y = Math.sin(p) * 0.07 - this.laneVelX * 0.015;
    }

    // Stabilisasi Leher & Kepala Lurus Menghadap ke Depan (-Z)
    if (this.stumbleTimer > 0) {
      const shake = Math.sin(this.stumbleTimer * 28) * 0.18 * (this.stumbleTimer / 0.55);
      this.neckPivot.rotation.set(0.06, 0, shake * 0.35);
      this.head.rotation.set(0.05, 0, shake);
      this.spine.rotation.z = spineRoll + shake * 0.4;
    } else {
      const headBob =
        Math.sin(2 * p - 0.45) * 0.02 * (1 - this.jumpBlend) * (1 - this.slideBlend);
      this.neckPivot.rotation.set(-spinePitch * 0.28, 0, -(pelvisRoll + spineRoll) * 0.35);
      this.head.rotation.x = -spinePitch * 0.32 + headBob;
      this.head.rotation.y = -this.laneVelX * 0.01;
      this.head.rotation.z = -(pelvisRoll + spineRoll) * 0.4 - this.laneBank * 0.2;
      this.spine.rotation.z = spineRoll;
    }

    // Update cincin aura power-up
    if (this.hasTurbo || this.hasMagnet || this.hasSuperJump) {
      this.auraRing.visible = true;
      this.auraRing.rotation.z += dt * 4;
      if (this.hasTurbo) {
        this.auraRing.material.color.setHex(0x38bdf8);
      } else if (this.hasMagnet) {
        this.auraRing.material.color.setHex(0xfacc15);
      } else {
        this.auraRing.material.color.setHex(0x4ade80);
      }
    } else {
      this.auraRing.visible = false;
    }
  }
}
