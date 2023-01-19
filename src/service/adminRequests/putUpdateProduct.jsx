import React from 'react'
import {axiosInstance} from "../apiService";
import {PRODUCT_MAIN_URL} from "../../constants/apiUrlsConstants";

const putUpdateProduct = async(formData,productId)=>{
    const response = await axiosInstance.put(PRODUCT_MAIN_URL+"/"+productId,formData,{
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    return response;
}

export default putUpdateProduct
