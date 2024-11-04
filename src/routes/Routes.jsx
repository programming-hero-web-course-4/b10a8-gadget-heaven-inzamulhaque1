// routes.js

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout.jsx";
import Home from "../pages/Home.jsx";
import Gadgets from "../components/Gadgets.jsx";
import ProductDetails from "../components/ProductDetails.jsx";
import SingleProductDetail from "../components/SingleProductDetail.jsx";
import Dashboard from "../components/Dashboard.jsx";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/categories.json"),
        children: [
          {
            path: "/",
            element: <Gadgets />,
            loader: () => fetch("/products.json"),
          },

        ],
      },

      {
        path: "/product-details/:product_id",
        element: <ProductDetails />,
        children: [
          {
            path: "",
            element: <SingleProductDetail  />,
            
          },
        ],
      },

      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
      }

      
    ],
  },
]);

export default routes;
