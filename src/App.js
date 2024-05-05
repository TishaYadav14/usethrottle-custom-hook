import React, { useEffect, useState } from "react";
import "./App.css";
import useThrottle from "./Hooks/use-throttle";

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  const throttledHandleResize = useThrottle(handleResize, 500);

  useEffect(() => {
    // window.addEventListener("resize", handleResize);
    window.addEventListener("resize", throttledHandleResize);

    return () => {
      // window.removeEventListener("resize", handleResize);
      window.removeEventListener("resize", throttledHandleResize);
    };
  },[]);


  return <div className="App">
    Window Size :- {windowSize.width} X {windowSize.height}
  </div>;
}

export default App;
