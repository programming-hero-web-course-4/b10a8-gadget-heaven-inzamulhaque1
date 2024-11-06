
import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Gadgets from "../components/Gadgets";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Gadgets Haven | Home"; // Set dynamic title
  }, []);
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
