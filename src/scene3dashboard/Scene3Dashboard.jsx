import Barchart from "../Barchart";
import { RoundedBox, Text } from "@react-three/drei";
import MyPieChart from "../MyPieChart";
import MyLineChart from "../MyLineChart";

export default function Scene3Dashboard({ textureCube }) {
  const data1 = [
    { value: 75, color: "red" },
    { value: 25, color: "green" },
  ];

  const data2 = [
    { value: 12.5, color: "pink" },
    { value: 12.5, color: "green" },
    { value: 25, color: "lightblue" },
    { value: 25, color: "orange" },
    { value: 25, color: "brown" },
  ];

  const data3 = [
    { value: 5, color: "pink" },
    { value: 10, color: "lightgreen" },
    { value: 25, color: "lightblue" },
    { value: 50, color: "darkgrey" },
    { value: 10, color: "cyan" },
  ];

  const linedata = [
    { x: -10, y: 5 }, // Assuming all points lie on a flat plane (z=0)
    { x: -9, y: 6 },
    { x: -1, y: 1 },

    { x: 1, y: 1 },
    { x: 7, y: 5 },
  ];
  const linethickness = 0.1; // Thickness of the line

  return (
    <>
      <RoundedBox
        args={[3, 0.05, 3]}
        position={[0, 0, 5]}
        radius={0.01}
        smoothness={0.1}
      >
        <meshStandardMaterial color="green" metalness={0.9} roughness={0.7} />
      </RoundedBox>

      <RoundedBox
        args={[2, 0.05, 4]}
        position={[-10, 0, 5]}
        radius={0.01}
        smoothness={0.1}
      >
        <meshStandardMaterial color="yellow" metalness={0.9} roughness={0.7} />
      </RoundedBox>
      <RoundedBox
        args={[4, 0.05, 2]}
        position={[5, 0, 5]}
        radius={0.01}
        smoothness={0.1}
      >
        <meshStandardMaterial color="red" metalness={0.9} roughness={0.7} />
      </RoundedBox>
      <RoundedBox
        args={[3, 0.05, 1]}
        position={[-12, 8, -0.7]}
        rotation={[Math.PI / 2, Math.PI / 2, 0]}
        radius={0.01}
        smoothness={0.1}
      >
        <meshStandardMaterial color="red" metalness={0.9} roughness={0.7} />
      </RoundedBox>

      <Barchart
        posx={10}
        posy={0}
        posz={-1}
        length={15}
        roty={0}
        title={"Sales 2024"}
        maxheight={10}
      />
      <RoundedBox
        args={[22.5, 12, 0.25]}
        position={[-2, 6, -0.7]}
        radius={0.1}
        smoothness={4}
      >
        <meshStandardMaterial
          color="white"
          transparent={true}
          opacity={0.7}
          metalness={0.3}
          roughness={0.015}
          castShadow={false}
          doubleSided={true}
        />
        <Text
          position={[-9, 4.5, 0.2]}
          rotation={[0, 0, 0]}
          color={"white"}
          fontSize={0.6}
        >
          Acme Corp
        </Text>
      </RoundedBox>
      <RoundedBox
        args={[22.5, 12, 0.25]}
        position={[-2, 0.1, 5]}
        rotation={[-Math.PI / 2, 0, 0]}
        radius={0.1}
        smoothness={4}
      >
        <meshStandardMaterial
          color="white"
          transparent={true}
          opacity={0.7}
          metalness={0.3}
          roughness={0.015}
          castShadow={false}
          doubleSided={true}
        />
        <Text
          position={[-9, -5.5, 0.15]}
          rotation={[0, 0, 0]}
          color={"white"}
          fontSize={0.6}
        ></Text>
      </RoundedBox>
      <RoundedBox
        args={[12, 12, 0.25]}
        position={[-13.35, 6, 5]}
        rotation={[0, Math.PI / 2, 0]}
        radius={0.1}
        smoothness={4}
      >
        <meshStandardMaterial
          color="white"
          transparent={true}
          opacity={0.7}
          metalness={0.3}
          roughness={0.015}
          castShadow={false}
          doubleSided={true}
        />
        <Text
          position={[-9, -5.5, 0.15]}
          rotation={[0, 0, 0]}
          color={"white"}
          fontSize={0.6}
        ></Text>
      </RoundedBox>

      <MyPieChart
        data={data1}
        position={[-6, 0.2, 3]}
        radius={1}
        title={"Dividend"}
        depth={0.5}
      />
      <MyPieChart
        data={data2}
        position={[-6, 0.4, 6]}
        radius={1}
        title={"EPS"}
        depth={0.2}
      />
      <MyPieChart
        data={data3}
        position={[1, 1, 6]}
        radius={1.5}
        title={"Yield"}
        depth={2}
      />
      <group scale={[0.5, 0.5, 0.5]}>
        <Barchart
          posx={-3}
          posy={0}
          posz={2}
          length={4}
          roty={0}
          title={"Bar11"}
          maxheight={3}
        />
      </group>
      <group scale={[0.3, 0.3, 0.3]}>
        <Barchart
          posx={30}
          posy={0}
          posz={-40}
          length={4}
          roty={Math.PI / 2}
          title={"Bar12"}
          maxheight={10}
        />
      </group>
      <group scale={[0.3, 0.3, 0.3]}>
        <Barchart
          posx={20}
          posy={0}
          posz={-42}
          length={15}
          roty={Math.PI / 2}
          title={"Bar12"}
          maxheight={30}
        />
      </group>
      <group position={[0, 2, -0.7]}>
        <MyLineChart data={linedata} thickness={linethickness} />
      </group>
      <group
        position={[-13.5, 2, 5]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.5, 0.5, 0.5]}
      >
        <MyLineChart data={linedata} thickness={linethickness} />
      </group>
      <group scale={[1, 0.5, 1]}>
        <gridHelper
          args={[20, 10, "orange", "grey"]}
          position={[-3, 10, 0 - 1]}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
      <group scale={[0.2, 0.2, 0.2]}>
        <gridHelper
          args={[20, 10, "orange", "grey"]}
          position={[-55, 0.1, 40]}
          rotation={[0, 0, 0]}
        />
      </group>
    </>
  );
}
