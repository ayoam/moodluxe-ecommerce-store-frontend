import React, {useEffect, useState} from 'react'
import HomeLayout from "../../layouts/homeLayout/HomeLayout";
import CheckoutLayout from "../../layouts/checkoutLayout/CheckoutLayout";
import CheckoutOrderShippingInfo from "../../components/checkoutOrderShippingInfo/CheckoutOrderShippingInfo";
import CheckoutOrderItems from "../../components/checkoutOrderItems/CheckoutOrderItems";
import CheckoutPayment from "../../components/checkoutPayment/CheckoutPayment";
import {paymentOptions} from "../../constants/paymentConstants";
import {IoIosArrowBack} from "react-icons/io";


const CheckoutPage = ()=>{
    const [paymentMethod,setPaymentMethod] = useState(paymentOptions.CARD);

    useEffect(() => {
        console.log(paymentMethod);
    }, [paymentMethod]);


    const handleSetPaymentMethod = (value)=>{
        setPaymentMethod(value);
    }

    return(
        <CheckoutLayout>
            <section className={"bg-secondaryBgColor"}>
                <div className={"max-w-6xl min-h-screen pt-8 pb-12 mx-auto px-2 sm:px-6 text-white"}>
                    <h1 className={"text-3xl font-semibold mb-6 text-center lg:text-left"}>CHECKOUT</h1>
                    <div className={"flex flex-col-reverse gap-6 lg:gap-0 lg:flex-row w-full sm:w-[90%] md:w-[80%] lg:w-full mx-auto justify-between"}>
                        <div className={"flex flex-col w-full lg:pr-6 justify-between gap-6"}>
                            <div className={"flex flex-col gap-6"}>
                                <CheckoutOrderShippingInfo/>
                                <CheckoutPayment paymentMethod={paymentMethod} setPaymentMethod={handleSetPaymentMethod}/>
                            </div>
                            <div className={"text-right lg:text-left flex flex-col md:flex-row gap-4 md:gap-0 items-center sm:justify-between"}>
                                <button className={"py-4 px-4 rounded-md bg-white text-black hover:bg-transparent border-2 border-white hover:border-red-600 hover:text-white transition-all hover:hover:bg-white/5 w-full md:w-auto"}>COMPLETE ORDER</button>
                                <a href={"/cart"} className={"flex flex-row items-center gap-1 text-blue-400"}>
                                    <IoIosArrowBack/>
                                    Return to cart
                                </a>
                            </div>
                        </div>
                        <CheckoutOrderItems/>
                    </div>
                </div>
            </section>
        </CheckoutLayout>
    )
}

export default CheckoutPage
