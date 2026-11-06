import * as THREE from 'three';

// =====================================================================================
// KUMPULAN MATERIAL PBR & MODEL 3D PROPERTI SEKOLAH REALISTIS
// SMA Negeri 1 Pasir Sakti — Koridor Kelas 11 A1-A4, Kebun Sawit, Parkiran Baja Ringan & Kantin
// =====================================================================================
export function createSharedPropMaterials(texLib) {
  const woodLightTex = texLib.getWoodTexture('#9a5b2d');
  const woodDarkTex = texLib.getWoodTexture('#5c3419');
  const contactShadowTex = texLib.getContactShadowTexture();
  const palmTrunkSet = texLib.getPalmTrunkSet ? texLib.getPalmTrunkSet() : null;
  const palmFrondTex = texLib.getPalmFrondTexture ? texLib.getPalmFrondTexture() : null;
  const corrugatedSet = texLib.getCorrugatedSet ? texLib.getCorrugatedSet() : null;
  const galvSet = texLib.getGalvanizedSet ? texLib.getGalvanizedSet() : null;
  const wainscotSet = texLib.getWainscotTileSet ? texLib.getWainscotTileSet() : null;

  return {
    palmTrunk: palmTrunkSet
      ? new THREE.MeshStandardMaterial({
          map: palmTrunkSet.map,
          normalMap: palmTrunkSet.normalMap,
          normalScale: new THREE.Vector2(1.6, 1.6),
          roughness: 0.9,
          metalness: 0.02
        })
      : new THREE.MeshStandardMaterial({ color: 0x543d2b, roughness: 0.92 }),
    palmFrond: palmFrondTex
      ? new THREE.MeshStandardMaterial({
          map: palmFrondTex,
          alphaTest: 0.26,
          transparent: true,
          roughness: 0.58,
          metalness: 0.04,
          side: THREE.DoubleSide
        })
      : new THREE.MeshStandardMaterial({
          color: 0x2e6b2c,
          roughness: 0.72,
          side: THREE.DoubleSide
        }),
    palmBunch: new THREE.MeshStandardMaterial({
      color: 0x6b210b,
      roughness: 0.52,
      metalness: 0.08
    }),
    tireRubber: new THREE.MeshStandardMaterial({
      color: 0x1b1d20,
      roughness: 0.88,
      metalness: 0.04
    }),
    alloyRim: new THREE.MeshStandardMaterial({
      color: 0xd1d5db,
      roughness: 0.28,
      metalness: 0.85
    }),
    chrome: new THREE.MeshStandardMaterial({
      color: 0xf1f5f9,
      roughness: 0.14,
      metalness: 0.94
    }),
    exhaustDark: new THREE.MeshStandardMaterial({
      color: 0x27272a,
      roughness: 0.45,
      metalness: 0.68
    }),
    mattePlastic: new THREE.MeshStandardMaterial({
      color: 0x24262b,
      roughness: 0.8,
      metalness: 0.05
    }),
    vinylSeat: new THREE.MeshStandardMaterial({
      color: 0x18181b,
      roughness: 0.62,
      metalness: 0.06
    }),
    headlampGlass: new THREE.MeshStandardMaterial({
      color: 0xe0f2fe,
      emissive: 0xbae6fd,
      emissiveIntensity: 0.28,
      roughness: 0.08,
      metalness: 0.12,
      transparent: true,
      opacity: 0.9
    }),
    taillampRed: new THREE.MeshStandardMaterial({
      color: 0xdc2626,
      emissive: 0x991b1b,
      emissiveIntensity: 0.28,
      roughness: 0.18,
      metalness: 0.1
    }),
    turnSignalAmber: new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      emissive: 0xb45309,
      emissiveIntensity: 0.2,
      roughness: 0.22
    }),
    plateBlack: new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.48
    }),
    plateWhite: new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.4
    }),
    woodLight: new THREE.MeshStandardMaterial({
      map: woodLightTex,
      roughness: 0.46,
      metalness: 0.04
    }),
    woodDark: new THREE.MeshStandardMaterial({
      map: woodDarkTex,
      roughness: 0.54,
      metalness: 0.04
    }),
    ironFrame: new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.42,
      metalness: 0.72
    }),
    galvSteel: new THREE.MeshStandardMaterial({
      map: galvSet ? galvSet.map : null,
      roughnessMap: galvSet ? galvSet.roughnessMap : null,
      color: 0xeef2f6,
      roughness: 0.38,
      metalness: 0.36
    }),
    corrugatedRoof: new THREE.MeshStandardMaterial({
      map: corrugatedSet ? corrugatedSet.map : null,
      normalMap: corrugatedSet ? corrugatedSet.normalMap : null,
      roughnessMap: corrugatedSet ? corrugatedSet.roughnessMap : null,
      color: 0xf1f5f9,
      roughness: 0.42,
      metalness: 0.32,
      side: THREE.DoubleSide
    }),
    skylightSheet: new THREE.MeshStandardMaterial({
      color: 0xe0f2fe,
      emissive: 0xbae6fd,
      emissiveIntensity: 0.22,
      roughness: 0.2,
      metalness: 0.05,
      transparent: true,
      opacity: 0.65,
      side: THREE.DoubleSide
    }),
    wainscotTile: new THREE.MeshStandardMaterial({
      map: wainscotSet ? wainscotSet.map : null,
      normalMap: wainscotSet ? wainscotSet.normalMap : null,
      roughnessMap: wainscotSet ? wainscotSet.roughnessMap : null,
      color: wainscotSet ? 0xffffff : 0xe5d5b5,
      roughness: 0.25,
      metalness: 0.03
    }),
    aluminum: new THREE.MeshStandardMaterial({
      color: 0xd1d5db,
      roughness: 0.25,
      metalness: 0.85
    }),
    glassClear: new THREE.MeshStandardMaterial({
      color: 0xe0f2fe,
      roughness: 0.06,
      metalness: 0.15,
      transparent: true,
      opacity: 0.38
    }),
    stoolRed: new THREE.MeshStandardMaterial({
      color: 0xb91c1c,
      roughness: 0.5
    }),
    stoolBlue: new THREE.MeshStandardMaterial({
      color: 0x1d4ed8,
      roughness: 0.5
    }),
    trashGreen: new THREE.MeshStandardMaterial({
      color: 0x15803d,
      roughness: 0.48
    }),
    trashYellow: new THREE.MeshStandardMaterial({
      color: 0xeab308,
      roughness: 0.48
    }),
    ceramicPlate: new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.2
    }),
    icedTea: new THREE.MeshStandardMaterial({
      color: 0x92400e,
      roughness: 0.16,
      transparent: true,
      opacity: 0.84
    }),
    orangeDrink: new THREE.MeshStandardMaterial({
      color: 0xea580c,
      roughness: 0.18,
      transparent: true,
      opacity: 0.86
    }),
    trunkBark: new THREE.MeshStandardMaterial({
      color: 0x573b26,
      roughness: 0.92
    }),
    leafDark: new THREE.MeshStandardMaterial({
      color: 0x1e5631,
      roughness: 0.8
    }),
    leafMid: new THREE.MeshStandardMaterial({
      color: 0x2e773d,
      roughness: 0.76
    }),
    leafBright: new THREE.MeshStandardMaterial({
      color: 0x4ca64c,
      roughness: 0.74
    }),
    leafRedTip: new THREE.MeshStandardMaterial({
      color: 0xb91c1c,
      roughness: 0.72
    }),
    terracottaPot: new THREE.MeshStandardMaterial({
      color: 0x9a4422,
      roughness: 0.82
    }),
    concreteCurb: new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      roughness: 0.85
    }),
    soil: new THREE.MeshStandardMaterial({
      color: 0x3b2818,
      roughness: 0.95
    }),
    whiteboard: new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.18,
      metalness: 0.05
    }),
    contactShadow: new THREE.MeshBasicMaterial({
      map: contactShadowTex,
      transparent: true,
      depthWrite: false
    })
  };
}

// =====================================================================================
// 1. SEPEDA MOTOR MATIC SEKOLAH INDONESIA (Proporsional & Realistis)
// =====================================================================================
const paintMatCache = new Map();
function getBikePaintMat(colorHex) {
  if (!paintMatCache.has(colorHex)) {
    paintMatCache.set(
      colorHex,
      new THREE.MeshStandardMaterial({
        color: colorHex,
        roughness: 0.2,
        metalness: 0.28,
        envMapIntensity: 1.15
      })
    );
  }
  return paintMatCache.get(colorHex);
}

export function createRealisticMotorcycle(mats, bodyColorHex = 0xb91c1c, highDetail = true, seed = 0) {
  const root = new THREE.Group();

  // Bayangan kontak di bawah motor
  const shadow = new THREE.Mesh(new THREE.PlaneGeometry(0.96, 2.08), mats.contactShadow);
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.set(0, 0.012, 0);
  root.add(shadow);

  // Grup bodi dimiringkan sedikit karena bertumpu pada standar samping (~6.5 derajat)
  const bike = new THREE.Group();
  bike.rotation.z = 0.11;
  root.add(bike);

  const bodyPaint = getBikePaintMat(bodyColorHex);

  const buildWheel = () => {
    const wg = new THREE.Group();
    const tire = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.068, 8, 14), mats.tireRubber);
    tire.rotation.y = Math.PI / 2;
    wg.add(tire);

    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 0.05, 8), mats.alloyRim);
    hub.rotation.z = Math.PI / 2;
    wg.add(hub);
    return wg;
  };

  const frontWheel = buildWheel(true);
  frontWheel.position.set(0, 0.285, -0.58);
  bike.add(frontWheel);

  const rearWheel = buildWheel(false);
  rearWheel.position.set(0, 0.285, 0.58);
  bike.add(rearWheel);

  // Shockbreaker Depan Teleskopik
  [-0.085, 0.085].forEach((fx) => {
    const fork = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.018, 0.66, 8), mats.chrome);
    fork.position.set(fx, 0.56, -0.49);
    fork.rotation.x = 0.28;
    bike.add(fork);
  });

  // Spakbor Depan
  const frontFender = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.065, 0.35), bodyPaint);
  frontFender.position.set(0, 0.53, -0.58);
  frontFender.rotation.x = 0.22;
  bike.add(frontFender);

  // Tameng Depan Aerodinamis (Front Fairing)
  const frontShield = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.52, 0.24), bodyPaint);
  frontShield.position.set(0, 0.72, -0.42);
  frontShield.rotation.x = 0.26;
  frontShield.castShadow = highDetail;
  bike.add(frontShield);

  const innerLegShield = new THREE.Mesh(new THREE.BoxGeometry(0.33, 0.48, 0.09), mats.mattePlastic);
  innerLegShield.position.set(0, 0.68, -0.32);
  innerLegShield.rotation.x = 0.26;
  bike.add(innerLegShield);

  // Lampu Depan Dual LED + Sein Kuning
  const headlamp = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.12, 0.05), mats.headlampGlass);
  headlamp.position.set(0, 0.75, -0.54);
  headlamp.rotation.x = 0.26;
  bike.add(headlamp);

  [-0.14, 0.14].forEach((sx) => {
    const blinker = new THREE.Mesh(new THREE.BoxGeometry(0.045, 0.08, 0.04), mats.turnSignalAmber);
    blinker.position.set(sx, 0.83, -0.51);
    blinker.rotation.x = 0.26;
    bike.add(blinker);
  });

  // Plat Nomor Depan
  const frontPlate = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.068, 0.015), mats.plateBlack);
  frontPlate.position.set(0, 0.61, -0.55);
  frontPlate.rotation.x = 0.24;
  bike.add(frontPlate);

  // Dek Pijakan Kaki
  const floorboard = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.075, 0.48), mats.mattePlastic);
  floorboard.position.set(0, 0.34, -0.04);
  bike.add(floorboard);

  // Bodi Samping Belakang
  const underSeatBody = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.31, 0.72), bodyPaint);
  underSeatBody.position.set(0, 0.6, 0.36);
  underSeatBody.rotation.x = 0.08;
  underSeatBody.castShadow = highDetail;
  bike.add(underSeatBody);

  // Jok Motor Dua Tingkat
  const seatFront = new THREE.Mesh(new THREE.BoxGeometry(0.31, 0.11, 0.38), mats.vinylSeat);
  seatFront.position.set(0, 0.77, 0.2);
  const seatRear = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.12, 0.36), mats.vinylSeat);
  seatRear.position.set(0, 0.81, 0.52);
  const grabBar = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.04, 0.14), mats.exhaustDark);
  grabBar.position.set(0, 0.84, 0.74);
  bike.add(seatFront, seatRear, grabBar);

  // Helm Siswa di Atas Jok (pada sebagian motor agar parkiran tampak hidup)
  if (highDetail && seed % 3 === 1) {
    const helmet = new THREE.Mesh(
      new THREE.SphereGeometry(0.135, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.72),
      seed % 2 === 0 ? mats.stoolRed : mats.plateBlack
    );
    helmet.position.set(0, 0.91, 0.24);
    helmet.rotation.x = -0.15;
    bike.add(helmet);
  }

  // Lampu Belakang & Spakbor Belakang + Plat Nomor
  const tailLight = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.09, 0.05), mats.taillampRed);
  tailLight.position.set(0, 0.72, 0.74);
  const rearMudguard = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.26, 0.06), mats.mattePlastic);
  rearMudguard.position.set(0, 0.5, 0.78);
  rearMudguard.rotation.x = -0.32;
  const licensePlate = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.085, 0.015), mats.plateBlack);
  licensePlate.position.set(0, 0.52, 0.82);
  licensePlate.rotation.x = -0.32;
  bike.add(tailLight, rearMudguard, licensePlate);

  // Batok Stang, Speedometer, Grip & Spion Kiri-Kanan
  const headCowling = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.14, 0.18), bodyPaint);
  headCowling.position.set(0, 1.03, -0.36);
  bike.add(headCowling);

  const handlebar = new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.016, 0.64, 8), mats.exhaustDark);
  handlebar.rotation.z = Math.PI / 2;
  handlebar.position.set(0, 1.03, -0.35);
  bike.add(handlebar);

  if (highDetail) {
    [-1, 1].forEach((side) => {
      const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.12, 8), mats.tireRubber);
      grip.rotation.z = Math.PI / 2;
      grip.position.set(side * 0.28, 1.03, -0.35);

      const mirrorStalk = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.16, 6), mats.chrome);
      mirrorStalk.position.set(side * 0.22, 1.11, -0.36);
      mirrorStalk.rotation.z = -side * 0.35;

      const mirrorHead = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.065, 0.025), mats.mattePlastic);
      mirrorHead.position.set(side * 0.26, 1.18, -0.36);

      bike.add(grip, mirrorStalk, mirrorHead);
    });
  }

  // Knalpot Samping Kanan + Pelindung Panas Chrome & Shock Belakang
  const muffler = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.048, 0.52, 10), mats.exhaustDark);
  muffler.rotation.x = Math.PI / 2 - 0.18;
  muffler.position.set(0.21, 0.36, 0.48);
  const heatShield = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.07, 0.3), mats.chrome);
  heatShield.position.set(0.265, 0.37, 0.48);
  heatShield.rotation.x = -0.18;
  const rearShock = new THREE.Mesh(new THREE.CylinderGeometry(0.024, 0.024, 0.28, 8), mats.stoolRed);
  rearShock.position.set(-0.14, 0.44, 0.52);
  rearShock.rotation.x = 0.18;
  bike.add(muffler, heatShield, rearShock);

  // Standar Samping
  const kickstand = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.01, 0.32, 6), mats.ironFrame);
  kickstand.position.set(-0.18, 0.15, 0.08);
  kickstand.rotation.z = 0.42;
  root.add(kickstand);

  return root;
}

// =====================================================================================
// 2. STRUKTUR TERBUKA RANGKA BAJA RINGAN PARKIRAN MOTOR (Sesuai Foto Referensi 2)
// =====================================================================================
export function createOpenSteelRoofTrussModule(
  mats,
  width = 12.6,
  length = 28,
  eavesHeight = 4.35,
  ridgeHeight = 5.35,
  bayCount = 4
) {
  const g = new THREE.Group();
  const halfW = width * 0.5;

  const stepZ = length / bayCount;
  const zPositions = [];
  for (let i = 0; i < bayCount; i++) {
    zPositions.push(-length * 0.5 + stepZ * (i + 0.5));
  }

  const rafterLen = Math.sqrt(halfW * halfW + (ridgeHeight - eavesHeight) * (ridgeHeight - eavesHeight));
  const slopeAngle = Math.atan2(ridgeHeight - eavesHeight, halfW);
  const kingPostH = ridgeHeight - eavesHeight;

  zPositions.forEach((tz) => {
    // 1. Tiang Baja Kiri & Kanan + Umpak Beton
    [-halfW, halfW].forEach((cx) => {
      const col = new THREE.Mesh(new THREE.BoxGeometry(0.15, eavesHeight, 0.15), mats.galvSteel);
      col.position.set(cx, eavesHeight * 0.5, tz);
      col.castShadow = true;
      col.receiveShadow = true;

      const pedestal = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.22, 0.32), mats.concreteCurb);
      pedestal.position.set(cx, 0.11, tz);
      pedestal.receiveShadow = true;

      g.add(col, pedestal);
    });

    // 2. Balok Tarik Utama Horizontal (Main Tie Chord)
    const tieBeam = new THREE.Mesh(new THREE.BoxGeometry(width + 0.3, 0.11, 0.09), mats.galvSteel);
    tieBeam.position.set(0, eavesHeight, tz);
    tieBeam.castShadow = true;
    g.add(tieBeam);

    // 3. Kaki Kuda-Kuda Baja Ringan Kiri & Kanan (Top Chords / Rafters)
    const rafterL = new THREE.Mesh(new THREE.BoxGeometry(rafterLen + 0.4, 0.1, 0.09), mats.galvSteel);
    rafterL.position.set(-halfW * 0.5, (eavesHeight + ridgeHeight) * 0.5, tz);
    rafterL.rotation.z = slopeAngle;
    rafterL.castShadow = true;

    const rafterR = new THREE.Mesh(new THREE.BoxGeometry(rafterLen + 0.4, 0.1, 0.09), mats.galvSteel);
    rafterR.position.set(halfW * 0.5, (eavesHeight + ridgeHeight) * 0.5, tz);
    rafterR.rotation.z = -slopeAngle;
    rafterR.castShadow = true;

    // 4. Batang Vertikal & Penguat Diagonal Kuda-Kuda (Web Truss Members — Sesuai Foto 2!)
    const kingPost = new THREE.Mesh(new THREE.BoxGeometry(0.08, kingPostH, 0.08), mats.galvSteel);
    kingPost.position.set(0, eavesHeight + kingPostH * 0.5, tz);

    [-1, 1].forEach((side) => {
      // Batang vertikal tengah bentang
      const midV = new THREE.Mesh(new THREE.BoxGeometry(0.065, kingPostH * 0.52, 0.065), mats.galvSteel);
      midV.position.set(side * halfW * 0.48, eavesHeight + kingPostH * 0.26, tz);

      // Penguat diagonal dalam (Pratt/Howe web diagonal)
      const diagInner = new THREE.Mesh(new THREE.BoxGeometry(0.065, kingPostH * 1.35, 0.065), mats.galvSteel);
      diagInner.position.set(side * halfW * 0.24, eavesHeight + kingPostH * 0.38, tz);
      diagInner.rotation.z = side * 0.85;

      // Penguat diagonal luar
      const diagOuter = new THREE.Mesh(new THREE.BoxGeometry(0.06, kingPostH * 0.95, 0.06), mats.galvSteel);
      diagOuter.position.set(side * halfW * 0.68, eavesHeight + kingPostH * 0.18, tz);
      diagOuter.rotation.z = -side * 0.92;

      // Penguat Diagonal Sudut Tiang ke Balok (Knee Braces — sangat khas di Foto 2!)
      const kneeBrace = new THREE.Mesh(new THREE.BoxGeometry(0.075, 1.15, 0.075), mats.galvSteel);
      kneeBrace.position.set(side * (halfW - 0.44), eavesHeight - 0.38, tz);
      kneeBrace.rotation.z = side * 0.78;

      g.add(midV, diagInner, diagOuter, kneeBrace);
    });

    g.add(rafterL, rafterR, kingPost);
  });

  // 5. Balok Memanjang Tepi Atap & Nok Puncak (Longitudinal Eaves & Ridge Beams)
  [-halfW, halfW].forEach((cx) => {
    const eavesBeam = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.14, length), mats.galvSteel);
    eavesBeam.position.set(cx, eavesHeight, 0);
    g.add(eavesBeam);
  });

  const ridgeBeam = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.12, length), mats.galvSteel);
  ridgeBeam.position.set(0, ridgeHeight, 0);
  g.add(ridgeBeam);

  // 6. Gording Baja Ringan (Purlins) Memanjang
  [-0.75, -0.5, -0.25, 0.25, 0.5, 0.75].forEach((frac) => {
    const px = frac * halfW;
    const py = eavesHeight + (1 - Math.abs(frac)) * (ridgeHeight - eavesHeight);
    const purlin = new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.075, length), mats.galvSteel);
    purlin.position.set(px, py, 0);
    g.add(purlin);
  });

  // 7. Lembaran Atap Metal Spandek Bergelombang Kiri & Kanan
  const roofSlopeLen = rafterLen + 0.65;
  const roofLeft = new THREE.Mesh(
    new THREE.BoxGeometry(roofSlopeLen, 0.05, length),
    mats.corrugatedRoof
  );
  roofLeft.position.set(-halfW * 0.5, (eavesHeight + ridgeHeight) * 0.5 + 0.06, 0);
  roofLeft.rotation.z = slopeAngle;
  roofLeft.castShadow = true;

  const roofRight = new THREE.Mesh(
    new THREE.BoxGeometry(roofSlopeLen, 0.05, length),
    mats.corrugatedRoof
  );
  roofRight.position.set(halfW * 0.5, (eavesHeight + ridgeHeight) * 0.5 + 0.06, 0);
  roofRight.rotation.z = -slopeAngle;
  roofRight.castShadow = true;

  g.add(roofLeft, roofRight);

  // 8. Pagar Besi Rendah Terbuka di Sisi Kiri (Tinggi 1.15m, sesuai Foto 2)
  const fenceH = 1.15;
  const lowCurb = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.28, length), mats.concreteCurb);
  lowCurb.position.set(-halfW, 0.14, 0);
  const topRail = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.05, length), mats.ironFrame);
  topRail.position.set(-halfW, fenceH, 0);
  const midRail = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.04, length), mats.ironFrame);
  midRail.position.set(-halfW, 0.68, 0);
  g.add(lowCurb, topRail, midRail);

  for (let fz = -length * 0.5 + 1.5; fz <= length * 0.5 - 1.5; fz += 3.2) {
    const picket = new THREE.Mesh(
      new THREE.CylinderGeometry(0.018, 0.018, fenceH - 0.26, 6),
      mats.ironFrame
    );
    picket.position.set(-halfW, 0.28 + (fenceH - 0.26) * 0.5, fz);
    g.add(picket);
  }

  return g;
}

// =====================================================================================
// 3. MEJA & BANGKU KANTIN SEKOLAH INDONESIA + PERALATAN MAKAN
// =====================================================================================
export function createCanteenTableSet(mats, seed = 1) {
  const group = new THREE.Group();

  const shadow = new THREE.Mesh(new THREE.PlaneGeometry(1.55, 1.95), mats.contactShadow);
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.01;
  group.add(shadow);

  // Daun Meja Kayu Pernis
  const tableTop = new THREE.Mesh(new THREE.BoxGeometry(0.76, 0.048, 1.6), mats.woodLight);
  tableTop.position.y = 0.75;
  tableTop.castShadow = true;
  tableTop.receiveShadow = true;
  group.add(tableTop);

  // Rangka Besi Hollow Meja + Palang Bawah
  [-0.32, 0.32].forEach((tx) => {
    [-0.7, 0.7].forEach((tz) => {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.74, 0.04), mats.ironFrame);
      leg.position.set(tx, 0.37, tz);
      group.add(leg);
    });
  });
  const stretcher = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.035, 1.38), mats.ironFrame);
  stretcher.position.set(0, 0.2, 0);
  group.add(stretcher);

  // Dua Bangku Panjang Kayu di Sisi Kiri & Kanan Meja
  [-0.58, 0.58].forEach((bx) => {
    const benchTop = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.038, 1.5), mats.woodDark);
    benchTop.position.set(bx, 0.45, 0);
    benchTop.castShadow = true;
    benchTop.receiveShadow = true;
    group.add(benchTop);

    [-0.6, 0.6].forEach((bz) => {
      const bLeg = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.44, 0.035), mats.ironFrame);
      bLeg.position.set(bx, 0.22, bz);
      group.add(bLeg);
    });
  });

  // Peralatan Makan Kantin: Piring, Mangkuk Bakso, Gelas Es Teh, Botol Saus/Kecap, Kotak Tisu
  const plate = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.07, 0.025, 12), mats.ceramicPlate);
  plate.position.set(-0.14, 0.785, -0.32);

  const bowl = new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.055, 0.065, 12), mats.ceramicPlate);
  bowl.position.set(0.12, 0.805, 0.22);

  const glass = new THREE.Mesh(new THREE.CylinderGeometry(0.042, 0.034, 0.13, 10), mats.icedTea);
  glass.position.set(0.15, 0.835, -0.24);

  const sauceBottle = new THREE.Mesh(new THREE.CylinderGeometry(0.026, 0.03, 0.16, 8), mats.stoolRed);
  sauceBottle.position.set(0.04, 0.85, 0.46);

  const soyBottle = new THREE.Mesh(new THREE.CylinderGeometry(0.026, 0.03, 0.15, 8), mats.plateBlack);
  soyBottle.position.set(-0.04, 0.845, 0.48);

  const tissueBox = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.07, 0.16), mats.stoolBlue);
  tissueBox.position.set(-0.02, 0.81, 0.0);

  group.add(plate, bowl, glass, sauceBottle, soyBottle, tissueBox);
  return group;
}

// =====================================================================================
// 4. MEJA PELAYANAN & ETALASE KACA MAKANAN KANTIN SEKOLAH
// =====================================================================================
export function createCanteenStallCounter(mats, texLib = null, variant = 0) {
  const group = new THREE.Group();

  // Meja Counter Pelayanan Berlapis Keramik & Kayu
  const counterBase = new THREE.Mesh(new THREE.BoxGeometry(0.88, 0.86, 3.1), mats.woodDark);
  counterBase.position.y = 0.43;
  counterBase.castShadow = true;
  counterBase.receiveShadow = true;

  const frontTilePanel = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.78, 2.98), mats.wainscotTile);
  frontTilePanel.position.set(-0.43, 0.43, 0);

  const counterTop = new THREE.Mesh(new THREE.BoxGeometry(0.96, 0.055, 3.18), mats.ceramicPlate);
  counterTop.position.y = 0.885;
  group.add(counterBase, frontTilePanel, counterTop);

  // Etalase Kaca Aluminium Makanan Dua Tingkat
  const etalaseGroup = new THREE.Group();
  etalaseGroup.position.set(-0.08, 1.26, -0.52);

  const glassBox = new THREE.Mesh(new THREE.BoxGeometry(0.54, 0.72, 1.48), mats.glassClear);
  etalaseGroup.add(glassBox);

  [
    [-0.27, -0.74],
    [0.27, -0.74],
    [-0.27, 0.74],
    [0.27, 0.74]
  ].forEach(([ex, ez]) => {
    const post = new THREE.Mesh(new THREE.BoxGeometry(0.032, 0.74, 0.032), mats.aluminum);
    post.position.set(ex, 0, ez);
    etalaseGroup.add(post);
  });

  // Rak Kaca Tengah & Atas + Nampan Makanan
  const midShelf = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.016, 1.42), mats.aluminum);
  etalaseGroup.add(midShelf);

  const foodColors = [0xd97706, 0xb45309, 0xca8a04, 0x15803d];
  [-0.44, 0.0, 0.44].forEach((tz, idx) => {
    const tray = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.045, 0.38), mats.aluminum);
    tray.position.set(0, -0.28, tz);
    const foodTex = texLib && texLib.getFoodTrayTexture ? texLib.getFoodTrayTexture(variant + idx) : null;
    const foodPile = new THREE.Mesh(
      new THREE.BoxGeometry(0.3, 0.085, 0.32),
      new THREE.MeshStandardMaterial({
        map: foodTex,
        color: foodTex ? 0xffffff : foodColors[(variant + idx) % foodColors.length],
        roughness: 0.68
      })
    );
    foodPile.position.set(0, -0.22, tz);
    etalaseGroup.add(tray, foodPile);
  });
  group.add(etalaseGroup);

  // Dispenser / Toples Es Jeruk & Es Teh Jumbo + Termos Nasi
  const jarTea = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.15, 0.44, 12), mats.icedTea);
  jarTea.position.set(-0.08, 1.13, 0.55);
  const jarLid1 = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.05, 12), mats.stoolBlue);
  jarLid1.position.set(-0.08, 1.37, 0.55);

  const jarOrange = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.15, 0.44, 12), mats.orangeDrink);
  jarOrange.position.set(-0.08, 1.13, 0.98);
  const jarLid2 = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.05, 12), mats.stoolRed);
  jarLid2.position.set(-0.08, 1.37, 0.98);

  const riceThermos = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.16, 0.46, 12), mats.stoolRed);
  riceThermos.position.set(0.12, 1.14, 1.32);
  const thermosLid = new THREE.Mesh(new THREE.CylinderGeometry(0.185, 0.185, 0.04, 12), mats.plateWhite);
  thermosLid.position.set(0.12, 1.38, 1.32);

  group.add(jarTea, jarLid1, jarOrange, jarLid2, riceThermos, thermosLid);
  return group;
}

// =====================================================================================
// 5. RAK SEPATU KAYU KORIDOR KELAS (Sesuai Foto Referensi Koridor 11 A1!)
// =====================================================================================
export function createWoodenShoeRack(mats, seed = 1) {
  const g = new THREE.Group();

  // Bodi Samping & Belakang Kabinet Rak Sepatu Kayu Pelitur Cokelat
  const height = 1.05;
  const width = 0.36;
  const length = 1.28;

  const backPanel = new THREE.Mesh(new THREE.BoxGeometry(0.03, height, length), mats.woodDark);
  backPanel.position.set(width * 0.5 - 0.015, height * 0.5, 0);

  [-length * 0.5 + 0.02, length * 0.5 - 0.02].forEach((sz) => {
    const sideWall = new THREE.Mesh(new THREE.BoxGeometry(width, height, 0.04), mats.woodLight);
    sideWall.position.set(0, height * 0.5, sz);
    sideWall.castShadow = true;
    sideWall.receiveShadow = true;
    g.add(sideWall);
  });

  // 4 Susun Ambalan Rak Sepatu + Sepatu Siswa di Dalamnya
  [0.12, 0.4, 0.68, 0.98].forEach((sy, rIdx) => {
    const shelf = new THREE.Mesh(new THREE.BoxGeometry(width - 0.02, 0.03, length - 0.04), mats.woodLight);
    shelf.position.set(0, sy, 0);
    shelf.castShadow = true;
    g.add(shelf);

    if (rIdx < 3) {
      [-0.38, 0.0, 0.38].forEach((pz, pIdx) => {
        if ((seed + rIdx + pIdx) % 3 === 0) return;
        const shoeL = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.065, 0.08), mats.plateBlack);
        shoeL.position.set(-0.03, sy + 0.045, pz - 0.05);
        const shoeR = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.065, 0.08), mats.plateBlack);
        shoeR.position.set(-0.03, sy + 0.045, pz + 0.05);
        g.add(shoeL, shoeR);
      });
    }
  });

  g.add(backPanel);
  return g;
}

// =====================================================================================
// 7. BAK TANAMAN HALAMAN KORIDOR (Planter Box Sisi Kiri Koridor Sesuai Foto 2)
// =====================================================================================
export function createCourtyardPlanterBox(mats, width = 1.25, length = 5.2, seed = 1) {
  const g = new THREE.Group();
  const curbH = 0.36;

  const boxOuter = new THREE.Mesh(
    new THREE.BoxGeometry(width, curbH, length),
    mats.wainscotTile
  );
  boxOuter.position.y = curbH * 0.5;
  boxOuter.castShadow = true;
  boxOuter.receiveShadow = true;

  const soilTop = new THREE.Mesh(
    new THREE.BoxGeometry(width - 0.16, 0.04, length - 0.16),
    mats.soil
  );
  soilTop.position.y = curbH - 0.01;
  g.add(boxOuter, soilTop);

  // Deretan Semak Perdu Rimbun (Teh-tehan & Pucuk Merah sesuai Foto 2!)
  const bushCount = Math.max(3, Math.floor(length / 1.1));
  for (let i = 0; i < bushCount; i++) {
    const bz = -length * 0.42 + (i / Math.max(1, bushCount - 1)) * (length * 0.84);
    const r = 0.42 + ((seed + i) % 3) * 0.08;
    const bush = new THREE.Mesh(
      new THREE.DodecahedronGeometry(r, 1),
      i % 2 === 0 ? mats.leafBright : mats.leafMid
    );
    bush.scale.set(0.95, 1.12, 1.05);
    bush.position.set((i % 2 === 0 ? -0.08 : 0.08), curbH + r * 0.65, bz);
    bush.castShadow = true;
    g.add(bush);
  }

  return g;
}

// =====================================================================================
// 8. TEMPAT SAMPAH SEKOLAH TERPILAH & BANGKU TUNGGU KORIDOR
// =====================================================================================
export function createSchoolTrashBinPair(mats) {
  const g = new THREE.Group();
  [
    [-0.26, mats.trashGreen],
    [0.26, mats.trashYellow]
  ].forEach(([oz, mat]) => {
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.19, 0.15, 0.62, 10), mat);
    body.position.set(0, 0.31, oz);
    body.castShadow = true;
    const lid = new THREE.Mesh(new THREE.CylinderGeometry(0.205, 0.2, 0.07, 10), mat);
    lid.position.set(0, 0.65, oz);
    g.add(body, lid);
  });
  return g;
}

export function createCorridorBench(mats) {
  const g = new THREE.Group();
  const seat = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.045, 1.65), mats.woodLight);
  seat.position.y = 0.45;
  seat.castShadow = true;
  seat.receiveShadow = true;
  g.add(seat);

  [-0.65, 0.65].forEach((lz) => {
    const leg = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.44, 0.05), mats.ironFrame);
    leg.position.set(0, 0.22, lz);
    g.add(leg);
  });
  return g;
}

// =====================================================================================
// 9. PEPOHONAN TROPIS ALAMI & POT TANAMAN SEKOLAH
// =====================================================================================
export function createTropicalTree(mats, seed = 1, isDistantLOD = false) {
  const g = new THREE.Group();
  const s1 = ((seed * 37) % 100) / 100;
  const s2 = ((seed * 73) % 100) / 100;

  const trunkHeight = 3.4 + s1 * 1.9;
  const trunk = new THREE.Mesh(
    new THREE.CylinderGeometry(0.17, 0.3, trunkHeight, isDistantLOD ? 5 : 8),
    mats.trunkBark
  );
  trunk.position.y = trunkHeight * 0.5;
  trunk.rotation.z = (s2 - 0.5) * 0.1;
  trunk.castShadow = !isDistantLOD;
  g.add(trunk);

  const leafMaterials = [mats.leafDark, mats.leafMid, mats.leafBright];

  if (isDistantLOD) {
    const crown = new THREE.Mesh(
      new THREE.DodecahedronGeometry(1.75 + s1 * 0.55, 0),
      leafMaterials[seed % 3]
    );
    crown.scale.set(1.18, 0.84, 1.12);
    crown.position.y = trunkHeight + 0.72;
    g.add(crown);
    return g;
  }

  [-1, 1].forEach((dir, idx) => {
    const branch = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.13, 1.35, 6), mats.trunkBark);
    branch.position.set(dir * 0.44, trunkHeight - 0.35 + idx * 0.2, (s1 - 0.5) * 0.3);
    branch.rotation.z = -dir * 0.62;
    g.add(branch);
  });

  const offsets = [
    [0, 0.9, 0, 1.52],
    [-0.98, 0.38, 0.45, 1.2],
    [0.95, 0.44, -0.35, 1.22],
    [0.25, 0.52, 0.88, 1.1],
    [-0.35, 0.46, -0.84, 1.12]
  ];

  offsets.forEach(([ox, oy, oz, rad], idx) => {
    const puff = new THREE.Mesh(
      new THREE.DodecahedronGeometry(rad * (0.9 + s2 * 0.22), 1),
      leafMaterials[(seed + idx) % 3]
    );
    puff.scale.set(1.14, 0.8, 1.08);
    puff.position.set(ox, trunkHeight + oy, oz);
    puff.castShadow = idx < 3;
    g.add(puff);
  });

  return g;
}

export function createSchoolPottedPlant(mats) {
  const g = new THREE.Group();
  const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.16, 0.36, 10), mats.terracottaPot);
  pot.position.y = 0.18;
  pot.castShadow = true;

  const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.23, 0.05, 10), mats.terracottaPot);
  rim.position.y = 0.35;

  const soil = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.03, 10), mats.soil);
  soil.position.y = 0.34;
  g.add(pot, rim, soil);

  for (let i = 0; i < 7; i++) {
    const angle = (i / 7) * Math.PI * 2;
    const h = 0.48 + (i % 3) * 0.11;
    const blade = new THREE.Mesh(
      new THREE.ConeGeometry(0.055, h, 4),
      i % 2 === 0 ? mats.leafMid : mats.leafBright
    );
    blade.position.set(Math.cos(angle) * 0.07, 0.35 + h * 0.45, Math.sin(angle) * 0.07);
    blade.rotation.z = -Math.cos(angle) * 0.22;
    blade.rotation.x = Math.sin(angle) * 0.22;
    g.add(blade);
  }
  return g;
}

// =====================================================================================
// 10. POHON KELAPA SAWIT 3D REALISTIS (Elaeis guineensis) — Belakang Kelas 11 A4
// =====================================================================================
let cachedFrondGeos = null;
function getPalmFrondGeometries() {
  if (cachedFrondGeos) return cachedFrondGeos;

  const createCurvedFrondGeometry = (length, width, droopCurve) => {
    const segments = 8;
    const pos = new Float32Array((segments + 1) * 2 * 3);
    const uvs = new Float32Array((segments + 1) * 2 * 2);
    const indices = [];

    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const z = t * length;
      const y = -Math.pow(t, droopCurve) * (length * 0.46);
      const w = Math.sin(t * Math.PI * 0.88 + 0.12) * width * 0.5;

      const idx = i * 2;
      pos[idx * 3] = -w;
      pos[idx * 3 + 1] = y;
      pos[idx * 3 + 2] = z;

      pos[(idx + 1) * 3] = w;
      pos[(idx + 1) * 3 + 1] = y;
      pos[(idx + 1) * 3 + 2] = z;

      uvs[idx * 2] = 0;
      uvs[idx * 2 + 1] = t;
      uvs[(idx + 1) * 2] = 1;
      uvs[(idx + 1) * 2 + 1] = t;

      if (i < segments) {
        indices.push(idx, idx + 1, idx + 2);
        indices.push(idx + 1, idx + 3, idx + 2);
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
    geo.setIndex(indices);
    geo.computeVertexNormals();
    return geo;
  };

  cachedFrondGeos = {
    upper: createCurvedFrondGeometry(3.8, 1.2, 2.1),
    mid: createCurvedFrondGeometry(4.4, 1.4, 1.85),
    lower: createCurvedFrondGeometry(4.7, 1.5, 1.6)
  };
  return cachedFrondGeos;
}

export function createOilPalmTree(mats, seed = 1, isDistantLOD = false) {
  const g = new THREE.Group();
  const s1 = ((seed * 43) % 100) / 100;
  const s2 = ((seed * 67) % 100) / 100;

  // Tinggi pohon sawit dewasa proporsional (~5.6m s/d 7.2m)
  const trunkHeight = 5.2 + s1 * 1.6;

  if (mats.contactShadow) {
    const shadowSize = 5.4 + s1 * 1.2;
    const shadow = new THREE.Mesh(
      new THREE.PlaneGeometry(shadowSize, shadowSize),
      mats.contactShadow
    );
    shadow.rotation.x = -Math.PI / 2;
    shadow.position.y = 0.02;
    g.add(shadow);
  }

  // Pangkal batang menggelembung alami (buttress root bole)
  const baseSwelling = new THREE.Mesh(
    new THREE.CylinderGeometry(0.39, 0.55, 1.0, isDistantLOD ? 6 : 10),
    mats.palmTrunk
  );
  baseSwelling.position.y = 0.5;
  baseSwelling.castShadow = !isDistantLOD;
  baseSwelling.receiveShadow = true;
  g.add(baseSwelling);

  // Batang utama pohon sawit
  const trunkGeo = new THREE.CylinderGeometry(
    0.33,
    0.4,
    trunkHeight,
    isDistantLOD ? 6 : 12,
    isDistantLOD ? 1 : 5
  );
  const trunk = new THREE.Mesh(trunkGeo, mats.palmTrunk);
  trunk.position.y = trunkHeight * 0.5 + 0.45;
  trunk.rotation.z = (s2 - 0.5) * 0.06;
  trunk.castShadow = !isDistantLOD;
  trunk.receiveShadow = true;
  g.add(trunk);

  // Bekas potongan pelepah spiral (frond bases) di sepanjang batang
  if (!isDistantLOD) {
    for (let h = 1.2; h < trunkHeight - 0.4; h += 0.95) {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(0.365, 0.042, 4, 8),
        mats.palmTrunk
      );
      ring.rotation.x = Math.PI / 2 + (s1 - 0.5) * 0.1;
      ring.position.y = h;
      g.add(ring);
    }
  }

  // Tandan buah kelapa sawit (Fresh Fruit Bunches) di ketiak pelepah
  const crownY = trunkHeight + 0.38;
  for (let b = 0; b < 3; b++) {
    const bAngle = (b / 3) * Math.PI * 2 + s1 * 1.5;
    const bunch = new THREE.Mesh(
      new THREE.SphereGeometry(0.32, 6, 5),
      mats.palmBunch
    );
    bunch.scale.set(1.05, 1.25, 0.8);
    bunch.position.set(
      Math.cos(bAngle) * 0.34,
      crownY - 0.34,
      Math.sin(bAngle) * 0.34
    );
    g.add(bunch);
  }

  // Tajuk Pelepah Sawit 3 Lapis (Cast shadow daun sawit jatuh ke lintasan!)
  const frondGeos = getPalmFrondGeometries();
  const frondLayers = isDistantLOD
    ? [
        { count: 4, pitch: -0.35, geo: frondGeos.upper },
        { count: 5, pitch: -0.72, geo: frondGeos.mid }
      ]
    : [
        { count: 4, pitch: -0.28, geo: frondGeos.upper },
        { count: 5, pitch: -0.62, geo: frondGeos.mid },
        { count: 5, pitch: -0.96, geo: frondGeos.lower }
      ];

  frondLayers.forEach((layer, lIdx) => {
    const angleStep = (Math.PI * 2) / layer.count;
    const angleOffset = lIdx * 0.65 + s1 * 0.5;

    for (let f = 0; f < layer.count; f++) {
      const yaw = f * angleStep + angleOffset + (s2 - 0.5) * 0.14;
      const frondMesh = new THREE.Mesh(layer.geo, mats.palmFrond);
      frondMesh.position.set(0, crownY + (2 - lIdx) * 0.18, 0);
      frondMesh.rotation.y = yaw;
      frondMesh.rotation.x = layer.pitch + (s1 - 0.5) * 0.08;
      frondMesh.rotation.z = f % 2 === 0 ? 0.12 : -0.12;
      frondMesh.castShadow = !isDistantLOD && lIdx === 1;
      g.add(frondMesh);
    }
  });

  return g;
}
