import * as THREE from "three";

import React, { useRef, useEffect } from "react";

import { Text } from "@react-three/drei";

export default function CubeExtruded({
  position,
  value,
  text,
  color,
  textureCube,
}) {
  let shape = new THREE.Shape();
  let angleStep = Math.PI * 0.5;
  let radius = 0.05;

  shape.absarc(0.5, 0.5, radius, angleStep * 0, angleStep * 1, false);
  shape.absarc(-0.5, 0.5, radius, angleStep * 1, angleStep * 2, false);
  shape.absarc(-0.5, -0.5, radius, angleStep * 2, angleStep * 3, false);
  shape.absarc(0.5, -0.5, radius, angleStep * 3, angleStep * 4, false);

  const geometryRef = useRef();

  // Animate the depth of the ExtrudeGeometry
  useEffect(() => {
    const startTime = Date.now();
    const duration = 1000; // Animation duration in milliseconds

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1); // Ensure progress is capped at 1

      // Interpolate depth from 0 to the specified value
      const interpolatedDepth = value * progress;

      // Create a new ExtrudeGeometry with updated depth
      const updatedGeometry = new THREE.ExtrudeGeometry(shape, {
        depth: interpolatedDepth,
        bevelEnabled: false,
      });

      // Update the depth property of the ExtrudeGeometry
      geometryRef.current.geometry = updatedGeometry;

      if (progress < 1) {
        requestAnimationFrame(animate);
        console.log(progress, "Animating");
      }
    };
    animate();
  }, [value]);

  const initialGeometry = new THREE.ExtrudeGeometry(shape, {
    depth: 0,
    bevelEnabled: false,
  });

  return (
    <>
      <mesh
        geometry={initialGeometry}
        ref={geometryRef}
        position={position}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1, 1, 1]}
      >
        <meshStandardMaterial
          color={color}
          envMap={textureCube}
          transparent={true}
          opacity={0.6}
          metalness={0.9}
          roughness={0.1}
        />
        <Text
          position={[0, -0.61, 0.3]}
          rotation={[Math.PI / 2, 0, 0]}
          color={0x000000}
          fontSize={0.3}
        >
          {value}
        </Text>
        <Text
          position={[0, -0.91, 0.001]}
          rotation={[0, 0, 0]}
          color={0x000000}
          fontSize={0.3}
        >
          {value}
        </Text>
      </mesh>
    </>
  );
}
