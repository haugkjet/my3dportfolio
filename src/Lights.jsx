import { DirectionalLight, PointLight } from "three";

export default function Lights() {
  return (
    <>
      <pointLight
        position={[-5, 3, 5]}
        intensity={500}
        color="#fff"
        castShadow={true} // whether the light should cast shadows
        shadow-mapSize-width={1024} // width of the shadow map
        shadow-mapSize-height={1024} // height of the sh
      />

      <pointLight
        position={[5, 5, -4]}
        intensity={1000}
        color="#fff"
        castShadow={true} // whether the light should cast shadows
        shadow-mapSize-width={1024} // width of the shadow map
        shadow-mapSize-height={1024} // height of the sh
      />

      <pointLight
        position={[9, 7, 5]}
        intensity={1000}
        color="#fff"
        castShadow={true} // whether the light should cast shadows
        shadow-mapSize-width={1024} // width of the shadow map
        shadow-mapSize-height={1024} // height of the sh
      />
      <directionalLight
        position={[100, 300, 200]}
        rotation={[0, 0, 0]} // x, y, z
        intensity={5} // strength of the light
        color="#ffffff" // color of the light
        castShadow={true} // whether the light should cast shadows
        shadow-mapSize-width={128} // width of the shadow map
        shadow-mapSize-height={128} // height of the sh // whether the light should cast shadows
      />
      <directionalLight
        position={[-100, 300, 200]}
        rotation={[0, 0, 0]} // x, y, z
        intensity={5} // strength of the light
        color="#ffffff" // color of the light
        castShadow={true} // whether the light should cast shadows
        shadow-mapSize-width={128} // width of the shadow map
        shadow-mapSize-height={128} // height of the sh // whether the light should cast shadows
      />
    </>
  );
}
