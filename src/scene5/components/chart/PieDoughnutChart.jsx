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
  gapSize = 0.05
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
}) => {
  const extrudeSettings = { depth: 0.1, bevelEnabled: false };
  const segmentShape = createPieSegmentShape(
    innerRadius,
    outerRadius,
    startAngle,
    endAngle
  );
  const geometry = new THREE.ExtrudeGeometry(segmentShape, extrudeSettings);

  return (
    <mesh geometry={geometry} position={[0, 0, 0]}>
      <meshStandardMaterial color={color} metalness={0.4} roughness={0.1} />
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
const PieDoughnutChart = ({ data }) => {
  const categories = [
    ...new Set(data.map((d) => ({ color: d.color, label: d.label }))),
  ];
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
      <PieSegment
        key={index}
        innerRadius={1}
        outerRadius={1.6}
        startAngle={startAngle}
        endAngle={endAngle}
        color={item.color}
      />
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
    </group>
  );
};

export default PieDoughnutChart;
