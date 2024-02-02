import Barchart from "../Barchart";

export default function Scene1Chart({ textureCube }) {
  return (
    <>
      <Barchart
        posx={10}
        posy={0}
        posz={0}
        length={10}
        roty={0}
        title={"Barchart 1"}
      />
      <Barchart
        posx={20}
        posy={0}
        posz={10}
        length={10}
        roty={0}
        title={"Barchart 2"}
      />

      <Barchart
        posx={-20}
        posy={0}
        posz={10}
        length={7}
        roty={0}
        title={"Barchart 3"}
      />
      <Barchart
        posx={30}
        posy={0}
        posz={-30}
        length={20}
        roty={0}
        title={"Barchart 4"}
      />
      <Barchart
        posx={-5}
        posy={0}
        posz={-40}
        length={10}
        roty={0}
        title={"Barchart 5"}
      />
      <Barchart
        posx={25}
        posy={0}
        posz={40}
        length={20}
        roty={0}
        title={"Barchart 6"}
      />
      <Barchart
        posx={-15}
        posy={0}
        posz={15}
        length={10}
        roty={Math.PI / 2}
        title={"Barchart 7"}
      />
      <Barchart
        posx={55}
        posy={0}
        posz={-50}
        length={30}
        roty={0}
        title={"Barchart 8"}
      />
      <Barchart
        posx={5}
        posy={0}
        posz={-50}
        length={15}
        roty={Math.PI / 2}
        title={"Barchart 9"}
      />
      <Barchart
        posx={35}
        posy={0}
        posz={20}
        length={7}
        roty={0}
        title={"Barchart 10"}
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
