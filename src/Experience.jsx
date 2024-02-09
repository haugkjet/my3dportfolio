import * as THREE from "three";
import React, { useState, useEffect, useRef } from "react";
import { Pathtracer } from "@react-three/gpu-pathtracer";
import { useControls } from "leva";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { SRGBColorSpace } from "three";
import { Environment, Sky } from "@react-three/drei";

import Scene1Chart from "./scene1chart/Scene1Chart";
import Scene2Box from "./scene2box/Scene2Box";
import Scene3Dashboard from "./scene3dashboard/Scene3Dashboard";
import Scene4 from "./scene4/Scene4";
import { Fog } from "three";

export default function Experience() {
  const [currentScene, setCurrentScene] = useState("sceneOne");

  // Define Leva controls
  const { sceneSelector } = useControls({
    sceneSelector: {
      value: currentScene,
      options: {
        SceneOne: "sceneOne",
        SceneTwo: "sceneTwo",
        SceneThree: "sceneThree",
        SceneFour: "sceneFour",
      },
      onChange: (value) => setCurrentScene(value),
    },
  });

  return (
    <>
      <Canvas
        camera={{
          fov: 50,
          near: 0.1,
          far: 2000,
          position: [30, 15, 75],
        }}
        onCreated={({ gl, scene }) => {
          // Enable sRGBEncoding
          //gl.outputColorSpace = SRGBColorSpace;

          // Alternatively, you can use LinearEncoding if sRGBEncoding is not desired
          gl.outputColorSpace = SRGBColorSpace;
          gl.shadowMap.enabled = false;
          gl.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 0.5;

          scene.fog = new Fog(0xffffff, 0.015, 350);
        }}
      >
        <Perf position="top-left" />
        <OrbitControls dampingFactor={0.9} />

        {currentScene === "sceneOne" && <Scene1Chart />}
        {currentScene === "sceneTwo" && <Scene2Box />}
        {currentScene === "sceneThree" && <Scene3Dashboard />}
        {currentScene === "sceneFour" && <Scene4 />}
      </Canvas>
    </>
  );
}
