import React from "react";
import * as THREE from "three";

// A function to create the shape for extrusion
const createPieSegmentShape = (
  innerRadius,
  outerRadius,
  startAngle,
  endAngle,
  gapSize
) => {
  const adjustedStartAngle = startAngle + gapSize / 2;
  const adjustedEndAngle = endAngle - gapSize / 2;

  const shape = new THREE.Shape();
  const startOuter = new THREE.Vector2(
    Math.cos(startAngle) * outerRadius,
    Math.sin(startAngle) * outerRadius
  );
  const endOuter = new THREE.Vector2(
    Math.cos(endAngle) * outerRadius,
    Math.sin(endAngle) * outerRadius
  );
  shape.moveTo(startOuter.x, startOuter.y);
  shape.absarc(0, 0, outerRadius, startAngle, endAngle);
  /* shape.lineTo(
    endOuter.x + Math.cos(endAngle) * innerRadius,
    endOuter.y + Math.sin(endAngle) * innerRadius
  );*/
  shape.absarc(0, 0, innerRadius, endAngle, startAngle, true);
  shape.lineTo(startOuter.x, startOuter.y);
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

// The full PieChart component
const PieDoughnutChart = ({ data }) => {
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
        outerRadius={2}
        startAngle={startAngle}
        endAngle={endAngle}
        color={item.color}
      />
    );
  });
  return <group rotation={[-Math.PI / 2, 0, 0]}>{segments}</group>;
};

export default PieDoughnutChart;
