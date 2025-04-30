import { useState, useEffect } from "react";

function Profile(props) {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(1);

  function updateCount() {
    setCount(count + 1);
  }

  useEffect(() => {
    console.log("useEffect called");

    return () => {
      console.log("component is unmounted in useEffect");
    };
  }, [count]);

  return (
    <>
      <h1>Profile Component</h1>
      <p>{props.name}</p>
      <h1>Count: {count}</h1>
      <h1>Count1: {count1}</h1>
      <button className="border bg-blue-50" onClick={updateCount}>
        UpdateCount
      </button>
    </>
  );
}

export default Profile;
