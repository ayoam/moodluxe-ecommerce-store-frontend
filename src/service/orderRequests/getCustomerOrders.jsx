import React from 'react'
import {axiosInstance} from "../apiService";
import {GET_CUSTOMER_ORDERS_URL} from "../../constants/apiUrlsConstants";

const getCustomerOrders = async(customerId)=>{
    let response = await axiosInstance.get(GET_CUSTOMER_ORDERS_URL+"/"+customerId);
    return response;
}

export default getCustomerOrders
