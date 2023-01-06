import React from 'react'
import {axiosInstance} from "../apiService";
import {PUT_UPDATE_CUSTOMER_PASSWORD_URL} from "../../constants/apiUrlsConstants";

const UpdateCustomerPassword = async(data)=>{
    let response = await axiosInstance.put(PUT_UPDATE_CUSTOMER_PASSWORD_URL, {
        ...data
    });
    return response;
}

export default UpdateCustomerPassword
