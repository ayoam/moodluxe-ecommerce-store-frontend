import './assets/styles/App.css';
import HomePage from "./pages/homePage/HomePage";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import ProductPage from "./pages/productPage/ProductPage";
import ProductListingsPage from "./pages/productListingsPage/ProductListingsPage";
import LoginPage from "./pages/loginPage/LoginPage";
import RegisterPage from "./pages/registerPage/RegisterPage";
import BrandPage from "./pages/brandPage/BrandPage";
import React from 'react'
import CheckoutPage from "./pages/checkoutPage/CheckoutPage";
import ContactPage from "./pages/contactPage/ContactPage";
import CartPage from "./pages/cartPage/CartPage";
import SearchPage from "./pages/searchPage/SearchPage";
import NotFoundPage from "./pages/404Page/NotFoundPage";
import VerifyEmailPage from "./pages/verifyEmailPage/VerifyEmailPage";

import MyAccountPage from "./pages/myAccountPage/MyAccountPage";
import OrderPage from "./pages/orderPage/OrderPage";
import AuthenticationProvider from "./components/authenticationProvider/AuthenticationProvider";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import {ROLE_CUSTOMER} from "./constants/rolesConstants";

import InternalServerError from "./components/internalServerError/InternalServerError";




function App() {

    return (
    <>
        <BrowserRouter>
            <Routes>
                <Route element={<AuthenticationProvider/>}>
                    <Route path="/" element={<Navigate to="/home"/>}/>
                    <Route path="/home" element={<HomePage/>}/>
                    <Route path="/products/:productId" element={<ProductPage/>}/>
                    <Route path="/collections/:collectionId" element={<ProductListingsPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>git statu
                    <Route path="/brands/:brandName" element={<BrandPage/>}/>
                    <Route path="/contact-us" element={<ContactPage/>}/>
                    <Route path="/cart" element={<CartPage/>}/>
                    <Route path="/search" element={<SearchPage/>}/>
                    <Route path="/notFound" element={<NotFoundPage/>}/>
                    <Route path="/verify-your-email" element={<VerifyEmailPage/>}/>

                    <Route element={<ProtectedRoute authorizedRoles={[ROLE_CUSTOMER]}/>}>
                        <Route path="/myAccount" element={<MyAccountPage/>}/>
                        <Route path="/order/:orderId" element={<OrderPage/>}/>
                        <Route path="/checkout" element={<CheckoutPage/>}/>
                    </Route>

                    <Route path="/500" element={<InternalServerError/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
