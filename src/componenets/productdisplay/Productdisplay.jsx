import React, { useContext, useState } from 'react';
import { rupees, starempty, starfull } from '../../utils/Icon';
import Breadcrum from '../breadcrums/Breadcrum';
import Rating from '../rating/Rating';
import SizeSelector from '../size/SizeSelector';
import RelatedProducts from '../relatedproducts/RelatedProducts';
import { ShopContext } from '../../context/ShopContext';

const Productdisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    const [activeTab, setActiveTab] = useState("description");
    const [quantity, setQuantity] = useState(1);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    return (
        <div>
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-4/5 md:h-[560px]">
                    <img src={product.image} alt="" className="w-11/12 md:h-[500px] h-[400px] my-4 mx-auto md:ml-8" />
                </div>
                <div className="ml-2 md:flex-grow">
                    <div>
                        <Breadcrum product={product} />
                        <h1 className="text-2xl font-bold my-3">{product.name}</h1>
                        <div className="flex items-center">
                            {[...Array(4)].map((_, index) => (
                                <i key={index} className="text-yellow-500">{starfull}</i>
                            ))}
                            <i className="text-yellow-500">{starempty}</i>
                            <p className="ml-1">(122)</p>
                        </div>
                        <div className="mt-2 text-2xl font-bold">{rupees} {product.price}</div>
                        <div className="mt-2">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, quis! Aspernatur neque et perspiciatis architecto expedita quibusdam minima. Aliquid exercitationem iusto error.</p>
                        </div>
                        <div className="mt-2">
                            <h1 className="text-2xl font-semibold my-2">Select Size</h1>
                            <SizeSelector />
                        </div>
                        <div className="flex items-center">
                            <div className="mt-4 flex">
                                <button className="mr-2 border border-black hover:text-white hover:bg-black font-bold py-2 px-4 rounded" onClick={decrementQuantity}>-</button>
                                <div className="mt-2">{quantity}</div>
                                <button className="ml-2  border border-black hover:text-white hover:bg-black font-bold py-2 px-4 rounded" onClick={incrementQuantity}>+</button>
                            </div>
                            <div className="mt-4 ml-4">
                                <button onClick={() => addToCart(product)} className=" border border-black hover:text-white hover:bg-black font-bold py-2 px-4 rounded">Add To Cart</button>
                            </div>
                        </div>
                        <p className="mt-4 font-semibold"><span className=" opacity-75 font-bold">Category : </span>{product.subcategory}</p>
                    </div>
                </div>
            </div>
            <hr className="border-black md:ml-8 ml-1 mt-2" />
            <div className="mt-4 md:ml-8 ml-3 mb-10">
                <div className="flex">
                    <div className={`mr-4 cursor-pointer ${activeTab === "description" ? "font-bold" : ""}`} onClick={() => handleTabChange("description")}>Description</div>
                    <div className={`mr-4 cursor-pointer ${activeTab === "additional" ? "font-bold" : ""}`} onClick={() => handleTabChange("additional")}>Additional Information</div>
                    <div className={`cursor-pointer ${activeTab === "reviews" ? "font-bold" : ""}`} onClick={() => handleTabChange("reviews")}>Reviews (0)</div>
                </div>

                <div className="mt-4">
                    {activeTab === "description" && (
                        <div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorem maiores accusamus quaerat, dolore expedita eligendi amet vel vero, voluptas ea natus. Perspiciatis placeat, quasi ullam necessitatibus ratione maxime in fugit! Dolores explicabo rerum illo amet facere officia ex, nam perferendis perspiciatis totam cumque iste ullam expedita, eius architecto voluptas voluptate non vel quas fuga asperiores impedit est! Nobis quae tempore ipsam, quisquam labore aut magni consequuntur ullam consectetur repellendus reiciendis quas. Quo molestiae et minima odit, aspernatur ab eius nulla suscipit quibusdam saepe necessitatibus nihil architecto non ad pariatur.</p>
                        </div>
                    )}
                    {activeTab === "additional" && (
                        <div>
                            <table className=" p-4 border-2">
                                <tbody >
                                    <tr className="borde ">
                                        <td className="border-2  pl-4 pr-28 py-1 font-semibold">Size</td>
                                        <td className="pl-4 w-full">{product.size}</td>
                                    </tr>
                                    <tr  className="border-2">
                                        <td className="border-2  pl-4 pr-28 py-1 font-semibold">Material</td>
                                        <td className="pl-4 w-full">{product.material}</td>
                                    </tr>
                                    <tr  className="border-2">
                                        <td className="border-2   pl-4 pr-28 py-1 font-semibold">Pattern</td>
                                        <td className="pl-4 w-full">{product.pattern}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}
                    {activeTab === "reviews" && (
                        <div>
                            <Rating />
                        </div>
                    )}
                </div>
            </div>
            <RelatedProducts />
        </div>
    );
}

export default Productdisplay;
