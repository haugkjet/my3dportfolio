import * as THREE from "three";
import { RoundedBox } from "@react-three/drei";
import { Text3D } from "@react-three/drei";

export default function Cube({ position, scale, text, color, textureCube }) {
  return (
    <>
      <RoundedBox position={position} scale={scale} castShadow={false}>
        <meshStandardMaterial
          color={color}
          envMap={textureCube}
          transparent={true}
          opacity={0.4}
          metalness={0.9}
          roughness={0.1}
          side={THREE.DoubleSide}
        />
        <Text3D
          position={[-0.42, 0.35, 0.5]}
          size={0.07}
          height={0.001}
          bevelEnabled={false}
          font="./fonts/helvetiker_regular.typeface.json"
        >
          {text}
          <meshBasicMaterial color="black" />
        </Text3D>
      </RoundedBox>
    </>
  );
}
