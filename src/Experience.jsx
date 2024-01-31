import * as THREE from "three";
import React, { useState, useEffect, useRef } from "react";
import { Pathtracer } from "@react-three/gpu-pathtracer";
import { useControls } from "leva";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { SRGBColorSpace } from "three";
import { Environment } from "@react-three/drei";

import Scene1Chart from "./scene1chart/Scene1Chart";
import Scene2Box from "./scene2box/Scene2Box";

import Lights from "./Lights";
import Ground from "./Ground";

export default function Experience() {
  const sceneRef = useRef();
  const [currentScene, setCurrentScene] = useState("sceneOne");

  // Define Leva controls
  const { sceneSelector } = useControls({
    sceneSelector: {
      value: currentScene,
      options: { SceneOne: "sceneOne", SceneTwo: "sceneTwo" },
      onChange: (value) => setCurrentScene(value),
    },
  });

  const backgroundcolor = useControls({
    value: "white",
  });

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
      <Canvas
        camera={{
          fov: 50,
          near: 0.1,
          far: 200,
          position: [-5, 6, 20],
        }}
        style={{ background: backgroundcolor.value }}
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
        <Environment preset="forest"></Environment>
        <Perf position="top-left" />
        <OrbitControls dampingFactor={0.9} />

        <Lights />
        <Ground />
        {currentScene === "sceneOne" && (
          <Scene1Chart textureCube={textureCube} />
        )}
        {currentScene === "sceneTwo" && <Scene2Box />}
        <gridHelper args={[10, 10]} />
        <axesHelper args={[1]} />
      </Canvas>
    </>
  );
}
