import React from 'react'
import {axiosInstance} from "../apiService";
import {ORDERS_MAIN_URL} from "../../constants/apiUrlsConstants";

const getOrdersByUrlParams = async(urlParams)=>{
    let response = await axiosInstance.get(ORDERS_MAIN_URL,{
        params:{limit:5,...urlParams}
    });
    return response;
}

export default getOrdersByUrlParams
