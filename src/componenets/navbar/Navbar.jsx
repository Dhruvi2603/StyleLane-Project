import React, { useState, useEffect, useRef, useContext } from "react";
import {
  cart,
  drpdown,
  email,
  heart,
  like,
  phone,
  shopicon,
  squaredropdown,
} from "../../utils/Icon";
import { Link, useNavigate } from "react-router-dom";
import { LikedItemsContext } from "../../context/LikedItemsContext";
import { ShopContext } from "../../context/ShopContext";
import { SearchContext } from "../../context/SearchContext";
import all_product from "../assets/all_product";


const Navbar = () => {
  const [activeSection, setActiveSection] = useState("shop");
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownType, setDropdownType] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const dropdownRef = useRef(null);
  const { likedItems } = useContext(LikedItemsContext);
  const { getTotalCartItems } = useContext(ShopContext);
  const { searchTerm, setSearchTerm, searchItems } = useContext(SearchContext);
  
  const navigate = useNavigate();

  const totalLikedItems = Object.keys(likedItems).filter(
    (itemId) => likedItems[itemId]
  ).length;

  const totalCartItems = getTotalCartItems();

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
    setShowDropdown(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  const handleDropdownClick = (type) => {
    if (dropdownType === type) {
      setShowDropdown((prevState) => !prevState); // Toggle dropdown visibility if clicking on the same type
    } else {
      setDropdownType(type);
      setShowDropdown(true);
    }
  };

  const handleLinkClick = (section) => {
    setActiveSection(section);
    setShowDropdown(false);
    if (isMobile) {
      setShowDropdown(false); // Hide dropdown on mobile after click
    }
  };

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      const term = event.target.value;
      setSearchTerm(term);
      searchItems(term);
      navigate('/search');
    }
  };
  
  

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <div className="flex items-center justify-between lg:px-[1%] px-5 py-3 text-white bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="md:flex lg:gap-5 md:gap-[21rem] ">
          <div className="flex gap-1">
            <i>{phone}</i>
            <p>456-6541-875</p>
          </div>
          <div className="flex gap-1">
            <i className="md:mt-[2px]">{email}</i>
            <p>stylelaneshop@gmail.com</p>
          </div>
        </div>
        <div className="lg:block hidden">
          <p>
            <Link to="/login">Login</Link> |{" "}
            <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
      <div className="navbar flex items-center p-3">
        <div className="nav-logo flex items-center">
          <i className="text-4xl text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
            {shopicon}
          </i>
          <p className="text-2xl font-semibold text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
            StyleLane
          </p>
        </div>
        <div
          className={`flex items-center ml-auto ${
            isMobile ? "space-x-2" : "space-x-4"
          }`}
        >
          {isMobile ? (
            <>
              <div>
                <input
                  type="text"
                  placeholder="search.."
                  className="border-none outline-none w-40 px-2 py-[3px] bg-gray-200 rounded-md]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={handleSearch}
                />
              </div>
              <div
                className="text-xl cursor-pointer text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text"
                onClick={() => setShowDropdown((prevState) => !prevState)}
              >
                {squaredropdown}
              </div>
            </>
          ) : (
            <ul className="lg:flex hidden items-center gap-6 text-lg font-medium ml-12">
              <li
                className={`cursor-pointer relative ${
                  activeSection === "shop"
                    ? "text-purple-600"
                    : "text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text"
                }`}
                onClick={() => handleLinkClick("shop")}
              >
                <Link to="/">Shop</Link>
              </li>
              <li className="cursor-pointer relative">
                <div className="text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
                  <Link to="/Men">Men</Link>{" "}
                  <i onClick={() => handleDropdownClick("men")}>{drpdown}</i>
                </div>
                {showDropdown && dropdownType === "men" && (
                  <ul
                    className="absolute top-10 z-10 left-0 bg-white p-2 rounded shadow-md"
                    ref={dropdownRef}
                  >
                    <li className="p-2 hover:bg-gray-100">
                      <Link to="/Men/T-Shirt">T-Shirt</Link>
                    </li>
                    <li className="p-2 hover:bg-gray-100">
                      <Link to="/Men/Shirt">Shirt</Link>
                    </li>
                    <li className="p-2 hover:bg-gray-100">
                      <Link to="/Men/Accessories">Accessories</Link>
                    </li>
                    <li className="p-2 hover:bg-gray-100">
                      <Link to="/Men/Footwear">Footwear</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="cursor-pointer relative">
                <div className="text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
                  <Link to="/Women">Women</Link>{" "}
                  <i onClick={() => handleDropdownClick("women")}>{drpdown}</i>
                </div>
                {showDropdown && dropdownType === "women" && (
                  <ul
                    className="absolute top-10 z-10 left-0 bg-white p-2 rounded shadow-md"
                    ref={dropdownRef}
                  >
                    <li className="p-2 hover:bg-gray-100">
                      <Link to="/Women/Dress">Dress</Link>
                    </li>
                    <li className="p-2 hover:bg-gray-100">
                      <Link to="/Women/Top">Top</Link>
                    </li>
                    <li className="p-2 hover:bg-gray-100">
                      <Link to="/Women/Makeup">Makeup</Link>
                    </li>
                    <li className="p-2 hover:bg-gray-100">
                      <Link to="/Women/Accessories">Accessories</Link>
                    </li>
                    <li className="p-2 hover:bg-gray-100">
                      <Link to="/Women/Jewellery">Jewellery</Link>
                    </li>
                    <li className="p-2 hover:bg-gray-100">
                      <Link to="/Women/Footwear">Footwear</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li
                className={`cursor-pointer relative ${
                  activeSection === "kids"
                    ? "text-purple-600"
                    : "text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text"
                }`}
                onClick={() => handleLinkClick("kids")}
              >
                <Link to="/Kids">Kids</Link>
              </li>
              <li
                className={`cursor-pointer relative ${
                  activeSection === "about us"
                    ? "text-purple-600"
                    : "text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text"
                }`}
                onClick={() => handleLinkClick("about us")}
              >
                <Link to="/AboutUs">About us</Link>
              </li>
              <li
                className={`cursor-pointer relative ${
                  activeSection === "contact us"
                    ? "text-purple-600"
                    : "text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text"
                }`}
                onClick={() => handleLinkClick("contact us")}
              >
                <Link to="/ContactUs">Contact us</Link>
              </li>
            </ul>
          )}
        </div>
        {!isMobile && (
          <div className="hiddden lg:flex items-center gap-6 text-lg font-medium ml-auto">
            <div>
              <input
                type="text"
                placeholder="search.."
                className="border-none outline-none w-40 px-2 py-[3px] bg-gray-200 rounded-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleSearch}
              />
            </div>
            <button>
              <Link
                to="/cart"
                className="text-xl text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text"
              >
                {cart}
              </Link>
              {totalCartItems > 0 && (
                <span className="absolute top-[66px] right-12 bg-red-400 text-white rounded-full text-xs w-4 h-4 flex items-center justify-cente pl-[5px]">
                  {totalCartItems}
                </span>
              )}
            </button>
            <div>
              <Link to="/liked-items">
                <i className=" text-xl text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
                  {heart}
                </i>
              </Link>
              {totalLikedItems > 0 && (
                <span className="absolute top-[66px] right-1 bg-red-400 text-white rounded-full text-xs w-4 h-4 flex items-center justify-cente pl-[5px]">
                  {totalLikedItems}
                </span>
              )}
            </div>
          </div>
        )}
      </div>
      {isMobile && showDropdown && (
        <ul
          className="absolute w-36 top-28 z-10 right-0 bg-white p-2 rounded shadow-md"
          ref={dropdownRef}
        >
          <li
            className="p-2 hover:bg-gray-100 text-pink-600"
            onClick={() => handleLinkClick("shop")}
          >
            <Link to="/">Shop</Link>
          </li>
          <li className="p-2 hover:bg-gray-100 text-pink-600">
            <div>
              <Link to="/Men">Men</Link>
              <i
                className="text-pink-600"
                onClick={() => handleDropdownClick("men")}
              >
                {drpdown}
              </i>
            </div>
            {showDropdown && dropdownType === "men" && (
              <ul className="bg-white p-2 rounded shadow-md">
                <li className="p-2 hover:bg-gray-100 text-pink-600">
                  <Link to="/Men/T-Shirt">T-Shirt</Link>
                </li>
                <li className="p-2 hover:bg-gray-100 text-pink-600">
                  <Link to="/Men/Shirt">Shirt</Link>
                </li>
                <li className="p-2 hover:bg-gray-100 text-pink-600">
                  <Link to="/Men/Accessories">Accessories</Link>
                </li>
                <li className="p-2 hover:bg-gray-100 text-pink-600">
                  <Link to="/Men/Footwear">Footwear</Link>
                </li>
              </ul>
            )}
          </li>
          <li className="p-2 hover:bg-gray-100 text-pink-600">
            <div>
              <Link to="/Women">Women</Link>
              <i
                className="text-pink-600"
                onClick={() => handleDropdownClick("women")}
              >
                {drpdown}
              </i>
            </div>
            {showDropdown && dropdownType === "women" && (
              <ul className="bg-white p-2 rounded shadow-md">
                <li className="p-2 hover:bg-gray-100 text-pink-600">
                  <Link to="/Women/Dress">Dress</Link>
                </li>
                <li className="p-2 hover:bg-gray-100 text-pink-600">
                  <Link to="/Women/Top">Top</Link>
                </li>
                <li className="p-2 hover:bg-gray-100 text-pink-600">
                  <Link to="/Women/Makeup">Makeup</Link>
                </li>
                <li className="p-2 hover:bg-gray-100 text-pink-600">
                  <Link to="/Women/Accessories">Accessories</Link>
                </li>
                <li className="p-2 hover:bg-gray-100 text-pink-600">
                  <Link to="/Women/Jewellery">Jewellery</Link>
                </li>
                <li className="p-2 hover:bg-gray-100 text-pink-600">
                  <Link to="/Women/Footwear">Footwear</Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className="p-2 hover:bg-gray-100 text-pink-600"
            onClick={() => handleLinkClick("kids")}
          >
            <Link to="/Kids">Kids</Link>
          </li>
          <li
            className="p-2 hover:bg-gray-100 text-pink-600"
            onClick={() => handleLinkClick("about us")}
          >
            <Link to="/AboutUs">About us</Link>
          </li>
          <li
            className="p-2 hover:bg-gray-100 text-pink-600"
            onClick={() => handleLinkClick("contact us")}
          >
            <Link to="/ContactUs">Contact us</Link>
          </li>
          <li className="p-2 hover:bg-gray-100 text-pink-600">
            <Link to="/login">Login</Link>
          </li>
          <li className="p-2 hover:bg-gray-100 text-pink-600">
            <Link to="/register">Register</Link>
          </li>
          <div>
            <li className="p-2 hover:bg-gray-100 text-pink-600">
              <Link to="/cart">{cart}</Link>
            </li>
            {totalCartItems > 0 && (
              <span className="absolute top-[330px] right-[100px] bg-red-400 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center pl-[3px]">
                {totalCartItems}
              </span>
            )}
          </div>
          <div>
            <Link to="/liked-items">
              <i className=" p-2 hover:bg-gray-100 text-pink-600">{heart}</i>
            </Link>
            {totalLikedItems > 0 && (
              <span className="absolute top-[368px] right-[100px] bg-red-400 text-white rounded-full text-xs w-4 h-4 flex items-center justify-cente pl-[5px]">
                {totalLikedItems}
              </span>
            )}
          </div>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
