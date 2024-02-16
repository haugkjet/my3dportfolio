// ToggleThemeButton.js

import React from "react";
import { useTheme } from "./ThemeContext";

export default function ToggleThemeButton() {
  const { setDarkMode, darkMode } = useTheme();

  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      Toggle {darkMode ? "Light" : "Dark"} Mode
    </button>
  );
}
