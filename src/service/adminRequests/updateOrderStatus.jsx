import React from 'react'
import {axiosInstance} from "../apiService";
import {ORDERS_MAIN_URL} from "../../constants/apiUrlsConstants";

const updateOrderStatus = async(orderId,data)=>{
    let response = await axiosInstance.put(ORDERS_MAIN_URL+"/"+orderId+"/updateStatus",data);
    return response;
}

export default updateOrderStatus
