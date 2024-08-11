import React from 'react';
import data_product from '../assets/data';
import Item from '../item/Item';
import Banner1 from '../banner/Banner1';
import { offer, secure, star, world } from '../../utils/Icon';

const Popular = () => {
  return (
    <div className="flex flex-col items-center bg-gray-300 pb-10 lg:pb-28">
      <h1 className="text-4xl font-semibold justify-center items-center flex mt-8">Featured Products</h1>
      <hr className="border-pink-700 my-6 w-28 mx-auto border" />
      <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-7 gap-1 lg:mx-6 mx-3">
        {data_product.map((item, i) => (
          <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} category={item.category} ratings={item.ratings} />
        ))}
      </div>
      <Banner1 />
     
      <div className="lg:flex lg:justify-between lg:mx-24 lg:mt-6 grid grid-cols-2 mx-4">
        <div className="flex flex-col items-center lg:p-6 p-3 ">
          <i className="text-5xl">{world}</i>
          <div className="font-medium text-lg my-3 ml-6">Worldwide Shipping</div>
          <div className="text-center">It elit tellus, luctus nec ullamcorper br mattis, pulvinar dapibus leo.</div>
        </div>
        <div className="flex flex-col items-center lg:p-6 p-3">
          <i className="text-5xl">{star}</i>
          <div className="font-medium text-lg my-3">Best Quality</div>
          <div className="text-center">It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
        </div>
        <div className="flex flex-col items-center lg:p-6 p-3">
          <i className="text-5xl">{offer}</i>
          <div className="font-medium text-lg my-3">Best Offers</div>
          <div className="text-center">It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
        </div>
        <div className="flex flex-col items-center lg:p-6 p-3">
          <i className="text-5xl">{secure}</i>
          <div className="font-medium text-lg my-3 ml-8">Secure Payments</div>
          <div className="text-center">It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
