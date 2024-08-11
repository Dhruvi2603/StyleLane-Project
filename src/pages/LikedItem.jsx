import React, { useContext } from "react";
import { LikedItemsContext } from "../context/LikedItemsContext";
import Item from "../componenets/item/Item";

const LikedItems = () => {
  const { likedItems } = useContext(LikedItemsContext);

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {Object.values(likedItems).map((item) => (
        <Item key={item.id} id={item.id} name={item.name} image={item.image} price={item.price} category={item.category} ratings={item.ratings} />
      ))}
    </div>
  );
};

export default LikedItems;
