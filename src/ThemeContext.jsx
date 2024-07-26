import React, { createContext, useContext, useState } from "react";

import { useControls } from "leva";

const ThemeContext = createContext(); // Create a context

export const ThemeProvider = ({ children }) => {
  const { darkMode } = useControls({
    darkMode: {
      value: true,
      label: "Dark Mode",
    },
  });

  const currentSettings = darkMode
    ? {
        theme: "dark",
        background: "#00244c",
        fogcolor: "#00244c",
        chartcolor1: "#0062cc", // Blue
        chartcolor2: "#b27035", // Orange
        linecolor: "orange",
        behindWallColor: "#000",
        behindWallTextColor: "#fff",
        behindWallGridColor1: "#3b3b3b",
        behindWallGridColor2: "#3b3b3b",
        floorColor: "#000",
        floorTextColor: "#fff",
        floorGridColor1: "#3b3b3b",
        floorGridColor2: "#3b3b3b",
        groundColor: "#00244c",
        extrudedPanelColor: "#222222",
        extrudedPanelGridColor1: "orange",
        extrudedPanelGridColor2: "#636363",
      } // Dark mode settings
    : {
        theme: "light",
        background: "#e7f3ff", // Light blue
        fogcolor: "#e7f3ff",
        chartcolor1: "#007bff", // Blue
        chartcolor2: "#ffa04c", // Orange
        linecolor: "red",
        behindWallColor: "#ededed",
        behindWallTextColor: "#007bff",
        behindWallGridColor1: "#d9d9d9",
        behindWallGridColor2: "#d9d9d9",
        floorColor: "white",
        floorTextColor: "#007bff",
        floorGridColor1: "#d9d9d9",
        floorGridColor2: "#d9d9d9",
        groundColor: "#4fa7ff",
        extrudedPanelColor: "#ffffff",
        extrudedPanelGridColor1: "orange",
        extrudedPanelGridColor2: "#d9d9d9",
      }; // Light mode settings

  return (
    <ThemeContext.Provider value={{ currentSettings }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
