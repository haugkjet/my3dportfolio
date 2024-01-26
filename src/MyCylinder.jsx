import * as THREE from "three";
export default function MyCylinder(textureCube) {
  const height = 9;
  const radiusTop = 1;
  const radiusBottom = 1;
  const radialSegments = 16;
  const heightSegments = 1;

  const positionc = [0, 4, 0]; // [x, y, z]
  const rotationc = [0, 0, -1.4]; // [x, y, z]
  const scalec = [0.15, 1, 0.15]; // [x, y, z]
  return (
    <>
      <mesh position={positionc} rotation={rotationc} scale={scalec}>
        <cylinderGeometry
          args={[
            radiusTop,
            radiusBottom,
            height,
            radialSegments,
            heightSegments,
          ]}
        />
        <meshStandardMaterial
          color="red"
          envMap={textureCube}
          transparent={true}
          opacity={0.4}
          metalness={0.9}
          roughness={0.1}
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  );
}
