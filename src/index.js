import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "uikit/dist/css/uikit.min.css";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";

// Fix: Suppress ResizeObserver errors
window.addEventListener("error", (e) => {
  if (e.message.includes("ResizeObserver")) {
    e.preventDefault();
    return false;
  }
});

// Initialize UIkit
UIkit.use(Icons);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>  // Remove if error persists
  <App />
  // </React.StrictMode>
);

reportWebVitals();
