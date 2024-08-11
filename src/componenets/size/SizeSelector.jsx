import React, { useState } from 'react';

const SizeSelector = () => {
    const [selectedSize, setSelectedSize] = useState(null);

    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };

    const clearSize = () => {
        setSelectedSize(null);
    };

    return (
        <div>
            <div className="flex">
                <div
                    className={`py-2 px-4 mr-2 border border-solid border-black rounded cursor-pointer hover:text-white hover:bg-black ${
                        selectedSize === 'S' && 'bg-black text-white'
                    }`}
                    onClick={() => handleSizeClick('S')}
                >
                    S
                </div>
                <div
                    className={`py-2 px-3 mr-2 border border-solid border-black rounded cursor-pointer hover:text-white hover:bg-black ${
                        selectedSize === 'M' && 'bg-black text-white'
                    }`}
                    onClick={() => handleSizeClick('M')}
                >
                    M
                </div>
                <div
                    className={`p-2 px-4 mr-2 border border-solid border-black rounded cursor-pointer hover:text-white hover:bg-black ${
                        selectedSize === 'L' && 'bg-black text-white'
                    }`}
                    onClick={() => handleSizeClick('L')}
                >
                    L
                </div>
                <div
                    className={`p-2 px-3 mr-2 border border-solid border-black rounded cursor-pointer hover:text-white hover:bg-black ${
                        selectedSize === 'XL' && 'bg-black text-white'
                    }`}
                    onClick={() => handleSizeClick('XL')}
                >
                    XL
                </div>
                <div
                    className={`p-2 px-2 border border-solid border-black rounded cursor-pointer hover:text-white hover:bg-black ${
                        selectedSize === 'XXL' && 'bg-black text-white'
                    }`}
                    onClick={() => handleSizeClick('XXL')}
                >
                    XXL
                </div>
            </div>
            <div className="mt-2">
                <button
                    className="py-2 cursor-pointer font-bold opacity-80 hover:opacity-95"
                    onClick={clearSize}
                >
                    Clear
                </button>
            </div>
            {selectedSize && (
                <div className="mt-2">
                    <p>Selected Size: {selectedSize}</p>
                </div>
            )}
            <hr className=" w-11/12 border-black" />
        </div>
    );
};

export default SizeSelector;
