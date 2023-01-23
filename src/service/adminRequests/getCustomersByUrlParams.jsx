import React from 'react'
import {axiosInstance} from "../apiService";
import {CUSTOMER_MAIN_URL} from "../../constants/apiUrlsConstants";

const getCustomersByUrlParams = async(urlParams)=>{
    let response = await axiosInstance.get(CUSTOMER_MAIN_URL,{
        params:{limit:5,...urlParams}
    });
    return response;
}

export default getCustomersByUrlParams
