import React from 'react';
import HomeLayout from "../../layouts/homeLayout/HomeLayout";
import AccountLayout from "../../layouts/accountLayout/AccountLayout";
import OrderDetails from "../../components/orderDetails/OrderDetails";
import OrderAddressDetails from "../../components/orderAddressDetails/OrderAddressDetails";

function OrderPage(props) {

    return (
        <HomeLayout>
            <AccountLayout>
                <div className={"flex flex-col lg:flex-row gap-6 lg:gap-10 pb-16"}>
                    <div className={"@mx-auto @max-w-screen-sm text-white w-full"}>
                        <a href={"/myAccount"} className={"text-sm mt-5 py-12 underline"}>return to account details</a>
                       <OrderDetails/>
                    </div>
                    <div className={"w-full lg:w-[30%] @w-1/2 text-white pt-6 @px-0 @md:px-16 @my-24"}>
                       <OrderAddressDetails/>
                    </div>
                </div>
            </AccountLayout>
        </HomeLayout>
    );
}

export default OrderPage;


