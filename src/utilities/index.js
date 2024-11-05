import toast from "react-hot-toast"


// Function to get all items from the wishlist
const getAllWishlistItems = () => {
    const all = localStorage.getItem('wishlist');
    return all ? JSON.parse(all) : [];
};

// Function to add a product to the wishlist
const addToWishlist = (product) => {
    const wishlist = getAllWishlistItems();
    const isExist = wishlist.find(item => item.product_id === product.product_id);
    
    if (isExist) {
        return toast.error('This Product is Already in Your Wishlist');
    }

    wishlist.push(product);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    toast.success(`${product.product_title} Successfully Added to your Wishlist`);
};

const getAllAddToCart = () => {
    const all = localStorage.getItem('cart')
    
    if (all){
        const product = JSON.parse(all)
        
        return product
    } else {
        return []
    }

}


const addToCart = (product) => {
    const cart = getAllAddToCart()
    const isExist = cart.find(item => item.product_id == product.product_id)
    if ( isExist) return toast.error('This Product Already Added To Tour Cart');

    cart.push(product)
    localStorage.setItem('cart', JSON.stringify(cart))
    toast.success(`${product.product_title} Successfully Added to your cart <3`);

}

// utilities.js
const removeFromWishlist = (product) => {
    const wishlist = getAllWishlistItems();
    const updatedWishlist = wishlist.filter(item => item.product_id !== product.product_id);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
};

export { addToCart, getAllAddToCart, removeFromWishlist, getAllWishlistItems,addToWishlist };
