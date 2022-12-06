import React from 'react'
import {axiosInstance} from "../apiService";
import {POST_REGISTER_CUSTOMER_URL} from "../../constants/apiUrlsConstants";

const registerCustomer = async(data)=>{
    let response = await axiosInstance.post(POST_REGISTER_CUSTOMER_URL, {
        ...data
    });
    return response;
}

export default registerCustomer
