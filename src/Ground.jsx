import React from "react";
import { Text } from "@react-three/drei";

export default function Ground() {
  return (
    <>
      <gridHelper args={[500, 10, "orange", "grey"]} position={[0, 0.001, 0]} />
      {/*<gridHelper
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0.0, -0.6999]}
        args={[100, 100, "#d9d9d9", "#d9d9d9"]}
  />*/}
      <mesh
        position={[0, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[500, 500, 1]}
      >
        <planeGeometry attach="geometry" />
        <meshStandardMaterial color="white" metalness={0.2} roughness={0.3} />
      </mesh>
    </>
  );
}
