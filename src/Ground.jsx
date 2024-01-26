import React from "react";
import { Text } from "@react-three/drei";

export default function Ground() {
  return (
    <>
      <gridHelper
        args={[30, 30, "#5f5f5f", "#5f5f5f"]}
        position={[0, 0.001, 0]}
      />
      <gridHelper
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0.0, -0.6999]}
        args={[30, 30, "#5f5f5f", "#5f5f5f"]}
      />
      <mesh
        receiveShadow={true}
        position={[0, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[30, 30, 1]}
      >
        <planeGeometry attach="geometry" />
        <meshStandardMaterial color="#8e8e8e" metalness={0.0} roughness={0.2} />
        <Text position={[-0.15, -0.2, 0.1]} color={0x000000} fontSize={0.025}>
          X-Axis
        </Text>
      </mesh>
      <mesh
        receiveShadow={true}
        position={[0, 0, -0.7]}
        rotation={[0, 0, 0]}
        scale={[30, 30, 1]}
      >
        <planeGeometry attach="geometry" />
        <meshStandardMaterial color="#d9d9d9" metalness={0.0} roughness={0.2} />
        <Text position={[-0.15, 0.2, 0.01]} color={0x000000} fontSize={0.025}>
          Y-Axis
        </Text>
      </mesh>
    </>
  );
}
