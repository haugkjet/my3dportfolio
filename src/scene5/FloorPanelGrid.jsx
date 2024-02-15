import { Text } from "@react-three/drei";
import PanelExtruded from "./components/PanelExtruded";
import Barchart from "./components/chart/Barchart";
import MyPieChart from "./components/chart/MyPieChart";
import MyLineChart from "./components/chart/MyLineChart";

export default function FloorPanelGrid({ baseposX, baseposY, baseposZ }) {
  let thickness = 0.25;

  let offsetX = [-5, 0, 5];
  let offsetZ = [3, 7, 10];

  const data1 = [
    { value: 75, color: "#007bff" },
    { value: 25, color: "#ffa04c" },
  ];

  const data2 = [
    { value: 35, color: "#007bff" },
    { value: 45, color: "#ffa04c" },
  ];

  const data3 = [
    { value: 20, color: "#007bff" },
    { value: 80, color: "#ffa04c" },
  ];

  const linedata = [
    { x: -10, y: 1 }, // Assuming all points lie on a flat plane (z=0)
    { x: -9, y: 3 },
    { x: -1, y: 6 },

    { x: 1, y: 7 },
    { x: 7, y: 8 },
  ];
  const linedata2 = [
    { x: -10, y: 1 }, // Assuming all points lie on a flat plane (z=0)
    { x: -9, y: 3 },
    { x: -5, y: 6 },

    { x: 1, y: 7 },
    { x: 7, y: 8 },
  ];

  const linethickness = 0.1; // Thickness of the line

  return (
    <>
      <PanelExtruded
        position={[
          baseposX + offsetX[0],
          baseposY + thickness / 2,
          baseposZ + offsetZ[0],
        ]}
        scale={[3, 3, 1]}
      />

      <group
        position={[
          baseposX + offsetX[0] + 0.4,
          baseposY + thickness + 0.08,
          baseposZ + offsetZ[0] + 1.5,
        ]}
        scale={[0.15, 0.25, 0.15]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <MyLineChart data={linedata} thickness={linethickness} />
      </group>

      <group scale={[0.3, 0.3, 0.3]}>
        <gridHelper
          args={[10, 10, "orange", "#d9d9d9"]}
          position={[
            (baseposX + offsetX[0]) / 0.3,
            (baseposY + thickness) / 0.3 + 0.26,
            (baseposZ + offsetZ[0]) / 0.3,
          ]}
          rotation={[0, 0, 0]}
        />
        <Barchart
          posx={(-baseposX + offsetX[2]) / 0.3 + 4}
          posy={(baseposY + thickness) / 0.3 + 0.26}
          posz={(baseposZ + offsetZ[0]) / 0.3 - 2}
          length={8}
          roty={0}
          title={""}
          maxheight={10}
        />
      </group>

      <PanelExtruded
        position={[
          baseposX + offsetX[1],
          baseposY + thickness / 2,
          baseposZ + offsetZ[0],
        ]}
        scale={[3, 3, 1]}
      />

      <group scale={[0.3, 0.3, 0.3]}>
        <gridHelper
          args={[10, 10, "orange", "#d9d9d9"]}
          position={[
            (baseposX + offsetX[1]) / 0.3,
            (baseposY + thickness) / 0.3 + 0.26,
            (baseposZ + offsetZ[0]) / 0.3,
          ]}
          rotation={[0, 0, 0]}
        />
      </group>

      <group
        position={[
          baseposX + offsetX[2] + 0.4,
          baseposY + thickness + 0.08,
          baseposZ + offsetZ[0] + 1.5,
        ]}
        scale={[0.15, 0.25, 0.15]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <MyLineChart data={linedata2} thickness={linethickness} />
      </group>

      <MyPieChart
        data={data3}
        position={[
          baseposX + offsetX[1],
          baseposY + thickness / 2 + 0.26,
          baseposZ + offsetZ[0],
        ]}
        radius={1.2}
        title={"Sales"}
        depth={0.1}
      />

      <PanelExtruded
        position={[
          baseposX + offsetX[2],
          baseposY + thickness / 2,
          baseposZ + offsetZ[0],
        ]}
        scale={[3, 3, 1]}
      />

      <group scale={[0.3, 0.3, 0.3]}>
        <gridHelper
          args={[10, 10, "orange", "#d9d9d9"]}
          position={[
            (baseposX + offsetX[2]) / 0.3,
            (baseposY + thickness) / 0.3 + 0.26,
            (baseposZ + offsetZ[0]) / 0.3,
          ]}
          rotation={[0, 0, 0]}
        />

        <Barchart
          posx={(-baseposX + offsetX[0]) / 0.3 + 4}
          posy={(baseposY + thickness) / 0.3 + 0.26}
          posz={(baseposZ + offsetZ[0]) / 0.3 - 2}
          length={8}
          roty={0}
          title={""}
          maxheight={10}
        />
      </group>

      <PanelExtruded
        position={[
          baseposX + offsetX[0],
          baseposY + thickness / 2,
          baseposZ + offsetZ[1],
        ]}
        scale={[3, 3, 1]}
      />

      <group scale={[0.3, 0.3, 0.3]}>
        <gridHelper
          args={[10, 10, "orange", "#d9d9d9"]}
          position={[
            (baseposX + offsetX[0]) / 0.3,
            (baseposY + thickness) / 0.3 + 0.26,
            (baseposZ + offsetZ[1]) / 0.3,
          ]}
          rotation={[0, 0, 0]}
        />
      </group>

      <PanelExtruded
        position={[
          baseposX + offsetX[1],
          baseposY + thickness / 2,
          baseposZ + offsetZ[1],
        ]}
        scale={[3, 3, 1]}
      />

      {/*Middle row charts*/}
      <MyPieChart
        data={data1}
        position={[
          baseposX + offsetX[0],
          baseposY + thickness / 2 + 0.26,
          baseposZ + offsetZ[1],
        ]}
        radius={1.2}
        title={"EPS"}
        depth={0.1}
      />
      <group scale={[0.3, 0.3, 0.3]}>
        <gridHelper
          args={[10, 10, "orange", "#d9d9d9"]}
          position={[
            (baseposX + offsetX[1]) / 0.3,
            (baseposY + thickness) / 0.3 + 0.26,
            (baseposZ + offsetZ[1]) / 0.3,
          ]}
          rotation={[0, 0, 0]}
        />

        <Barchart
          posx={(-baseposX + offsetX[1]) / 0.3 + 4}
          posy={(baseposY + thickness) / 0.3 + 0.26}
          posz={(baseposZ + offsetZ[1]) / 0.3 - 2}
          length={8}
          roty={0}
          title={""}
          maxheight={5}
        />
      </group>

      <PanelExtruded
        position={[
          baseposX + offsetX[2],
          baseposY + thickness / 2,
          baseposZ + offsetZ[1],
        ]}
        scale={[3, 3, 1]}
      />

      {/*<group scale={[0.3, 0.3, 0.3]}>
        <gridHelper
          args={[10, 10, "orange", "#d9d9d9"]}
          position={[
            (baseposX + offsetX[2]) / 0.3,
            (baseposY + thickness) / 0.3 + 0.26,
            (baseposZ + offsetZ[1]) / 0.3,
          ]}
          rotation={[0, 0, 0]}
        />
        </group>*/}

      <MyPieChart
        data={data2}
        position={[
          baseposX + offsetX[2],
          baseposY + thickness / 2 + 0.26,
          baseposZ + offsetZ[1],
        ]}
        radius={1.2}
        title={"Sales"}
        depth={0.1}
      />

      <PanelExtruded
        position={[
          baseposX + offsetX[0],
          baseposY + thickness / 2,
          baseposZ + offsetZ[2],
        ]}
        scale={[2, 1, 1]}
      />
      <PanelExtruded
        position={[
          baseposX + offsetX[1],
          baseposY + thickness / 2,
          baseposZ + offsetZ[2],
        ]}
        scale={[2, 1, 1]}
      />
      <PanelExtruded
        position={[
          baseposX + offsetX[2],
          baseposY + thickness / 2,
          baseposZ + offsetZ[2],
        ]}
        scale={[2, 1, 1]}
      />

      <Text
        position={[
          baseposX + offsetX[0],
          baseposY + thickness + 0.1,
          baseposZ + offsetZ[2],
        ]}
        rotation={[-Math.PI / 2, 0, 0]}
        color={"#007bff"}
        fontSize={0.3}
      >
        300 EUR
      </Text>

      <Text
        position={[
          baseposX + offsetX[1],
          baseposY + thickness + 0.1,
          baseposZ + offsetZ[2],
        ]}
        rotation={[-Math.PI / 2, 0, 0]}
        color={"#ffa04c"}
        fontSize={0.3}
      >
        5000 NOK
      </Text>
      <Text
        position={[
          baseposX + offsetX[2],
          baseposY + thickness + 0.1,
          baseposZ + offsetZ[2],
        ]}
        rotation={[-Math.PI / 2, 0, 0]}
        color={"#007bff"}
        fontSize={0.3}
      >
        5000 USD
      </Text>
    </>
  );
}
