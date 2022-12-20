import React from 'react'
import {axiosInstance} from "../apiService";
import {GET_CUSTOMER_BY_ID_URL} from "../../constants/apiUrlsConstants";

const GetCustomerById = async(id)=>{
    let response = await axiosInstance.get(GET_CUSTOMER_BY_ID_URL+"/"+id);
    return response;
}

export default GetCustomerById
