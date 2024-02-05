// Import necessary modules
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Text } from "@react-three/drei";

// A function to create a segment of the pie chart
const PieSegment = ({ radius, angle, angleStart, color, depth }) => {
  const ref = useRef();

  // Create the geometry for the segment
  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.lineTo(radius, 0);
    shape.absarc(0, 0, radius, 0, angle, false);
    shape.lineTo(0, 0);

    const extrudeSettings = {
      steps: 5,
      depth: depth,
      bevelEnabled: false,
      bevelThickness: 0.1,
      bevelSize: 0.1,
      bevelSegments: 1,
    };
    return new THREE.ExtrudeGeometry(shape, extrudeSettings);
  }, [radius, angle]);

  return (
    <mesh ref={ref} geometry={geometry} rotation={[Math.PI / 2, 0, angleStart]}>
      <meshStandardMaterial color={color} />
      <Text
        position={[radius * 0.5, 0.1, -0.1]}
        rotation={[0, Math.PI, 0]}
        color={0xffffff}
        fontSize={0.15}
      >
        10%
      </Text>
    </mesh>
  );
};

// The main component to display the pie chart
const MyPieChart = ({ data, position, radius, title, depth }) => {
  const total = useMemo(
    () => data.reduce((acc, val) => acc + val.value, 0),
    [data]
  );
  let angleStart = 0;

  return (
    <>
      <group position={position}>
        {data.map((segment, index) => {
          const segmentValue = (segment.value / total) * Math.PI * 2; // Calculate the angle for the segment
          const segmentComponent = (
            <PieSegment
              key={index}
              radius={radius}
              angle={segmentValue}
              angleStart={angleStart}
              color={segment.color}
              depth={depth}
            />
          );
          angleStart += segmentValue;
          return segmentComponent;
        })}
        <Text
          position={[0, -depth / 2 + 0.3, radius + 0.3]}
          rotation={[-Math.PI / 2, 0, 0]}
          color={0xffffff}
          fontSize={0.2 * radius}
        >
          {title}
        </Text>
      </group>
    </>
  );
};

export default MyPieChart;
