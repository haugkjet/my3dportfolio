import Barchart from "../Barchart";
import { RoundedBox, Text } from "@react-three/drei";
import MyPieChart from "../MyPieChart";
import MyLineChart from "../MyLineChart";
import { Environment, Sky } from "@react-three/drei";
import Lights from "../Lights";
import Ground from "../Ground";

export default function Scene3Dashboard({ textureCube }) {
  const data1 = [
    { value: 75, color: "#007bff" },
    { value: 25, color: "#ffa04c" },
  ];

  const data2 = [
    { value: 12.5, color: "#007bff" },
    { value: 12.5, color: "#ffa04c" },
    { value: 25, color: "#007bff" },
    { value: 25, color: "#ffa04c" },
    { value: 25, color: "#007bff" },
  ];

  const data3 = [
    { value: 5, color: "#007bff" },
    { value: 10, color: "#ffa04c" },
    { value: 25, color: "#007bff" },
    { value: 50, color: "#ffa04c" },
    { value: 10, color: "#007bff" },
  ];

  const linedata = [
    { x: -10, y: 5 }, // Assuming all points lie on a flat plane (z=0)
    { x: -9, y: 6 },
    { x: -1, y: 6 },

    { x: 1, y: 6 },
    { x: 7, y: 5 },
  ];
  const linethickness = 0.1; // Thickness of the line

  return (
    <>
      {/*
  apartment: 'lebombo_1k.hdr',
  city: 'potsdamer_platz_1k.hdr',
  dawn: 'kiara_1_dawn_1k.hdr',
  forest: 'forest_slope_1k.hdr',
  lobby: 'st_fagans_interior_1k.hdr',
  night: 'dikhololo_night_1k.hdr',
  park: 'rooitou_park_1k.hdr',
  studio: 'studio_small_03_1k.hdr',
  sunset: 'venice_sunset_1k.hdr',
  warehouse: 'empty_warehouse_01_1k.hdr',
  */}

      {/*<Environment preset="studio" background blur={0.9} />*/}
      <Lights />
      <Ground />

      <Barchart
        posx={11}
        posy={0.3}
        posz={-1}
        length={15}
        roty={0}
        title={""}
        maxheight={7}
      />
      <RoundedBox
        args={[22.5, 12, 0.25]}
        position={[-2, 6, -0.7]}
        radius={0.0}
        smoothness={4}
      >
        <meshStandardMaterial color="white" metalness={0.0} roughness={0.3} />
        <Text
          position={[-9, 4.5, 0.2]}
          rotation={[0, 0, 0]}
          color={"grey"}
          fontSize={0.6}
        >
          Acme Corp
        </Text>
      </RoundedBox>
      <RoundedBox
        args={[22.5, 12, 0.25]}
        position={[-2, 0.1, 5]}
        rotation={[-Math.PI / 2, 0, 0]}
        radius={0.0}
        smoothness={4}
      >
        <meshStandardMaterial color="white" metalness={0.0} roughness={0.3} />
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
        radius={0.0}
        smoothness={4}
      >
        <meshStandardMaterial color="false" metalness={0.0} roughness={0.015} />
        <Text
          position={[-9, -5.5, 0.15]}
          rotation={[0, 0, 0]}
          color={"white"}
          fontSize={0.6}
        ></Text>
      </RoundedBox>

      <MyPieChart
        data={data1}
        position={[-6, 0.3, 3]}
        radius={1}
        title={"Dividend"}
        depth={0.1}
      />
      <MyPieChart
        data={data2}
        position={[-6, 0.3, 6]}
        radius={1}
        title={"EPS"}
        depth={0.1}
      />
      <MyPieChart
        data={data3}
        position={[-1, 0.3, 6]}
        radius={1.0}
        title={"Yield"}
        depth={0.1}
      />
      <group scale={[0.5, 0.5, 0.5]}>
        <Barchart
          posx={-5}
          posy={0.5}
          posz={-14}
          length={10}
          roty={-Math.PI / 2}
          title={"Bar11"}
          maxheight={5}
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
      <group position={[-1, 2, -0.6]}>
        <MyLineChart data={linedata} thickness={linethickness} />
      </group>
      <group
        position={[-13.1, 6, 5]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.5, 0.5, 0.5]}
      >
        <MyLineChart data={linedata} thickness={linethickness} />
      </group>
      <group scale={[1, 0.4, 0.55]}>
        <gridHelper
          args={[20, 10, "orange", "grey"]}
          position={[-2.5, 12, -1]}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
      <group scale={[0.2, 0.2, 0.2]}>
        <gridHelper
          args={[20, 10, "orange", "grey"]}
          position={[-55, 1.15, 40]}
          rotation={[0, 0, 0]}
        />
      </group>
      <group scale={[0.2, 0.2, 0.35]}>
        <gridHelper
          args={[20, 10, "orange", "grey"]}
          position={[30, 1.2, 15]}
          rotation={[0, 0, 0]}
        />
      </group>
      <group scale={[0.2, 0.2, 0.5]}>
        <gridHelper
          args={[20, 10, "orange", "grey"]}
          position={[-66, 40, 10]}
          rotation={[0, 0, Math.PI / 2]}
        />
      </group>
    </>
  );
}
