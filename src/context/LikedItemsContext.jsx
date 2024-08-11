import React, { createContext, useState } from 'react';
import all_product from '../componenets/assets/all_product'; 

export const LikedItemsContext = createContext();

const LikedItemsProvider = ({ children }) => {
  const [likedItems, setLikedItems] = useState({});

  const toggleLike = (itemId) => {
    setLikedItems((prev) => {
      const newLikedItems = { ...prev };
      if (newLikedItems[itemId]) {
        delete newLikedItems[itemId]; 
      } else {
        const product = all_product.find((item) => item.id === itemId);
        newLikedItems[itemId] = product; 
      }
      return newLikedItems;
    });
  };

  return (
    <LikedItemsContext.Provider value={{ likedItems, toggleLike }}>
      {children}
    </LikedItemsContext.Provider>
  );
};

export default LikedItemsProvider;
