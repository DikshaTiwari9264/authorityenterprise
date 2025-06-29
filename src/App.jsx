import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes";
import PLP from "./pages/PLP";
import PDP from "./pages/PDP";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <PLP/> */}
      {/* <PDP/> */}
      <Footer/>
    </>
  );
}

export default App;
