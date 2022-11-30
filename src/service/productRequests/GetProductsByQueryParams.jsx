import React, {useState} from 'react'
import {axiosInstance} from "../apiService";
import {GET_PRODUCT_LIST_URL} from "../../constants/apiUrlsConstants";
const GetProductsByQueryParams = async(params)=>{
    let response = null;
    // const {page,limit,minPrice,maxPrice,brand,q} = params;

    try {
        response = await axiosInstance.get(GET_PRODUCT_LIST_URL, {
            params: {
                ...params
            }
        });

        return response;
    } catch (e) {
        // console.log(e);
        return null;
    }

}

export default GetProductsByQueryParams
