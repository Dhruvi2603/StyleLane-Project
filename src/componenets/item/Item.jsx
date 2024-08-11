// src/components/Item.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { like, heart } from '../../utils/Icon'; // Assuming you have different icons for liked/unliked
import { LikedItemsContext } from '../../context/LikedItemsContext';

const Item = ({ id, name, image, category, price, ratings }) => {
  const { likedItems, toggleLike } = useContext(LikedItemsContext);
  const isLiked = likedItems[id] || false;

  return (
    <div className="p-4 flex flex-col   shadow-lg bg-white">
      <Link to={`/product/${id}`}>
        <img
          onClick={() => window.scrollTo(0, 0)}
          src={image}
          alt={name}
          className="w-full md:h-80 h-40 hover:opacity-80"
        />
      </Link>
      <p className="my-0">{name}</p>
      <p className="opacity-65">{category}</p>
      <p className="text-lg font-semibold">₹{price}</p>
      <div className='flex items-center justify-between'>
        <p>{ratings}</p>
        <i
          className={`cursor-pointer ${isLiked ? 'text-red-500' : 'text-gray-500'}`}
          onClick={() => toggleLike(id)}
        >
          {isLiked ? heart : like}
        </i>
      </div>
    </div>
  );
};

export default Item;
