import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [likedItems, setLikedItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addToCart = (item) => {
    const tot = item.price * item.count;
    setCart((prevCart) => {
      const updatedCart = [...prevCart, { ...item, tot }];
      const updatedTotalAmount = updatedCart.reduce((acc, currItem) => acc + currItem.tot, 0);
      setTotalAmount(updatedTotalAmount);
      return updatedCart;
    });
  };

  const handleLikeClick = (itemData) => {
    setLikedItems((prevItems) => {
      const isLiked = prevItems.some((item) => item.title === itemData.title);
      if (isLiked) {
        return prevItems.filter((item) => item.title !== itemData.title);
      } else {
        return [...prevItems, itemData];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, likedItems, handleLikeClick, totalAmount }}>
      {children}
    </CartContext.Provider>
  );
};
