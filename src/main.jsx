import React from "react";
import ReactDOM from "react-dom/client";
import App, {loader as AppLoader} from "./routes/App.route.jsx";
import ErrorPage from "./pages/Error404.page.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Portofolio from "./routes/Portofolio.route.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: AppLoader,
    children: [
      {
        path: "portos/:portoId",
        element: <Portofolio />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>,
);
