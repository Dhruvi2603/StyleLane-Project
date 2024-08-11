import React from 'react';
import data_product from '../assets/data';
import Item from '../item/Item';

const RelatedProducts = () => {
  // Slice the array to get only the first four items
  const limitedProducts = data_product.slice(0, 4);

  return (
    <div className="flex flex-col items-center md:gap-3 gap-1 md:h-[90vh] h-[120vh] mb-6">
      <h1 className="text-4xl font-semibold justify-center items-center flex mt-4 md:mt-8">Related Products</h1>
      <hr className="border-pink-700 my-6 w-28 mx-auto border" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-7 md:mx-6 mx-3">
        {limitedProducts.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
            category={item.category}
            ratings={item.ratings}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
