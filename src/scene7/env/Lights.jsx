import { RoundedBox } from "@react-three/drei";

export default function Lights() {
  return (
    <>
      <directionalLight
        position={[-15, 10, 15]}
        intensity={10}
        color="#ffffff"
        castShadow={false}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={30}
        shadow-camera-top={20}
        shadow-camera-right={20}
        shadow-camera-bottom={-20}
        shadow-camera-left={-20}
      />
      {/*<RoundedBox position={[-15, 10, 15]}></RoundedBox>*/}
      <directionalLight
        position={[15, 10, -10]}
        intensity={5}
        color="#ffffff"
        castShadow={false}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={10}
        shadow-camera-top={20}
        shadow-camera-right={20}
        shadow-camera-bottom={-20}
        shadow-camera-left={-20}
      />

      <directionalLight
        position={[-0, -1, 1]}
        intensity={10}
        color="#ffffff"
        castShadow={false}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={10}
        shadow-camera-top={20}
        shadow-camera-right={20}
        shadow-camera-bottom={-20}
        shadow-camera-left={-20}
      />
      <directionalLight
        position={[-0, -1, -1]}
        intensity={5}
        color="#ffffff"
        castShadow={false}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={10}
        shadow-camera-top={20}
        shadow-camera-right={20}
        shadow-camera-bottom={-20}
        shadow-camera-left={-20}
      />
    </>
  );
}
