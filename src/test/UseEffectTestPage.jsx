import React, { useState, useEffect } from "react";

const UseEffectTestPage = () => {
  const [count, setCount] = useState(0);
  const [a, setA] = useState(0);

  // console.log(count);


  useEffect(() => {
    return () => {
      console.log("return___A");
    };
  }, [a]);

  useEffect(() => {
    console.log(`You clicked ${count} times`);
    return () => {
      console.log("return");
    };
  }, [count]);

  return (
    <div style={{ flex: 1 }}>
      <button onClick={() => setCount(count + 1)}> Click me</button>
    </div>
  );
};

export default UseEffectTestPage;
