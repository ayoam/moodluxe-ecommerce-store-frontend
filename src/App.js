import './assets/styles/App.css';
import HomePage from "./pages/homePage/HomePage";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import ProductPage from "./pages/productPage/ProductPage";
import ProductListingsPage from "./pages/productListingsPage/ProductListingsPage";
import LoginPage from "./pages/loginPage/LoginPage";
import RegisterPage from "./pages/registerPage/RegisterPage";
import BrandPage from "./pages/brandPage/BrandPage";
import React, {useState} from 'react'
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
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
