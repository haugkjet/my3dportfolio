import * as THREE from "three";
import React, { useState, useEffect } from "react";
import { Pathtracer } from "@react-three/gpu-pathtracer";

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

const getRandomValue = () => Math.floor(Math.random() * 4) + 1;
const getRandomElement = (array) =>
  array[Math.floor(Math.random() * array.length)];

const generateObject = (textList, colorList) => {
  const text = getRandomElement(textList);
  const color = getRandomElement(colorList);
  const value = getRandomValue();

  return {
    text,
    color,
    value,
  };
};

export default function Experience() {
  const [cubeDataList, setCubeDataList] = useState(null);

  const cubesData = [];

  const colorList = ["lightgreen", "lightblue", "green", "cyan", "yellow"];
  const textList = ["Cube", "CubeCool", "Cubebig"];

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 1; j++) {
      const { text, color, value } = generateObject(textList, colorList);
      const position = [i * 1.5 - 8, 0.01, j * 1.5]; // Adjust the position based on your needs
      const scale = [1, 1, 1]; // Adjust the scale based on your needs

      cubesData.push({ text, color, position, scale, value });
    }
  }

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
          position: [-10, 6, 15],
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

        {/*cubeDataList &&
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
          ))*/}
        {cubesData &&
          cubesData.map((cubeData, index) => (
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
