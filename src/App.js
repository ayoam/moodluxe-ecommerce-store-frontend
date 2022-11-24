import './assets/styles/App.css';
import HomePage from "./pages/homePage/HomePage";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import ProductPage from "./pages/productPage/ProductPage";
import ProductListingsPage from "./pages/productListingsPage/ProductListingsPage";
import LoginPage from "./pages/loginPage/LoginPage";
import RegisterPage from "./pages/registerPage/RegisterPage";
import BrandPage from "./pages/brandPage/BrandPage";
import React, {useState} from 'react'
import CheckoutPage from "./pages/checkoutPage/CheckoutPage";
import ContactPage from "./pages/contactPage/ContactPage";
import CartPage from "./pages/cartPage/CartPage";

function App() {

    return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/home"/>}/>
                <Route path="/home" element={<HomePage/>}/>
                <Route path="/products/:productId" element={<ProductPage/>}/>
                <Route path="/collections/:collectionId" element={<ProductListingsPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/brands/:brandName" element={<BrandPage/>}/>
                <Route path="/checkout" element={<CheckoutPage/>}/> {/*protected route*/}
                <Route path="/contact-us" element={<ContactPage/>}/>
                <Route path="/cart" element={<CartPage/>}/>

            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
