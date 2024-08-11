import React from 'react'
import team1_img from '../componenets/assets/team1.jpg';
import team2_img from '../componenets/assets/team2.jpg'
import { offer, secure, star, world } from '../utils/Icon';

const AboutUs = () => {
  return (
    <>
    <div>
      <img src={team1_img} alt="" />
    </div>
    <div className="bg-gray-200 lg:p-20 p-10 flex">
    <div className="bg-white w-[700px] h-[400px]">
           <hr className="lg:ml-20 ml-20 border-2 border-pink-500 w-24 lg:mt-24 mt-4" />
           <h1 className="lg:text-4xl text-xs font-bold lg:ml-20 ml-24 mt-5">Who We Are</h1>
           <p className="mt-8 ml-4 lg:ml-20 mr-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, sed minus mollitia nam sapiente aliquam fugit ipsum. Minus ut ullam officia assumenda eligendi? Consequatur suscipit sed reiciendis a, voluptate mollitia error ducimus atque nemo rerum sunt deserunt vero delectus. Recusandae?</p>
      </div>
      <div>
         <img src={team2_img} alt="" className="w-[700px] h-[400px] hidden lg:block" />
      </div>
     
    </div>
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
    </>
  )
}

export default AboutUs
