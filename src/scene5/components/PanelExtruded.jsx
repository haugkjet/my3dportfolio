import * as THREE from "three";
import React, { useRef, useEffect } from "react";

export default function PanelExtruded({ position, scale, color }) {
  {
    // Givs interesting shape on bar
    //let shape = new THREE.Shape();
    //let angleStep = Math.PI * 1.5;
    //let radius = 0.025;

    let shape = new THREE.Shape();
    let angleStep = Math.PI * 0.5;
    let radius = 0.0;

    shape.absarc(0.5, 0.5, radius, angleStep * 0, angleStep * 1, false);
    shape.absarc(-0.5, 0.5, radius, angleStep * 1, angleStep * 2, false);
    shape.absarc(-0.5, -0.5, radius, angleStep * 2, angleStep * 3, false);
    shape.absarc(0.5, -0.5, radius, angleStep * 3, angleStep * 4, false);

    // Animate the depth of the ExtrudeGeometry

    const initialGeometry = new THREE.ExtrudeGeometry(shape, {
      depth: 0.2,
      bevelEnabled: false,
      bevelSegments: 2,
      steps: 2,
      bevelSize: 0.01,
      bevelThickness: 0.01,
    });

    return (
      <group>
        <mesh
          geometry={initialGeometry}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={scale}
          position={position}
          castShadow={true}
          receiveShadow={true}
        >
          <meshStandardMaterial
            color={color}
            metalness={0.1}
            roughness={0.01}
          />
        </mesh>
      </group>
    );
  }
}
