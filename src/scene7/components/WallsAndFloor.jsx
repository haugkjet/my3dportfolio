import { RoundedBox, Text, Html } from "@react-three/drei";
import { useTheme } from "../../ThemeContext"; // Adjust the path as necessary

export default function WallsAndFloor({
  baseposX,
  baseposY,
  baseposZ,
  width,
  height,
  depth,
  thickness,
}) {
  /*GridScale factors muse be tuned to match the grid with the floor size for now*/

  const { currentSettings } = useTheme();

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
        position={[baseposX, baseposY + height / 2, baseposZ]}
        radius={0.0}
        smoothness={4}
        receiveShadow={true}
        visible={true}
      >
        <Html
          position={[-width / 2, height / 2, 0]}
          // Allows positioning in 3D space but doesn't follow the camera
        >
          <div
            style={{
              padding: "10px",
              background: "black",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              fontFamily: '"Roboto", sans-serif', // Using Roboto font
              fontWeight: "bold", // Ensure text is bold
            }}
          >
            <h1
              style={{
                fontSize: "1.2em",
                color: "#a9a9a9",
                margin: "0 0 20px 0",
              }}
            >
              Welcome
            </h1>
            <p style={{ fontSize: "1.0em", margin: 0, color: "#afafaf" }}>
              Annual results 2024
            </p>
          </div>
        </Html>

        <meshStandardMaterial
          color={currentSettings.behindWallColor}
          transparent={true}
          opacity={0.5}
          metalness={0.7}
          roughness={0.01}
        />
        <Text
          position={[
            -baseposX / 2,
            baseposY + height / 2 - 0.8,
            baseposZ + 0.2,
          ]}
          rotation={[0, 0, 0]}
          color={currentSettings.behindWallTextColor}
          fontSize={0.5}
        >
          Results 2024
        </Text>
        <group
          scale={[
            gridScaleXBehindWall,
            gridScaleYBehindWall,
            gridScaleZBehindWall,
          ]}
        >
          <gridHelper
            args={[
              height,
              height,
              currentSettings.behindWallGridColor1,
              currentSettings.behindWallGridColor2,
            ]}
            position={[0, 0, thickness / 2 + 0.01]}
            rotation={[Math.PI / 2, 0, 0]}
            visible={true}
          />
        </group>
      </RoundedBox>

      {/*Floor*/}
      <RoundedBox
        args={[width, depth, thickness]}
        position={[baseposX, baseposY, baseposZ + depth / 2]}
        rotation={[-Math.PI / 2, 0, 0]}
        radius={0.0}
        smoothness={4}
        receiveShadow={true}
      >
        <meshStandardMaterial
          color={currentSettings.floorColor}
          transparent={true}
          opacity={0.7}
          metalness={0.1}
          roughness={0.01}
        />
        <Text
          position={[0, -depth / 2 + 1, thickness / 2 + 0.01]}
          rotation={[0, 0, 0]}
          color={currentSettings.floorTextColor}
          fontSize={0.7}
        >
          Report 2024
        </Text>
        <group scale={[gridScaleXFloor, gridScaleYFloor, gridScaleZFloor]}>
          <gridHelper
            args={[
              width * gridScaleXFloor,
              width * 0.5,
              currentSettings.floorGridColor1,
              currentSettings.floorGridColor2,
            ]}
            position={[0, 0, thickness / 2 + 0.01]}
            rotation={[Math.PI / 2, 0, 0]}
            visible={true}
          />
        </group>
      </RoundedBox>
      {/*Left Wall skip for now*/}
      {/* <RoundedBox
        args={[height, depth, thickness]}
        position={[
          baseposX - width / 2,
          baseposY + height / 2,
          baseposZ + depth / 2,
        ]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        radius={0.0}
        smoothness={4}
        receiveShadow={true}
      >
        <meshStandardMaterial
          color="white"
          transparent={true}
          opacity={0.5}
          metalness={0.01}
          roughness={0.9}
        />
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
            rotation={[Math.PI / 2, Math.PI / 2, 0]}
            visible={true}
          />
        </group>
      </RoundedBox>*/}
    </>
  );
}
