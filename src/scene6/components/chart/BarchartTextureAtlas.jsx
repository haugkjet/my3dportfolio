import React, { useMemo } from "react";
import { useLoader, useThree } from "@react-three/fiber";
import { TextureLoader, BoxGeometry, MeshStandardMaterial, Mesh } from "three";
import myTexture from "../../../assets/Imphenzia.png";

// Utility function to adjust UVs
const adjustUVsForCube = (geometry, atlasSectionIndex, totalSections) => {
  const uvs = geometry.attributes.uv.array;
  const sectionWidth = 1 / totalSections;
  const uStart = sectionWidth * atlasSectionIndex;
  const uEnd = uStart + sectionWidth;

  for (let i = 0; i < uvs.length; i += 2) {
    uvs[i] = (uvs[i] % 1) * sectionWidth + uStart;
  }

  geometry.attributes.uv.needsUpdate = true;
};

function adjustUVsToSinglePixel(geometry, u, v) {
  const uvs = geometry.attributes.uv.array;
  for (let i = 0; i < uvs.length; i += 2) {
    uvs[i] = u; // Set all U coordinates to target U
    uvs[i + 1] = v; // Set all V coordinates to target V
  }
  geometry.attributes.uv.needsUpdate = true;
}

const BarChartTextureAtlas = ({ texturePath }) => {
  const textureAtlas = useLoader(TextureLoader, myTexture);

  const { scene } = useThree();

  useMemo(() => {
    // Define two cubes
    const cubeGeometries = [
      new BoxGeometry(1, 1, 1),
      new BoxGeometry(1, 2, 1),
      new BoxGeometry(1, 3, 1),
      new BoxGeometry(1, 5, 1),
      new BoxGeometry(1, 6, 1),
      new BoxGeometry(1, 7, 1),
      new BoxGeometry(1, 8, 1),
    ];

    // Adjust UVs for each cube
    // adjustUVsForCube(cubeGeometries[0], 0, 2); // First half for the first cube
    // adjustUVsForCube(cubeGeometries[1], 1, 2); // Second half for the second cube
    adjustUVsToSinglePixel(cubeGeometries[0], 0.01, 0.875); // Example coordinates
    adjustUVsToSinglePixel(cubeGeometries[1], 0.02, 0.775); // Example coordinates
    adjustUVsToSinglePixel(cubeGeometries[2], 0.3, 0.175); // Example coordinates
    adjustUVsToSinglePixel(cubeGeometries[3], 0.4, 0.275); // Example coordinates
    adjustUVsToSinglePixel(cubeGeometries[4], 0.4, 0.275); // Example coordinates
    adjustUVsToSinglePixel(cubeGeometries[5], 0.3, 0.475); // Example coordinates
    adjustUVsToSinglePixel(cubeGeometries[6], 1.2, 0.675); // Example coordinates

    const material = new MeshStandardMaterial({
      map: textureAtlas,
      metalness: 0.2,
      roughness: 0.1,
    });

    // Create and position meshes for the cubes
    const cubes = cubeGeometries.map((geometry, index) => {
      const mesh = new Mesh(geometry, material);
      mesh.position.x = (index - 0.5) * 1.2; // Position cubes apart
      mesh.position.y = 1; // Position cubes apart
      mesh.position.z = 2; // Position cubes apart
      return mesh;
    });

    // Add cubes to the scene
    cubes.forEach((cube) => scene.add(cube));

    // Cleanup function to remove cubes from the scene when the component unmounts
    return () => cubes.forEach((cube) => scene.remove(cube));
  }, [scene, textureAtlas]);

  return null; // This component does not render anything itself
};

export default BarChartTextureAtlas;
