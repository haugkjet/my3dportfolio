import PanelExtruded from "./components/PanelExtruded";

export default function PanelGrid({ baseposX, baseposY, baseposZ }) {
  let thickness = 0.25;

  return (
    <>
      <PanelExtruded
        position={[baseposX - 6, baseposY + thickness / 2, baseposZ + 4]}
        scale={[3, 3, 1]}
      />

      <PanelExtruded
        position={[baseposX, baseposY + thickness / 2, baseposZ + 4]}
        scale={[3, 3, 1]}
      />

      <PanelExtruded
        position={[baseposX + 6, baseposY + thickness / 2, baseposZ + 4]}
        scale={[3, 3, 1]}
      />

      <PanelExtruded
        position={[baseposX - 6, baseposY + thickness / 2, baseposZ + 8]}
        scale={[3, 3, 1]}
      />

      <PanelExtruded
        position={[baseposX, baseposY + thickness / 2, baseposZ + 8]}
        scale={[3, 3, 1]}
      />

      <PanelExtruded
        position={[baseposX + 6, baseposY + thickness / 2, baseposZ + 8]}
        scale={[3, 3, 1]}
      />
    </>
  );
}
