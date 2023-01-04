import React from 'react'
import {axiosInstance} from "../apiService";
import {ORDERS_MAIN_URL} from "../../constants/apiUrlsConstants";

const getSalesStatistics = async()=>{
    let response = await axiosInstance.get(ORDERS_MAIN_URL+"/salesStatistics");
    return response;
}

export default getSalesStatistics
