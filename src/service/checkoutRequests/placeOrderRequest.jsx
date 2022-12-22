import React from 'react'
import {axiosInstance} from "../apiService";
import {POST_PLACE_ORDER_URL} from "../../constants/apiUrlsConstants";

const placeOrderRequest = async(data)=>{
    let response = await axiosInstance.post(POST_PLACE_ORDER_URL,data);
    return response;
}

export default placeOrderRequest
