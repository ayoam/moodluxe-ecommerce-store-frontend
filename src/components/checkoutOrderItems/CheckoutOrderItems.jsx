import React from 'react'
import testPhoto from "../../assets/testPhoto";
import CheckoutOrderItem from "../checkoutOrderItem/CheckoutOrderItem";

const CheckoutOrderItems = ()=>{
    return(
        <div className={"w-[650px] px-6 border-l-[1px] border-white/30"}>
            <h1 className={"font-semibold text-2xl mb-4"}>Your Order</h1>
            <div className={"flex flex-col gap-3 h-[300px] overflow-y-auto scrollbar scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-100 pr-2"}>
                <CheckoutOrderItem/>
                <CheckoutOrderItem/>
                <CheckoutOrderItem/>
                <CheckoutOrderItem/>
                <CheckoutOrderItem/>
            </div>
            <div className={"mt-6 flex flex-col gap-3"}>
                <div className={"flex flex-row justify-between text-sm"}>
                    <p>Subtotal</p>
                    <p>99.99$</p>
                </div>
                <div className={"flex flex-row justify-between text-sm"}>
                    <p>Shipping</p>
                    <p>Free</p>
                </div>
                <div className={"flex flex-row text-xl font-semibold justify-between border-t-2 border-white pt-3"}>
                    <p>Total</p>
                    <p>99.99$</p>
                </div>
            </div>
        </div>
    )
}

export default CheckoutOrderItems
