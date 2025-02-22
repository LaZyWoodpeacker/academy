import React from "react";
import ReactDOM from "react-dom";
import App from "./App.tsx";
import "./styles/index.css";
import "./styles/index.sass";

const rootView = document.getElementById("root");

if (rootView) {
  ReactDOM.render(<App />, rootView);
}
