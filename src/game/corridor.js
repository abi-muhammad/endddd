import * as THREE from 'three';
import {
  createSharedPropMaterials,
  createRealisticMotorcycle,
  createOpenSteelRoofTrussModule,
  createCanteenTableSet,
  createCanteenStallCounter,
  createWoodenShoeRack,
  createCourtyardPlanterBox,
  createSchoolTrashBinPair,
  createCorridorBench,
  createTropicalTree,
  createOilPalmTree,
  createSchoolPottedPlant
} from './props.js';

// Setiap segmen zona dibuat panjang (42 meter = 6 modul tiang @ 7m)
// agar pemain benar-benar menikmati suasana setiap kelas dan lokasi sekolah!
export const SEGMENT_LENGTH = 42;
export const SEGMENT_COUNT = 7;
export const CORRIDOR_WIDTH = 8.2;
export const CEILING_HEIGHT = 3.95;

// URUTAN WAJIB 7 ZONA AUTENTIK SMA NEGERI 1 PASIR SAKTI:
// 1. Kelas 11 A1
// 2. Kelas 11 A2
// 3. Kelas 11 A3
// 4. Kelas 11 A4
// 5. Bagian belakang kelas yang memiliki pohon sawit
// 6. Area parkiran motor beratap baja ringan
// 7. Kantin sekolah
export const ZONE_SEQUENCE = [
  'CLASS_11A1',
  'CLASS_11A2',
  'CLASS_11A3',
  'CLASS_11A4',
  'PALM_GROVE',
  'PARKING',
  'CANTEEN'
];

export const ZONE_DISPLAY_NAMES = {
  CLASS_11A1: 'Koridor Kelas 11 A1',
  CLASS_11A2: 'Koridor Kelas 11 A2',
  CLASS_11A3: 'Koridor Kelas 11 A3',
  CLASS_11A4: 'Koridor Kelas 11 A4',
  PALM_GROVE: 'Belakang Kelas (Kebun Sawit)',
  PARKING: 'Parkiran Motor Baja Ringan',
  CANTEEN: 'Kantin SMAN 1 Pasir Sakti'
};

const MOTOR_COLORS = [0xb91c1c, 0x18181b, 0x1d4ed8, 0xf8fafc, 0x334155, 0x991b1b, 0x0f766e];

export class CorridorManager {
  constructor(scene, texLib) {
    this.scene = scene;
    this.texLib = texLib;
    this.segments = [];
    this.bystanders = [];
    this.distantProps = [];
    this.highDetailProps = [];
    this.sequenceIndex = 0;

    this.initMaterials();
    this.initSegments();
  }

  initMaterials() {
    const ceramicSet = this.texLib.getFloorTileSet
      ? this.texLib.getFloorTileSet()
      : this.texLib.getCeramicFloorSet();
    const wainscotSet = this.texLib.getWainscotTileSet
      ? this.texLib.getWainscotTileSet()
      : null;
    const pavingSet = this.texLib.getParkingFloorSet();
    const concreteSet = this.texLib.getConcreteSet
      ? this.texLib.getConcreteSet(5)
      : null;
    const corrugatedSet = this.texLib.getCorrugatedSet
      ? this.texLib.getCorrugatedSet()
      : null;
    const clayRoofSet = this.texLib.getClayRoofSet
      ? this.texLib.getClayRoofSet()
      : null;
    const soilSet = this.texLib.getSoilSet ? this.texLib.getSoilSet() : null;
    const grassSet = this.texLib.getGrassSet ? this.texLib.getGrassSet() : null;
    const plasterNorm = this.texLib.getPlasterNormalMap();
    const greenPaintSet = this.texLib.getPaintSet
      ? this.texLib.getPaintSet('#24824e', 3)
      : null;
    const mintWallSet = this.texLib.getPaintSet
      ? this.texLib.getPaintSet('#52b788', 7)
      : null;

    this.propMats = createSharedPropMaterials(this.texLib);

    // 1. Lantai Keramik Putih Mengkilap Koridor Kelas (60x60cm sesuai Foto Koridor 11 A1)
    const floorMap = ceramicSet.map.clone();
    floorMap.repeat.set(6.5, 32);
    floorMap.needsUpdate = true;
    const floorRough = ceramicSet.roughnessMap ? ceramicSet.roughnessMap.clone() : null;
    if (floorRough) {
      floorRough.repeat.set(6.5, 32);
      floorRough.needsUpdate = true;
    }
    const floorNorm = ceramicSet.normalMap ? ceramicSet.normalMap.clone() : null;
    if (floorNorm) {
      floorNorm.repeat.set(6.5, 32);
      floorNorm.needsUpdate = true;
    }

    this.ceramicFloorMat = new THREE.MeshStandardMaterial({
      map: floorMap,
      roughnessMap: floorRough,
      normalMap: floorNorm,
      normalScale: new THREE.Vector2(0.45, 0.45),
      roughness: 0.2,
      metalness: 0.05,
      envMapIntensity: 1.05
    });

    // 2. Lantai Beton Halus Parkiran Motor & Jalan Belakang (Sesuai Foto Parkiran Baja Ringan)
    const concMap = concreteSet ? concreteSet.map.clone() : pavingSet.map.clone();
    concMap.repeat.set(4, 14);
    concMap.needsUpdate = true;
    const concNorm = concreteSet ? concreteSet.normalMap.clone() : pavingSet.normalMap.clone();
    concNorm.repeat.set(4, 14);
    concNorm.needsUpdate = true;

    this.concreteFloorMat = new THREE.MeshStandardMaterial({
      map: concMap,
      roughnessMap: concreteSet ? concreteSet.roughnessMap : null,
      normalMap: concNorm,
      normalScale: new THREE.Vector2(0.5, 0.5),
      roughness: 0.52,
      metalness: 0.04,
      envMapIntensity: 0.65
    });

    // 3. Lantai Paving Block
    this.pavingFloorMat = new THREE.MeshStandardMaterial({
      map: pavingSet.map,
      normalMap: pavingSet.normalMap,
      normalScale: new THREE.Vector2(0.7, 0.7),
      roughness: 0.85,
      metalness: 0.02
    });

    // 4. Tanah & Rumput Area Pohon Sawit dan Halaman
    if (soilSet && soilSet.map) {
      soilSet.map.repeat.set(6, 16);
      soilSet.normalMap.repeat.set(6, 16);
    }
    this.soilFloorMat = new THREE.MeshStandardMaterial({
      map: soilSet ? soilSet.map : null,
      color: soilSet ? 0xffffff : 0x5a3e28,
      normalMap: soilSet ? soilSet.normalMap : null,
      roughness: 0.94,
      metalness: 0.01
    });

    if (grassSet && grassSet.map) {
      grassSet.map.repeat.set(8, 18);
      grassSet.normalMap.repeat.set(8, 18);
    }
    this.grassMat = new THREE.MeshStandardMaterial({
      map: grassSet ? grassSet.map : null,
      color: grassSet ? 0xffffff : 0x3f7a38,
      normalMap: grassSet ? grassSet.normalMap : null,
      roughness: 0.9
    });

    // 5. Dinding Kelas & Tiang Koridor (Sesuai Foto Koridor 11 A1!)
    // Tiang & Lis menggunakan Hijau Tua Segar (#1d7a46), Dinding Atas Hijau Mint (#52b788), Bawah Keramik Krem
    this.pillarGreenMat = new THREE.MeshStandardMaterial({
      map: greenPaintSet ? greenPaintSet.map : this.texLib.getPlasterWallTexture('#1d7a46', false),
      normalMap: greenPaintSet ? greenPaintSet.normalMap : plasterNorm,
      roughnessMap: greenPaintSet ? greenPaintSet.roughnessMap : null,
      normalScale: new THREE.Vector2(0.35, 0.35),
      roughness: 0.68,
      metalness: 0.03
    });

    this.wallGreenUpperMat = new THREE.MeshStandardMaterial({
      map: mintWallSet ? mintWallSet.map : this.texLib.getPlasterWallTexture('#48a878', false),
      normalMap: mintWallSet ? mintWallSet.normalMap : plasterNorm,
      roughnessMap: mintWallSet ? mintWallSet.roughnessMap : null,
      normalScale: new THREE.Vector2(0.32, 0.32),
      roughness: 0.74,
      metalness: 0.02
    });

    const wainscotWallMap = wainscotSet ? wainscotSet.map.clone() : null;
    if (wainscotWallMap) {
      wainscotWallMap.repeat.set(28, 1.6);
      wainscotWallMap.needsUpdate = true;
    }
    const wainscotWallNorm = wainscotSet ? wainscotSet.normalMap.clone() : plasterNorm;
    if (wainscotSet && wainscotWallNorm) {
      wainscotWallNorm.repeat.set(28, 1.6);
      wainscotWallNorm.needsUpdate = true;
    }

    this.wallCreamLowerMat = new THREE.MeshStandardMaterial({
      map: wainscotWallMap || this.texLib.getPlasterWallTexture('#e7dec8', true),
      normalMap: wainscotWallNorm,
      roughnessMap: wainscotSet ? wainscotSet.roughnessMap : null,
      normalScale: new THREE.Vector2(0.55, 0.55),
      roughness: 0.26,
      metalness: 0.04,
      envMapIntensity: 0.85
    });

    // Keramik Krem Khusus Kaki Tiang (Repeat proporsional terhadap lebar tiang 0.50m)
    const colTileMap = wainscotSet ? wainscotSet.map.clone() : null;
    if (colTileMap) {
      colTileMap.repeat.set(1.0, 1.6);
      colTileMap.needsUpdate = true;
    }
    const colTileNorm = wainscotSet ? wainscotSet.normalMap.clone() : plasterNorm;
    if (wainscotSet && colTileNorm) {
      colTileNorm.repeat.set(1.0, 1.6);
      colTileNorm.needsUpdate = true;
    }
    this.columnCreamTileMat = new THREE.MeshStandardMaterial({
      map: colTileMap || this.texLib.getPlasterWallTexture('#e7dec8', true),
      normalMap: colTileNorm,
      normalScale: new THREE.Vector2(0.6, 0.6),
      roughness: 0.24,
      metalness: 0.04,
      envMapIntensity: 0.9
    });

    this.plinthDarkMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      roughness: 0.78,
      metalness: 0.05
    });

    this.whiteFrameMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.35,
      metalness: 0.06
    });

    this.ceilingGridMat = new THREE.MeshStandardMaterial({
      map: this.texLib.getCeilingGridTexture(),
      roughness: 0.82,
      metalness: 0.02
    });

    if (clayRoofSet && clayRoofSet.map) {
      clayRoofSet.map.repeat.set(6, 28);
      clayRoofSet.normalMap.repeat.set(6, 28);
    }
    this.roofTileMat = new THREE.MeshStandardMaterial({
      map: clayRoofSet ? clayRoofSet.map : null,
      normalMap: clayRoofSet ? clayRoofSet.normalMap : null,
      color: clayRoofSet ? 0xffffff : 0x9a3412,
      roughness: 0.74,
      metalness: 0.04
    });

    this.canopyMetalMat = new THREE.MeshStandardMaterial({
      map: corrugatedSet ? corrugatedSet.map : null,
      normalMap: corrugatedSet ? corrugatedSet.normalMap : null,
      color: 0xf1f5f9,
      roughness: 0.42,
      metalness: 0.32,
      side: THREE.DoubleSide
    });

    this.gutterMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      roughness: 0.45,
      metalness: 0.45
    });

    this.windowGlassMat = new THREE.MeshStandardMaterial({
      color: 0x1e3a5f,
      roughness: 0.08,
      metalness: 0.25,
      transparent: true,
      opacity: 0.56,
      envMapIntensity: 1.45
    });

    this.doormatMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.95
    });

    this.patternedMatMat = new THREE.MeshStandardMaterial({
      color: 0x7c2d12,
      roughness: 0.92
    });

    this.parkingLineMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.7
    });

    // Papan Nama Kelas Hitam Huruf Putih Tajam ("11 A1", "11 A2", "11 A3", "11 A4" — Persis Foto 2!)
    this.classSigns = {
      CLASS_11A1: this.createClassSignMat('11 A1'),
      CLASS_11A2: this.createClassSignMat('11 A2'),
      CLASS_11A3: this.createClassSignMat('11 A3'),
      CLASS_11A4: this.createClassSignMat('11 A4')
    };

    // Plang Kantin Sekolah & Sub-plang SMAN 1 Pasir Sakti (Sesuai Foto 3!)
    this.canteenTopSignMat = new THREE.MeshStandardMaterial({
      map: this.texLib.createSignboardTexture({
        title: 'KANTIN',
        subtitle: 'SMA NEGERI 1 PASIR SAKTI',
        bg: '#fef3c7',
        fg: '#1e3a8a',
        border: '#15803d',
        accent: '#b91c1c',
        width: 640,
        height: 180
      }),
      roughness: 0.38
    });

    this.stallSignMats = [
      new THREE.MeshStandardMaterial({
        map: this.texLib.createSignboardTexture({
          title: 'KANTIN SEHAT 1',
          subtitle: 'MIE AYAM • BAKSO • ES TEH',
          bg: '#166534',
          fg: '#fef08a',
          border: '#86efac',
          accent: '#ffffff',
          width: 512,
          height: 160
        }),
        roughness: 0.42
      }),
      new THREE.MeshStandardMaterial({
        map: this.texLib.createSignboardTexture({
          title: 'WARUNG BU SITI',
          subtitle: 'NASI UDUK • GORENGAN • SOTO',
          bg: '#9a3412',
          fg: '#ffffff',
          border: '#fde047',
          accent: '#fef08a',
          width: 512,
          height: 160
        }),
        roughness: 0.42
      }),
      new THREE.MeshStandardMaterial({
        map: this.texLib.createSignboardTexture({
          title: 'KOPERASI & JAJANAN',
          subtitle: 'MINUMAN DINGIN • SNACK • ALAT TULIS',
          bg: '#1e3a8a',
          fg: '#ffffff',
          border: '#93c5fd',
          accent: '#fde047',
          width: 512,
          height: 160
        }),
        roughness: 0.42
      })
    ];

    // Plang Biru Besar Landmark SMAN 1 PASIR SAKTI di Halaman Luar
    this.schoolLandmarkMat = new THREE.MeshStandardMaterial({
      map: this.texLib.createSignboardTexture({
        title: 'SMA NEGERI 1',
        subtitle: 'PASIR SAKTI',
        bg: '#1e3a8a',
        fg: '#ffffff',
        border: '#93c5fd',
        accent: '#fde047',
        width: 512,
        height: 256
      }),
      roughness: 0.38
    });
  }

  createClassSignMat(label) {
    return new THREE.MeshStandardMaterial({
      map: this.texLib.createSignboardTexture({
        title: label,
        subtitle: '',
        bg: '#0f172a',
        fg: '#ffffff',
        border: '#475569',
        width: 256,
        height: 112
      }),
      roughness: 0.35
    });
  }

  initSegments() {
    this.sequenceIndex = 0;
    for (let i = 0; i < SEGMENT_COUNT; i++) {
      const zoneType = ZONE_SEQUENCE[i % ZONE_SEQUENCE.length];
      const seg = this.createZoneSegment(zoneType, i);
      seg.group.position.z = -i * SEGMENT_LENGTH;
      this.scene.add(seg.group);
      this.segments.push(seg);
    }
  }

  createZoneSegment(zoneType, index) {
    const group = new THREE.Group();
    const halfW = CORRIDOR_WIDTH / 2; // 4.1m

    const colliders = [];
    let signMesh = null;
    let ceilingClearance = CEILING_HEIGHT - 0.25;
    let leftWallX = -2.68;
    let rightWallX = 2.68;

    if (
      zoneType === 'CLASS_11A1' ||
      zoneType === 'CLASS_11A2' ||
      zoneType === 'CLASS_11A3' ||
      zoneType === 'CLASS_11A4'
    ) {
      signMesh = this.buildClassroomCorridorZone(group, halfW, zoneType, index, colliders);
      ceilingClearance = CEILING_HEIGHT - 0.25;
    } else if (zoneType === 'PALM_GROVE') {
      this.buildPalmGroveZone(group, halfW, index, colliders);
      ceilingClearance = 8.0; // Area terbuka langit di belakang kelas
    } else if (zoneType === 'PARKING') {
      this.buildMotorcycleParkingZone(group, halfW, index, colliders);
      ceilingClearance = 4.15; // Di bawah tie-beam kuda-kuda baja ringan (4.35m)
    } else if (zoneType === 'CANTEEN') {
      this.buildCanteenZone(group, halfW, index, colliders);
      ceilingClearance = 4.15;
    }

    return {
      zoneType,
      index,
      group,
      signMesh,
      colliders,
      ceilingClearance,
      leftWallX,
      rightWallX
    };
  }

  // =========================================================================
  // ZONA 1-4: KELAS 11 A1 s/d 11 A4 (42m per Kelas — Sesuai Foto Asli SMAN 1 Pasir Sakti)
  // =========================================================================
  buildClassroomCorridorZone(group, halfW, zoneType, index, colliders) {
    const L = SEGMENT_LENGTH;

    // 1. Lantai Keramik Putih Mengkilap (Foto 2) + Umpak Tepi Koridor
    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(CORRIDOR_WIDTH, L),
      this.ceramicFloorMat
    );
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    group.add(floor);

    // Step turun keramik krem di sisi kiri menuju taman halaman
    const leftStep = new THREE.Mesh(
      new THREE.BoxGeometry(0.45, 0.16, L),
      this.wallCreamLowerMat
    );
    leftStep.position.set(-halfW - 0.15, -0.05, 0);
    leftStep.receiveShadow = true;
    group.add(leftStep);

    // Halaman rumput taman luar sisi kiri
    const courtyard = new THREE.Mesh(
      new THREE.PlaneGeometry(28, L),
      this.grassMat
    );
    courtyard.rotation.x = -Math.PI / 2;
    courtyard.position.set(-halfW - 14, -0.14, 0);
    courtyard.receiveShadow = true;
    group.add(courtyard);

    // Jalan setapak paving di taman tengah halaman sekolah
    const gardenPath = new THREE.Mesh(
      new THREE.PlaneGeometry(3.2, L),
      this.pavingFloorMat
    );
    gardenPath.rotation.x = -Math.PI / 2;
    gardenPath.position.set(-halfW - 8.5, -0.12, 0);
    gardenPath.receiveShadow = true;
    group.add(gardenPath);

    // 2. Plafon Putih Bersih + Balok Melintang Hijau + Atap Genteng Terakota
    const ceiling = new THREE.Mesh(
      new THREE.PlaneGeometry(CORRIDOR_WIDTH + 1.0, L),
      this.ceilingGridMat
    );
    ceiling.rotation.x = Math.PI / 2;
    ceiling.position.set(-0.15, CEILING_HEIGHT, 0);
    group.add(ceiling);

    const roofSlope = new THREE.Mesh(
      new THREE.BoxGeometry(CORRIDOR_WIDTH + 2.2, 0.14, L),
      this.roofTileMat
    );
    roofSlope.position.set(0.1, CEILING_HEIGHT + 0.72, 0);
    roofSlope.rotation.z = 0.17;
    roofSlope.castShadow = true;
    group.add(roofSlope);

    const gutter = new THREE.Mesh(
      new THREE.BoxGeometry(0.18, 0.16, L),
      this.gutterMat
    );
    gutter.position.set(-halfW - 0.58, CEILING_HEIGHT + 0.04, 0);
    group.add(gutter);

    // Balok Lisplank Atas Hijau Tua Memanjang di Sisi Kiri & Kanan
    const leftHeaderBeam = new THREE.Mesh(
      new THREE.BoxGeometry(0.44, 0.54, L),
      this.pillarGreenMat
    );
    leftHeaderBeam.position.set(-halfW + 0.12, CEILING_HEIGHT - 0.27, 0);
    leftHeaderBeam.castShadow = true;
    group.add(leftHeaderBeam);

    const rightHeaderBeam = new THREE.Mesh(
      new THREE.BoxGeometry(0.34, 0.42, L),
      this.pillarGreenMat
    );
    rightHeaderBeam.position.set(halfW - 0.05, CEILING_HEIGHT - 0.21, 0);
    group.add(rightHeaderBeam);

    // 3. Dinding Kelas Kanan (Bawah Keramik Krem 1.42m, Sabuk Hijau Tua, Atas Hijau Mint)
    const plinth = new THREE.Mesh(
      new THREE.BoxGeometry(0.28, 0.12, L),
      this.plinthDarkMat
    );
    plinth.position.set(halfW, 0.06, 0);

    const lowerCreamWall = new THREE.Mesh(
      new THREE.BoxGeometry(0.24, 1.34, L),
      this.wallCreamLowerMat
    );
    lowerCreamWall.position.set(halfW, 0.12 + 0.67, 0);
    lowerCreamWall.receiveShadow = true;

    const midTrim = new THREE.Mesh(
      new THREE.BoxGeometry(0.3, 0.09, L),
      this.pillarGreenMat
    );
    midTrim.position.set(halfW, 1.5, 0);

    const upperGreenWall = new THREE.Mesh(
      new THREE.BoxGeometry(0.24, CEILING_HEIGHT - 1.54, L),
      this.wallGreenUpperMat
    );
    upperGreenWall.position.set(halfW, 1.54 + (CEILING_HEIGHT - 1.54) * 0.5, 0);
    upperGreenWall.receiveShadow = true;

    group.add(plinth, lowerCreamWall, midTrim, upperGreenWall);

    // 4. Deretan 6 Kolom Tiang Koridor Kiri & Pilaster Kanan (Jarak 7.0m per modul)
    // Sesuai Foto 2: Kaki tiang dilapisi keramik krem setinggi 1.46m + cincin sabuk hijau + badan atas hijau tua!
    const colZPositions = [-17.5, -10.5, -3.5, 3.5, 10.5, 17.5];
    colZPositions.forEach((cz) => {
      // Kaki Tiang Keramik Krem
      const colBase = new THREE.Mesh(
        new THREE.BoxGeometry(0.52, 1.46, 0.52),
        this.columnCreamTileMat
      );
      colBase.position.set(-halfW + 0.12, 0.73, cz);
      colBase.castShadow = true;
      colBase.receiveShadow = true;

      // Sabuk Cincin Hijau Tua Menonjol di Pertemuan Keramik-Cat (Persis Foto 2!)
      const colCollar = new THREE.Mesh(
        new THREE.BoxGeometry(0.58, 0.09, 0.58),
        this.pillarGreenMat
      );
      colCollar.position.set(-halfW + 0.12, 1.5, cz);
      colCollar.castShadow = true;

      // Badan Atas Tiang Hijau Tua
      const colShaft = new THREE.Mesh(
        new THREE.BoxGeometry(0.46, CEILING_HEIGHT - 1.54, 0.46),
        this.pillarGreenMat
      );
      colShaft.position.set(-halfW + 0.12, 1.54 + (CEILING_HEIGHT - 1.54) * 0.5, cz);
      colShaft.castShadow = true;
      colShaft.receiveShadow = true;

      // Balok Plafon Melintang Hijau Tua
      const crossBeam = new THREE.Mesh(
        new THREE.BoxGeometry(CORRIDOR_WIDTH, 0.34, 0.38),
        this.pillarGreenMat
      );
      crossBeam.position.set(0, CEILING_HEIGHT - 0.17, cz);

      // Lampu TL LED Plafon di Tengah Koridor
      const lamp = new THREE.Mesh(
        new THREE.BoxGeometry(0.18, 0.05, 1.5),
        new THREE.MeshBasicMaterial({ color: 0xffffff })
      );
      lamp.position.set(0, CEILING_HEIGHT - 0.03, cz + 3.5);

      // Pilaster Dinding Kanan (Bawah Keramik Krem, Atas Hijau Tua)
      const pilasterLow = new THREE.Mesh(
        new THREE.BoxGeometry(0.36, 1.46, 0.44),
        this.columnCreamTileMat
      );
      pilasterLow.position.set(halfW - 0.04, 0.73, cz);

      const pilasterCollar = new THREE.Mesh(
        new THREE.BoxGeometry(0.4, 0.09, 0.48),
        this.pillarGreenMat
      );
      pilasterCollar.position.set(halfW - 0.04, 1.5, cz);

      const pilasterHigh = new THREE.Mesh(
        new THREE.BoxGeometry(0.34, CEILING_HEIGHT - 1.54, 0.42),
        this.pillarGreenMat
      );
      pilasterHigh.position.set(halfW - 0.04, 1.54 + (CEILING_HEIGHT - 1.54) * 0.5, cz);

      group.add(
        colBase,
        colCollar,
        colShaft,
        crossBeam,
        lamp,
        pilasterLow,
        pilasterCollar,
        pilasterHigh
      );

      // Daftarkan collider tiang kiri & pilaster kanan
      colliders.push({
        type: 'pillar',
        minX: -halfW - 0.16,
        maxX: -halfW + 0.4,
        minY: 0,
        maxY: CEILING_HEIGHT,
        minZ: cz - 0.28,
        maxZ: cz + 0.28
      });
    });

    // 5. Bak Tanaman Semak Halaman di Sisi Luar Kolom Kiri (Sesuai Foto 2!)
    [-14.0, 0.0, 14.0].forEach((pz, pIdx) => {
      const planter = createCourtyardPlanterBox(this.propMats, 1.25, 5.4, index + pIdx);
      planter.position.set(-halfW - 0.85, -0.14, pz);
      group.add(planter);
    });

    // Pepohonan Rindang di Halaman Kiri
    [-12.5, 12.5].forEach((tz, tIdx) => {
      const tree = createTropicalTree(this.propMats, index * 7 + tIdx + 1, true);
      tree.position.set(-halfW - 4.2 - (tIdx % 2) * 1.4, -0.14, tz);
      group.add(tree);
    });

    // 6. Pintu Kelas Putih Dua Daun & Jendela Casement Miring
    const bayOffsets = [-14.0, 0.0, 14.0];
    this.addClassroomDoorAndCasement(group, halfW, bayOffsets[0]);
    this.addClassroomWindowsBay(group, halfW, bayOffsets[1]);
    this.addClassroomDoorAndCasement(group, halfW, bayOffsets[2]);

    // 7. Papan Nama Kelas Hitam ("11 A1", "11 A2", "11 A3", "11 A4")
    // Dipasang menonjol di dekat pintu kelas (di z = 10.5 dan z = -3.5) agar langsung terbaca jelas!
    const signMat = this.classSigns[zoneType] || this.classSigns.CLASS_11A1;
    let mainSignBoard = null;

    [10.5, -3.5].forEach((sz, sIdx) => {
      const signBoard = new THREE.Mesh(
        new THREE.BoxGeometry(0.96, 0.42, 0.06),
        [
          this.plinthDarkMat,
          this.plinthDarkMat,
          this.plinthDarkMat,
          this.plinthDarkMat,
          signMat,
          signMat
        ]
      );
      signBoard.position.set(halfW - 0.68, 2.76, sz);

      const bracket = new THREE.Mesh(
        new THREE.BoxGeometry(0.72, 0.04, 0.04),
        this.propMats.ironFrame
      );
      bracket.position.set(halfW - 0.52, 2.98, sz);

      group.add(signBoard, bracket);
      if (sIdx === 0) mainSignBoard = signBoard;
    });

    // 8. Variasi Detail Khas per Kelas (11 A1, 11 A2, 11 A3, 11 A4)
    // Diatur di tepi dinding kanan (x = halfW - 0.34) di luar jalur lari pemain
    if (zoneType === 'CLASS_11A1') {
      // Kelas 11 A1: Rak sepatu kayu ikonik sesuai Foto 2 + Plang biru SMAN 1 Pasir Sakti di halaman kiri
      const shoeRack1 = createWoodenShoeRack(this.propMats, 1);
      shoeRack1.position.set(halfW - 0.32, 0, 5.2);
      const shoeRack2 = createWoodenShoeRack(this.propMats, 2);
      shoeRack2.position.set(halfW - 0.32, 0, -8.8);
      group.add(shoeRack1, shoeRack2);

      // Plang Landmark SMAN 1 Pasir Sakti di taman kiri
      const landmark = new THREE.Mesh(
        new THREE.BoxGeometry(0.12, 1.35, 2.7),
        [
          this.schoolLandmarkMat,
          this.schoolLandmarkMat,
          this.whiteFrameMat,
          this.whiteFrameMat,
          this.whiteFrameMat,
          this.whiteFrameMat
        ]
      );
      landmark.position.set(-halfW - 3.6, 1.65, 7.5);
      landmark.rotation.y = 0.38;
      group.add(landmark);
    } else if (zoneType === 'CLASS_11A2') {
      // Kelas 11 A2: Bangku tunggu kayu koridor, rak sepatu, dan pot tanaman di sisi kolom
      const bench = createCorridorBench(this.propMats);
      bench.position.set(halfW - 0.36, 0, -2.0);
      const shoeRack = createWoodenShoeRack(this.propMats, 3);
      shoeRack.position.set(halfW - 0.32, 0, 6.2);
      const pot = createSchoolPottedPlant(this.propMats);
      pot.position.set(-halfW + 0.45, 0, -6.8);
      group.add(bench, shoeRack, pot);
    } else if (zoneType === 'CLASS_11A3') {
      // Kelas 11 A3: Tempat sampah sekolah terpilah (organik/anorganik), rak sepatu, bangku
      const trashPair = createSchoolTrashBinPair(this.propMats);
      trashPair.position.set(halfW - 0.35, 0, 4.8);
      const shoeRack = createWoodenShoeRack(this.propMats, 4);
      shoeRack.position.set(halfW - 0.32, 0, -8.5);
      const pot1 = createSchoolPottedPlant(this.propMats);
      pot1.position.set(-halfW + 0.45, 0, 6.8);
      group.add(trashPair, shoeRack, pot1);
    } else {
      // Kelas 11 A4: Rak sepatu, bangku koridor, tempat sampah, dan gerbang transisi menuju kebun sawit belakang
      const shoeRack = createWoodenShoeRack(this.propMats, 5);
      shoeRack.position.set(halfW - 0.32, 0, 5.5);
      const bench = createCorridorBench(this.propMats);
      bench.position.set(halfW - 0.36, 0, -7.8);
      const trashPair = createSchoolTrashBinPair(this.propMats);
      trashPair.position.set(-halfW + 0.45, 0, -14.2);
      group.add(shoeRack, bench, trashPair);
    }

    // Poster / Mading Dinding Kelas (Berbeda untuk tiap kelas 11 A1 - 11 A4)
    if (this.texLib.createPosterTexture) {
      [-6.2, 7.8].forEach((mz, mIdx) => {
        const posterTex = this.texLib.createPosterTexture(index * 3 + mIdx + 1);
        const posterMesh = new THREE.Mesh(
          new THREE.PlaneGeometry(0.95, 1.25),
          new THREE.MeshStandardMaterial({ map: posterTex, roughness: 0.55 })
        );
        posterMesh.rotation.y = -Math.PI / 2;
        posterMesh.position.set(halfW - 0.13, 2.15, mz);
        group.add(posterMesh);
      });
    }

    return mainSignBoard;
  }

  addClassroomDoorAndCasement(group, halfW, centerZ) {
    const wallX = halfW - 0.12;

    // Kusen Pintu Putih + Pintu Kayu Panel Putih Dua Daun (Sesuai Foto Koridor 11 A1!)
    const doorFrame = new THREE.Mesh(
      new THREE.BoxGeometry(0.14, 2.75, 1.38),
      this.whiteFrameMat
    );
    doorFrame.position.set(wallX, 1.375, centerZ - 1.25);

    // Dua daun pintu putih dengan garis panel tengah
    const doorLeafL = new THREE.Mesh(
      new THREE.BoxGeometry(0.16, 2.24, 0.6),
      this.whiteFrameMat
    );
    doorLeafL.position.set(wallX - 0.02, 1.12, centerZ - 1.56);

    const doorLeafR = new THREE.Mesh(
      new THREE.BoxGeometry(0.16, 2.24, 0.6),
      this.whiteFrameMat
    );
    doorLeafR.position.set(wallX - 0.02, 1.12, centerZ - 0.94);

    // Gagang Pintu Logam Perak
    const handle = new THREE.Mesh(
      new THREE.BoxGeometry(0.06, 0.16, 0.04),
      this.propMats.chrome
    );
    handle.position.set(wallX - 0.11, 1.05, centerZ - 1.25);

    // Kaca Ventilasi Atas Pintu (Transom Window)
    const ventGlass = new THREE.Mesh(
      new THREE.BoxGeometry(0.16, 0.36, 1.22),
      this.windowGlassMat
    );
    ventGlass.position.set(wallX - 0.01, 2.5, centerZ - 1.25);

    // Dua Keset Depan Pintu Kelas (Keset Karet Hitam & Keset Kain Bercorak sesuai Foto 2!)
    const doormat1 = new THREE.Mesh(
      new THREE.BoxGeometry(0.58, 0.018, 0.95),
      this.doormatMat
    );
    doormat1.position.set(halfW - 0.48, 0.01, centerZ - 1.25);
    doormat1.receiveShadow = true;

    const doormat2 = new THREE.Mesh(
      new THREE.BoxGeometry(0.46, 0.02, 0.72),
      this.patternedMatMat
    );
    doormat2.position.set(halfW - 0.46, 0.011, centerZ - 2.45);
    doormat2.rotation.y = 0.08;
    doormat2.receiveShadow = true;

    group.add(doorFrame, doorLeafL, doorLeafR, handle, ventGlass, doormat1, doormat2);

    // Jendela Kaca Casement Bukaan Miring Berbingkai Putih (Sesuai Foto 2!)
    const winFrame = new THREE.Mesh(
      new THREE.BoxGeometry(0.14, 1.85, 2.15),
      this.whiteFrameMat
    );
    winFrame.position.set(wallX, 1.88, centerZ + 0.95);

    [-0.52, 0.52].forEach((oz, idx) => {
      // Daun jendela kaca bawah dibuka miring keluar
      const openCasement = new THREE.Mesh(
        new THREE.BoxGeometry(0.05, 1.18, 0.88),
        this.windowGlassMat
      );
      openCasement.position.set(wallX - 0.16, 1.62, centerZ + 0.95 + oz);
      openCasement.rotation.z = -0.28; // Miring keluar bagian bawah (awning/casement)
      openCasement.rotation.y = idx === 0 ? -0.18 : 0.12;

      const casementFrame = new THREE.Mesh(
        new THREE.BoxGeometry(0.06, 1.22, 0.92),
        this.whiteFrameMat
      );
      casementFrame.position.copy(openCasement.position);
      casementFrame.rotation.copy(openCasement.rotation);

      // Ventilasi kaca atas jendela
      const topTransom = new THREE.Mesh(
        new THREE.BoxGeometry(0.06, 0.38, 0.88),
        this.windowGlassMat
      );
      topTransom.position.set(wallX - 0.02, 2.48, centerZ + 0.95 + oz);

      group.add(openCasement, topTransom);
    });

    group.add(winFrame);
  }

  addClassroomWindowsBay(group, halfW, centerZ) {
    const wallX = halfW - 0.12;
    const winFrame = new THREE.Mesh(
      new THREE.BoxGeometry(0.14, 1.85, 4.2),
      this.whiteFrameMat
    );
    winFrame.position.set(wallX, 1.88, centerZ);

    [-1.35, 0, 1.35].forEach((wz, idx) => {
      const pane = new THREE.Mesh(
        new THREE.BoxGeometry(0.05, 1.22, 1.18),
        this.windowGlassMat
      );
      const isAngled = idx !== 1;
      pane.position.set(wallX - (isAngled ? 0.15 : 0.02), 1.64, centerZ + wz);
      if (isAngled) {
        pane.rotation.z = -0.26;
        pane.rotation.y = idx === 0 ? -0.22 : 0.22;
      }

      const topVent = new THREE.Mesh(
        new THREE.BoxGeometry(0.06, 0.38, 1.18),
        this.windowGlassMat
      );
      topVent.position.set(wallX - 0.02, 2.48, centerZ + wz);
      group.add(pane, topVent);
    });

    group.add(winFrame);
  }

  // =========================================================================
  // ZONA 5: BAGIAN BELAKANG KELAS DENGAN POHON SAWIT (42m — Outdoor Backyard)
  // =========================================================================
  buildPalmGroveZone(group, halfW, index, colliders) {
    const L = SEGMENT_LENGTH;

    // 1. Permukaan Jalan Beton Rabat Belakang Kelas + Bahu Tanah & Rumput Kebun Sawit
    const roadFloor = new THREE.Mesh(
      new THREE.PlaneGeometry(CORRIDOR_WIDTH, L),
      this.concreteFloorMat
    );
    roadFloor.rotation.x = -Math.PI / 2;
    roadFloor.receiveShadow = true;
    group.add(roadFloor);

    // Kanstin / pembatas tepi jalan beton belakang kelas
    [-1, 1].forEach((side) => {
      const curb = new THREE.Mesh(
        new THREE.BoxGeometry(0.32, 0.14, L),
        this.plinthDarkMat
      );
      curb.position.set(side * (halfW - 0.12), 0.05, 0);
      curb.receiveShadow = true;
      group.add(curb);

      const soilGround = new THREE.Mesh(
        new THREE.PlaneGeometry(22, L),
        this.soilFloorMat
      );
      soilGround.rotation.x = -Math.PI / 2;
      soilGround.position.set(side * (halfW + 11), -0.03, 0);
      soilGround.receiveShadow = true;

      const grassStrip = new THREE.Mesh(
        new THREE.PlaneGeometry(4.5, L),
        this.grassMat
      );
      grassStrip.rotation.x = -Math.PI / 2;
      grassStrip.position.set(side * (halfW + 2.2), -0.015, 0);
      grassStrip.receiveShadow = true;

      group.add(soilGround, grassStrip);
    });

    // 2. Deretan 8 Pohon Kelapa Sawit 3D Realistis (Elaeis guineensis)
    const palmPositions = [
      { x: -halfW - 2.5, z: -15.5, seed: 1 },
      { x: halfW + 2.6, z: -14.0, seed: 2 },
      { x: -halfW - 2.9, z: -5.0, seed: 3 },
      { x: halfW + 2.5, z: -4.0, seed: 4 },
      { x: -halfW - 2.5, z: 5.5, seed: 5 },
      { x: halfW + 2.9, z: 6.5, seed: 6 },
      { x: -halfW - 2.7, z: 15.5, seed: 7 },
      { x: halfW + 2.6, z: 16.5, seed: 8 }
    ];

    palmPositions.forEach((pos) => {
      const palm = createOilPalmTree(this.propMats, pos.seed + index, true);
      palm.position.set(pos.x, 0, pos.z);
      group.add(palm);

      colliders.push({
        type: 'palm_tree',
        minX: pos.x - 0.55,
        maxX: pos.x + 0.55,
        minY: 0,
        maxY: 6.5,
        minZ: pos.z - 0.55,
        maxZ: pos.z + 0.55
      });
    });

    // 3. Pagar Pembatas Kawat Kebun Belakang Sekolah (Di luar bahu jalan)
    [-1, 1].forEach((side) => {
      for (let pz = -16; pz <= 16; pz += 8) {
        const post = new THREE.Mesh(
          new THREE.CylinderGeometry(0.045, 0.045, 1.45, 6),
          this.propMats.exhaustDark
        );
        post.position.set(side * (halfW + 0.55), 0.725, pz);
        group.add(post);
      }
      [0.65, 1.25].forEach((wy) => {
        const fenceWire = new THREE.Mesh(
          new THREE.BoxGeometry(0.02, 0.025, L),
          this.propMats.exhaustDark
        );
        fenceWire.position.set(side * (halfW + 0.55), wy, 0);
        group.add(fenceWire);
      });
    });
  }

  // =========================================================================
  // ZONA 6: AREA PARKIRAN MOTOR BERATAP BAJA RINGAN (42m — Sesuai Foto Referensi 2!)
  // Struktur Terbuka Tanpa Dinding Kelas: Tiang Baja, Kuda-Kuda Baja Ringan 3D,
  // Penguat Diagonal, Atap Spandek Metal, Lantai Beton, Deretan Motor & Cahaya Samping
  // =========================================================================
  buildMotorcycleParkingZone(group, halfW, index, colliders) {
    const L = SEGMENT_LENGTH;
    const lotWidth = CORRIDOR_WIDTH + 6.4; // 14.6m lebar lantai beton parkiran

    // 1. Lantai Beton Halus Parkiran Motor (Sesuai Foto 2!)
    const concreteFloor = new THREE.Mesh(
      new THREE.PlaneGeometry(lotWidth, L),
      this.concreteFloorMat
    );
    concreteFloor.rotation.x = -Math.PI / 2;
    concreteFloor.receiveShadow = true;
    group.add(concreteFloor);

    // Halaman rumput & pepohonan di luar sisi terbuka parkiran
    [-1, 1].forEach((side) => {
      const outerGrass = new THREE.Mesh(
        new THREE.PlaneGeometry(18, L),
        this.grassMat
      );
      outerGrass.rotation.x = -Math.PI / 2;
      outerGrass.position.set(side * (lotWidth * 0.5 + 9), -0.03, 0);
      outerGrass.receiveShadow = true;
      group.add(outerGrass);
    });

    // Pepohonan di luar sisi kiri terbuka
    [-12.0, 12.0].forEach((tz, tIdx) => {
      const tree = createTropicalTree(this.propMats, index * 5 + tIdx + 2, true);
      tree.position.set(-lotWidth * 0.5 - 3.2, -0.03, tz);
      group.add(tree);
    });

    // 2. Struktur Rangka Baja Ringan Terbuka 3D Lengkap (4 Modul Kuda-Kuda Optimal)
    const steelStructure = createOpenSteelRoofTrussModule(
      this.propMats,
      lotWidth - 0.6,
      L,
      4.35,
      5.45,
      4
    );
    group.add(steelStructure);

    // 3. Marka Garis Parkir Putih & Deretan Sepeda Motor 3D Proporsional
    [-1, 1].forEach((side) => {
      const longLine = new THREE.Mesh(
        new THREE.PlaneGeometry(0.08, L - 0.8),
        this.parkingLineMat
      );
      longLine.rotation.x = -Math.PI / 2;
      longLine.position.set(side * (halfW - 0.32), 0.008, 0);
      group.add(longLine);

      for (let pz = -16.5; pz <= 16.5; pz += 5.5) {
        const bayTick = new THREE.Mesh(
          new THREE.PlaneGeometry(2.1, 0.065),
          this.parkingLineMat
        );
        bayTick.rotation.x = -Math.PI / 2;
        bayTick.rotation.z = side * 0.45;
        bayTick.position.set(side * (halfW + 0.95), 0.008, pz);
        group.add(bayTick);
      }
    });

    // Deretan Motor Terparkir Rapi di Sisi Kanan & Kiri (Di Luar 3 Jalur Lari, Optimal Bebas Lag)
    const bikeSlotsZ = [-16.5, -10.0, -3.5, 3.5, 10.0, 16.5];
    bikeSlotsZ.forEach((mz, mIdx) => {
      const colorRight = MOTOR_COLORS[(index * 3 + mIdx) % MOTOR_COLORS.length];
      const bikeRight = createRealisticMotorcycle(
        this.propMats,
        colorRight,
        mIdx % 2 === 0,
        mIdx
      );
      bikeRight.position.set(halfW + 1.2, 0, mz);
      bikeRight.rotation.y = -0.58;
      group.add(bikeRight);
      if (mIdx % 2 === 1) this.highDetailProps.push(bikeRight);

      const colorLeft = MOTOR_COLORS[(index * 5 + mIdx + 2) % MOTOR_COLORS.length];
      const bikeLeft = createRealisticMotorcycle(
        this.propMats,
        colorLeft,
        mIdx % 2 === 1,
        mIdx + 7
      );
      bikeLeft.position.set(-halfW - 1.2, 0, mz + 0.2);
      bikeLeft.rotation.y = Math.PI + 0.55;
      group.add(bikeLeft);
      if (mIdx % 2 === 1) this.highDetailProps.push(bikeLeft);
    });

    // Collider barisan motor kanan & kiri agar karakter tidak pernah menembus motor
    colliders.push(
      {
        type: 'motorcycle_row_right',
        minX: halfW + 0.35,
        maxX: halfW + 2.4,
        minY: 0,
        maxY: 1.35,
        minZ: -L * 0.5,
        maxZ: L * 0.5
      },
      {
        type: 'motorcycle_row_left',
        minX: -halfW - 2.4,
        maxX: -halfW - 0.35,
        minY: 0,
        maxY: 1.35,
        minZ: -L * 0.5,
        maxZ: L * 0.5
      }
    );
  }

  // =========================================================================
  // ZONA 7: AREA KANTIN SEKOLAH (42m — Sesuai Foto Referensi 3!)
  // Paviliun Kantin Terbuka Beratap Baja, Tiang Hijau, Meja & Bangku Kayu,
  // Etalase Kaca Makanan, Meja Pelayanan, Rak Jajanan Renteng & Tempat Sampah
  // =========================================================================
  buildCanteenZone(group, halfW, index, colliders) {
    const L = SEGMENT_LENGTH;
    const canteenWidth = CORRIDOR_WIDTH + 9.2;
    const roofH = 4.35;

    // 1. Lantai Keramik & Beton Halus Paviliun Kantin
    const mainFloor = new THREE.Mesh(
      new THREE.PlaneGeometry(canteenWidth, L),
      this.ceramicFloorMat
    );
    mainFloor.rotation.x = -Math.PI / 2;
    mainFloor.position.x = 2.2;
    mainFloor.receiveShadow = true;
    group.add(mainFloor);

    // Taman luar di sisi kiri kantin terbuka (Sesuai Foto 3!)
    const leftGarden = new THREE.Mesh(
      new THREE.PlaneGeometry(16, L),
      this.grassMat
    );
    leftGarden.rotation.x = -Math.PI / 2;
    leftGarden.position.set(-halfW - 8.5, -0.03, 0);
    leftGarden.receiveShadow = true;
    group.add(leftGarden);

    [-12.0, 6.0].forEach((tz, idx) => {
      const tree = createTropicalTree(this.propMats, index * 3 + idx + 5, false);
      tree.position.set(-halfW - 3.8, -0.03, tz);
      group.add(tree);
    });

    // 2. Struktur Atap Baja & Spandek Paviliun Kantin + Tiang Hijau (Sesuai Foto 3!)
    const canopyRoof = new THREE.Mesh(
      new THREE.BoxGeometry(canteenWidth + 1.2, 0.08, L),
      this.canopyMetalMat
    );
    canopyRoof.position.set(2.2, roofH + 0.32, 0);
    canopyRoof.rotation.z = -0.04;
    canopyRoof.castShadow = true;
    group.add(canopyRoof);

    const bayZ = [-17.5, -10.5, -3.5, 3.5, 10.5, 17.5];
    bayZ.forEach((cz) => {
      // Kuda-kuda baja melintang atap kantin
      const roofBeam = new THREE.Mesh(
        new THREE.BoxGeometry(canteenWidth + 0.6, 0.18, 0.12),
        this.propMats.galvSteel
      );
      roofBeam.position.set(2.2, roofH, cz);
      group.add(roofBeam);

      // Tiang Hijau Kantin berumpak keramik krem (di sisi kiri terbuka & di depan warung kanan)
      [-halfW + 0.12, halfW + 0.35, halfW + 6.4].forEach((cx) => {
        const pedestal = new THREE.Mesh(
          new THREE.BoxGeometry(0.44, 0.85, 0.44),
          this.columnCreamTileMat
        );
        pedestal.position.set(cx, 0.425, cz);
        pedestal.castShadow = true;

        const greenPost = new THREE.Mesh(
          new THREE.BoxGeometry(0.28, roofH - 0.85, 0.28),
          this.pillarGreenMat
        );
        greenPost.position.set(cx, 0.85 + (roofH - 0.85) * 0.5, cz);
        greenPost.castShadow = true;

        group.add(pedestal, greenPost);
      });
    });

    // 3. Gerbang Plang Utama "KANTIN — SMA NEGERI 1 PASIR SAKTI" (Foto 3!)
    const archBeam = new THREE.Mesh(
      new THREE.BoxGeometry(CORRIDOR_WIDTH + 1.6, 0.46, 0.3),
      this.pillarGreenMat
    );
    archBeam.position.set(0, roofH - 0.15, 17.5);

    const frameMat = this.propMats.ironFrame;
    const canteenSign = new THREE.Mesh(
      new THREE.BoxGeometry(3.8, 0.78, 0.09),
      [frameMat, frameMat, frameMat, frameMat, this.canteenTopSignMat, this.canteenTopSignMat]
    );
    canteenSign.position.set(0, roofH - 0.28, 17.7);
    group.add(archBeam, canteenSign);

    // 4. Dinding Belakang Kios Warung Kantin + Papan Nama Warung + Rak Rentengan Snack
    const stallBackWall = new THREE.Mesh(
      new THREE.BoxGeometry(0.26, roofH, L),
      this.wallCreamLowerMat
    );
    stallBackWall.position.set(halfW + 6.6, roofH * 0.5, 0);
    group.add(stallBackWall);

    // 2 Kios Pelayanan Kantin Berjajar + 4 Set Meja & Bangku Makan Kayu Panjang
    const stallZPositions = [-10.0, 10.0];
    stallZPositions.forEach((sz, sIdx) => {
      const counter = createCanteenStallCounter(this.propMats, this.texLib, sIdx);
      counter.position.set(halfW + 4.9, 0, sz);
      group.add(counter);

      const stallSign = new THREE.Mesh(
        new THREE.BoxGeometry(0.08, 0.62, 2.5),
        [
          this.stallSignMats[sIdx % this.stallSignMats.length],
          this.stallSignMats[sIdx % this.stallSignMats.length],
          frameMat,
          frameMat,
          frameMat,
          frameMat
        ]
      );
      stallSign.position.set(halfW + 4.65, 2.85, sz);
      group.add(stallSign);

      if (this.texLib.getSnackShelfTexture) {
        const snackTex = this.texLib.getSnackShelfTexture();
        const snackRack = new THREE.Mesh(
          new THREE.PlaneGeometry(1.9, 1.75),
          new THREE.MeshStandardMaterial({ map: snackTex, roughness: 0.6 })
        );
        snackRack.position.set(halfW + 6.42, 2.05, sz);
        snackRack.rotation.y = -Math.PI / 2;
        group.add(snackRack);
      }
    });

    const tableZPositions = [-13.5, -4.5, 4.5, 13.5];
    tableZPositions.forEach((tz, tIdx) => {
      const tableSet = createCanteenTableSet(this.propMats, tIdx);
      tableSet.position.set(halfW + 1.9 + (tIdx % 2) * 0.45, 0, tz);
      group.add(tableSet);
    });

    // Tempat Sampah Hijau Kantin & Pot Tanaman di Sisi Kiri
    [-12.5, 2.5, 14.5].forEach((bz, bIdx) => {
      if (bIdx % 2 === 0) {
        const trashPair = createSchoolTrashBinPair(this.propMats);
        trashPair.position.set(-halfW + 0.42, 0, bz);
        group.add(trashPair);
      } else {
        const pot = createSchoolPottedPlant(this.propMats);
        pot.position.set(-halfW + 0.42, 0, bz);
        group.add(pot);
      }
    });

    // Collider area meja makan & counter kantin di sisi kanan
    colliders.push({
      type: 'canteen_seating_zone',
      minX: halfW + 0.4,
      maxX: halfW + 6.6,
      minY: 0,
      maxY: 3.0,
      minZ: -L * 0.5,
      maxZ: L * 0.5
    });
  }

  // =========================================================================
  // SISTEM DETEKSI ZONA & COLLISION LINGKUNGAN / BANGUNAN
  // =========================================================================
  getActiveSegmentAtZ(worldZ = 0) {
    let closest = this.segments[0] || null;
    let bestDist = Infinity;
    for (let i = 0; i < this.segments.length; i++) {
      const seg = this.segments[i];
      const dz = Math.abs(worldZ - seg.group.position.z);
      if (dz < bestDist) {
        bestDist = dz;
        closest = seg;
      }
    }
    return closest;
  }

  getZoneAt(worldZ = 0) {
    const seg = this.getActiveSegmentAtZ(worldZ);
    return seg ? seg.zoneType : 'CLASS_11A1';
  }

  getCurrentZoneName(worldZ = 0) {
    const seg = this.getActiveSegmentAtZ(worldZ);
    if (!seg) return ZONE_DISPLAY_NAMES.CLASS_11A1;
    return ZONE_DISPLAY_NAMES[seg.zoneType] || seg.zoneType;
  }

  getSafetyBoundsAt(worldZ = 0) {
    const seg = this.getActiveSegmentAtZ(worldZ);
    if (!seg) {
      return {
        floorY: 0,
        ceilingY: CEILING_HEIGHT - 0.25,
        ceilingClearance: CEILING_HEIGHT - 0.25,
        minX: -2.65,
        maxX: 2.65
      };
    }
    const ceil = seg.ceilingClearance || CEILING_HEIGHT - 0.25;
    return {
      floorY: 0,
      ceilingY: ceil,
      ceilingClearance: ceil,
      minX: seg.leftWallX || -2.65,
      maxX: seg.rightWallX || 2.65
    };
  }

  // Sesuaikan visibilitas detail berdasarkan preset grafis (Low/Medium/High/Ultra)
  applyQualityPreset(quality) {
    const showSecondary = quality !== 'low';
    const showDistant = quality === 'medium' || quality === 'high' || quality === 'ultra';
    this.highDetailProps.forEach((obj) => {
      obj.visible = showSecondary;
    });
    this.distantProps.forEach((obj) => {
      obj.visible = showDistant;
    });
  }

  reset() {
    this.sequenceIndex = 0;
    if (this.segments.length === SEGMENT_COUNT) {
      for (let i = 0; i < SEGMENT_COUNT; i++) {
        this.segments[i].group.position.z = -i * SEGMENT_LENGTH;
      }
      return;
    }

    for (let i = 0; i < this.segments.length; i++) {
      this.scene.remove(this.segments[i].group);
    }
    this.segments = [];
    this.bystanders = [];
    this.distantProps = [];
    this.highDetailProps = [];

    for (let i = 0; i < SEGMENT_COUNT; i++) {
      const zoneType = ZONE_SEQUENCE[i % ZONE_SEQUENCE.length];
      const seg = this.createZoneSegment(zoneType, i);
      seg.group.position.z = -i * SEGMENT_LENGTH;
      this.scene.add(seg.group);
      this.segments.push(seg);
    }
  }

  update(dt, speed) {
    const moveZ = speed * dt;

    for (let i = 0; i < this.segments.length; i++) {
      const seg = this.segments[i];
      seg.group.position.z += moveZ;

      // Daur ulang instan tanpa menghancurkan/membuat ulang geometri 3D (0 lag spike!)
      if (seg.group.position.z > SEGMENT_LENGTH) {
        let minZ = Infinity;
        for (let j = 0; j < this.segments.length; j++) {
          if (this.segments[j].group.position.z < minZ) {
            minZ = this.segments[j].group.position.z;
          }
        }
        seg.group.position.z = minZ - SEGMENT_LENGTH;
        this.sequenceIndex++;
      }
    }
  }
}
