import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";

const App = createBrowserRouter([
  {
    path: `${process.env.PUBLIC_URL}/`,
    element: <Home />,
  },
  // {
  //   path: `${process.env.PUBLIC_URL}/movie/:id`,
  //   element: <Detail />,
  // },
]);

export default App;
