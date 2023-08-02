import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.route.jsx";
import ErrorPage from "./pages/Error404.page.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Portofolio, {
  loader as PortofolioLoader,
  action as ActPorto,
} from "./routes/Portofolio.route.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "portos/",
        element: <Portofolio />,
        loader: PortofolioLoader,
        action: ActPorto,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
