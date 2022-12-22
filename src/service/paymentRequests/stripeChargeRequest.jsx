import React from 'react'
import {axiosInstance} from "../apiService";
import {POST_STRIPE_CHARGE_URL} from "../../constants/apiUrlsConstants";

const stripeChargeRequest = async(data)=>{
    let response = await axiosInstance.post(POST_STRIPE_CHARGE_URL, {
        ...data
    });
    return response;
}

export default stripeChargeRequest
