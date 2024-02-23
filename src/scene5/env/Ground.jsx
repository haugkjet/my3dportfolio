import React from "react";
import { Text } from "@react-three/drei";
import { useTheme } from "../../ThemeContext"; // Adjust the path as necessary

export default function Ground() {
  const { currentSettings } = useTheme();
  return (
    <>
      <gridHelper args={[500, 1, "orange", "grey"]} position={[0, 0.001, 0]} />
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
        <meshStandardMaterial
          color={currentSettings.groundColor}
          metalness={0.1}
          roughness={0.6}
        />
      </mesh>
    </>
  );
}
