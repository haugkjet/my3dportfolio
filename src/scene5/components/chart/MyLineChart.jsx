import React, { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { Box, Points } from "@react-three/drei";

// Component to render the line
const Line = ({ points, thickness }) => {
  const path = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3(
      points.map((point) => new THREE.Vector3(...point))
    );
    return curve;
  }, [points]);

  const tubeGeometry = useMemo(
    () => new THREE.TubeGeometry(path, 10, thickness, 3, false),
    [path, thickness]
  );

  return (
    <group>
      <mesh geometry={tubeGeometry}>
        <meshStandardMaterial color={"red"} />
      </mesh>
    </group>
  );
};

// Main component to display the line chart
const MyLineChart = ({ data, thickness }) => {
  const points = useMemo(() => data.map((d) => [d.x, d.y, d.z || 0]), [data]);

  return <Line points={points} thickness={thickness} />;
};

export default MyLineChart;
