import CubeExtruded from "./CubeExtruded";
import { Text } from "@react-three/drei";
import * as THREE from "three";
import React, { useMemo } from "react";
import { useLoader, useThree } from "@react-three/fiber";

import { useTheme } from "../../../ThemeContext"; // Adjust the path as necessary

import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils";

import { TextureLoader, BoxGeometry, MeshStandardMaterial, Mesh } from "three";
import myTexture from "../../../assets/Imphenzia.png";

function adjustUVsToSinglePixel(geometry, u, v) {
  const uvs = geometry.attributes.uv.array;
  for (let i = 0; i < uvs.length; i += 2) {
    uvs[i] = u; // Set all U coordinates to target U
    uvs[i + 1] = v; // Set all V coordinates to target V
  }
  geometry.attributes.uv.needsUpdate = true;
}

const MergedMeshes = ({ geometries, material, ...props }) => {
  const mergedGeometry = useMemo(() => {
    const merged = mergeGeometries(geometries, false);
    if (!merged) {
      console.error("Geometries could not be merged");
      return null;
    }
    return merged;
  }, [geometries]);

  if (!mergedGeometry) return null;

  return <mesh geometry={mergedGeometry} material={material} {...props} />;
};

export default function BarchartMerged() {
  const { currentSettings } = useTheme();

  const textureAtlas = useLoader(TextureLoader, myTexture);

  let shape = new THREE.Shape();
  let angleStep = Math.PI * 0.5;
  let radius = 0.0;

  shape.absarc(0.5, 0.5, radius, angleStep * 0, angleStep * 1, false);
  shape.absarc(-0.5, 0.5, radius, angleStep * 1, angleStep * 2, false);
  shape.absarc(-0.5, -0.5, radius, angleStep * 2, angleStep * 3, false);
  shape.absarc(0.5, -0.5, radius, angleStep * 3, angleStep * 4, false);

  // Animate the depth of the ExtrudeGeometry

  const basepositions = [
    { x: -25, y: -10, z: 0 },
    { x: -10, y: -10, z: 0 },
    { x: 5, y: -10, z: 0 },
    { x: 20, y: -10, z: 0 },

    { x: -25, y: -20, z: 0 },
    { x: -10, y: -20, z: 0 },
    { x: 5, y: -20, z: 0 },
    { x: 20, y: -20, z: 0 },

    { x: -25, y: -30, z: 0 },
    { x: -10, y: -30, z: 0 },
    { x: 5, y: -30, z: 0 },
    { x: 20, y: -30, z: 0 },

    { x: -25, y: -37, z: 0 },
    { x: -10, y: -37, z: 0 },
    { x: 5, y: -37, z: 0 },
    { x: 20, y: -37, z: 0 },

    { x: -25, y: 0, z: 20 },
    { x: -10, y: 0, z: 20 },
    { x: 5, y: 0, z: 20 },
    { x: 20, y: 0, z: 20 },

    { x: -25, y: 0, z: 12 },
    { x: -10, y: 0, z: 12 },
    { x: 5, y: 0, z: 12 },
    { x: 20, y: 0, z: 12 },

    { x: -25, y: 0, z: 5 },
    { x: -10, y: 0, z: 5 },
    { x: 5, y: 0, z: 5 },
    { x: 20, y: 0, z: 5 },
  ];
  let positions = [];

  basepositions.forEach((position) => {
    for (let i = 0; i < 8; i++) {
      positions.push({
        x: position.x + i * 1.1,
        y: position.y,
        z: position.z,
      });
    }
  });

  // Initialize an array to hold the geometries
  let geometries = [];

  const text1 = `Sales` + "\u00A0".repeat(13);
  const text2 = `EPS` + "\u00A0".repeat(13);
  const text3 = `Dividend` + "\u00A0".repeat(7);
  const text4 = `Data` + "\u00A0".repeat(10);

  const hundredSpaces = "\u00A0".repeat(100);
  const severalLineBreaks = "\n".repeat(10);
  const floorBarsText = `${text1} ${hundredSpaces} ${text2} ${hundredSpaces} ${text3} ${hundredSpaces} ${text4} 
  ${severalLineBreaks} \n\n\n\n ${text1} ${hundredSpaces} ${text2} ${hundredSpaces} ${text3} ${hundredSpaces} ${text4} 
  ${severalLineBreaks} \n\n\n\n ${text1} ${hundredSpaces} ${text2} ${hundredSpaces} ${text3} ${hundredSpaces} ${text4} 
  ${severalLineBreaks} ${text1} ${hundredSpaces} ${text2} ${hundredSpaces} ${text3} ${hundredSpaces} ${text4}  `;

  const wallBarsText = `${text1} ${hundredSpaces} ${text2} ${hundredSpaces} ${text3} ${hundredSpaces} ${text4} 
  ${severalLineBreaks} ${text1} ${hundredSpaces} ${text2} ${hundredSpaces} ${text3} ${hundredSpaces} ${text4} 
  ${severalLineBreaks} ${text1} ${hundredSpaces} ${text2} ${hundredSpaces} ${text3} ${hundredSpaces} ${text4} `;

  // Loop through each position and create an extruded geometry
  positions.forEach((position) => {
    // Create the extruded geometry
    const extrudedGeometry = new THREE.ExtrudeGeometry(shape, {
      depth: Math.floor(Math.random() * 5) + 1,
      bevelEnabled: false,
    })
      .translate(position.x, position.y, position.z)
      .rotateX(-Math.PI / 2);

    geometries.push(extrudedGeometry);
  });

  for (let i = 0; i < geometries.length; i++) {
    adjustUVsToSinglePixel(geometries[i], Math.random(), Math.random());
  }

  const material = new MeshStandardMaterial({
    map: textureAtlas,

    metalness: 0.7,
    roughness: 0.1,
  });

  return (
    <>
      <MergedMeshes
        geometries={geometries}
        material={material}
        position={[0, 0.24, 0.8]}
      />
      <Text
        position={[1.5, 0.27, 28]}
        rotation={[-Math.PI / 2, 0, 0]}
        color={currentSettings.behindWallTextColor}
        fontSize={0.5}
      >
        {floorBarsText}
      </Text>
      <Text
        position={[1.5, 12, 0.3]}
        rotation={[0, 0, 0]}
        color={currentSettings.behindWallTextColor}
        fontSize={0.5}
      >
        {wallBarsText}
      </Text>
    </>
  );
}
