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
import {ROLE_ADMIN, ROLE_CUSTOMER} from "./constants/rolesConstants";
import UnauthorizedPage from "./components/unauthorizedPage/UnauthorizedPage";

import InternalServerError from "./components/internalServerError/InternalServerError";
import OrderCompletedPage from "./pages/orderCompletedPage/OrderCompletedPage";
import CustomerAddressUpdate from "./pages/customerSettingsPage/customerAddressUpdate/CustomerAddressUpdate";
import CustomerDetailsUpdate from "./pages/customerSettingsPage/customerDetailsUpdate/CustomerDetailsUpdate";
import CustomerPasswordUpdate from "./pages/customerSettingsPage/customerPasswordUpdate/CustomerPasswordUpdate";
import AdminDashboardPage from "./pages/adminDashboardPage/AdminDashboardPage";
import OrderManagementPage from "./pages/orderManagementPage/OrderManagementPage";
import ProductManagementPage from "./pages/productManagementPage/ProductManagementPage";
import AdminOrderDetailsPage from "./pages/adminOrderDetailsPage/AdminOrderDetailsPage";
import CustomerManagementPage from "./pages/customerManagementPage/customerManagementPage";
import MessagesPage from "./pages/messagesPage/messagesPage";
import AddProductPage from "./pages/addProductPage/AddProductPage";
import EditProductPage from "./pages/editProductPage/EditProductPage";
import ReactDom from "react-dom";
import NewsLetterPopup from "./components/newsLetterPopup/NewsLetterPopup";





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
                        <Route path="/checkout" element={<CheckoutPage/>}/>
                        <Route path="/myAccount" element={<MyAccountPage/>}/>
                        <Route path="/orders/:orderId" element={<OrderPage/>}/>
                        <Route path="/order-completed" element={<OrderCompletedPage/>}/>
                        <Route path="/settings">
                            <Route  path="" element={<NotFoundPage/>}/>
                            <Route  path="address" element={<CustomerAddressUpdate/>}/>
                            <Route  path="personalDetails" element={<CustomerDetailsUpdate/>}/>
                            <Route  path="password" element={<CustomerPasswordUpdate/>}/>
                        </Route>
                    </Route>

                    <Route element={<ProtectedRoute authorizedRoles={[ROLE_ADMIN]}/>}>
                        <Route path="/admin/dashboard" element={<AdminDashboardPage/>}/>
                        <Route path="/admin/orders" element={<OrderManagementPage/>}/>
                        <Route path="/admin/orders/:orderId" element={<AdminOrderDetailsPage/>}/>
                        <Route path="/admin/products" element={<ProductManagementPage/>}/>
                        <Route path="/admin/products/create" element={<AddProductPage/>}/>
                        <Route path="/admin/products/:productId/edit" element={<EditProductPage/>}/>
                        <Route path="/admin/customers" element={<CustomerManagementPage/>}/>
                        <Route path="/admin/messages" element={<MessagesPage/>}/>
                    </Route>

                    <Route path="/500" element={<InternalServerError/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                    <Route path="/401" element={<UnauthorizedPage/>}/>

                </Route>
            </Routes>
        </BrowserRouter>
        {ReactDom.createPortal(<NewsLetterPopup/>,document.getElementById('newsletter-popup'))}
    </>
  );
}

export default App;
