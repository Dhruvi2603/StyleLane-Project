import React from 'react'
import Navbar from './componenets/navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import Login from './pages/Login'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Footer from './componenets/footer/Footer'
import Banner2 from './componenets/banner/Banner2';
import banner2_img from './componenets/assets/banner4.jpg'
import banner3_img from './componenets/assets/womenbanner.jpg'
import Banner3 from './componenets/banner/Banner3'
import Banner4 from './componenets/banner/Banner4'
import banner4_img from './componenets/assets/bannerkid.jpg'
import Cart from './pages/Cart'
import LikedItem from './pages/LikedItem'
import Search from './pages/Search'

function App() {
  

  return (
    <div>
      <Navbar />
      <Routes>
       <Route path='/' element={<Shop />} />
       <Route path='/Men' element={<ShopCategory banner={<Banner2 imageUrl={banner2_img} />} category="men"/>} />
       <Route path='/Women' element={<ShopCategory banner={<Banner3 imageUrl={banner3_img} />} category="women" />} />
       <Route path='/Kids' element={<ShopCategory banner={<Banner4 imageUrl={banner4_img} />} category="kids" />} />
       <Route path='/Men/T-Shirt' element={<ShopCategory banner={<Banner2 imageUrl={banner2_img} />}  category="men" subcategory="tshirt" />} />
       <Route path='/Men/Shirt' element={<ShopCategory banner={<Banner2 imageUrl={banner2_img} />} category="men" subcategory="shirt" />} />
       <Route path='/Men/Accessories' element={<ShopCategory banner={<Banner2 imageUrl={banner2_img} />} category="men" subcategory="men accessories" />} />
       <Route path='/Men/Footwear' element={<ShopCategory banner={<Banner2 imageUrl={banner2_img} />} category="men" subcategory="men footware" />} />
       <Route path='/Women/Dress' element={<ShopCategory banner={<Banner3 imageUrl={banner3_img} />} category="women" subcategory="dress" />} />
       <Route path='/Women/Top' element={<ShopCategory banner={<Banner3 imageUrl={banner3_img} />} category="women" subcategory="top" />} />
       <Route path='/Women/Makeup' element={<ShopCategory banner={<Banner3 imageUrl={banner3_img} />} category="women" subcategory="mackup"/>} />
       <Route path='/Women/Accessories' element={<ShopCategory banner={<Banner3 imageUrl={banner3_img} />} category="women" subcategory="women accessories" />} />
       <Route path='/Women/Jewellery' element={<ShopCategory banner={<Banner3 imageUrl={banner3_img} />} category="women" subcategory="jwellery" />} />
       <Route path='/Women/Footwear' element={<ShopCategory banner={<Banner3 imageUrl={banner3_img} />} category="women" subcategory="women footware" />} />
       <Route path='/Product' element={<Product />} >
          <Route path=':productId' element={<Product />} />
        </Route>  
      <Route path='/AboutUs' element={<AboutUs />} />
      <Route path='/ContactUs' element={<ContactUs />} />
      <Route path='/Cart' element={<Cart />} />
      <Route path='/liked-items' element={<LikedItem />} />
      <Route path='/search' element={<Search />} />
      <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
      
      
    </div>
  )
}

export default App
