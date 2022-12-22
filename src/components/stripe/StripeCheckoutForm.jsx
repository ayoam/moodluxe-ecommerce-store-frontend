import React from 'react'
import {CardElement, useStripe, useElements, PaymentElement} from "@stripe/react-stripe-js";
import StripeChargeRequest from "../../service/paymentRequests/stripeChargeRequest";

const StripeCheckoutForm = ({amount,paymentLoading,paymentCompleted})=>{
    const stripe = useStripe();
    const elements= useElements();

    const handleSubmit = async(e)=>{
        e.preventDefault();
        paymentLoading(true);
        const {error,paymentMethod} = await stripe.createPaymentMethod({
            type:"card",
            card:elements.getElement(CardElement)
        }).catch(err=>paymentLoading(false));

        if(!error){
            const {id}=paymentMethod;
            StripeChargeRequest({id,amount:amount})
                .then(res=>{
                    // window.alert("payment succeeded!")
                    paymentCompleted();
                })
                .catch(err=>{
                    window.alert(err?.response?.data)
                    paymentLoading(false);
                })
                .finally(()=>{
                });
        }
        else{
            paymentLoading(false);
            console.log(error);
        }
    }
    return(
        <form onSubmit={handleSubmit} className={"border-[1px] border-white/50 p-2 sm:p-4 mt-4"}>
            <CardElement className={"bg-white p-4 rounded"} options={{
                hidePostalCode:true
            }}/>
            <button className={"bg-blue-400 p-3 mt-2 w-full text-lg rounded font-semibold"}>Pay now</button>
        </form>
    )
}

export default StripeCheckoutForm
