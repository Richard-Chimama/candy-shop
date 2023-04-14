import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Products from "./pages/Products";
import Product from "./pages/product";
import Create from "./pages/admin/CreateProduct";
import Manage from "./pages/admin/ManageProducts";
import Update from "./pages/admin/UpdateProduct";
import Root from "./pages/Root";
import Checkout from "./pages/Checkout";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/admin",
        element: <Create />,
      },
      {
        path: "/admin/manage-product",
        element: <Manage />,
      },
      {
        path: "/admin/update-product",
        element: <Update />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
