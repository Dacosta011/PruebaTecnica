import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Exercise1 from "./Pages/exercise1.tsx";
import Exercise2 from "./Pages/exercise2.tsx";
import Exercise3 from "./Pages/exercise3.tsx";
import Exercise4 from "./Pages/exercise4.tsx";
import Modal from "react-modal";

Modal.setAppElement("#root");

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/ano_bisiesto", element: <Exercise1 /> },
  { path: "/fibonacci", element: <Exercise2 /> },
  { path: "/listados_dinamicos", element: <Exercise3 /> },
  { path: "/crud", element: <Exercise4 /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
