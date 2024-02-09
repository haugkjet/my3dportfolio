import Barchart from "../Barchart";
import { RoundedBox, Text } from "@react-three/drei";
import MyPieChart from "../MyPieChart";
import MyLineChart from "../MyLineChart";
import { Environment, Sky } from "@react-three/drei";
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
      <PanelExtruded position={[-10, 0.21, 5]} scale={[3, 3, 1]} />
      <PanelExtruded position={[2, 0.21, 5]} scale={[3, 3, 1]} />

      <PanelExtruded position={[2, 0.21, 9]} scale={[2, 1, 1]} />

      <Barchart
        posx={5}
        posy={0.3}
        posz={4}
        length={3}
        roty={0}
        title={""}
        maxheight={2}
      />
      <RoundedBox
        args={[22.5, 12, 0.25]}
        position={[-2, 6, -0.7]}
        radius={0.0}
        smoothness={4}
        receiveShadow={true}
      >
        <meshStandardMaterial color="white" metalness={0.0} roughness={0.01} />
        <Text
          position={[-9, 4.5, 0.2]}
          rotation={[0, 0, 0]}
          color={"white"}
          fontSize={0.6}
        >
          Light test
        </Text>
      </RoundedBox>
      <RoundedBox
        args={[22.5, 12, 0.25]}
        position={[-2, 0.1, 5]}
        rotation={[-Math.PI / 2, 0, 0]}
        radius={0.0}
        smoothness={4}
        receiveShadow={true}
      >
        <meshStandardMaterial color="white" metalness={0.0} roughness={0.01} />
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
