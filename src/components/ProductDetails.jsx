import { Outlet } from "react-router-dom";

const ProductDetails = () => {
  return (
    <div className="pb-[500px] bg-gray-50">

      <div className="bg-[#9538E2] relative pb-40">

        <div className="container mx-auto text-center pt-16">
          <h1 className="text-2xl font-bold text-white">Product Details</h1>
          <p className="w-2/4 text-white mx-auto mt-4">
            Explore the latest gadgets that will take your experience to the next level.
          </p>
        </div>

        <div className="w-2/4 h-[300px] bg-white absolute top-48 left-1/4 rounded-2xl border pb-[535px]">
          <Outlet />
        </div>

      </div>

    </div>
  );
};

export default ProductDetails;
