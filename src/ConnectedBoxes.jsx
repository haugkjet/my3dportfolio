import { TransformControls, OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

import React, { useRef, useState } from "react";

function FirstBox({ position, color }) {
  const meshRef = useRef();
  const { camera } = useThree();

  return (
    <>
      <TransformControls camera={camera}>
        <mesh ref={meshRef} position={position}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={color} />
        </mesh>
      </TransformControls>
    </>
  );
}

{
  /* Add a second box */
}
function SecondBox({ position, color }) {
  const meshRef = useRef();
  const { camera } = useThree();

  return (
    <>
      <TransformControls camera={camera}>
        <mesh ref={meshRef} position={position}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={color} />
        </mesh>
      </TransformControls>
    </>
  );
}

export default function ConnectedBoxes() {
  return (
    <>
      <FirstBox position={[1, 1, 1]} color="blue" />
      <SecondBox position={[2, 2, 2]} color="red" />
    </>
  );
}
