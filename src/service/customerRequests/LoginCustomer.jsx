import React from 'react'
import {axiosInstance} from "../apiService";
import {POST_LOGIN_URL} from "../../constants/apiUrlsConstants";

const loginCustomer = async(data)=>{
    delete axiosInstance.defaults.headers.common["Authorization"];
    let response = await axiosInstance.post(POST_LOGIN_URL, {
        ...data
    });
    return response;
}

export default loginCustomer
