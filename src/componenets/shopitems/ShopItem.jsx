import React from 'react';
import { arrow } from '../../utils/Icon'; // Assuming arrow is imported correctly
import girl_img from '../assets/a7.jpg';

const ShopItem = () => {
  return (
    <div className="relative lg:flex lg:items-center lg:justify-between">
      {/* Image */}
      <img src={girl_img} alt="" className="w-full mt-1 lg:mt-1" />

      {/* Content */}
      <div className="lg:absolute lg:top-0 lg:left-0 lg:p-3 text-black absolute top-0  lg:text-left">
        <div className="lg:pl-6 lg:mt-20 leading-4 ml-2 md:ml-10">
          <div className="text-2xl md:text-5xl xl:text-8xl lg:text-6xl font-bold"> {/* Responsive text size */}
            <div>
              <p className='md:mb-5 md:mt-6'>new</p>
            </div>
            <p className='md:mb-5'>Collections</p>
            <p >For Everyone</p>
          </div>
          <div className="flex justify-center items-center md:mt-8 lg:mt-14 gap-3 lg:gap-0 lg:w-auto h-8 lg:h-16 lg:rounded-3xl rounded-xl mt-3 text-sm md:text-xl font-medium bg-gradient-to-r from-pink-400 to-fuchsia-300 cursor-pointer hover:text-white"> {/* Responsive button size */}
            Latest Collection {arrow}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopItem;
