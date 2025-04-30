import { useState, useRef } from "react";

function Ref() {
  let x = 0;
  const [y, setY] = useState(0);

  const z = useRef(0);

  function updateX() {
    x = x + 1;
    console.log("x: ", x);
  }

  function updateY() {
    setY(y + 1);
  }

  function updateZ() {
    z.current = z.current + 1;
    console.log("z", z.current);
  }

  return (
    <div className="w-56 h-56 border m-2">
      <h1>useRef Hook</h1>
      <h1>X: {x}</h1>
      <button className="border m-2" onClick={updateX}>
        Update X
      </button>
      <h1>Y: {y}</h1>
      <button className="border m-2" onClick={updateY}>
        Update Y
      </button>
      <h1>Z: {z.current}</h1>
      <button className="border m-2" onClick={updateZ}>
        Update Z
      </button>
    </div>
  );
}

export default Ref;
