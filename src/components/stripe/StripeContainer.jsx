import React from 'react'
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js";
import StripeCheckoutForm from "./StripeCheckoutForm";

const PUBLIC_KEY = "pk_test_51LpDu1G29xxBejuGdBWzrtGapEgIihnjFwN7MLziGkrlQxaO4U4BfKFhfAn0R6TcnsCC8UflOXQOVFtrLczA8NtO00lVDjkpBQ";
const stripeTestPromise = loadStripe(PUBLIC_KEY);

const StripeContainer = ({amount,paymentLoading,paymentCompleted})=>{
    return(
        <Elements stripe={stripeTestPromise}>
            <StripeCheckoutForm amount={amount} paymentLoading={paymentLoading} paymentCompleted={paymentCompleted}/>
        </Elements>
    )
}

export default StripeContainer
