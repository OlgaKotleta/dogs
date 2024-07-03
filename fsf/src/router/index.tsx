// import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Root } from "../Root";
import { LikePage } from "../pages/LikePage";
import { MainPage } from "../pages/MainPage";
import { ROUTES } from "./router";

const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <Root />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },

      {
        path: ROUTES.LIKE,
        element: <LikePage />,
      },
    ],
  },
]);

export default router;
