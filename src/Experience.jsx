import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { KeyboardControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { DoubleSide } from "three";
import Player from "./Player";
import Cube from "./Cube";
import Lights from "./Lights";
import { Environment } from "@react-three/drei";

export default function Experience() {
  return (
    <>
      <KeyboardControls
        map={[
          { name: "forward", keys: ["ArrowUp", "KeyW"] },
          { name: "backward", keys: ["ArrowDown", "KeyS"] },
          { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
          { name: "rightward", keys: ["ArrowRight", "KeyD"] },
          { name: "jump", keys: ["Space"] },
        ]}
      >
        <Canvas
          flat={true}
          shadows
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [2.5, 4, 6],
          }}
          style={{ background: "#d9d9d9" }}
        >
          <Environment preset="forest"></Environment>
          <Perf position="top-left" />
          <OrbitControls dampingFactor={0.9} />
          <gridHelper args={[15, 10, "#5f5f5f", "#5f5f5f"]} />
          <mesh
            position={[0, -0.01, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[50, 50, 1]}
          >
            <planeGeometry attach="geometry" />
            <meshBasicMaterial color="#d0d0d0" side={DoubleSide} />
          </mesh>
          {/*<Player*/}
          <Lights />

          <Cube />
        </Canvas>
      </KeyboardControls>
    </>
  );
}
