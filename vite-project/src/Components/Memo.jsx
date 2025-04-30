import { findPrime } from "../utils/findPrime";
import { useState, useMemo } from "react";

function Memo() {
  const [num, setNum] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const nthPrime = useMemo(() => findPrime(num), [num]);

  function toggleTheme() {
    setIsDarkTheme(!isDarkTheme);
  }

  return (
    <div
      className="w-56 h-56 border m-2"
      style={
        isDarkTheme ? { backgroundColor: "grey" } : { backgroundColor: "white" }
      }
    >
      <input
        type="number"
        className="border m-2"
        onChange={(e) => setNum(e.target.value)}
      ></input>
      <h1 className="m-2">nth Prime: {nthPrime}</h1>
      <button className="border m-2" onClick={toggleTheme}>
        Toggle
      </button>
    </div>
  );
}

export default Memo;

// nth prime number ---- 1
