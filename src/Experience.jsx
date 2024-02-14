import * as THREE from "three";
import React, { useState, useEffect, useRef } from "react";
import { Pathtracer } from "@react-three/gpu-pathtracer";
import { useControls } from "leva";

import { Canvas } from "@react-three/fiber";

import Scene1Chart from "./scene1chart/Scene1Chart";
import Scene2Box from "./scene2box/Scene2Box";
import Scene3Dashboard from "./scene3dashboard/Scene3Dashboard";
import Scene4 from "./scene4/Scene4";
import Scene5 from "./scene5/Scene5";
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
        SceneFive: "sceneFive",
      },
      onChange: (value) => setCurrentScene(value),
    },
  });

  return (
    <>
      <Canvas
        shadows={true}
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
          //gl.outputColorSpace = SRGBColorSpace;
          //gl.toneMapping = THREE.ACESFilmicToneMapping;
          //gl.toneMappingExposure = 0.5;
          scene.fog = new Fog(0xe7f3ff, 0.015, 350);
        }}
      >
        <color attach="background" args={["#e7f3ff"]} />

        {currentScene === "sceneOne" && <Scene1Chart />}
        {currentScene === "sceneTwo" && <Scene2Box />}
        {currentScene === "sceneThree" && <Scene3Dashboard />}
        {currentScene === "sceneFour" && <Scene4 />}
        {currentScene === "sceneFive" && <Scene5 />}
      </Canvas>
    </>
  );
}
