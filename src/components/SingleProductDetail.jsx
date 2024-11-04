/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";

const SingleProductDetail = () => {
  const { product_id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch("/products.json");
      const products = await response.json();
      const foundProduct = products.find(
        (p) => p.product_id === parseInt(product_id)
      );
      setProduct(foundProduct);
    };

    fetchProduct();
  }, [product_id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="p-6 flex">
      <div>
        <img
          src={product.product_image}
          alt={product.product_title}
          className="w-80 h-full object-cover rounded-2xl mr-5"
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-3xl font-bold">{product.product_title}</h2>

        <p className="mt-4 font-bold">Price: ${product.price}</p>

        <div className="rounded-full border border-green-500 w-28 p-2 text-green-500 font-bold text-center bg-green-50">
          {product.availability ? "In Stock" : "Not Available"}
        </div>
        <p className="mt-2 text-gray-400 font-semibold">
          {product.description}
        </p>

        <p className="mt-4 font-bold">
          Specification:
          <ul className="mt-4 font-semibold">
            {product.Specification.map((spec, index) => (
              <li key={index} className="text-stone-600 list-decimal ml-8 ">
                {spec}
              </li>
            ))}
          </ul>
        </p>

        <p>Rating: {product.rating} </p>

        <div className="rating">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            defaultChecked
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>

        <div className="flex items-center gap-7">
          <button className="btn rounded-full bg-[#9538E2] text-white px-5 hover:bg-red-500">
            Add To Cart <IoCartOutline className="text-xl" />
          </button>

          <button className="btn btn-ghost btn-circle rounded-full border-gray-400 bg-white relative hover:bg-red-500">
            <div className="indicator">
              <FaHeart className="text-3xl text-red-500 hover:text-white" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductDetail;
