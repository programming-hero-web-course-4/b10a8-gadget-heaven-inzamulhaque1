import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="pb-[500px] bg-gray-50">
      <div className="bg-[#9538E2] relative pb-20">
        <div className="container mx-auto text-center pt-16">
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <p className="w-2/4 text-white mx-auto mt-4">
            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
          </p>
        </div>

        <div className="text-center mt-4 space-x-5 font-bold text-xl">
          <NavLink
            to="cart"
            className="btn rounded-full bg-white text-[#9538E2] px-5 py-2 w-24 transform transition-all duration-300 hover:bg-[#9538E2] hover:text-white hover:scale-110 focus:outline-none shadow-lg hover:shadow-xl active:bg-[#9538E2] active:text-white"
          >
            CART
          </NavLink>
          <NavLink
            to="wishlist"
            className="btn rounded-full border-white bg-[#9538E2] text-white px-5 py-2 transform transition-all duration-300 hover:bg-white hover:text-[#9538E2] hover:scale-110 focus:outline-none shadow-lg hover:shadow-xl active:bg-white active:text-[#9538E2]"
          >
            WISHLIST
          </NavLink>
        </div>
      </div>

      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
