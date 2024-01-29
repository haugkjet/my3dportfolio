import * as THREE from "three";

import React, { useRef } from "react";

import { Text } from "@react-three/drei";

export default function CubeExtruded({
  position,
  value,
  text,
  color,
  textureCube,
}) {
  let shape = new THREE.Shape();
  let angleStep = Math.PI * 0.5;
  let radius = 0.05;

  shape.absarc(0.5, 0.5, radius, angleStep * 0, angleStep * 1, false);
  shape.absarc(-0.5, 0.5, radius, angleStep * 1, angleStep * 2, false);
  shape.absarc(-0.5, -0.5, radius, angleStep * 2, angleStep * 3, false);
  shape.absarc(0.5, -0.5, radius, angleStep * 3, angleStep * 4, false);

  const extrudeGeometry = new THREE.ExtrudeGeometry(shape, {
    depth: value,
    bevelEnabled: false,
  });

  return (
    <>
      <mesh
        geometry={extrudeGeometry}
        position={position}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1, 1, 1]}
      >
        <meshStandardMaterial
          color={color}
          envMap={textureCube}
          transparent={true}
          opacity={0.6}
          metalness={0.9}
          roughness={0.1}
        />
        <Text
          position={[0, -0.61, 0.6]}
          rotation={[Math.PI / 2, 0, 0]}
          color={0x000000}
          fontSize={0.1}
        >
          {text}
        </Text>
      </mesh>
    </>
  );
}
