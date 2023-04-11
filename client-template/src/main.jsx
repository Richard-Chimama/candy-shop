import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Products from './pages/products';
import Create from './pages/admin/CreateProduct';
import Manage from './pages/admin/ManageProducts';
import Update from './pages/admin/UpdateProduct';
import Root from './pages/Root';
import Checkout from './pages/Checkout';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

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
        path: "/admin",
        element: <Create />,
        children: [
          {
            path: "admin/manage-product",
            element: <Manage />,
          },
        ]
      },
      {
        path: "/checkout",
        element: <Checkout />
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
