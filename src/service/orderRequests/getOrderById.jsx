import React from 'react'
import {axiosInstance} from "../apiService";
import {ORDERS_MAIN_URL} from "../../constants/apiUrlsConstants";

const getOrderById = async(id)=>{
    let response = await axiosInstance.get(ORDERS_MAIN_URL+"/"+id);
    return response;
}

export default getOrderById
