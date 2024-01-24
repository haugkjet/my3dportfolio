import { PointLight } from "three";

export default function Lights() {
  return (
    <>
      <pointLight
        position={[-5, 3, 3]}
        intensity={100}
        color="#fff"
        castShadow={true}
      />
      ;
      <pointLight
        position={[5, 5, -4]}
        intensity={200}
        color="#fff"
        castShadow={true}
      />
      ;
      <pointLight
        position={[9, 7, 1]}
        intensity={200}
        color="#fff"
        castShadow={true}
      />
      ;
    </>
  );
}
