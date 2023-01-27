import React, {useState} from 'react'
import {axiosInstance} from "../apiService";
import {GET_PRODUCT_LIST_URL} from "../../constants/apiUrlsConstants";
import {AxiosHeadersWithoutAuthorization} from "../../utils/AxiosHeadersWithoutAuthorization";

const GetProductsByQueryParams = async (params) => {
    const response = await axiosInstance.get(GET_PRODUCT_LIST_URL, {
        params: {
            ...params
        },
        headers: {
            common: {
                ...AxiosHeadersWithoutAuthorization(axiosInstance)
            }
        }

    });

    return response;
}

export default GetProductsByQueryParams
