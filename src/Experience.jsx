import * as THREE from "three";
import React, { useState, useEffect } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { SRGBColorSpace } from "three";
import { Environment } from "@react-three/drei";

import Lights from "./Lights";
import Ground from "./Ground";

import Cube from "./Cube";
import MyCylinder from "./MyCylinder";
import CubeExtruded from "./CubeExtruded";

export default function Experience() {
  const [cubeDataList, setCubeDataList] = useState(null);

  useEffect(() => {
    // Fetch the JSON file containing cube properties
    fetch("data/cubes.json")
      .then((response) => response.json())
      .then((data) => setCubeDataList(data))
      .catch((error) => console.error("Error fetching cube data:", error));
  }, []);

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
        <Environment preset="forest"></Environment>
        <Perf position="top-left" />
        <OrbitControls dampingFactor={0.9} />

        <Lights />
        <Ground />

        {/*cubeDataList &&
          cubeDataList.map((cubeData, index) => (
            <Cube
              key={index}
              position={cubeData.position}
              scale={cubeData.scale}
              text={cubeData.text}
              color={cubeData.color}
            />
          ))*/}

        {cubeDataList &&
          cubeDataList.map((cubeData, index) => (
            <CubeExtruded
              key={index}
              position={cubeData.position}
              value={cubeData.value}
              scale={cubeData.scale}
              text={cubeData.text}
              color={cubeData.color}
              textureCube={textureCube}
            />
          ))}
      </Canvas>
    </>
  );
}
