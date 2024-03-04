import React, { useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { CatmullRomCurve3, Vector3 } from "three";
import { useControls } from "leva";
import { Html, ContactShadows, RoundedBox, Text } from "@react-three/drei";
import DataCell from "./components/DataCell";
import ChartjsPlane from "./components/chart/ChartjsPlane";

import {
  BakeShadows,
  SoftShadows,
  OrbitControls,
  Svg,
} from "@react-three/drei";
import { Perf } from "r3f-perf";

import Barchart from "./components/chart/Barchart";
import BarchartMerged from "./components/chart/BarchartMerged";
import BarchartTextureAtlas from "./components/chart/BarchartTextureAtlas";
import BarchartV2 from "./components/chart/BarchartV2";
import MyPieChart from "./components/chart/MyPieChart";
import PieDoughnutChart from "./components/chart/PieDoughnutChart";

import MyLineChart from "./components/chart/MyLineChart";

import WallsAndFloor from "./components/WallsAndFloor";

import PanelExtruded from "./components/PanelExtruded";
import FloorPanelGrid from "./FloorPanelGrid";
import BehindWallPanelGrid from "./BehindWallPanelGrid";

import Lights from "./env/Lights";
import Ground from "./env/Ground";

import { useLoader } from "@react-three/fiber";

import { useTheme } from "../ThemeContext"; // Adjust the path as necessary

const CameraPathAnimation = () => {
  const { camera } = useThree();
  const curve = useMemo(
    () =>
      new CatmullRomCurve3([
        new Vector3(-25, 10, 40),
        new Vector3(0, 15, 40),
        new Vector3(25, 10, 40),
        new Vector3(1, 2, 30),
        new Vector3(-1, 2, 10),
        new Vector3(-25, 10, 40), // Looping back to start for a continuous path
      ]),
    []
  );

  // Leva checkbox to toggle animation
  const { animate } = useControls({ animate: false });

  useFrame(({ clock }) => {
    if (animate) {
      const t = (clock.getElapsedTime() * 0.04) % 1; // Adjust speed and ensure looping
      const position = curve.getPoint(t);
      camera.position.copy(position);
      camera.lookAt(0, 0, 0); // Adjust as needed to focus the camera
    }
  });

  return null;
};

export default function Scene6({ textureCube }) {
  const { currentSettings } = useTheme();

  let width = 35;
  let height = 15;
  let depth = 23;
  let thickness = 0.25;

  let baseposX = 0;
  let baseposY = 0;
  let baseposZ = 0;

  let marginX = 5;
  let marginZ = 5;

  return (
    <>
      {/*
  apartment: 'lebombo_1k.hdr',
  city: 'potsdamer_platz_1k.hdr',
  dawn: 'kiara_1_dawn_1k.hdr',
  forest: 'forest_slope_1k.hdr',
  lobby: 'st_fagans_interior_1k.hdr',
  night: 'dikhololo_night_1k.hdr',
  park: 'rooitou_park_1k.hdr',
  studio: 'studio_small_03_1k.hdr',
  sunset: 'venice_sunset_1k.hdr',
  warehouse: 'empty_warehouse_01_1k.hdr',
  */}

      <BakeShadows />
      <SoftShadows size={25} samples={50} focus={0.1} />

      <Perf position="top-left" />
      <OrbitControls dampingFactor={0.9} />

      <color attach="background" args={[currentSettings.background]} />
      <fog
        attach="fog"
        color={currentSettings.fogcolor}
        near={0.015}
        far={250}
      />

      <Lights />
      <Ground />

      {/*New scene*/}

      <WallsAndFloor
        baseposX={baseposX}
        baseposY={baseposY}
        baseposZ={baseposZ}
        width={width}
        height={height}
        depth={depth}
        thickness={0.25}
      />

      {/*    <Barchart posx={0} posy={0} posz={0} textureCube={textureCube} 
    length={6}
    roty={0}
    title={"Basic"}
    maxheight={4}
/>*/}

      <group position={[-13, 0, 3]}>
        <BarchartMerged
          posx={0}
          posy={0}
          posz={0}
          length={6}
          roty={0}
          title={"Merged"}
          maxheight={4}
        />
      </group>

      <group position={[-3, 0, 3]}>
        <BarchartMerged
          posx={0}
          posy={0}
          posz={0}
          length={6}
          roty={0}
          title={"Merged"}
          maxheight={4}
        />
      </group>

      <group position={[7, 0, 3]}>
        <BarchartMerged
          posx={0}
          posy={0}
          posz={0}
          length={6}
          roty={0}
          title={"Merged"}
          maxheight={4}
        />
      </group>

      <group position={[-13, 0, 7]}>
        <BarchartMerged
          posx={0}
          posy={0}
          posz={0}
          length={6}
          roty={0}
          title={"Merged"}
          maxheight={4}
        />
      </group>

      <group position={[-3, 0, 7]}>
        <BarchartMerged
          posx={0}
          posy={0}
          posz={0}
          length={6}
          roty={0}
          title={"Merged"}
          maxheight={4}
        />
      </group>

      <group position={[7, 0, 7]}>
        <BarchartMerged
          posx={0}
          posy={0}
          posz={0}
          length={6}
          roty={0}
          title={"Merged"}
          maxheight={4}
        />
      </group>

      <group position={[-13, 0, 12]}>
        <BarchartMerged
          posx={0}
          posy={0}
          posz={0}
          length={6}
          roty={0}
          title={"Merged"}
          maxheight={4}
        />
      </group>

      <group position={[-3, 0, 12]}>
        <BarchartMerged
          posx={0}
          posy={0}
          posz={0}
          length={6}
          roty={0}
          title={"Merged"}
          maxheight={4}
        />
      </group>

      <group position={[7, 0, 12]}>
        <BarchartMerged
          posx={0}
          posy={0}
          posz={0}
          length={6}
          roty={0}
          title={"Merged"}
          maxheight={4}
        />
      </group>

      <group position={[-13, 0, 17]}>
        <BarchartMerged
          posx={0}
          posy={0}
          posz={0}
          length={6}
          roty={0}
          title={"Merged"}
          maxheight={4}
        />
      </group>

      <group position={[-3, 0, 17]}>
        <BarchartMerged
          posx={0}
          posy={0}
          posz={0}
          length={6}
          roty={0}
          title={"Merged"}
          maxheight={4}
        />
      </group>

      <group position={[7, 0, 17]}>
        <BarchartMerged
          posx={0}
          posy={0}
          posz={0}
          length={6}
          roty={0}
          title={"Merged"}
          maxheight={4}
        />
      </group>

      <group position={[-13, 8, -0.2]}>
        <BarchartMerged
          posx={0}
          posy={0}
          posz={0}
          length={6}
          roty={0}
          title={"Merged"}
          maxheight={4}
        />
      </group>

      <group position={[-13, 2, -0.2]}>
        <BarchartMerged
          posx={0}
          posy={0}
          posz={0}
          length={6}
          roty={0}
          title={"Merged"}
          maxheight={4}
        />
      </group>

      <group position={[-3, 8, -0.2]}>
        <BarchartMerged
          posx={0}
          posy={0}
          posz={0}
          length={6}
          roty={0}
          title={"Merged"}
          maxheight={4}
        />
      </group>

      <group position={[-3, 2, -0.2]}>
        <BarchartMerged
          posx={0}
          posy={0}
          posz={0}
          length={6}
          roty={0}
          title={"Merged"}
          maxheight={4}
        />
      </group>

      <group position={[7, 8, -0.2]}>
        <BarchartMerged
          posx={0}
          posy={0}
          posz={0}
          length={6}
          roty={0}
          title={"Merged"}
          maxheight={4}
        />
      </group>

      <group position={[7, 2, -0.2]}>
        <BarchartMerged
          posx={0}
          posy={0}
          posz={0}
          length={6}
          roty={0}
          title={"Merged"}
          maxheight={4}
        />
      </group>

      <CameraPathAnimation />

      {/*End New scene*/}
    </>
  );
}
