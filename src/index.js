import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import SetStatePage from "./test/SetStatePage";
import UseEffectTestPage from "./test/UseEffectTestPage";
import ParentChildPage from "./test/ParentChildPage";

ReactDOM.render(
  <React.StrictMode>
    {/* <SetStatePage /> */}
    {/* <UseEffectTestPage /> */}
    <ParentChildPage />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
