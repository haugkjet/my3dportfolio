import * as THREE from "three";
import React, { useState, useEffect, useRef } from "react";

import Cube from "../Cube";
import MyCylinder from "../MyCylinder";
import CubeExtruded from "../CubeExtruded";

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

export default function Scene1Chart({ textureCube }) {
  const [cubeDataList, setCubeDataList] = useState(null);

  const cubesData = [];

  const colorList = ["red", "lightgreen", "green", "cyan", "yellow"];
  const textList = ["Cube", "CubeCool", "Cubebig"];

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 1; j++) {
      const { text, color, value } = generateObject(textList, colorList);
      const position = [i * 1.2 - 8, 0.01, j * 1.5]; // Adjust the position based on your needs
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
  return (
    <>
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
    </>
  );
}
