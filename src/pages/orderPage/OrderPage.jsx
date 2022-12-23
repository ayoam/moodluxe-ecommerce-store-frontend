import React, {useEffect, useState} from 'react';
import HomeLayout from "../../layouts/homeLayout/HomeLayout";
import AccountLayout from "../../layouts/accountLayout/AccountLayout";
import OrderDetails from "../../components/orderDetails/OrderDetails";
import OrderAddressDetails from "../../components/orderAddressDetails/OrderAddressDetails";
import {useNavigate, useParams} from "react-router-dom";
import getOrderById from "../../service/orderRequests/getOrderById";
import NotFoundPage from "../404Page/NotFoundPage";

function OrderPage(props) {
    const {orderId}=useParams();
    const navigate = useNavigate();
    const [order,setOrder] =useState(null);
    const[status,setStatus] =useState(null);
    const [pageLoading,setPageLoading] = useState(true);

    useEffect(()=>{
        getOrderById(orderId)
            .then(response=>{
                setOrder(response?.data);
                setStatus(response?.status);
            }).catch(error=>{
                setStatus(error?.response?.status);
            })
            .finally(()=>{
                setPageLoading(false);
            });

    },[])

    if(pageLoading) {return <HomeLayout><p className={"h-screen bg-secondaryBgColor text-white pt-28 text-center text-lg"}>loading ...</p></HomeLayout>}

    if(status===200) return (
        <HomeLayout>
            <AccountLayout>
                <div className={"flex flex-col lg:flex-row gap-6 lg:gap-10 pb-16"}>
                    <div className={"@mx-auto @max-w-screen-sm text-white w-full"}>
                        <a href={"/myAccount"} className={"text-sm mt-5 py-12 underline"}>return to account details</a>
                       <OrderDetails order={order}/>
                    </div>
                    <div className={"w-full lg:w-[30%] @w-1/2 text-white pt-6 @px-0 @md:px-16 @my-24"}>
                       <OrderAddressDetails orderStatus={order?.status?.status} customerInfo={order?.orderAdresse}/>
                    </div>
                </div>
            </AccountLayout>
        </HomeLayout>
    );

    if([400,404,500].includes(status)){return  <NotFoundPage/>}
}

export default OrderPage;


