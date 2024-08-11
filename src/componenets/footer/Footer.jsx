import React from 'react';
import { facebook, insta, shopicon, twitter, whatsapp, youtube } from '../../utils/Icon';

const Footer = () => {
  return (
    <>
      <hr className="border-gray-600" />
      <div className="md:text-3xl text-xs p-8 ml-5 font-semibold md:p-14 md:ml-32">
        SELL UP TO 70% OFF FOR ALL CLOTHES AND FASHION ITEMS, ON ALL BRANDS
      </div>
      <hr className="border-gray-600" />
      <div className="flex flex-col lg:flex-row justify-between mx-5 lg:mx-24 lg:mt-6 mt-3">
        <div className="mb-3 lg:mb-0">
          <div className="nav-logo flex items-center lg:mt-6 mt-3">
            <i className="lg:text-4xl text-2xl text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
              {shopicon}
            </i>
            <p className="lg:text-2xl text-xl font-semibold text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
              StyleLane
            </p>
          </div>
          <p className="text-xl font-semibold lg:mt-6 mt-3">The best look anytime, anywhere</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6 lg:gap-40 mb-6 lg:mb-6 ml-5">
          <div>
            <ul>
              <li className="text-xl font-medium lg:mt-6 mt-4 lg:mb-3 mb-3 lg:mr-20">For Her</li>
              <li className="pb-1 opacity-85 hover:text-transparent hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-clip-text cursor-pointer font-medium">Women Dresses</li>
              <li className="pb-1 opacity-85 hover:text-transparent hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-clip-text cursor-pointer font-medium">Top And Shirts</li>
              <li className="pb-1 opacity-85 hover:text-transparent hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-clip-text cursor-pointer font-medium">Women Accessories</li>
              <li className="pb-1 opacity-85 hover:text-transparent hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-clip-text cursor-pointer font-medium">Heels And Flats</li>
              <li className="pb-1 opacity-85 hover:text-transparent hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-clip-text cursor-pointer font-medium">Makeup</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="text-xl font-medium mt-6 mb-3">For Him</li>
              <li className="pb-1 opacity-85 hover:text-transparent hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-clip-text cursor-pointer font-medium">Men Shirts</li>
              <li className="pb-1 opacity-85 hover:text-transparent hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-clip-text cursor-pointer font-medium">Men T-shirts</li>
              <li className="pb-1 opacity-85 hover:text-transparent hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-clip-text cursor-pointer font-medium">Men Shoes</li>
              <li className="pb-1 opacity-85 hover:text-transparent hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-clip-text cursor-pointer font-medium">Men Accessories</li>
              <li className="pb-1 opacity-85 hover:text-transparent hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-clip-text cursor-pointer font-medium">Men Jeans</li>
            </ul>
          </div>
        </div>
        <div>
          <p className="text-xl font-semibold mt-6 ml-1">Subscribe</p>
          <div className="flex flex-col">
            <input type="email" placeholder="Enter Your Email" className="p-2 border border-r-gray-700 rounded-2xl mt-3" />
            <button className="mt-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white cursor-pointer hover:text-black">SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <hr className="border-gray-600 mt-6" />
      <div className="my-6 flex flex-col lg:flex-row items-center">
        <p className="text-center lg:text-left lg:ml-40">Copyright © 2024 StyleLane. Powered by StyleLane.</p>
        <div className="flex lg:mr-28 mt-4 lg:mt-0 lg:ml-auto">
          <i className="mx-2 hover:text-transparent hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-clip-text cursor-pointer">{facebook}</i>
          <i className="mx-2 hover:text-transparent hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-clip-text cursor-pointer">{insta}</i>
          <i className="mx-2 hover:text-transparent hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-clip-text cursor-pointer">{twitter}</i>
          <i className="mx-2 hover:text-transparent hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-clip-text cursor-pointer">{youtube}</i>
          <i className="mx-2 hover:text-transparent hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-clip-text cursor-pointer">{whatsapp}</i>
        </div>
      </div>
    </>
  );
}

export default Footer;
