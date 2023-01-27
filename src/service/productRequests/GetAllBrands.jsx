import React from 'react'
import {axiosInstance} from "../apiService";
import {GET_BRAND_URL} from "../../constants/apiUrlsConstants";
import {AxiosHeadersWithoutAuthorization} from "../../utils/AxiosHeadersWithoutAuthorization";

const GetAllBrands = async()=>{
    let response = await axiosInstance.get(GET_BRAND_URL, {
        headers:{
            common:{
                ...AxiosHeadersWithoutAuthorization(axiosInstance)
            }
        }
    });
    return response;
}

export default GetAllBrands
