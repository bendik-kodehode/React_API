import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryProvider } from "./contexts/QueryContext";
import "./index.css";

import LandingPage from "./pages/LandingPage/LandingPage";
import DetailsPage from "./pages/DetailsPage";
import ResultsPage from "./pages/ResultsPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/results/:query",
    element: <ResultsPage/>,
  },
  {
    path: "/details/:id",
    element: <DetailsPage/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryProvider>
      <RouterProvider router={router}/>
    </QueryProvider>
  </React.StrictMode>
);
