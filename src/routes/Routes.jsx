import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout.jsx";
import Home from "../pages/Home.jsx";
import Gadgets from "../components/Gadgets.jsx";
import ProductDetails from "../components/ProductDetails.jsx";
import SingleProductDetail from "../components/SingleProductDetail.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import CartProduct from "../components/CartProduct.jsx";
import Wishlist from "../components/Wishlist.jsx";
import Statistics from "../pages/Statistics.jsx";
import GadgetComparison from "../pages/GadgetComparison.jsx";

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
            element: <SingleProductDetail />,
          },
        ],
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "", // Set the default route for the dashboard
            element: <CartProduct />, // Show CartProduct by default
          },
          {
            path: "cart", 
            element: <CartProduct />,
          },
          {
            path: "wishlist", 
            element: <Wishlist />,
          },
        ],
      },
      {
        path: '/statistics',
        element: <Statistics />
      },
      {
        path: '/compare',
        element: <GadgetComparison></GadgetComparison>
      }
      
    ],
  },
]);

export default routes;
