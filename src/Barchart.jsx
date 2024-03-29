import CubeExtruded from "./CubeExtruded";
import React, { useState, useEffect, useRef } from "react";
import { RoundedBox, Text } from "@react-three/drei";
import { Box } from "@react-three/drei";

import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";

const getRandomValue = (maxheight) => Math.floor(Math.random() * maxheight) + 1;
const getRandomElement = (array) =>
  array[Math.floor(Math.random() * array.length)];

const generateObject = (textList, colorList, maxheight) => {
  const text = getRandomElement(textList);
  const color = getRandomElement(colorList);
  const value = getRandomValue(maxheight);

  return {
    text,
    color,
    value,
  };
};

export default function Barchart({
  textureCube,
  posx,
  posy,
  posz,
  roty,
  length,
  title,
  maxheight,
}) {
  const cubesData = [];

  const colorList = ["#007bff", "#ffa04c"];
  const textList = ["Cube", "CubeCool", "Cubebig"];

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < 1; j++) {
      const { text, color, value } = generateObject(
        textList,
        colorList,
        maxheight
      );
      const position = [i * 1.2 - posx, 0.01 + posy, j * 1.5 + posz]; // Adjust the position based on your needs
      const scale = [1, 1, 1]; // Adjust the scale based on your needs

      cubesData.push({ text, color, position, scale, value });
    }
  }

  return (
    <>
      <mesh rotation={[0, roty, 0]}>
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
        <Text
          position={[-posx + length / 2, posy + 0.05, posz + 3]}
          rotation={[-Math.PI / 2, 0, 0]}
          color={0x000000}
          fontSize={1}
        >
          {title}
        </Text>
        {/*<pointLight
          position={[-posx - 2, posy + 4, posz + 2]}
          intensity={100}
          color="#fff"
        />
        <pointLight
          position={[-posx + length + 2, posy + 4, posz + 2]}
          intensity={100}
          color="#fff"
          />*/}
      </mesh>
    </>
  );
}
