import * as THREE from "three";
import React from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { SRGBColorSpace } from "three";
import { Environment } from "@react-three/drei";

import Lights from "./Lights";
import Ground from "./Ground";

import Cube from "./Cube";
import MyCylinder from "./MyCylinder";

export default function Experience() {
  const loader = new THREE.CubeTextureLoader();
  loader.setPath("https://threejs.org/examples/textures/cube/pisa/");

  const textureCube = loader.load([
    "px.png",
    "nx.png",
    "py.png",
    "ny.png",
    "pz.png",
    "nz.png",
  ]);

  return (
    <>
      <Canvas
        camera={{
          fov: 50,
          near: 0.1,
          far: 200,
          position: [14, 6, 11],
        }}
        style={{ background: "#d9d9d9" }}
        onCreated={({ gl }) => {
          // Enable sRGBEncoding
          //gl.outputColorSpace = SRGBColorSpace;

          // Alternatively, you can use LinearEncoding if sRGBEncoding is not desired
          gl.outputColorSpace = SRGBColorSpace;
          gl.shadowMap.enabled = true;

          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 2.0;
          gl.shadowMap.type = THREE.PCFSoftShadowMap;
        }}
      >
        <Environment preset="forest"></Environment>
        <Perf position="top-left" />
        <OrbitControls dampingFactor={0.9} />

        <Lights />
        <Ground />
        <MyCylinder textureCube={textureCube} />

        <Cube
          position={[-4, 0.51, 0]}
          scale={[1, 1, 1]}
          text={"Cube1"}
          color={"red"}
          textureCube={textureCube}
        />
        <Cube
          position={[-2.5, 0.51, 0]}
          scale={[1, 1, 1]}
          text={"Cube2"}
          color={"lightgreen"}
          textureCube={textureCube}
        />
        <Cube
          position={[-1, 0.51, 0]}
          scale={[1, 1, 1]}
          text={"Cube3"}
          color={"cyan"}
          textureCube={textureCube}
        />
        <Cube
          position={[0.5, 0.51, 0]}
          scale={[1, 1, 1]}
          text={"Cube4"}
          color={"brown"}
          textureCube={textureCube}
        />
        <Cube
          position={[2, 0.51, 0]}
          scale={[1, 1, 1]}
          text={"Cube5"}
          color={"purple"}
          textureCube={textureCube}
        />
        <Cube
          position={[3.5, 0.51, 0]}
          scale={[1, 1, 1]}
          text={"Cube6"}
          color={"green"}
          textureCube={textureCube}
        />

        <Cube
          position={[-4, 0.51, 2]}
          scale={[1, 1, 1]}
          text={"Cube1"}
          color={"red"}
          textureCube={textureCube}
        />
        <Cube
          position={[-2.5, 0.51, 2]}
          scale={[1, 1, 1]}
          text={"Cube2"}
          color={"lightgreen"}
          textureCube={textureCube}
        />
        <Cube
          position={[-1, 0.51, 2]}
          scale={[1, 1, 1]}
          text={"Cube3"}
          color={"cyan"}
          textureCube={textureCube}
        />
        <Cube
          position={[0.5, 0.51, 2]}
          scale={[1, 1, 1]}
          text={"Cube4"}
          color={"brown"}
          textureCube={textureCube}
        />
        <Cube
          position={[2, 0.51, 2]}
          scale={[1, 1, 1]}
          text={"Cube5"}
          color={"purple"}
          textureCube={textureCube}
        />
        <Cube
          position={[3.5, 0.51, 2]}
          scale={[1, 1, 1]}
          text={"Cube6"}
          color={"green"}
          textureCube={textureCube}
        />

        <Cube
          position={[-4, 2.51, 0]}
          scale={[1, 1, 1]}
          text={"Cube1"}
          color={"red"}
          textureCube={textureCube}
        />
        <Cube
          position={[-2.5, 2.51, 0]}
          scale={[1, 1, 1]}
          text={"Cube2"}
          color={"lightgreen"}
          textureCube={textureCube}
        />
        <Cube
          position={[-1, 2.51, 0]}
          scale={[1, 1, 1]}
          text={"Cube3"}
          color={"cyan"}
          textureCube={textureCube}
        />
        <Cube
          position={[0.5, 2.51, 0]}
          scale={[1, 1, 1]}
          text={"Cube4"}
          color={"brown"}
          textureCube={textureCube}
        />
        <Cube
          position={[2, 2.51, 0]}
          scale={[1, 1, 1]}
          text={"Cube5"}
          color={"purple"}
          textureCube={textureCube}
        />
        <Cube
          position={[3.5, 2.51, 0]}
          scale={[1, 1, 1]}
          text={"Cube6"}
          color={"green"}
          textureCube={textureCube}
        />
      </Canvas>
    </>
  );
}
