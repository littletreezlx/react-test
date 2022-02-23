import React, { useState, useEffect, memo } from "react";
import Child from "./Child";
import "./Child.css";

const ParentChildPage = () => {
  console.log("render_start");
  const [count, setCount] = useState(0);
  // const [a, setA] = useState(0);

  // useEffect(() => {
  //   return () => {
  //     console.log("return___A");
  //   };
  // }, [a]);

  useEffect(() => {
    console.log(`You clicked ${count} times`);
  }, [count]);

  return (
    <div style={{ flex: 1 }}>
      <button id="btn" onClick={() => setCount(count + 1)}>
        {" "}
        Click me
      </button>
      <Child className="Child" count={count} a={1} b={2} />
    </div>
  );
};

export default ParentChildPage;
