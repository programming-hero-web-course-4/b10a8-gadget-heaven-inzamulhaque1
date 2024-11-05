// Wishlist.jsx
import  { useEffect, useState } from 'react';
import { getAllWishlistItems, removeFromWishlist } from '../utilities'; // Ensure this path is correct
import { FaHeart } from 'react-icons/fa';

const Wishlist = () => {
    const [wishlistItems, setWishlistItems] = useState([]);

    useEffect(() => {
        const WishlistItems = () => {
            const items = getAllWishlistItems();
            setWishlistItems(items);
        };

        WishlistItems();
    }, []);

    const handleRemoveFromWishlist = (product) => {
        removeFromWishlist(product);
        setWishlistItems((prevItems) => prevItems.filter(item => item.product_id !== product.product_id));
    };

    return (
        <div className="p-6 container mx-auto">
           
            {wishlistItems.length === 0 ? (
                <p className="mt-4 text-gray-500">Your wishlist is empty.</p>
            ) : (
                <ul className="mt-4 space-y-4">
                    {wishlistItems.map((item) => (
                        <li key={item.product_id} className="border rounded p-4 flex items-center justify-between">
                            <div className="flex items-center">
                                <img src={item.product_image} alt={item.product_title} className="w-20 h-20 object-cover rounded" />
                                <div className="ml-4">
                                    <h2 className="text-xl font-semibold">{item.product_title}</h2>
                                    <p className="text-gray-500">${item.price}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => handleRemoveFromWishlist(item)}
                                className="flex items-center text-red-500 hover:text-red-700"
                            >
                                <FaHeart className="text-2xl" />
                                <span className="ml-2">Remove</span>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Wishlist;
