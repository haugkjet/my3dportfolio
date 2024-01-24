import * as THREE from "three";
import { RoundedBox } from "@react-three/drei";

export default function Cube() {
  const loader = new THREE.CubeTextureLoader();
  loader.setPath("https://threejs.org/examples/textures/cube/pisa/");

  const textureCube = loader.load([
    "px.png",
    "nx.png",
    "py.png",
    "ny.png",
    "pz.png",
    "nz.png",
  ]);

  return (
    <>
      <RoundedBox position={[-4, 0.5, 0.0]} castShadow={true}>
        <meshStandardMaterial
          color="#50e0ff"
          envMap={textureCube}
          transparent={true}
          opacity={0.4}
          metalness={0.9}
          roughness={0.1}
          side={THREE.DoubleSide}
        />
      </RoundedBox>

      <RoundedBox
        position={[-2.5, 0.5, 0.0]}
        castShadow={true}
        scale={[1, 1, 1]}
      >
        <meshStandardMaterial
          color="green"
          envMap={textureCube}
          transparent={true}
          opacity={0.4}
          metalness={0.0}
          roughness={0.1}
          side={THREE.DoubleSide}
        />
      </RoundedBox>

      <RoundedBox position={[-1, 0.5, 0.0]} castShadow={true}>
        <meshStandardMaterial
          color="red"
          transparent={true}
          opacity={0.4}
          metalness={0.9}
          roughness={0.1}
          side={THREE.DoubleSide}
        />
      </RoundedBox>
      <RoundedBox position={[0.5, 0.5, 0.0]} castShadow={true}>
        <meshStandardMaterial
          color="#f28c28"
          transparent={true}
          opacity={0.4}
          metalness={0.9}
          roughness={0.1}
          side={THREE.DoubleSide}
        />
      </RoundedBox>
      <RoundedBox position={[2, 0.5, 0.0]} castShadow={true}>
        <meshStandardMaterial
          color="#0096ff"
          transparent={true}
          opacity={0.4}
          metalness={0.9}
          roughness={0.1}
          side={THREE.DoubleSide}
        />
      </RoundedBox>
      <RoundedBox position={[3.5, 0.5, 0.0]} castShadow={true}>
        <meshStandardMaterial
          color="red"
          transparent={true}
          opacity={0.4}
          metalness={0.9}
          roughness={0.1}
          side={THREE.DoubleSide}
        />
      </RoundedBox>

      <RoundedBox position={[-4, 0.5, 0.0]} castShadow={true}>
        <meshStandardMaterial
          color="#50e0ff"
          envMap={textureCube}
          transparent={true}
          opacity={0.4}
          metalness={0.9}
          roughness={0.1}
          side={THREE.DoubleSide}
        />
      </RoundedBox>

      <RoundedBox
        position={[-2.5, 0.5, 0.0]}
        castShadow={true}
        scale={[1, 1, 1]}
      >
        <meshStandardMaterial
          color="green"
          envMap={textureCube}
          transparent={true}
          opacity={0.4}
          metalness={0.0}
          roughness={0.1}
          side={THREE.DoubleSide}
        />
      </RoundedBox>

      <RoundedBox position={[0.5, 2.0, 0.0]} castShadow={true}>
        <meshStandardMaterial
          color="red"
          transparent={true}
          opacity={0.4}
          metalness={0.9}
          roughness={0.1}
          side={THREE.DoubleSide}
        />
      </RoundedBox>
      <RoundedBox position={[0.5, 0.5, 3.0]} castShadow={true}>
        <meshStandardMaterial
          color="#f28c28"
          transparent={true}
          opacity={0.4}
          metalness={0.9}
          roughness={0.1}
          side={THREE.DoubleSide}
        />
      </RoundedBox>
      <RoundedBox position={[2, 0.5, 2.0]} castShadow={true}>
        <meshStandardMaterial
          color="#0096ff"
          transparent={true}
          opacity={0.4}
          metalness={0.9}
          roughness={0.1}
          side={THREE.DoubleSide}
        />
      </RoundedBox>
      <RoundedBox position={[3.5, 0.5, 2.0]} castShadow={true}>
        <meshStandardMaterial
          color="red"
          transparent={true}
          opacity={0.4}
          metalness={0.9}
          roughness={0.1}
          side={THREE.DoubleSide}
        />
      </RoundedBox>
    </>
  );
}
