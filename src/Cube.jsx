import * as THREE from "three";

import React, { useRef } from "react";
import { RoundedBox } from "@react-three/drei";
import { Text } from "@react-three/drei";

export default function Cube({ position, scale, text, color, textureCube }) {
  return (
    <>
      <RoundedBox
        position={position}
        scale={scale}
        castShadow={false}
        bevelSegments={4}
        radius={0.05}
      >
        <meshStandardMaterial
          color={color}
          envMap={textureCube}
          transparent={true}
          opacity={0.4}
          metalness={0.9}
          roughness={0.1}
        />

        <Text position={[-0.1, 0.25, 0.51]} color={0x000000} fontSize={0.1}>
          {text}
        </Text>
      </RoundedBox>
    </>
  );
}
