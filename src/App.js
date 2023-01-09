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
import UnauthorizedPage from "./components/unauthorizedPage/UnauthorizedPage";

import InternalServerError from "./components/internalServerError/InternalServerError";
import OrderCompletedPage from "./pages/orderCompletedPage/OrderCompletedPage";
import CustomerAddressUpdate from "./pages/customerSettingsPage/customerAddressUpdate/CustomerAddressUpdate";
import CustomerDetailsUpdate from "./pages/customerSettingsPage/customerDetailsUpdate/CustomerDetailsUpdate";
import CustomerPasswordUpdate from "./pages/customerSettingsPage/customerPasswordUpdate/CustomerPasswordUpdate";
import AdminDashboardPage from "./pages/adminDashboardPage/AdminDashboardPage";
import AdminOrdersPage from "./pages/adminOrdersPage/AdminOrdersPage";


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
                    </Route>

                    {/*<Route element={<ProtectedRoute authorizedRoles={[ROLE_ADMIN]}/>}>*/}
                    {/*</Route>*/}

                    <Route path="/admin/dashboard" element={<AdminDashboardPage/>}/>
                    <Route path="/admin/orders" element={<AdminOrdersPage/>}/>

                    <Route path="/500" element={<InternalServerError/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                    <Route path="/401" element={<UnauthorizedPage/>}/>
                    <Route path="/settings">
                        <Route  path="" element={<NotFoundPage/>}/>
                        <Route  path="address" element={<CustomerAddressUpdate/>}/>
                        <Route  path="personalDetails" element={<CustomerDetailsUpdate/>}/>
                        <Route  path="password" element={<CustomerPasswordUpdate/>}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
