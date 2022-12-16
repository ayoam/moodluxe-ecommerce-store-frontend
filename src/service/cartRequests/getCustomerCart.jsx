import React from 'react'
import {axiosInstance} from "../apiService";
import {GET_CUSTOMER_CART_URL} from "../../constants/apiUrlsConstants";

const getCustomerCartBycartId = async(cartId)=>{
    let response = await axiosInstance.get(GET_CUSTOMER_CART_URL+"/"+cartId);
    return response;
}

export default getCustomerCartBycartId
