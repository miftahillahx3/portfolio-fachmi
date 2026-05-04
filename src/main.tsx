import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// TypeScript may complain about side-effect CSS imports if no declaration exists.
// Ignore the next line so the build can import the stylesheet at runtime.
// @ts-ignore
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);