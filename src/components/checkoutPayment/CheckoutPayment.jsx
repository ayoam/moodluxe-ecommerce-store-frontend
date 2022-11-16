import React from 'react'
import {FaCcPaypal, FaRegCreditCard} from "react-icons/fa";
import {paymentOptions} from "../../constants/paymentConstants";

const CheckoutPayment = ({paymentMethod,setPaymentMethod})=>{
    return(
        <>
            <div className={"rounded-md overflow-hidden"}>
                <div className={"text-md bg-black p-4 flex flex-row justify-between"}>
                    <h1>Payment</h1>
                </div>
                <div className={"p-4 border-[1px] border-t-[0] border-white/30 rounded-b-md p-4 bg-white/10"}>
                    <div className={"grid grid-cols-2 gap-4"}>
                        <div className={`flex flex-col gap-2 items-center border-2 border-white rounded-md p-4 cursor-pointer transition-colors ${paymentMethod===paymentOptions.CARD ? 'bg-green-600 ' : 'hover:bg-white/10'}`}
                            onClick={()=>setPaymentMethod(paymentOptions.CARD)}>
                            <FaRegCreditCard className={`text-5xl`}/>
                            <p>Credit Card</p>
                        </div>
                        <div className={`flex flex-col gap-2 items-center border-2 border-white rounded-md p-4 cursor-pointer transition-colors ${paymentMethod===paymentOptions.PAYPAL ? 'bg-green-600' : 'hover:bg-white/10' }`}
                             onClick={()=>setPaymentMethod(paymentOptions.PAYPAL)}>
                            <FaCcPaypal className={"text-5xl"}/>
                            <p>Paypal</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CheckoutPayment
