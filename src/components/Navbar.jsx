import { NavLink, useLocation } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  // Set default background and text colors
  const getNavbarStyles = () => {
    if (location.pathname === "/") {
      return { backgroundColor: "", color: "white" };
    }
    return { backgroundColor: "white", color: "black" };
  };

  const { backgroundColor, color } = getNavbarStyles();

  // Determine navbar title based on the route
  const getNavTitle = () => {
    switch (location.pathname) {
      case "/statistics":
        return "Statistics";
      case "/dashboard":
        return "Dashboard";
      case "/compare":
        return "Compare Gadgets";
      case "/":
        return "Gadget Heaven";
      default:
        return "Gadget Heaven ";
    }
  };

  // Update cart and wishlist counts from localStorage
  const updateCartCount = () => {
    const storedCart = localStorage.getItem("cart");
    const count = storedCart ? JSON.parse(storedCart).length : 0;
    setCartCount(count);
  };

  const updateWishlistCount = () => {
    const storedWishlist = localStorage.getItem("wishlist");
    const count = storedWishlist ? JSON.parse(storedWishlist).length : 0;
    setWishlistCount(count);
  };

  useEffect(() => {
    updateCartCount();
    updateWishlistCount();

    // Set up event listeners for localStorage changes if using multiple tabs
    const handleStorageChange = () => {
      updateCartCount();
      updateWishlistCount();
    };

    window.addEventListener("storage", handleStorageChange);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

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
              className={`menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ${
                color === "white" ? "text-white" : "text-black"
              }`}
            >
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/statistics">Statistics</NavLink></li>
              <li><NavLink to="/dashboard">Dashboard</NavLink></li>
              <li><NavLink to="/compare">Compare Gadgets</NavLink></li>
            </ul>
          </div>

          <img className="h-12 rounded-3xl" src="https://i.ibb.co.com/0nXqkkW/Untitled-design-3.jpgg" alt="Logo" />
          <NavLink to="/" className={`btn btn-ghost text-xl ${color === "white" ? "text-white" : "text-black"}`}>
            {getNavTitle()} {/* Display dynamic title */}
          </NavLink>
          
        </div>

        {/* Center Section */}
        <div className="navbar-center hidden lg:flex">
          <ul className={`menu menu-horizontal px-1 space-x-10 ${color === "white" ? "text-white" : "text-black"}`}>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/statistics">Statistics</NavLink></li>
            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
            <li><NavLink to="/compare">Compare Gadgets</NavLink></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="navbar-end flex items-center space-x-5">
          <div className="relative">
            <button className={`btn btn-circle rounded-full hover:border-white hover:bg-purple-500 hover:text-white border-black bg-white ${color === "white" ? "text-black" : "text-black"}`}>
              <IoCartOutline className="text-xl" />
              <span className="badge badge-primary indicator-item absolute px-2 py-3 -top-2 -right-3">
                {cartCount}
              </span>
            </button>
          </div>
          <button className="btn btn-circle rounded-full hover:border-white hover:bg-purple-500 hover:text-white border-black bg-white relative">
            <div className="indicator">
              <FaHeart className="text-2xl text-red-500 hover:text-white" />
              <span className="badge badge-primary indicator-item absolute px-2 py-3 -top-2 -right-3">
                {wishlistCount}
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
