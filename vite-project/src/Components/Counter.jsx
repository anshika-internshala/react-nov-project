import { useState } from "react";

function Counter() {
  //   let count = 0;
  const [count, setCount] = useState(0);

  function updateValue() {
    // count++;
    setCount((count) => count + 2); // 0+ 1 = 1
    setCount((count) => count + 1); // 0 + 1 = 1
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 2); // 0
    //console.log("count", count);

    // Batch Updates in React ====> one re-render
  }

  return (
    <div className="font-bold flex flex-col justify-center items-center h-screen">
      <h1>Counter Component</h1>
      <h1> {count}</h1>
      <button className="border m-4" onClick={updateValue}>
        Update Count
      </button>
    </div>
  );
}

export default Counter;
