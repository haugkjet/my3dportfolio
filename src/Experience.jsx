import * as THREE from "three";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { DoubleSide, LinearSRGBColorSpace, SRGBColorSpace } from "three";
import Cube from "./Cube";
import Lights from "./Lights";
import { Environment } from "@react-three/drei";

export default function Experience() {
  return (
    <>
      <Canvas
        camera={{
          fov: 50,
          near: 0.1,
          far: 200,
          position: [14, 6, 11],
        }}
        style={{ background: "#d9d9d9" }}
        onCreated={({ gl }) => {
          // Enable sRGBEncoding
          //gl.outputColorSpace = SRGBColorSpace;

          // Alternatively, you can use LinearEncoding if sRGBEncoding is not desired
          gl.outputColorSpace = SRGBColorSpace;
          gl.shadowMap.enabled = true;

          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 2.0;
          gl.shadowMap.type = THREE.PCFSoftShadowMap;
        }}
      >
        {/* Your 3D scene components go here */}

        <Environment preset="forest"></Environment>
        <Perf position="top-left" />
        <OrbitControls dampingFactor={0.9} />
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
          rotation={[Math.PI / 2, 0, 0]}
          scale={[20, 20, 1]}
        >
          <planeGeometry attach="geometry" />
          <meshStandardMaterial
            color="#8e8e8e"
            side={DoubleSide}
            metalness={0.0}
            roughness={0.2}
          />
        </mesh>
        <mesh
          receiveShadow={true}
          position={[0, 0, -0.7]}
          rotation={[0, 0, 0]}
          scale={[20, 20, 1]}
        >
          <planeGeometry attach="geometry" />
          <meshStandardMaterial
            color="#d9d9d9"
            side={DoubleSide}
            metalness={0.0}
            roughness={0.2}
          />
        </mesh>

        <Lights />

        <Cube />
      </Canvas>
    </>
  );
}
