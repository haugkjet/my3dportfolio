import React, { useRef } from "react";

import * as THREE from "three";

const PieChartSlice = ({ radius, startAngle, endAngle, color }) => {
  const sliceRef = useRef();

  const geometry = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(
      Math.cos(startAngle) * radius,
      Math.sin(startAngle) * radius,
      0
    ),
    new THREE.Vector3(
      Math.cos(endAngle) * radius,
      Math.sin(endAngle) * radius,
      0
    ),
  ]);

  return (
    <mesh geometry={geometry} ref={sliceRef}>
      <meshStandardMaterial
        attach="material"
        color={color}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

const PieChart = ({ data }) => {
  const pieChartRef = useRef();

  const total = data.reduce((sum, slice) => sum + slice.value, 0);

  let cumulativeAngle = 0;

  return (
    <group ref={pieChartRef}>
      {data.map((slice) => {
        const startAngle = cumulativeAngle;
        const endAngle = cumulativeAngle + (slice.value / total) * Math.PI * 2;

        cumulativeAngle = endAngle;

        return (
          <PieChartSlice
            key={slice.id}
            radius={1}
            startAngle={startAngle}
            endAngle={endAngle}
            color={slice.color}
          />
        );
      })}
    </group>
  );
};

export default PieChart;
