import React from 'react'
import {axiosInstance} from "../apiService";
import {ORDERS_MAIN_URL, PRODUCT_MAIN_URL} from "../../constants/apiUrlsConstants";

const deleteProductById = async(id)=>{
    const response = await axiosInstance.delete(PRODUCT_MAIN_URL+"/"+id);
    return response;
}

export default deleteProductById
