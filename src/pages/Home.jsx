
import Banner from "../components/Banner";
import Gadgets from "../components/Gadgets";

const Home = () => {
  return (
    <div>
      {/* Banner */}
      <Banner />

      <h1 className="text-center text-4xl font-bold">Explore Cutting-Edge Gadgets</h1>

      <Gadgets></Gadgets>



      
    </div>
  );
};

export default Home;
