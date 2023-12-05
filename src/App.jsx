import { useState } from "react";
import "./App.css";
import "./Experience";
import Experience from "./Experience";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Experience />
    </>
  );
}

export default App;
