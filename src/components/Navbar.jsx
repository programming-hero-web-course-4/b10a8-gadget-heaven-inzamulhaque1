import { NavLink, useLocation } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();

  // Set default background and text colors
  const getNavbarStyles = () => {
    if (location.pathname === "/") {
      return { backgroundColor: "", color: "white" }; // Home page: blue background, white text
    }
    return { backgroundColor: "white", color: "black" }; // Other pages: white background, black text
  };

  const { backgroundColor, color } = getNavbarStyles();

  return (
    <div style={{ backgroundColor }} className="navbar">
      <div className="container mx-auto pt-6 flex justify-between items-center relative z-50">
        
        {/* Left Section */}
        <div className="navbar-start flex items-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ${color === "white" ? "text-white" : "text-black"}`}
            >
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/statistics">Statistics</NavLink></li>
              <li><NavLink to="/dashboard">Dashboard</NavLink></li>
            </ul>
          </div>
          <NavLink to="/" className={`btn btn-ghost text-xl ${color === "white" ? "text-white" : "text-black"}`}>Gadget Heaven</NavLink>
        </div>

        {/* Center Section */}
        <div className="navbar-center hidden lg:flex">
          <ul className={`menu menu-horizontal px-1 space-x-10 ${color === "white" ? "text-white" : "text-black"}`}>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/statistics">Statistics</NavLink></li>
            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="navbar-end flex items-center space-x-5">
          <button className={`btn btn-ghost btn-circle rounded-full border-black bg-white ${color === "white" ? "text-black" : "text-black"}`}>
            <IoCartOutline className="text-xl" />
          </button>

          <button className="btn btn-ghost btn-circle rounded-full border-black bg-white relative">
            <div className="indicator">
              <FaHeart className="text-2xl text-red-500" />
              <span className="badge badge-primary indicator-item absolute px-2 py-3 -top-2 -right-3">0</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
