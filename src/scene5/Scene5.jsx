import { Html, ContactShadows, RoundedBox, Text } from "@react-three/drei";

import {
  BakeShadows,
  SoftShadows,
  OrbitControls,
  Svg,
} from "@react-three/drei";
import { Perf } from "r3f-perf";

import Barchart from "./components/chart/Barchart";
import MyPieChart from "./components/chart/MyPieChart";
import MyLineChart from "./components/chart/MyLineChart";

import WallsAndFloor from "./components/WallsAndFloor";

import PanelExtruded from "./components/PanelExtruded";
import FloorPanelGrid from "./FloorPanelGrid";
import BehindWallPanelGrid from "./BehindWallPanelGrid";

import Lights from "./env/Lights";
import Ground from "./env/Ground";

import React from "react";
import * as THREE from "three";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader, PlaneGeometry, MeshBasicMaterial } from "three";

import { useTheme } from "./ThemeContext"; // Adjust the path as necessary

export default function Scene5({ textureCube }) {
  const { currentSettings } = useTheme();

  // Inside your component or theme context

  const data1 = [
    { value: 75, color: "#007bff" },
    { value: 25, color: "#ffa04c" },
  ];

  const data2 = [
    { value: 12.5, color: "#007bff" },
    { value: 12.5, color: "#ffa04c" },
    { value: 25, color: "#007bff" },
    { value: 25, color: "#ffa04c" },
    { value: 25, color: "#007bff" },
  ];

  const data3 = [
    { value: 5, color: "#007bff" },
    { value: 10, color: "#ffa04c" },
    { value: 25, color: "#007bff" },
    { value: 50, color: "#ffa04c" },
    { value: 10, color: "#007bff" },
  ];

  const linedata = [
    { x: -10, y: 1 }, // Assuming all points lie on a flat plane (z=0)
    { x: -9, y: 3 },
    { x: -1, y: 6 },

    { x: 1, y: 7 },
    { x: 7, y: 8 },
  ];
  const linethickness = 0.1; // Thickness of the line

  let width = 35;
  let height = 15;
  let depth = 23;
  let thickness = 0.25;

  let baseposX = 0;
  let baseposY = 0;
  let baseposZ = 0;

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

      <FloorPanelGrid
        baseposX={baseposX - width / 2 + 10}
        baseposY={baseposY}
        baseposZ={baseposZ}
      ></FloorPanelGrid>

      <FloorPanelGrid
        baseposX={baseposX - width / 2 + 10 + 15}
        baseposY={baseposY}
        baseposZ={baseposZ}
      ></FloorPanelGrid>

      <FloorPanelGrid
        baseposX={baseposX - width / 2 + 10 + 15}
        baseposY={baseposY}
        baseposZ={baseposZ + 10}
      ></FloorPanelGrid>

      <FloorPanelGrid
        baseposX={baseposX - width / 2 + 10}
        baseposY={baseposY}
        baseposZ={baseposZ + 10}
      ></FloorPanelGrid>

      <group rotation={[Math.PI / 2, 0, 0]}>
        <BehindWallPanelGrid
          baseposX={baseposX - width / 2 + 10}
          baseposY={baseposY}
          baseposZ={baseposZ - height + 1}
        ></BehindWallPanelGrid>
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <BehindWallPanelGrid
          baseposX={baseposX - width / 2 + 25}
          baseposY={baseposY}
          baseposZ={baseposZ - height + 1}
        ></BehindWallPanelGrid>
      </group>

      {/*End New scene*/}

      {/*Below will be phased out*/}
    </>
  );
}
