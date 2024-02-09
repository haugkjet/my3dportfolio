import { DirectionalLight, PointLight } from "three";

export default function S4Lights() {
  return (
    <>
      <directionalLight
        position={[-15, 10, 15]}
        intensity={2}
        color="#ffffff"
        castShadow={true}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={100}
        shadow-camera-top={20}
        shadow-camera-right={20}
        shadow-camera-bottom={-20}
        shadow-camera-left={-20}
      />
      <pointLight
        position={[3, 5, 5]}
        intensity={20}
        color="#ffffff"
        castShadow={false}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={100}
        shadow-camera-top={20}
        shadow-camera-right={20}
        shadow-camera-bottom={-20}
        shadow-camera-left={-20}
      />
    </>
  );
}
