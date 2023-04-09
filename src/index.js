import React from "react";
import ReactDOM from "react-dom";
// import ReactDOM from "react-dom/client";
// import { RouterProvider } from "react-router-dom";
import App from "./App";
/* 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <RouterProvider router={App} />
  // </React.StrictMode>
);
*/
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
