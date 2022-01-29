import React, { useState, useEffect, memo } from "react";


const Child = (props) => {
  console.log(`render Child`);
  console.log(props);
  return <div>123</div>;
};

export default memo(Child)


