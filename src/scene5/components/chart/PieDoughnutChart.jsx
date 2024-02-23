import React from "react";
import * as THREE from "three";
import { Box, Text } from "@react-three/drei";
import { useTheme } from "../../ThemeContext"; // Adjust the path as necessary

// A function to create the shape for extrusion
const createPieSegmentShape = (
  innerRadius,
  outerRadius,
  startAngle,
  endAngle,
  gapSize
) => {
  // Calculate the angular size of the gap for both the inner and outer radii
  const innerGapAngle = gapSize / innerRadius; // Smaller angle for the inner radius
  const outerGapAngle = gapSize / outerRadius + 0.05; // Larger angle for the outer radius

  // Adjust the start and end angles to include the gap, differentiating between inner and outer edges
  const adjustedStartAngle = startAngle + innerGapAngle / 2;
  const adjustedEndAngle = endAngle - outerGapAngle / 2;

  const shape = new THREE.Shape();
  const startOuter = new THREE.Vector2(
    Math.cos(adjustedStartAngle) * outerRadius,
    Math.sin(adjustedStartAngle) * outerRadius
  );
  shape.moveTo(
    Math.cos(adjustedStartAngle) * innerRadius,
    Math.sin(adjustedStartAngle) * innerRadius
  );
  shape.lineTo(startOuter.x, startOuter.y);
  shape.absarc(0, 0, outerRadius, adjustedStartAngle, adjustedEndAngle, false);
  const endInnerX = Math.cos(adjustedEndAngle) * innerRadius;
  const endInnerY = Math.sin(adjustedEndAngle) * innerRadius;
  shape.lineTo(endInnerX, endInnerY);
  shape.absarc(0, 0, innerRadius, adjustedEndAngle, adjustedStartAngle, true);

  return shape;
};

// PieSegment component
const PieSegment = ({
  innerRadius,
  outerRadius,
  startAngle,
  endAngle,
  color,
  value,
  gapSize,
}) => {
  const extrudeSettings = { depth: 0.1, bevelEnabled: false };
  const segmentShape = createPieSegmentShape(
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    gapSize
  );
  const geometry = new THREE.ExtrudeGeometry(segmentShape, extrudeSettings);

  // Calculate the midpoint angle and the position for the text
  const midpointAngle = startAngle + (endAngle - startAngle) / 2;
  const textRadius = (innerRadius + outerRadius) / 2;
  const textPositionX = textRadius * Math.cos(midpointAngle);
  const textPositionY = textRadius * Math.sin(midpointAngle);

  return (
    <mesh geometry={geometry} position={[0, 0, 0]}>
      <meshStandardMaterial color={color} metalness={0.4} roughness={0.1} />
      <Text
        position={[textPositionX, textPositionY, 0.12]} // Slightly above the segment to avoid z-fighting
        rotation={[0, 0, midpointAngle + Math.PI / 2]} // Rotate text to align with the segment
        fontSize={0.16}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        {value}%
      </Text>
    </mesh>
  );
};

function LegendItem({ position, color, text }) {
  const { currentSettings } = useTheme();

  return (
    <>
      <Box args={[0.2, 0.2, 0.1]} position={position}>
        <meshStandardMaterial color={color} metalness={0.7} roughness={0.1} />
      </Box>
      <Text
        color={currentSettings.floorTextColor}
        anchorX="left"
        anchorY="middle"
        position={[position[0] + 0.2, position[1], position[2]]}
        fontSize={0.2}
      >
        {text}
      </Text>
    </>
  );
}

// The full PieChart component
const PieDoughnutChart = ({
  data,
  innerRadius,
  outerRadius,
  gapSize,
  title,
}) => {
  const categories = [
    ...new Set(
      data.map((d) => ({ color: d.color, label: d.label, value: d.value }))
    ),
  ];
  const { currentSettings } = useTheme();
  const segments = data.map((item, index) => {
    // Assuming each item has a 'value' and we calculate the total to get percentages
    const total = data.reduce((acc, item) => acc + item.value, 0);
    const startAngle =
      index === 0
        ? 0
        : data
            .slice(0, index)
            .reduce((acc, item) => acc + (item.value / total) * 2 * Math.PI, 0);
    const endAngle = startAngle + (item.value / total) * 2 * Math.PI;

    return (
      <>
        <PieSegment
          key={index}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          color={item.color}
          value={item.value}
          gapSize={gapSize}
        ></PieSegment>
      </>
    );
  });
  return (
    <group rotation={[-Math.PI / 2, 0, 0]}>
      {segments}
      {categories.map((category, index) => (
        <LegendItem
          key={index}
          position={[-data.length / 2 - 0.2, index / 3 - 2.7, 0]}
          color={category.color}
          text={category.label}
        />
      ))}
      <Text
        position={[0, -2.5, 0]}
        rotation={[0, 0, 0]}
        color={"grey"}
        fontSize={0.2 * outerRadius}
      >
        EPS
      </Text>
    </group>
  );
};

export default PieDoughnutChart;
