import { RoundedBox } from "@react-three/drei";
import { BakeShadows, SoftShadows, OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";

import Lights from "../Lights";
import Ground from "../Ground";

import Barchart from "../Barchart";

export default function Scene1Chart() {
  return (
    <>
      <Perf position="top-left" />
      <OrbitControls dampingFactor={0.9} />

      <Ground />
      <Lights />
      <RoundedBox
        position={[-60, 25, 0]}
        rotation={[0, Math.PI / 2, 0]}
        args={[150, 50, 0.3]}
      >
        <meshStandardMaterial
          color="white"
          transparent={true}
          opacity={0.25}
          metalness={0.9}
          roughness={0.9}
        />
        {/*<gridHelper
          args={[length + 3, 10, "orange", "grey"]}
          position={[0, posy, 0.2]}
          rotation={[-Math.PI / 2, roty, 0]}
          />*/}
      </RoundedBox>
      <RoundedBox
        position={[15, 25, -75]}
        rotation={[0, 0, 0]}
        args={[150, 50, 0.3]}
      >
        <meshStandardMaterial
          color="white"
          transparent={true}
          opacity={0.5}
          metalness={0.9}
          roughness={0.9}
        />
        {/*<gridHelper
          args={[length + 3, 10, "orange", "grey"]}
          position={[0, posy, 0.2]}
          rotation={[-Math.PI / 2, roty, 0]}
          />*/}
      </RoundedBox>
      <Barchart
        posx={10}
        posy={0}
        posz={0}
        length={10}
        roty={0}
        title={"Barchart 1"}
        maxheight={10}
      />
      <Barchart
        posx={20}
        posy={0}
        posz={10}
        length={10}
        roty={0}
        title={"Barchart 2"}
        maxheight={10}
      />

      <Barchart
        posx={-20}
        posy={0}
        posz={10}
        length={7}
        roty={0}
        title={"Barchart 3"}
        maxheight={10}
      />
      <Barchart
        posx={30}
        posy={0}
        posz={-30}
        length={20}
        roty={0}
        title={"Barchart 4"}
        maxheight={10}
      />
      <Barchart
        posx={-5}
        posy={0}
        posz={-40}
        length={10}
        roty={0}
        title={"Barchart 5"}
        maxheight={10}
      />
      <Barchart
        posx={25}
        posy={0}
        posz={40}
        length={20}
        roty={0}
        title={"Barchart 6"}
        maxheight={10}
      />
      <Barchart
        posx={-15}
        posy={0}
        posz={15}
        length={10}
        roty={Math.PI / 2}
        title={"Barchart 7"}
        maxheight={10}
      />
      <Barchart
        posx={55}
        posy={0}
        posz={-50}
        length={30}
        roty={0}
        title={"Barchart 8"}
        maxheight={10}
      />
      <Barchart
        posx={5}
        posy={0}
        posz={-50}
        length={15}
        roty={Math.PI / 2}
        title={"Barchart 9"}
        maxheight={10}
      />
      <Barchart
        posx={35}
        posy={0}
        posz={20}
        length={7}
        roty={0}
        title={"Barchart 10"}
        maxheight={10}
      />
      {/* <Barchart
        posx={70}
        posy={0}
        posz={-100}
        length={150}
        roty={Math.PI / 2}
        title={"Barchart 20"}
  />*/}
    </>
  );
}
