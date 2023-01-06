import React, {useEffect, useState} from 'react';
import HomeLayout from "../../layouts/homeLayout/HomeLayout";
import AccountLayout from "../../layouts/accountLayout/AccountLayout";
import OrderHistory from "../../components/orderHistory/OrderHistory";
import AccountDetails from "../../components/accountDetails/AccountDetails";
import {useRecoilValue} from "recoil";
import {appUserState, userLoadingState} from "../../recoil/atoms/AuthenticationAtom";
import getCustomerOrders from "../../service/orderRequests/getCustomerOrders";
import GetCustomerById from "../../service/customerRequests/GetCustomerById";
import {useNavigate} from "react-router-dom";


function MyAccountPage() {
    const user = useRecoilValue(appUserState);
    const [ordersList,setOrdersList] = useState(null);
    const [customerInfo,setCustomerInfo] = useState(null);
    const navigate = useNavigate();

    useEffect(()=>{
        const startRequests = async()=>{
            return await Promise.all([
                getCustomerOrders(user?.customerId)
                    .then(response=>{
                        setOrdersList(response?.data?.orderList);
                    }),

                GetCustomerById(user?.customerId)
                    .then(response=> {
                        setCustomerInfo(response?.data)
                    })
            ])
        }

        if(user){
            startRequests();
        }

    },[user])
    const addressEditHandler = () => {
        navigate("/settings")
    }


    if(ordersList && customerInfo) return (
        <HomeLayout>
            <AccountLayout>
                <p className={"text-md font-light"}>From your account you can view your recent
                    orders, manage
                    your shipping and billing addresses.</p>
                <div className={"card border-white bg-black text-white mt-12 py-3 pl-4 shadow-lg"}>
                    <h3 className={"font-medium"}> ORDER HISTORY</h3>
                </div>
                {ordersList?.length>0 ?
                    <OrderHistory ordersList={ordersList}/>
                    : <p className={"text-sm mt-5 pl-2"}>you haven't placed any orders yet.</p>
                }
                <div className={"card border-white bg-black text-white my-8 py-3 pl-4  shadow-lg"}>
                    <h3 className={"font-medium"}> ACCOUNT DETAILS</h3>
                </div>
                <div>
                    <AccountDetails customerInfo={customerInfo}/>
                    <button
                        className={"bg-white text-black py-2 px-10 my-24 hover:bg-black hover:text-white cursor-pointer border-[1px] border-transparent hover:border-gray-200 transition-all mt-6"} onClick={addressEditHandler}>EDIT
                        ADDRESS
                    </button>
                </div>
            </AccountLayout>
        </HomeLayout>
    );
}

export default MyAccountPage;