import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';

import Productdisplay from '../componenets/productdisplay/Productdisplay';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find(e => e.id === Number(productId));
  
  return (
    <div>
     
      <Productdisplay product={product} />
    </div>
  );
};

export default Product;
