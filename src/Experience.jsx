import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls} from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { DoubleSide } from "three";
import Player from './Player'

export default function Experience() {
    return (
        <>

<Canvas shadows
        camera={ {
            fov: 45,
            near: 0.1,
            far: 200,
            position: [ 2.5, 4, 6 ]
        } } style={{ background: 'lightblue' }}>
       <Perf position="top-left" />      
       <OrbitControls />

       <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[50, 50, 1]}>
      {/*
        The thing that gives the mesh its shape
        In this case the shape is a flat plane
      */}
      <planeGeometry  attach="geometry" />
      <meshBasicMaterial color="green" side={DoubleSide} />
      </mesh>
      <Player/>


    </Canvas>
    </>

)}