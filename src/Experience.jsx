import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { KeyboardControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { DoubleSide } from "three";
import Player from "./Player";
import Lights from "./Lights";

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
          shadows
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [2.5, 4, 6],
          }}
          style={{ background: "#8CABFF" }}
        >
          <Perf position="top-left" />
          <OrbitControls />
          <Lights />

          <gridHelper args={[50, 50, 0x35155d, "#512B81"]} />

          <mesh
            position={[0, -0.01, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[50, 50, 1]}
          >
            <planeGeometry attach="geometry" />
            <meshBasicMaterial color="#4477CE" side={DoubleSide} />
          </mesh>
          <Player />
        </Canvas>
      </KeyboardControls>
    </>
  );
}
