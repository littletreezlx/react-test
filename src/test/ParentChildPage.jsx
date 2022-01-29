import React, { useState, useEffect, memo } from "react";
import Child from "./Child";
import './Child.css';

export default () => {
  const [count, setCount] = useState(0);
  const [a, setA] = useState(0);

  useEffect(() => {
    return () => {
      console.log("return___A");
    };
  }, [a]);

  useEffect(() => {
    console.log(`You clicked ${count} times`);
  }, [count]);


  return (
    <div style={{ flex: 1 }}>
      <button onClick={() => setCount(count + 1)}> Click me</button>
      <Child className="Child"/>
    </div>
  );
};

