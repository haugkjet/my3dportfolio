import Barchart from "../Barchart";

export default function Scene1Chart({ textureCube }) {
  return (
    <>
      <Barchart posx={10} posy={0} posz={0} length={10} title={"Barchart 1"} />
      <Barchart posx={20} posy={0} posz={10} length={10} title={"Barchart 2"} />

      <Barchart posx={-20} posy={0} posz={10} length={7} title={"Barchart 3"} />
      <Barchart
        posx={30}
        posy={0}
        posz={-30}
        length={20}
        title={"Barchart 4"}
      />
      <Barchart
        posx={-30}
        posy={0}
        posz={-30}
        length={10}
        title={"Barchart 5"}
      />
      <Barchart posx={-5} posy={0} posz={40} length={30} title={"Barchart 6"} />
      <Barchart posx={45} posy={0} posz={30} length={10} title={"Barchart 7"} />
      <Barchart
        posx={55}
        posy={0}
        posz={-20}
        length={30}
        title={"Barchart 8"}
      />
      <Barchart posx={55} posy={0} posz={10} length={15} title={"Barchart 9"} />
      <Barchart posx={15} posy={0} posz={20} length={7} title={"Barchart 10"} />
    </>
  );
}
