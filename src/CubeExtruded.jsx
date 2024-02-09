import * as THREE from "three";

import React, { useRef, useEffect } from "react";
import { useControls } from "leva";

import { Text } from "@react-three/drei";

export default function CubeExtruded({
  position,
  value,
  text,
  color,
  textureCube,
}) {
  // Givs interesting shape on bar
  //let shape = new THREE.Shape();
  //let angleStep = Math.PI * 1.5;
  //let radius = 0.025;

  let shape = new THREE.Shape();
  let angleStep = Math.PI * 0.5;
  let radius = 0.02;

  shape.absarc(0.5, 0.5, radius, angleStep * 0, angleStep * 1, false);
  shape.absarc(-0.5, 0.5, radius, angleStep * 1, angleStep * 2, false);
  shape.absarc(-0.5, -0.5, radius, angleStep * 2, angleStep * 3, false);
  shape.absarc(0.5, -0.5, radius, angleStep * 3, angleStep * 4, false);

  const geometryRef = useRef();

  // Animate the depth of the ExtrudeGeometry

  const initialGeometry = new THREE.ExtrudeGeometry(shape, {
    depth: value,
    bevelEnabled: false,
  });

  return (
    <>
      <mesh
        geometry={initialGeometry}
        position={position}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1, 1, 1]}
      >
        <meshStandardMaterial
          color={color}
          envMap={textureCube}
          transparent={false}
          opacity={0.8}
          metalness={0.0}
          roughness={0.2}
        />
        <Text
          position={[0, -0.61, value - 0.5]}
          rotation={[Math.PI / 2, 0, 0]}
          color={0x000000}
          fontSize={0.3}
        >
          {value}
        </Text>
        <Text
          position={[0, -1, 0]}
          rotation={[0, 0, 0]}
          color={0x000000}
          fontSize={0.3}
        >
          {value}
        </Text>
      </mesh>
    </>
  );
}
