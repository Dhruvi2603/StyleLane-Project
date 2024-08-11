import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import { remove, rupees } from '../../utils/Icon';

const CartItem = () => {
    const { all_product, cartItems, addToCart, removeFromCart,getTotalCartAmount } = useContext(ShopContext);

    if (!Array.isArray(all_product) || !cartItems) {
        return null;
    }

    const cartProducts = all_product.filter(product => cartItems[product.id] > 0);

    return (
        <div className="lg:my-24 lg:mx-44 mx-2 my-10">
            <div className="grid grid-cols-7 lg:gap-x-4 items-center font-semibold md:text-lg text-[10px]">
                <p className="col-span-1">Products</p>
                <p className="col-span-2">Title</p>
                <p className="col-span-1">Price</p>
                <p className="col-span-1">Quantity</p>
                <p className="col-span-1">Total</p>
                <p className="col-span-1">Remove</p>
            </div>
            <hr className="h-[2px] border-0 bg-gray-300 mt-3 mb-3" />
            {cartProducts.map((product) => {
                const quantityInCart = cartItems[product.id];
                return (
                    <>
                    <div key={product.id} className="grid grid-cols-7 gap-x-4 items-center text-base font-medium">
                        <div className="col-span-1">
                            <img src={product.image} alt="" className=" lg:h-14 lg:w-14 h-8 w-8" />
                        </div>
                        <p className="lg:col-span-2 col-span-2 md:text-lg text-xs ">{product.name}</p>
                        <p className="lg:col-span-1 col-span-1 text-xs ">{rupees} {product.price}</p>
                        <p className="lg:col-span-1 col-span-1 ml-3 lg:ml-6 text-xs ">{quantityInCart}</p>
                        <p className="lg:col-span-1 col-span-1 text-xs ">{rupees} {product.price * quantityInCart}</p>
                        <div className="lg:col-span-1 lg:ml-6 col-span-1 ml-2 text-xs ">
                            <button onClick={() => removeFromCart(product.id)}>{remove}</button>
                        </div>
                    </div>
                    <hr className="h-[3px] border-0 bg-gray-300 mt-3 mb-3" />
                    </>
                );
            })}
            <div className="flex my-24 lg:mx-0 ml-10">
                <div className="flex-1 flex flex-col mr-52 gap-10">
                    <h1 className="lg:text-4xl text-2xl font-bold">Cart Total</h1>
                    <div>
                        <div className="flex justify-between py-4 px-0">
                            <p>Subtotal</p>
                            <p>{rupees} {getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="flex justify-between py-4 px-0">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="flex justify-between py-4 px-0">
                            <h3>Total</h3>
                            <h3>{rupees} {getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button className="w-64 h-14 outline-none border-none rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white cursor-pointer hover:text-black font-semibold">PROCEED TO CHECKOUT</button>
                </div>
               
            </div>
        </div>
    );
}

export default CartItem;
