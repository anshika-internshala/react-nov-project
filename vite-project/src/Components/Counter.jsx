import { useState } from "react";

function Counter() {
  //   let count = 0;
  const [count, setCount] = useState(0);

  function updateValue() {
    // count++;
    setCount(count + 1);
    //console.log("count", count);
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
