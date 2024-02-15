import { RoundedBox, Text } from "@react-three/drei";

import { BakeShadows, SoftShadows, OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";

import Barchart from "./components/chart/Barchart";
import MyPieChart from "./components/chart/MyPieChart";
import MyLineChart from "./components/chart/MyLineChart";

import WallsAndFloor from "./components/WallsAndFloor";

import PanelExtruded from "./components/PanelExtruded";
import FloorPanelGrid from "./FloorPanelGrid";

import Lights from "./env/Lights";
import Ground from "./env/Ground";

export default function Scene5({ textureCube }) {
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
    { x: -10, y: 1 }, // Assuming all points lie on a flat plane (z=0)
    { x: -9, y: 3 },
    { x: -1, y: 6 },

    { x: 1, y: 7 },
    { x: 7, y: 8 },
  ];
  const linethickness = 0.1; // Thickness of the line

  let width = 35;
  let height = 20;
  let depth = 22;
  let thickness = 0.25;

  let baseposX = 25;
  let baseposY = 0;
  let baseposZ = 0;

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
      <BakeShadows />
      <SoftShadows size={25} samples={50} focus={0.01} />
      <Perf position="top-left" />
      <OrbitControls dampingFactor={0.9} />

      <Lights />
      <Ground />

      {/*New scene*/}

      <WallsAndFloor
        baseposX={baseposX}
        baseposY={baseposY}
        baseposZ={baseposZ}
        width={width}
        height={height}
        depth={depth}
        thickness={0.25}
      />

      <FloorPanelGrid
        baseposX={baseposX - width / 2 + 10}
        baseposY={baseposY}
        baseposZ={baseposZ}
      ></FloorPanelGrid>

      <FloorPanelGrid
        baseposX={baseposX - width / 2 + 10 + 15}
        baseposY={baseposY}
        baseposZ={baseposZ}
      ></FloorPanelGrid>

      <FloorPanelGrid
        baseposX={baseposX - width / 2 + 10 + 15}
        baseposY={baseposY}
        baseposZ={baseposZ + 10}
      ></FloorPanelGrid>

      <FloorPanelGrid
        baseposX={baseposX - width / 2 + 10}
        baseposY={baseposY}
        baseposZ={baseposZ + 10}
      ></FloorPanelGrid>

      {/*End New scene*/}

      {/*Below will be phased out*/}

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
          args={[10, 10, "orange", "#d9d9d9"]}
          position={[6.5, 1.5, 7]}
          rotation={[0, 0, 0]}
        />
      </group>
      <group
        position={[2.3, 0.45, 3]}
        scale={[0.15, 0.25, 0.15]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <MyLineChart data={linedata} thickness={linethickness} />
      </group>

      <group scale={[0.3, 0.3, 0.3]}>
        <gridHelper
          args={[10, 10, "#d9d9d9", "#d9d9d9"]}
          position={[-13, 1.5, 7]}
          rotation={[0, 0, 0]}
        />
      </group>

      {/*Middle row panels*/}
      <PanelExtruded position={[-4, 0.21, 6]} scale={[3, 3, 1]} />
      <PanelExtruded position={[2, 0.21, 6]} scale={[3, 3, 1]} />
      <PanelExtruded position={[-10, 0.21, 6]} scale={[3, 3, 1]} />

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
      <group scale={[0.3, 0.3, 0.3]}>
        <gridHelper
          args={[10, 10, "#d9d9d9", "#d9d9d9"]}
          position={[-33, 1.5, 20]}
          rotation={[0, 0, 0]}
        />
      </group>

      {/*Front row panels*/}

      <PanelExtruded position={[-10, 0.21, 9]} scale={[2, 1, 1]} />
      <PanelExtruded position={[-4, 0.21, 9]} scale={[2, 1, 1]} />
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
      <group scale={[0.3, 0.3, 0.3]}>
        <Barchart
          posx={15}
          posy={1.5}
          posz={30}
          length={4}
          roty={0}
          title={""}
          maxheight={3}
        />
      </group>
      <Text
        position={[-10, 0.42, 9]}
        rotation={[-Math.PI / 2, 0, 0]}
        color={"#007bff"}
        fontSize={0.3}
      >
        3500 USD
      </Text>

      {/* Wall behind panels*/}
      <group rotation={[Math.PI / 2, 0, 0]}>
        <PanelExtruded
          position={[-10, -0.6, -4]}
          scale={[3, 3, 1]}
          color={"#b9b9b9"}
        />
      </group>

      <group rotation={[Math.PI / 2, 0, 0]}>
        <PanelExtruded
          position={[-4, -0.6, -4]}
          scale={[3, 3, 1]}
          color={"#b9b9b9"}
        />
      </group>

      <group rotation={[Math.PI / 2, 0, 0]}>
        <PanelExtruded
          position={[1, -0.6, -4]}
          scale={[3, 3, 1]}
          color={"#b9b9b9"}
        />
      </group>

      <group rotation={[Math.PI / 2, 0, 0]}>
        <PanelExtruded
          position={[1, -0.6, -7]}
          scale={[2, 1, 1]}
          color={"#b9b9b9"}
        />
      </group>

      <group rotation={[Math.PI / 2, 0, 0]}>
        <PanelExtruded
          position={[-4, -0.6, -7]}
          scale={[2, 1, 1]}
          color={"#b9b9b9"}
        />
      </group>

      <group rotation={[Math.PI / 2, 0, 0]}>
        <PanelExtruded
          position={[-10, -0.6, -7]}
          scale={[2, 1, 1]}
          color={"#b9b9b9"}
        />
      </group>

      {/* Behind wall*/}
      <RoundedBox
        args={[20, 10, 0.25]}
        position={[-4, 5, -0.7]}
        radius={0.0}
        smoothness={4}
        receiveShadow={true}
      >
        <meshStandardMaterial color="#ededed" metalness={0.5} roughness={0.1} />
        <Text
          position={[-8, 4.2, 0.2]}
          rotation={[0, 0, 0]}
          color={"#007bff"}
          fontSize={0.5}
        >
          Gondar AS
        </Text>
      </RoundedBox>

      <group scale={[0.95, 0.4, 0.5]}>
        <gridHelper
          args={[20, 10, "#d9d9d9", "#d9d9d9"]}
          position={[-4.2, 12, -1]}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>

      {/* Behind wall charts*/}
      <group rotation={[Math.PI / 2, 0, 0]}>
        <MyPieChart
          data={data1}
          position={[1, -0.25, -4.2]}
          radius={1.2}
          title={"Sales"}
          depth={0.1}
        />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <MyPieChart
          data={data1}
          position={[-10, -0.25, -4.2]}
          radius={1.2}
          title={"Dividend"}
          depth={0.1}
        />
      </group>

      <group scale={[0.3, 0.3, 0.3]}>
        <Barchart
          posx={17}
          posy={9.5}
          posz={-1.7}
          length={7}
          roty={0}
          maxheight={7}
        />
      </group>

      <group scale={[0.15, 0.15, 0.15]}>
        <Barchart
          posx={-2}
          posy={44}
          posz={-3.1}
          length={7}
          roty={0}
          maxheight={4}
        />
      </group>

      <Text
        position={[-4.1, 7, -0.36]}
        rotation={[0, 0, 0]}
        color={"#007bff"}
        fontSize={0.3}
      >
        5000 NOK
      </Text>

      <Text
        position={[-10.1, 7, -0.36]}
        rotation={[0, 0, 0]}
        color={"#ffa04c"}
        fontSize={0.3}
      >
        7000 EUR
      </Text>

      {/*Floor*/}
      <RoundedBox
        args={[20, 12, 0.25]}
        position={[-4, 0.1, 5]}
        rotation={[-Math.PI / 2, 0, 0]}
        radius={0.0}
        smoothness={4}
        receiveShadow={true}
      >
        <meshStandardMaterial color="white" metalness={0.01} roughness={0.9} />
        <Text
          position={[-9, -5.5, 0.15]}
          rotation={[0, 0, 0]}
          color={"white"}
          fontSize={0.6}
        ></Text>
      </RoundedBox>

      <group scale={[0.95, 0.4, 0.5]}>
        <gridHelper
          args={[20, 10, "#d9d9d9", "#d9d9d9"]}
          position={[-4.2, 0.6, 10]}
          rotation={[0, 0, 0]}
        />
      </group>

      {/*Left Wall*/}
      {/*<RoundedBox
        args={[12.5, 12, 0.25]}
        position={[-13.5, 6, 5.5]}
        rotation={[0, -Math.PI / 2, 0]}
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
</RoundedBox>*/}
    </>
  );
}
