import React from 'react'
import Cart from "../../components/cart/Cart";
import SearchBar from "../../components/searchBar/SearchBar";
import HomeHeader from "../../components/homeHeader/HomeHeader";
import HomeFooter from "../../components/homeFooter/HomeFooter";
import {useNavigate} from "react-router-dom";
import AdminHeader from "../../components/adminHeader/AdminHeader";
import AdminFooter from "../../components/adminFooter/AdminFooter";

const AdminLayout = ({children})=>{

    return(
        <>
            <div className={"flex flex-row-reverse w-full relative"}>
                <div
                    className={`w-screen`}>
                    <AdminHeader/>
                    <main>{children}</main>
                    <AdminFooter/>
                </div>
            </div>
        </>
    )
}

export default AdminLayout
