import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout.jsx";
import Home from "../pages/Home.jsx";
import Gadgets from "../components/Gadgets.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:() =>  fetch('/categories.json'),
        
        children: [
          {
            path: "/",
            element: <Gadgets></Gadgets>,
            loader:() =>  fetch('/products.json'),
          },
        ],
      },
    ],
  },
]);

export default routes;
