// Banner2.js
import React from 'react';


const Banner2 = ({ imageUrl }) => {
  return (
    <div className="relative">
      <img src={imageUrl} alt="" />
      <div className="absolute top-0 left-0 p-4 text-white lg:ml-16 lg:mt-20">
        <p className="lg:text-2xl text-sm font-medium">Welcome To Men's Secton</p>
        <h1 className="lg:text-4xl lg:font-bold lg:my-3 hidden lg:block">Special Edition</h1>
        <p className="mt-2 text-lg hidden lg:block">Explore our collection of shirts, t-shirts, accessories, and more.</p>
        <p className="mt-2 lg:text-2xl text-xs font-medium">Discover Latest Trends</p>
        <button className=" text-black lg:py-2 py-1 px-1 lg:px-3 text-xl font-medium mt-5 bg-white text-[8px] cursor-pointer hover:bg-black hover:text-white">SHOP NOW</button>
      </div>
    </div>
  );
};

export default Banner2;
