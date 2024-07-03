import { RouterProvider } from "react-router-dom";
// import './global.css';
// import React from "react";
// import { ROUTES } from "./router/router";
import router from "./router/index";

export const App = () => {
  return <RouterProvider router={router} />;
};
