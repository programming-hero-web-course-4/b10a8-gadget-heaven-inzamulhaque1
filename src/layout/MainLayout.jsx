import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";

const mainLayout = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar></Navbar>

      {/* Dynamic Section */}
      <div className="min-h-[calc(100vh-406px)]">
                {/* DynamicSection */}


                <Outlet></Outlet>

            </div>

      {/* Footer */}
      
      <Footer></Footer>
      
      <Toaster />
    </div>
  );
};

export default mainLayout;
