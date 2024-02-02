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
  let shape = new THREE.Shape();
  let angleStep = Math.PI * 0.0;
  let radius = 0.05;

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
        castShadow={true}
        receiveShadows={true}
      >
        <meshStandardMaterial
          color={color}
          envMap={textureCube}
          transparent={true}
          opacity={0.9}
          metalness={0.7}
          roughness={0.015}
          castShadow={false}
        />
        <Text
          position={[0, -0.61, value - 0.5]}
          rotation={[Math.PI / 2, 0, 0]}
          color={0x000000}
          fontSize={0.3}
        >
          {value}
        </Text>
      </mesh>
    </>
  );
}
