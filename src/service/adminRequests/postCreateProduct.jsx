import React from 'react'
import {axiosInstance} from "../apiService";
import {PRODUCT_MAIN_URL} from "../../constants/apiUrlsConstants";

const postCreateProduct = async(formData)=>{
    const response = await axiosInstance.post(PRODUCT_MAIN_URL,formData,{
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    return response;
}

export default postCreateProduct
