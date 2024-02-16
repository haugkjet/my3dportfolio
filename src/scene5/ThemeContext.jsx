import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext(); // Create a context

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false); // Example state

  const currentSettings = darkMode
    ? {
        theme: "dark",
        background: "black",
        chartcolor1: "red",
        chartcolor2: "green",
        linecolor: "orange",
        behindWallColor: "#000",
        behindWallTextColor: "#fff",
        behindWallGridColor1: "#fff",
        behindWallGridColor2: "#fff",
        floorColor: "#000",
        floorTextColor: "#fff",
        floorGridColor1: "#fff",
        floorGridColor2: "#fff",
        groundColor: "#000",
        extrudedPanelColor: "#000",
      } // Dark mode settings
    : {
        theme: "light",
        background: "#e7f3ff", // Light blue
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
        extrudedPanelColor: "fff",
      }; // Light mode settings

  return (
    <ThemeContext.Provider value={{ currentSettings, setDarkMode }}>
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
