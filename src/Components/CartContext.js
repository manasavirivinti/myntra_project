import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item]);
    };

    const removeFromCart = (index) => {
        setCartItems((prevItems) => {
            const newItems = [...prevItems];
            newItems.splice(index, 1);
            return newItems;
        });
    };

    const emptyCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, emptyCart }}>
            {children}
        </CartContext.Provider>
    );
};
