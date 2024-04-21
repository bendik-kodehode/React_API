import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryProvider } from "./contexts/QueryContext";
import "./index.css";

import Dashboard from "./components/Dashboard/Dashboard";
import LandingPage from "./pages/LandingPage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import ResultsPage from "./pages/ResultsPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <LandingPage/>,
        index: true // Default page
      },
      {
        path: "/results/:query",
        element: <ResultsPage/>,
      },
      {
        path: "/details/:id",
        element: <DetailsPage/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryProvider>
      <RouterProvider router={router}/>
    </QueryProvider>
  </React.StrictMode>
);
