import * as THREE from "three";
import { RoundedBox, Cylinder } from "@react-three/drei";
import { Text3D, QuadraticBezierLine } from "@react-three/drei";
import React, { useRef } from "react";

import { useFrame } from "@react-three/fiber";
import {
  CylinderGeometry,
  MeshStandardMaterial,
  Mesh,
  CatmullRomCurve3,
} from "three";

export default function Cube() {
  const loader = new THREE.CubeTextureLoader();
  loader.setPath("https://threejs.org/examples/textures/cube/pisa/");

  const textureCube = loader.load([
    "px.png",
    "nx.png",
    "py.png",
    "ny.png",
    "pz.png",
    "nz.png",
  ]);

  const height = 9;
  const radiusTop = 1;
  const radiusBottom = 1;
  const radialSegments = 16;
  const heightSegments = 1;

  const position = [0, 3, 0]; // [x, y, z]
  const rotation = [0, 0, -1.4]; // [x, y, z]
  const scale = [0.15, 1, 0.15]; // [x, y, z]

  return (
    <>
      <mesh position={position} rotation={rotation} scale={scale}>
        <cylinderGeometry
          args={[
            radiusTop,
            radiusBottom,
            height,
            radialSegments,
            heightSegments,
          ]}
        />
        <meshStandardMaterial
          color="red"
          envMap={textureCube}
          transparent={true}
          opacity={0.4}
          metalness={0.9}
          roughness={0.1}
          side={THREE.DoubleSide}
        />
      </mesh>

      <RoundedBox position={[-4, 0.5, 0.0]} castShadow={true}>
        <meshStandardMaterial
          color="#50e0ff"
          envMap={textureCube}
          transparent={true}
          opacity={0.4}
          metalness={0.9}
          roughness={0.1}
          side={THREE.DoubleSide}
        />
        <Text3D
          position={[-0.42, 0.35, 0.5]}
          size={0.07}
          height={0.001}
          bevelEnabled={false}
          font="./fonts/helvetiker_regular.typeface.json"
        >
          Cube
          <meshStandardMaterial color="black" />
        </Text3D>
      </RoundedBox>

      <RoundedBox
        position={[-2.5, 0.5, 0.0]}
        castShadow={true}
        scale={[1, 1, 1]}
      >
        <meshStandardMaterial
          color="green"
          envMap={textureCube}
          transparent={true}
          opacity={0.4}
          metalness={0.0}
          roughness={0.1}
          side={THREE.DoubleSide}
        />
        <Text3D
          position={[-0.42, 0.35, 0.5]}
          size={0.07}
          height={0.001}
          bevelEnabled={false}
          font="./fonts/helvetiker_regular.typeface.json"
        >
          Cube
          <meshStandardMaterial color="black" />
        </Text3D>
      </RoundedBox>

      <RoundedBox position={[-1, 0.5, 0.0]} castShadow={true}>
        <meshStandardMaterial
          color="red"
          transparent={true}
          opacity={0.4}
          metalness={0.9}
          roughness={0.1}
          side={THREE.DoubleSide}
        />
        <Text3D
          position={[-0.42, 0.35, 0.5]}
          size={0.07}
          height={0.001}
          bevelEnabled={false}
          font="./fonts/helvetiker_regular.typeface.json"
        >
          Cube
          <meshStandardMaterial color="black" />
        </Text3D>
      </RoundedBox>
      <RoundedBox position={[0.5, 0.5, 0.0]} castShadow={true}>
        <meshStandardMaterial
          color="#f28c28"
          transparent={true}
          opacity={0.4}
          metalness={0.9}
          roughness={0.1}
          side={THREE.DoubleSide}
        />
        <Text3D
          position={[-0.42, 0.35, 0.5]}
          size={0.07}
          height={0.001}
          bevelEnabled={false}
          font="./fonts/helvetiker_regular.typeface.json"
        >
          Cube
          <meshStandardMaterial color="black" />
        </Text3D>
      </RoundedBox>
      <RoundedBox position={[2, 0.5, 0.0]} castShadow={true}>
        <meshStandardMaterial
          color="#0096ff"
          transparent={true}
          opacity={0.4}
          metalness={0.9}
          roughness={0.1}
          side={THREE.DoubleSide}
        />
        <Text3D
          position={[-0.42, 0.35, 0.5]}
          size={0.07}
          height={0.001}
          bevelEnabled={false}
          font="./fonts/helvetiker_regular.typeface.json"
        >
          Cube
          <meshStandardMaterial color="black" />
        </Text3D>
      </RoundedBox>
      <RoundedBox position={[3.5, 0.5, 0.0]} castShadow={true}>
        <meshStandardMaterial
          color="red"
          transparent={true}
          opacity={0.4}
          metalness={0.9}
          roughness={0.1}
          side={THREE.DoubleSide}
        />
      </RoundedBox>

      <RoundedBox position={[-4, 0.5, 0.0]} castShadow={true}>
        <meshStandardMaterial
          color="#50e0ff"
          envMap={textureCube}
          transparent={true}
          opacity={0.4}
          metalness={0.9}
          roughness={0.1}
          side={THREE.DoubleSide}
        />
        <Text3D
          position={[-0.42, 0.35, 0.5]}
          size={0.07}
          height={0.001}
          bevelEnabled={false}
          font="./fonts/helvetiker_regular.typeface.json"
        >
          Cube
          <meshStandardMaterial color="black" />
        </Text3D>
      </RoundedBox>

      <RoundedBox
        position={[-2.5, 0.5, 0.0]}
        castShadow={true}
        scale={[1, 1, 1]}
      >
        <meshStandardMaterial
          color="green"
          envMap={textureCube}
          transparent={true}
          opacity={0.4}
          metalness={0.0}
          roughness={0.1}
          side={THREE.DoubleSide}
        />
        <Text3D
          position={[-0.42, 0.35, 0.5]}
          size={0.07}
          height={0.001}
          bevelEnabled={false}
          font="./fonts/helvetiker_regular.typeface.json"
        >
          Cube
          <meshStandardMaterial color="black" />
        </Text3D>
      </RoundedBox>

      <RoundedBox position={[0.5, 2.0, 0.0]} castShadow={true}>
        <meshStandardMaterial
          color="red"
          transparent={true}
          opacity={0.4}
          metalness={0.9}
          roughness={0.1}
          side={THREE.DoubleSide}
        />
        <Text3D
          position={[-0.42, 0.35, 0.5]}
          size={0.07}
          height={0.001}
          bevelEnabled={false}
          font="./fonts/helvetiker_regular.typeface.json"
        >
          Cube
          <meshStandardMaterial color="black" />
        </Text3D>
      </RoundedBox>
      <RoundedBox position={[0.5, 0.5, 3.0]} castShadow={true}>
        <meshStandardMaterial
          color="#f28c28"
          transparent={true}
          opacity={0.4}
          metalness={0.9}
          roughness={0.1}
          side={THREE.DoubleSide}
        />
        <Text3D
          position={[-0.42, 0.35, 0.5]}
          size={0.07}
          height={0.001}
          bevelEnabled={false}
          font="./fonts/helvetiker_regular.typeface.json"
        >
          Cube
          <meshStandardMaterial color="black" />
        </Text3D>
      </RoundedBox>
      <RoundedBox position={[2, 0.5, 2.0]} castShadow={true}>
        <meshStandardMaterial
          color="#0096ff"
          transparent={true}
          opacity={0.4}
          metalness={0.9}
          roughness={0.1}
          side={THREE.DoubleSide}
        />
        <Text3D
          position={[-0.42, 0.35, 0.5]}
          size={0.07}
          height={0.001}
          bevelEnabled={false}
          font="./fonts/helvetiker_regular.typeface.json"
        >
          Cube
          <meshStandardMaterial color="black" />
        </Text3D>
      </RoundedBox>
      <RoundedBox position={[3.5, 0.5, 2.0]} castShadow={true}>
        <meshStandardMaterial
          color="red"
          transparent={true}
          opacity={0.4}
          metalness={0.9}
          roughness={0.1}
          side={THREE.DoubleSide}
        />
        <Text3D
          position={[-0.42, 0.35, 0.5]}
          size={0.07}
          height={0.001}
          bevelEnabled={false}
          font="./fonts/helvetiker_regular.typeface.json"
        >
          Cube
          <meshStandardMaterial color="black" />
        </Text3D>
      </RoundedBox>
    </>
  );
}
