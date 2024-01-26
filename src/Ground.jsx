import React from "react";

export default function Ground() {
  return (
    <>
      <gridHelper
        args={[10, 10, "#5f5f5f", "#5f5f5f"]}
        position={[0, 0.001, 0]}
      />
      <gridHelper
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0.0, -0.6999]}
        args={[10, 10, "#5f5f5f", "#5f5f5f"]}
      />
      <mesh
        receiveShadow={true}
        position={[0, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[20, 20, 1]}
      >
        <planeGeometry attach="geometry" />
        <meshStandardMaterial color="#8e8e8e" metalness={0.0} roughness={0.2} />
      </mesh>
      <mesh
        receiveShadow={true}
        position={[0, 0, -0.7]}
        rotation={[0, 0, 0]}
        scale={[20, 20, 1]}
      >
        <planeGeometry attach="geometry" />
        <meshStandardMaterial color="#d9d9d9" metalness={0.0} roughness={0.2} />
      </mesh>
    </>
  );
}
