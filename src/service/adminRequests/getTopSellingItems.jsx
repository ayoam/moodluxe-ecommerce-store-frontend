import React from 'react';
import {axiosInstance} from "../apiService";
import {PRODUCT_MAIN_URL} from "../../constants/apiUrlsConstants";

const getTopSellingItems = async () => {

    let response = await axiosInstance.get(PRODUCT_MAIN_URL + "/topSellingItems");
    return response;

}

export default getTopSellingItems;