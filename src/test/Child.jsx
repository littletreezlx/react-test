import React, { useState, useEffect, memo } from "react";

const Child = ({ count, ...extra }) => {
  console.log(`render Child`);
  console.log(extra);

  // console.log(props);
  return <div>{count}</div>;
};

export default memo(Child);
