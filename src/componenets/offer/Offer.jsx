import React from 'react';
import top_img from '../assets/top82.jpg';
import tshirt_img from '../assets/tshirt31.jpg';
import wshoes_img from '../assets/w_shoes6.jpg';

const Offer = () => {
  return (
    <div className="flex flex-col lg:flex-row relative pt-4 lg:pt-12 lg:pb-28 pb-5 lg:space-x-5">
      {/* Offer 1 */}
      <div className="relative mb-3 lg:mb-0">
        <img src={top_img} className="xl:w-[80%] w-[90%] min-h-56 object-cover lg:mt-16 mt-3 xl:ml-[15%] mx-[5%] lg:opacity-85 opacity-85" alt="Top Image" />
        <div className="absolute top-1/2 left-[40%] transform -translate-x-[40%] -translate-y-1/2 lg:ml-3 mt-[40%]">
          <p className="xl:text-2xl text-2xl lg:text-lg font-bold whitespace-nowrap">20% Off On Tank Tops</p>
          <p className="mt-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          <button className="py-2 px-3 font-medium mt-1 bg-white cursor-pointer hover:bg-black hover:text-white">SHOP NOW</button>
        </div>
      </div>

      {/* Offer 2 */}
      <div className="relative mb-3 lg:mb-0">
        <img src={tshirt_img} className="xl:w-[80%] w-[90%] min-h-56 object-cover lg:mt-16 mt-3 lg:ml-10 ml-6 md:ml-10 lg:opacity-85 opacity-85" alt="T-Shirt Image" />
        <div className="absolute top-1/2 left-[40%] transform -translate-x-[40%] -translate-y-1/2 lg:ml-6 mt-[40%]">
          <p className="xl:text-2xl text-2xl lg:text-lg font-bold whitespace-nowrap">Our New T-Shirt Collection</p>
          <p className="mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique!</p>
          <button className="py-2 px-3 font-medium mt-1 bg-white cursor-pointer hover:bg-black hover:text-white">SHOP NOW</button>
        </div>
      </div>

      {/* Offer 3 */}
      <div className="relative">
        <img src={wshoes_img} className="xl:w-[80%] w-[90%] min-h-[500px] xl:min-h-[480px] lg:min-h-[360px]  object-cover md:ml-10 lg:mt-16 mt-5 lg:ml-10 ml-6 lg:opacity-85 opacity-85" alt="Women's Shoes Image" />
        <div className="absolute top-1/2 left-[40%] transform -translate-x-[40%] -translate-y-1/2 lg:ml-6 mt-[40%]">
          <p className="xl:text-2xl text-2xl lg:text-base font-bold whitespace-nowrap">Explore Our Women's Shoes</p>
          <p className="mt-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident!</p>
          <button className="py-2 px-3 font-medium mt-1 bg-white cursor-pointer hover:bg-black hover:text-white">SHOP NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
