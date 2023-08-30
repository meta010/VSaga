import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Contact from '../Pages/Contact'
import Products from '../Pages/Products'
import Cart from '../Pages/Cart'
import Checkout from '../Pages/Checkout'
import Pagenotfound from '../Pages/PageNotFound'
import SingleProductPage from '../Pages/SingleProduct'
import Login from '../Pages/Login'
import PrivateRoute from './PrivateRoute'
import OrdersPage from '../Pages/Orders'
import AdminLogin from '../Pages/AdminLogin'
import MainAdmin from '../Components/AdminComponents/MainAdmin'
import PrivateRouteAdmin from './PrivateRouteAdmin'
import Blogs from '../Pages/Blogs'
import Wishlist from '../Pages/Wishlist'
import SingleBlog from '../Pages/SingleBlog'
import TermsandCondition from '../Pages/TermsandCondition'
import Faq from '../Pages/Faq'
import Privacy from '../Pages/Policy'
import About from '../Pages/About'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/policy" element={<Privacy/>}/>
                <Route path="/terms" element={<TermsandCondition/>}/>
                <Route path="/faq" element={<Faq/>}/>
                <Route path="/products/:id" element={<SingleProductPage/>}/>
              
                <Route path="/cart" element={
                  <PrivateRoute>
                <Cart/>
                  </PrivateRoute>
               
                }/>
                <Route path="/checkout" element={
                 <PrivateRoute>
                   <Checkout/>
                 </PrivateRoute>
                }/>
                <Route path="/wishlist" element={<Wishlist/>}/>
                <Route path="/admin" element={
                <PrivateRouteAdmin>
                <MainAdmin/>
                </PrivateRouteAdmin>
                
                }/>
                <Route path="/adminlogin" element={<AdminLogin/>}/>
                <Route path="/orders" element={
                   <PrivateRoute>
                <OrdersPage/>
                   </PrivateRoute>
                
                }/>
                <Route path="/blogs" element={<Blogs/>}/>
                <Route path="/blogs/:id" element={<SingleBlog/>}/>
                <Route path="*" element={<Pagenotfound/>}/>
               
    </Routes>

  )
}

export default AllRoutes