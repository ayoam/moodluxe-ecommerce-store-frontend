import React from 'react'
import {axiosInstance} from "../apiService";
import {GET_PRODUCT_URL} from "../../constants/apiUrlsConstants";
import {AxiosHeadersWithoutAuthorization} from "../../utils/AxiosHeadersWithoutAuthorization";

const GetProductById = async (productId) => {
    let response = await axiosInstance.get(GET_PRODUCT_URL + "/" + productId,
        {
            headers: {
                common: {
                    ...AxiosHeadersWithoutAuthorization(axiosInstance)
                }
            }
        });
    return response;
}

export default GetProductById
