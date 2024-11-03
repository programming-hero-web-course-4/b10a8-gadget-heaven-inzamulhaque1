
import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Gadgets from "../components/Gadgets";

const Home = () => {
    const categories = useLoaderData()
  return (
    
    <div>
      {/* Banner */}
      <Banner />

      <h1 className="text-center text-4xl font-bold">Explore Cutting-Edge Gadgets</h1>

      <Gadgets categories={categories}></Gadgets>



      
    </div>
  );
};

export default Home;
