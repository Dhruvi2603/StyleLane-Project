import React, { useContext, useState } from 'react';
import { arrow, drpdown, leftarrow } from '../utils/Icon';
import { ShopContext } from '../context/ShopContext';
import Item from '../componenets/item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const { banner, category, subcategory } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 12;

  const handleExploreMore = () => {
    setCurrentIndex(currentIndex + itemsPerPage);
  };

  const handlePreviousPage = () => {
    setCurrentIndex(currentIndex - itemsPerPage);
  };

  // Filter products based on category and subcategory
  const filteredProducts = all_product.filter(item => {
    if (subcategory) {
      return item.category === category && item.subcategory === subcategory;
    } else {
      return item.category === category;
    }
  });

  const maxIndex = Math.min(currentIndex + itemsPerPage, filteredProducts.length);
  const isDisabledPrevious = currentIndex === 0; // Disable previous button when on the first page
  const isDisabledNext = maxIndex >= filteredProducts.length; // Disable next button when no more items to display

  return (
    <div>
      {banner}
      <div className="flex mt-3 lg:mx-12 items-center justify-between ">
        <p>
          <span className="font-semibold">
            Showing {currentIndex + 1}-{maxIndex}
          </span>{' '}
          out of {filteredProducts.length} products
        </p>
        <div className="py-2 px-5 rounded-2xl border border-solid">
          sort by {drpdown}
        </div>
      </div>
      <div className="">
        <div className="flex flex-col items-center pb-10 lg:mx-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-7 gap-1 lg:mx-6">
            {filteredProducts.slice(currentIndex, maxIndex).map((item, i) => (
              <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} category={item.category} ratings={item.ratings} />
            ))}
          </div>
          
        </div>
      </div>
      <div className="flex  items-center justify-between mt-4 mb-8 mx-[4%]">
            
            <button 
              className={`px-2 rounded-lg py-1  bg-gradient-to-r from-purple-500 to-pink-500 text-white cursor-pointer ${isDisabledPrevious ? 'opacity-50 cursor-not-allowed' : 'hover:text-black'}`}
              onClick={handlePreviousPage}
              disabled={isDisabledPrevious}
            >
              {leftarrow}
            </button>
            
           
            <button 
              className={`px-2 rounded-lg py-1  bg-gradient-to-r from-purple-500 to-pink-500 text-white cursor-pointer ${isDisabledNext ? 'opacity-50 cursor-not-allowed' : 'hover:text-black'}`}  
              onClick={handleExploreMore}
              disabled={isDisabledNext}
            >
             {arrow}
            </button>
           
          </div>
    </div>
  );
};

export default ShopCategory;
