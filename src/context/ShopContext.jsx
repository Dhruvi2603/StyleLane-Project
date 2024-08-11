// ShopContext.js
import React, { createContext, useState } from "react";
import all_product from '../componenets/assets/all_product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    // Initialize cart with default quantity of 0 for each product
    all_product.forEach(product => {
        cart[product.id] = 0;
    });
    return cart;
}


const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (product) => {
        setCartItems((prev) => ({ ...prev, [product.id]: prev[product.id] + 1 }));
    };

    const removeFromCart = (itemId) => {
        // Ensure quantity doesn't go below 0
        if (cartItems[itemId] > 0) {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        }
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = all_product.find((product)=>product.id===Number(item));
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount; // Return the total amount outside of the loop
    }

    const getTotalCartItems = () => {
        let totalItems = 0;
        for(const item in cartItems) {
            totalItems += cartItems[item];
        }
        return totalItems;
    }

    

    const contextValue = { all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems };
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
