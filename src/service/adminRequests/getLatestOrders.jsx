import React from 'react'
import {axiosInstance} from "../apiService";
import {ORDERS_MAIN_URL} from "../../constants/apiUrlsConstants";

const getLatestOrders = async()=>{
    let response = await axiosInstance.get(ORDERS_MAIN_URL,{
        params: {
            page:0,
            limit:7
        }
    });
    return response;
}

export default getLatestOrders
