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

  // Example geometries you want to merge
  const geometries = [
    new THREE.ExtrudeGeometry(shape, {
      depth: Math.floor(Math.random() * 5) + 1,
      bevelEnabled: false,
    })
      .translate(0, 0, 0)
      .rotateX(-Math.PI / 2),
    new THREE.ExtrudeGeometry(shape, {
      depth: Math.floor(Math.random() * 5) + 1,
      bevelEnabled: false,
    })
      .translate(1.1, 0, 0)
      .rotateX(-Math.PI / 2),
    new THREE.ExtrudeGeometry(shape, {
      depth: Math.floor(Math.random() * 5) + 1,
      bevelEnabled: false,
    })
      .translate(2.2, 0, 0)
      .rotateX(-Math.PI / 2),
    new THREE.ExtrudeGeometry(shape, {
      depth: Math.floor(Math.random() * 5) + 1,
      bevelEnabled: false,
    })
      .translate(3.3, 0, 0)
      .rotateX(-Math.PI / 2),
    new THREE.ExtrudeGeometry(shape, {
      depth: Math.floor(Math.random() * 5) + 1,
      bevelEnabled: false,
    })
      .translate(4.4, 0, 0)
      .rotateX(-Math.PI / 2),
    new THREE.ExtrudeGeometry(shape, {
      depth: Math.floor(Math.random() * 5) + 1,
      bevelEnabled: false,
    })
      .translate(5.5, 0, 0)
      .rotateX(-Math.PI / 2),
  ];

  adjustUVsToSinglePixel(geometries[0], 0.01, 0.875); // Example coordinates
  adjustUVsToSinglePixel(geometries[1], 0.02, 0.775); // Example coordinates
  adjustUVsToSinglePixel(geometries[2], 0.3, 0.175); // Example coordinates
  adjustUVsToSinglePixel(geometries[3], 0.4, 0.275); // Example coordinates
  adjustUVsToSinglePixel(geometries[4], 0.3, 0.275); // Example coordinates
  adjustUVsToSinglePixel(geometries[5], 0.2, 0.775); // Example coordinates

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
        position={[0, 0, 0]}
      />
    </>
  );
}
