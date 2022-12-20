import React from 'react'
import {axiosInstance} from "../apiService";
import {CART_MAIN_URL} from "../../constants/apiUrlsConstants";

const addToCartRequest = async (cartdId,data)=>{
    let response = await axiosInstance.post(CART_MAIN_URL+cartdId+"/addToCart",data);
    return response;
}

export default addToCartRequest
