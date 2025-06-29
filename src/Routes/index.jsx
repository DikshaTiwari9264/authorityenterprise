import { createBrowserRouter } from "react-router-dom";
import PLP from "../pages/PLP";
import PDP from "../pages/PDP";

// Define the router with the desired routes
const router = createBrowserRouter([
  {
    path: "/plp",
    element: <PLP />,
  },
  {
    path: "/pdp",
    element: <PDP />,
  },
]);

export default router;
