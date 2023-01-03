import React from 'react'
import {axiosInstance} from "../apiService";
import {ORDERS_MAIN_URL} from "../../constants/apiUrlsConstants";

const getTotalOrdersAndSales = async()=>{
    let response = await axiosInstance.get(ORDERS_MAIN_URL+"/totalOrdersAndSales");
    return response;
}

export default getTotalOrdersAndSales
