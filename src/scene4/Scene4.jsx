import Barchart from "../Barchart";
import { RoundedBox, Text } from "@react-three/drei";
import MyPieChart from "../MyPieChart";
import MyLineChart from "../MyLineChart";
import { Environment, Sky } from "@react-three/drei";
import Lights from "../Lights";
import S4Lights from "./S4Lights";
import Ground from "../Ground";
import PanelExtruded from "./PanelExtruded";

export default function Scene3({ textureCube }) {
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

      <S4Lights />
      <Ground />

      {/*Behind row panels*/}
      <PanelExtruded position={[-10, 0.21, 2]} scale={[3, 3, 1]} />
      <PanelExtruded position={[-4, 0.21, 2]} scale={[3, 3, 1]} />
      <PanelExtruded position={[2, 0.21, 2]} scale={[3, 3, 1]} />

      {/*Behind row charts*/}
      <group scale={[0.5, 0.5, 0.5]}>
        <Barchart
          posx={21.5}
          posy={0.9}
          posz={4}
          length={3}
          roty={0}
          title={""}
          maxheight={5}
        />
      </group>
      <group scale={[0.3, 0.3, 0.3]}>
        <Barchart
          posx={17}
          posy={1.5}
          posz={4}
          length={7}
          roty={0}
          title={""}
          maxheight={10}
        />
      </group>
      <group scale={[0.3, 0.3, 0.3]}>
        <gridHelper
          args={[10, 10, "orange", "#ededed"]}
          position={[6.5, 1.5, 7]}
          rotation={[0, 0, 0]}
        />
      </group>

      <group scale={[0.3, 0.3, 0.3]}>
        <gridHelper
          args={[10, 10, "#ededed", "#ededed"]}
          position={[-13, 1.5, 7]}
          rotation={[0, 0, 0]}
        />
      </group>

      {/*Middle row panels*/}
      <PanelExtruded position={[-4, 0.21, 6]} scale={[3, 3, 1]} />
      <PanelExtruded position={[2, 0.21, 6]} scale={[3, 3, 1]} />
      <PanelExtruded position={[-4, 0.21, 9]} scale={[1, 2, 1]} />

      {/*Middle row charts*/}
      <MyPieChart
        data={data1}
        position={[2, 0.5, 6]}
        radius={1.2}
        title={"Sales"}
        depth={0.1}
      />

      <MyPieChart
        data={data1}
        position={[-4, 0.5, 6]}
        radius={1.2}
        title={"Sales"}
        depth={0.1}
      />

      <group scale={[0.3, 0.3, 0.3]}>
        <Barchart
          posx={24}
          posy={1.5}
          posz={-37}
          length={7}
          roty={Math.PI / 2}
          title={""}
          maxheight={10}
        />
      </group>

      {/*Front row panels*/}
      <PanelExtruded position={[-10, 0.21, 6]} scale={[3, 3, 1]} />
      <PanelExtruded position={[2, 0.21, 9]} scale={[2, 1, 1]} />

      {/*Front row charts*/}
      <MyPieChart
        data={data1}
        position={[2.5, 0.5, 9]}
        radius={0.3}
        title={"Sales"}
        depth={0.05}
      />
      <MyPieChart
        data={data1}
        position={[1.5, 0.5, 9]}
        radius={0.3}
        title={"EBITDA"}
        depth={0.05}
      />

      {/* Wall behind panels*/}
      <group rotation={[Math.PI / 2, 0, 0]}>
        <PanelExtruded position={[-8, -0.6, -5]} scale={[3, 3, 1]} />
      </group>

      <group rotation={[Math.PI / 2, 0, 0]}>
        <PanelExtruded position={[2, -0.6, -5]} scale={[3, 3, 1]} />
      </group>

      <group rotation={[Math.PI / 2, 0, 0]}>
        <PanelExtruded position={[-3, -0.6, -5]} scale={[3, 3, 1]} />
      </group>

      {/* Behind wall*/}
      <RoundedBox
        args={[22.5, 12, 0.25]}
        position={[-2, 6, -0.7]}
        radius={0.0}
        smoothness={4}
        receiveShadow={true}
      >
        <meshStandardMaterial color="#ededed" metalness={0.5} roughness={0.1} />
        <Text
          position={[-9, 4.5, 0.2]}
          rotation={[0, 0, 0]}
          color={"black"}
          fontSize={0.6}
        >
          Light test
        </Text>
      </RoundedBox>

      <group scale={[1, 0.4, 0.55]}>
        <gridHelper
          args={[20, 10, "orange", "white"]}
          position={[-2.5, 12, -1]}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>

      {/* Behind wall charts*/}
      <group rotation={[Math.PI / 2, 0, 0]}>
        <MyPieChart
          data={data1}
          position={[2, -0.25, -5.2]}
          radius={1.2}
          title={"Sales"}
          depth={0.1}
        />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <MyPieChart
          data={data1}
          position={[-8, -0.25, -5.2]}
          radius={1.2}
          title={"Dividend"}
          depth={0.1}
        />
      </group>

      <group scale={[0.3, 0.3, 0.3]}>
        <Barchart
          posx={14}
          posy={12.5}
          posz={-1.7}
          length={7}
          roty={0}
          maxheight={7}
        />
      </group>

      {/*Floor*/}
      <RoundedBox
        args={[22.5, 12, 0.25]}
        position={[-2, 0.1, 5]}
        rotation={[-Math.PI / 2, 0, 0]}
        radius={0.0}
        smoothness={4}
        receiveShadow={true}
      >
        <meshStandardMaterial color="white" metalness={0.01} roughness={0.01} />
        <Text
          position={[-9, -5.5, 0.15]}
          rotation={[0, 0, 0]}
          color={"white"}
          fontSize={0.6}
        ></Text>
      </RoundedBox>
    </>
  );
}
