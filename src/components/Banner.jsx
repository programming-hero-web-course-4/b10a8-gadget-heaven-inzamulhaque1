import bannerImage from "../assets/banner.jpg";

// Banner.jsx
const Banner = () => {
  return (
    <div className="relative -top-32">
      {/* Main Banner Content */}
      <div className="w-11/12 mx-auto mt-10">

        <div className="rounded-2xl border-2 p-4 bg-[#9538E2]">

          <div className="hero bg-[#9538E2] rounded-xl pt-32 pb-48">

            <div className="hero-content text-center">
              <div className="text-white">
                <h1 className="text-5xl font-bold">
                  Upgrade Your Tech Accessorize with Gadget Heaven Accessories
                </h1>
                <p className="py-6 mx-56">
                  Explore the latest gadgets that will take your experience to
                  the next level. From smart devices to the coolest accessories,
                  we have it all!
                </p>
                <button className="btn rounded-full bg-white text-[#9538E2] px-5">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section - Positioned to Start from Bottom of Banner */}
      <div className="w-2/4 mx-auto -mt-44 z-50">
        <div className="p-2 border-2 rounded-2xl bg-white">
          <img
            className="rounded-xl h-[500px] w-full object-cover"
            src={bannerImage}
            alt="Banner Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
