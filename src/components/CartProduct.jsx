import { useEffect, useState } from "react";
import { getAllAddToCart } from "../utilities";
import { FaTrash } from "react-icons/fa";

const CartProduct = () => {
  const [product, setProduct] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const cart = getAllAddToCart();
    setProduct(cart);
    calculateTotalPrice(cart);
  }, []);

  const calculateTotalPrice = (items) => {
    if (Array.isArray(items)) {
      const total = items.reduce((acc, item) => acc + (item.price || 0), 0);
      setTotalPrice(total);
    } else {
      console.error("Expected an array but got:", items);
    }
  };

  const handleRemoveFromCart = (product_id) => {
    const updatedCart = product.filter(
      (item) => item.product_id !== product_id
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setProduct(updatedCart);
    calculateTotalPrice(updatedCart);
  };

  const sortByPrice = () => {
    const sortedItems = [...product].sort((a, b) => a.price - b.price);
    setProduct(sortedItems);
  };

  const handlePurchase = () => {
    // Open the modal to confirm purchase
    setIsModalOpen(true);
  };

  const confirmPurchase = () => {
    // Clear the cart and close the modal
    setProduct([]);
    setTotalPrice(0);
    localStorage.removeItem("cart");
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto mt-5">
      <div className="mb-6 flex justify-between items-center">
        <h1 className=" text-2xl font-bold">Cart: {product.length} items</h1>

        <div className="flex gap-4 items-center">
          <p className="text-lg font-semibold">
            Total Price: ${totalPrice.toFixed(2)}
          </p>
          <button
            onClick={sortByPrice}
            className="btn bg-lime-500 border-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Sort by Price
          </button>
          <button
            onClick={handlePurchase}
            className="btn bg-lime-500 border-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Purchase
          </button>
        </div>
      </div>

      <div>
        {product.map((product) => (
          <div
            key={product.product_id}
            className="flex border p-4 rounded shadow-md mb-4 transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <div className="flex-shrink-0">
              <img
                src={product.product_image}
                alt={product.product_title}
                className="w-32 h-32 object-cover rounded"
              />
            </div>

            <div className="ml-4 flex-grow">
              <h2 className="text-lg font-bold">{product.product_title}</h2>
              <p className="text-gray-700">{product.description}</p>
              <p className="text-xl font-semibold">
                ${product.price ? product.price.toFixed(2) : "0.00"}
              </p>
            </div>

            <button
              onClick={() => handleRemoveFromCart(product.product_id)}
              className="flex items-center justify-center w-10 h-10 ml-4 bg-red-500 text-white rounded-full transition-colors duration-300 hover:bg-red-600"
              aria-label={`Remove ${product.product_title}`}
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>

      {/* Purchase Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-md max-w-sm text-center">
            <h3 className="text-lg font-bold mb-4">Confirm Purchase</h3>
            <p className="mb-6">Are you sure you want to complete the purchase?</p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={confirmPurchase}
                className="btn bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200"
              >
                Yes, Purchase
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="btn bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartProduct;
