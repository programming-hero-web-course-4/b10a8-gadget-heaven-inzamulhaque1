/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Card from "./Card";

const Gadgets = ({ categories }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  const handleCategoryClick = (category) => {
    if (category) {
      const filtered = products.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products); // Show all products
    }
    setActiveCategory(category);
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-5 gap-4 mt-6">
        <div className="col-span-1 border rounded-xl p-4">
          <div className="p-4">
            <p
              onClick={() => handleCategoryClick(null)}
              className={`px-4 my-2 rounded-2xl py-2 text-center text-lg font-bold border-2 cursor-pointer ${activeCategory === null ? 'bg-sky-500 text-white' : 'border-sky-500 text-sky-500'}`}
                
            >
              All Products
            </p>
            {categories.map((category) => (
              <p
                onClick={() => handleCategoryClick(category.category)}
                className={`px-4 my-2 rounded-2xl py-2 text-center text-lg font-bold border-2 cursor-pointer ${activeCategory === category.category ? 'bg-[#9538E2] text-white' : 'border-[#9538E2] text-[#9538E2]'}`}
                key={category.id}
              >
                {category.category}
              </p>
            ))}
          </div>
        </div>

        <div className="col-span-4 mb-20">
          <div className="grid grid-cols-3 gap-5">
            {filteredProducts.map((product) => (
              <Card key={product.product_id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gadgets;
