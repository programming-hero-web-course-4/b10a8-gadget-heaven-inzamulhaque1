import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="container mx-auto mt-6 relative z-50 bg-[#9538E2]"> 
      <div className="navbar bg-[#9538E2]"> 

        <div className="navbar-start">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLink to="/">
                <a>Home</a>
              </NavLink>
              <NavLink to="/statistics">
                <a>Statistics</a>
              </NavLink>
              <NavLink to="/dashboard">
                <a>Dashboard</a>
              </NavLink>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-white">Gadget Heaven</a> 
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-10 text-white"> 
          <NavLink to="/">
                <a>Home</a>
              </NavLink>
              <NavLink to="/statistics">
                <a>Statistics</a>
              </NavLink>
              <NavLink to="/dashboard">
                <a>Dashboard</a>
              </NavLink>
          </ul>
        </div>

        <div className="navbar-end space-x-5">

          <button  className="btn btn-ghost btn-circle  rounded-full border-black bg-white">
          
          <IoCartOutline className="text-xl" />

          </button>

          <button className="btn btn-ghost btn-circle rounded-full border-black bg-white relative">
            <div className="indicator">
            <FaHeart className="text-2xl text-red-500" />

              <span className="badge  badge-primary indicator-item absolute px-2 py-3 -top-2 -right-3">0</span>

            </div>

          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
