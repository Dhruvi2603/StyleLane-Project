import React from 'react'

const Banner4 = ({ imageUrl }) => {
  return (
    <div className="relative">
    <img src={imageUrl} alt="" />
    <div className="absolute top-0 left-0 p-4 text-white lg:ml-16 lg:mt-20">
      <p className="lg:text-2xl text-xs font-medium">Welcome To Kids Secton</p>
      <h1 className="text-4xl font-bold my-3 hidden lg:block">Special Edition</h1>
      <p className="mt-2 hidden lg:block">Explore our collection of T-shirts, tops, accessories, and more.</p>
      <p className="mt-2 lg:text-2xl text-xs font-medium">Discover Latest Trends</p>
      <button className="text-xl text-black lg:py-2 lg:px-3 text-[8px] p-1 font-medium mt-5 bg-white cursor-pointer hover:bg-black hover:text-white">SHOP NOW</button>
    </div>
  </div>
  )
}

export default Banner4
