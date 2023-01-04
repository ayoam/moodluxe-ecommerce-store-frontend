import React from 'react'
import {axiosInstance} from "../apiService";
import {PRODUCT_MAIN_URL} from "../../constants/apiUrlsConstants";

const getTotalProducts = async()=>{
    let response = await axiosInstance.get(PRODUCT_MAIN_URL+"/productsTotal");
    return response;
}

export default getTotalProducts
