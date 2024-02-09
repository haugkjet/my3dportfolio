import { DirectionalLight, PointLight } from "three";

export default function Lights() {
  return (
    <>
      <directionalLight
        position={[10, 10, 10]}
        intensity={10} // strength of the light
        color="#ffffff" // color of the light
      />

      <directionalLight
        position={[-5, 5, 1]}
        intensity={5} // strength of the light
        color="#ffffff" // color of the light
      />
    </>
  );
}
