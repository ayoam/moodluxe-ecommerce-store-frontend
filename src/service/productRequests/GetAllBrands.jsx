import React, {useState} from 'react'
import {axiosInstance} from "../apiService";
import {GET_BRAND_URL} from "../../constants/apiUrlsConstants";

const GetAllBrands = async()=>{
    let response = null;
        response = await axiosInstance.get(GET_BRAND_URL);
        return response;


}

export default GetAllBrands
