import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";
import {
  addToCart,
  getAllAddToCart,
  addToWishlist,
  getAllWishlistItems,
} from "../utilities";

const SingleProductDetail = () => {
  const { product_id } = useParams();
  const [product, setProduct] = useState(null);
  const [isCart, setIsCart] = useState(false);
  const [isWishlist, setIsWishlist] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch("/products.json");
      const products = await response.json();
      const foundProduct = products.find(
        (p) => p.product_id === parseInt(product_id)
      );
      setProduct(foundProduct);

      if (foundProduct) {
        const cart = getAllAddToCart();
        const wishlist = getAllWishlistItems();
        setIsCart(
          cart.some((item) => item.product_id === foundProduct.product_id)
        );
        setIsWishlist(
          wishlist.some((item) => item.product_id === foundProduct.product_id)
        );
      }
    };

    fetchProduct();
  }, [product_id]);

  if (!product) return <div>Loading...</div>;

  const handleAddToCart = () => {
    addToCart(product);
    setIsCart(true);
  };

  const handleAddToWishlist = () => {
    addToWishlist(product);
    setIsWishlist(true); // Disable heart icon after adding to wishlist
  };

  return (
    <div className="p-2 flex">
      <div>
        <img
          src={product.product_image}
          alt={product.product_title}
          className="w-80 h-full object-cover rounded-2xl mr-5"
        />
      </div>

      <div className="space-y-3 pl-6">
        <h2 className="text-3xl font-bold">{product.product_title}</h2>
        <p className="mt-4 font-bold">Price: ${product.price}</p>
        <div className="rounded-full border border-green-500 w-28 p-2 text-green-500 font-bold text-center bg-green-50">
          {product.availability ? "In Stock" : "Not Available"}
        </div>
        <p className="mt-2 text-gray-400 font-semibold">
          {product.description}
        </p>
        <p className="mt-4 font-bold">Specification:</p>
        <ul className="mt-4 font-semibold">
          {product.Specification.map((spec, index) => (
            <li key={index} className="text-stone-600 list-decimal ml-8">
              {spec}
            </li>
          ))}
        </ul>

        <p className="font-bold text-red-500">{product.category}</p>
        <p
          className={`${
            product.availability ? "text-green-500" : "text-red-500"
          } font-bold`}
        >
          {product.availability ? "Yes In Stock" : "Not Available"}
        </p>

        <p>Rating: {product.rating}</p>

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
          <button
            disabled={isCart}
            onClick={handleAddToCart}
            className="btn rounded-full bg-[#9538E2] text-white px-5 hover:bg-red-500"
          >
            {isCart ? "Added to Cart" : "Add To Cart"}{" "}
            <IoCartOutline className="text-xl" />
          </button>

          <button
            disabled={isWishlist} // Disable heart icon if product is in wishlist
            onClick={handleAddToWishlist}
            className="btn btn-ghost btn-circle rounded-full border-gray-400 bg-white relative hover:bg-red-500"
          >
            <div className="indicator">
              <FaHeart
                className={`text-3xl ${
                  isWishlist ? "text-red-500" : "text-gray-500"
                } hover:text-white`}
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductDetail;
