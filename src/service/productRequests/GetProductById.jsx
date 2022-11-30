import React, {useState} from 'react'
import {axiosInstance} from "../apiService";
import {GET_PRODUCT_URL} from "../../constants/apiUrlsConstants";

const GetProductById = async(productId)=>{
    let response = null;
    try {
        response = await axiosInstance.get(GET_PRODUCT_URL+"/"+productId);
        return response;
    } catch (e) {
        // console.log(e);
        return null;
    }

}

export default GetProductById
