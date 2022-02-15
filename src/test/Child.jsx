import React, { useState, useEffect, memo } from "react";

const Child = ({ count }) => {
  console.log(`render Child`);
  // console.log(props);
  return <div>{count}</div>;
};

export default memo(Child);
