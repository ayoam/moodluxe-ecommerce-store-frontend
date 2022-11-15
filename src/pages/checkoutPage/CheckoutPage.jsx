import React from 'react'
import HomeLayout from "../../layouts/homeLayout/HomeLayout";
import CheckoutLayout from "../../layouts/checkoutLayout/CheckoutLayout";
import CheckoutOrderShippingInfo from "../../components/checkoutOrderShippingInfo/CheckoutOrderShippingInfo";
import CheckoutOrderItems from "../../components/checkoutOrderItems/CheckoutOrderItems";

const CheckoutPage = ()=>{
    return(
        <CheckoutLayout>
            <section className={"bg-secondaryBgColor"}>
                <div className={"max-w-6xl pt-8 pb-12 mx-auto px-4 text-white"}>
                    <h1 className={"text-3xl font-semibold mb-4"}>CHECKOUT</h1>
                    <div className={"flex flex-row justify-between"}>
                        <CheckoutOrderShippingInfo/>
                        <CheckoutOrderItems/>
                    </div>
                </div>
            </section>
        </CheckoutLayout>
    )
}

export default CheckoutPage
