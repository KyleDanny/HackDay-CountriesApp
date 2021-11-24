import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import mapboxgl from "mapbox-gl";
mapboxgl.accessToken = "pk.eyJ1Ijoia3lsZWRhbm55IiwiYSI6ImNrdnI0bndyYTA0aHozMGx5cXo5ZzV0OGYifQ.qLzQLDWvg8gp0wAIkNeq_A";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
