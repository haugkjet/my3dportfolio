import React, { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useKeyboardControls } from "@react-three/drei";
import { Model } from "./Gobot";

export default function Player() {
  return (
    <>
      {/* Replace your model here */}
      <Model />

      {/*} <mesh position={[0, 0.5, 0]} rotation={[0, 0, 0]} scale={[1, 1, 1]}>
      <boxGeometry attach="geometry" />
      <meshBasicMaterial attach="material" color="#8CABFF" />
    </mesh>*/}
    </>
  );
}
