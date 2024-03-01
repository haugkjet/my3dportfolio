import React, { useEffect, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import * as THREE from "three";

import { Chart, registerables } from "chart.js/auto";

// Register the components you want to use with Chart.js
// This only needs to be done once, so it's often placed outside of the component
Chart.register(...registerables);

export default function ChartjsPlane() {
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 400;
    canvas.height = 400;
    const ctx = canvas.getContext("2d");

    const chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Green", "Yellow"],
        datasets: [
          {
            label: "Number of Votes",
            data: [12, 19, 3, 5],
            backgroundColor: [
              "rgba(255, 99, 132, 0.5)",
              "rgba(54, 162, 235, 0.5)",
              "rgba(255, 206, 86, 0.5)",
              "rgba(75, 192, 192, 0.5)",
            ],
          },
        ],
      },
    });
    // Convert the rendered chart to a data URL
    const dataUrl = canvas.toDataURL();
    setImageUrl(dataUrl);

    // Create a THREE.Texture from the Chart.js canvas
  }, []);

  const texture = useLoader(THREE.TextureLoader, imageUrl ? [imageUrl] : []);

  // Use the texture on a plane
  return (
    <mesh position={[0, 0, 0]}>
      <planeGeometry args={[5, 5]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}
