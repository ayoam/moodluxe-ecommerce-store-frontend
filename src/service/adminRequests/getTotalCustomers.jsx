import React from 'react'
import {axiosInstance} from "../apiService";
import {CUSTOMER_MAIN_URL} from "../../constants/apiUrlsConstants";

const getTotalCustomers = async()=>{
    let response = await axiosInstance.get(CUSTOMER_MAIN_URL+"/customersTotal");
    return response;
}

export default getTotalCustomers
