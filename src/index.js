import React, { Profiler } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import SetStatePage from "./test/SetStatePage";
import UseEffectTestPage from "./test/UseEffectTestPage";
import ParentChildPage from "./test/ParentChildPage";
import HocTestPage from "./test/hoc/HocTestPage";

const callback = (id, phase, actualTime, baseTime, startTime, commitTime) => {
  let renderTime = commitTime - startTime;
  console.log(`${id}'s ${phase} phase:`);
  console.log(`Actual time: ${actualTime}`);
  console.log(`Base time: ${baseTime}`);
  // console.log(`Start time: ${startTime}`);
  // console.log(`Commit time: ${commitTime}`);
  console.log(`Render time: ${renderTime}`);
};

ReactDOM.render(
  <React.StrictMode>
    {/* <SetStatePage /> */}
    {/* <UseEffectTestPage /> */}
    {/* <Profiler id="Movies" onRender={callback}>
      <ParentChildPage />
    </Profiler> */}

    <HocTestPage/>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
