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
        } } style={{ background: '#8CABFF' }}>
       <Perf position="top-left" />      
       <OrbitControls />
       <gridHelper args={[50, 50, 0x35155D, '#512B81']} />

      <mesh position={[0, -0.01, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[50, 50, 1]}>

      <planeGeometry  attach="geometry" />
      <meshBasicMaterial color="#4477CE" side={DoubleSide} />
      </mesh>
      <Player/>


    </Canvas>
    </>

)}