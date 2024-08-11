import React from 'react';
import banner_img from '../assets/banner3.jpg';

const Banner1 = () => {
  return (
    <div className="relative lg:m-16 m-5 shadow-lg">
      <img src={banner_img} alt="" className="w-full" />
      <div className="absolute top-0 left-0 p-2 text-white ml-4 lg:ml-16 mt-[5%] xl:mt-[10%]">
        <p className=" text-xs md:text-2xl font-medium">Limited Time Offer</p>
        <h1 className=" lg:text-4xl lg:font-bold lg:my-3 hidden lg:block">Special Edition</h1>
        <p className="text-xs md:text-sm hidden md:block">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima.</p>
        <p className="mt-2 text-base md:text-2xl font-medium hidden md:block ">Buy This T-shirt At 20% Discount</p>
        <button className="text-black text-xl lg:py-2 py-1 px-1 lg:px-3 font-medium mt-3 text-[8px] bg-white cursor-pointer hover:bg-black hover:text-white">SHOP NOW</button>
      </div>
    </div>
  );
};

export default Banner1;
