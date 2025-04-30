import { useState, useEffect } from "react";

function useOnlineStatus() {
  const [onlineStatus, setOnlineStatus] = useState(true);

  // useEffect is called after the component is rendered (after the component mounts)
  useEffect(() => {
    const online = window.addEventListener("online", () => {
      setOnlineStatus(true);
    });

    const offline = window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    // return function inside useEffect is called when component is unmounted
    return () => {
      window.removeEventListener("online", online);
      window.removeEventListener("offline", offline);
    };
  });

  return onlineStatus;
}

export default useOnlineStatus;
