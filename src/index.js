import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <App />
    <div id="something">
      <h1 id="anything" style={{ color: "red" }}>
        First React Element
      </h1>
    </div>
  </>
);
