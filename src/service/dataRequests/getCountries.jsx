import React from 'react'
import axios from "axios";
import {COUNTRIES_MAIN_URL} from "../../constants/apiUrlsConstants";
import {axiosInstance} from "../apiService";
import {AxiosHeadersWithoutAuthorization} from "../../utils/AxiosHeadersWithoutAuthorization";

const GetCountries = async()=>{
const response = axios.get(COUNTRIES_MAIN_URL,{
        headers: {
            common: {
                ...AxiosHeadersWithoutAuthorization(axiosInstance)
            }
        }
    });
    return response;
}

export default GetCountries
