import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Box, OrbitControls, Text } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "../../../ThemeContext"; // Adjust the path as necessary

const Bar = ({ position, dimensions, color }) => {
  return (
    <Box args={dimensions} position={position}>
      <meshStandardMaterial color={color} metalness={0.7} roughness={0.1} />
    </Box>
  );
};

const GridLines = ({ size, divisions, orientation }) => {
  const gridRef = useRef();
  const { currentSettings } = useTheme();
  return (
    <gridHelper
      args={[
        size,
        divisions,
        currentSettings.extrudedPanelGridColor1,
        currentSettings.extrudedPanelGridColor2,
      ]}
      ref={gridRef}
      rotation={orientation === "horizontal" ? [Math.PI / 2, 0, 0] : [0, 0, 0]}
    />
  );
};

const AxisLabel = ({ position, text }) => (
  <Text
    color="#000" // Default color
    anchorX="center" // Center the text horizontally
    anchorY="middle" // Center the text vertically
    position={position}
    fontSize={0.8}
  >
    {text}
  </Text>
);

function LegendItem({ position, color, text }) {
  const { currentSettings } = useTheme();

  return (
    <>
      <Box args={[0.5, 0.5, 0.1]} position={position}>
        <meshStandardMaterial color={color} metalness={0.7} roughness={0.1} />
      </Box>
      <Text
        color={currentSettings.floorTextColor}
        anchorX="left"
        anchorY="middle"
        position={[position[0] + 0.6, position[1], position[2]]}
      >
        {text}
      </Text>
    </>
  );
}

export default function BarchartV2({ data }) {
  const { currentSettings } = useTheme();

  const maxValue = Math.max(...data.map((d) => d.value));
  const scale = 10 / maxValue; // Example scaling factor

  const categories = [
    ...new Set(data.map((d) => ({ color: d.color, label: d.label }))),
  ];

  return (
    <>
      {data.map((d, i) => (
        <Bar
          key={i}
          position={[i - data.length / 2, (d.value * scale) / 2, 0]}
          dimensions={[0.8, d.value * scale, 0.8]}
          color={d.color}
        />
      ))}
      <GridLines size={20} divisions={10} orientation="horizontal" />

      {/* <AxisLabel position={[-10, 0, 0]} text="X Axis" />
      <AxisLabel
        position={[-data.length / 2 - 5, (maxValue * scale) / 2 + 5, 0]}
        text="Y Axis"
      />
      <AxisLabel position={[0, 0, 10]} text="Z Axis" />*/}

      {/* Legends */}
      {categories.map((category, index) => (
        <LegendItem
          key={index}
          position={[-data.length / 2 - 6, -4 - index, 0]}
          color={category.color}
          text={category.label}
        />
      ))}
    </>
  );
}
