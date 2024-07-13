import PanelExtruded from "./PanelExtruded";
import PieDoughnutChart from "./chart/PieDoughnutChart";

import { useTheme } from "../../ThemeContext"; // Adjust the path as necessary

export default function DataCell({ position, panelscale }) {
  const { currentSettings } = useTheme();
  // Example usage
  const datapiedough = [
    { label: "Milk", value: 25.5, color: currentSettings.chartcolor1 },
    { label: "Bread", value: 13.3, color: currentSettings.chartcolor2 },
    { label: "Vegies", value: 16.7, color: currentSettings.chartcolor1 },
    { label: "Meat", value: 19.5, color: currentSettings.chartcolor2 },

    // Add more segments as needed
  ];
  return (
    <group position={position}>
      <PanelExtruded
        color={currentSettings.extrudedPanelColor}
        position={[0, 0, 0]}
        scale={panelscale}
      />
      <PieDoughnutChart
        data={datapiedough}
        outerRadius={0.5}
        innerRadius={0.2}
        gapSize={0.02}
        title={"Groceries"}
        scale={panelscale}
      ></PieDoughnutChart>
    </group>
  );
}
