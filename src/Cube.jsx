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
      <RoundedBox position={[0.0, 0.5, 0.0]}>
        <meshStandardMaterial
          color="#d9d9d9"
          envMap={textureCube}
          transparent={true}
          opacity={0.4}
          metalness={0.9}
          roughness={0.1}
          side={THREE.DoubleSide}
        />
      </RoundedBox>

      <RoundedBox position={[1.5, 1, 0.0]} scale={[1, 2, 1]}>
        <meshStandardMaterial
          color="green"
          envMap={textureCube}
          transparent={true}
          opacity={0.4}
          metalness={0.9}
          roughness={0.1}
          side={THREE.DoubleSide}
        />
      </RoundedBox>

      <RoundedBox position={[3, 0.5, 0.0]}>
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
