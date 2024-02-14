import { RoundedBox, Text } from "@react-three/drei";
export default function WallsAndFloor() {
  let width = 20;
  let height = 10;
  let depth = 12;
  let thickness = 0.25;

  /*GridScale factors muse be tuned to match the grid with the floor size for now*/

  /* Floor: */
  let gridScaleXFloor = 0.9;
  let gridScaleYFloor = (depth / width) * 0.8;
  let gridScaleZFloor = 1;

  /* Behind wall: */
  let gridScaleXBehindWall = (width / height) * 0.9;
  let gridScaleYBehindWall = 0.8;
  let gridScaleZBehindWall = 1;

  return (
    <>
      {/*Behind Wall*/}

      <RoundedBox
        args={[width, height, thickness]}
        position={[16, height / 2, 0]}
        radius={0.0}
        smoothness={4}
        receiveShadow={true}
        visible={true}
      >
        <meshStandardMaterial color="#ededed" metalness={0.5} roughness={0.1} />
        <Text
          position={[-8, 4.4, 0.2]}
          rotation={[0, 0, 0]}
          color={"#007bff"}
          fontSize={0.5}
        >
          Behind Wall
        </Text>
        <group
          scale={[
            gridScaleXBehindWall,
            gridScaleYBehindWall,
            gridScaleZBehindWall,
          ]}
        >
          <gridHelper
            args={[height, height, "#d9d9d9", "#d9d9d9"]}
            position={[0, 0, thickness / 2 + 0.01]}
            rotation={[Math.PI / 2, 0, 0]}
            visible={true}
          />
        </group>
      </RoundedBox>

      {/*Floor*/}
      <RoundedBox
        args={[width, depth, thickness]}
        position={[16, 0, depth / 2]}
        rotation={[-Math.PI / 2, 0, 0]}
        radius={0.0}
        smoothness={4}
        receiveShadow={true}
      >
        <meshStandardMaterial color="white" metalness={0.01} roughness={0.9} />
        <Text
          position={[-9, -5.5, 0.15]}
          rotation={[0, 0, 0]}
          color={"#007bff"}
          fontSize={0.6}
        >
          Floor
        </Text>
        <group scale={[gridScaleXFloor, gridScaleYFloor, gridScaleZFloor]}>
          <gridHelper
            args={[width * gridScaleXFloor, width * 0.5, "#d9d9d9", "#d9d9d9"]}
            position={[0, 0, thickness / 2 + 0.01]}
            rotation={[Math.PI / 2, 0, 0]}
            visible={true}
          />
        </group>
      </RoundedBox>

      {/*Left Wall*/}
      {
        <RoundedBox
          args={[depth, height, thickness]}
          position={[-width / 2, height / 2, depth / 2]}
          rotation={[0, -Math.PI / 2, 0]}
          radius={0.0}
          smoothness={4}
          receiveShadow={true}
          visible={false}
        >
          <meshStandardMaterial
            color="brown"
            metalness={0.01}
            roughness={0.01}
          />
          <Text
            position={[-9, 5.5, 0.15]}
            rotation={[0, 0, 0]}
            color={"white"}
            fontSize={0.6}
          >
            Floor
          </Text>
        </RoundedBox>
      }
    </>
  );
}
