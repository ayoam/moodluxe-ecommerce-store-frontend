import React from 'react'
import axios from "axios";
import {GET_BRAND_URL} from "../../constants/apiUrlsConstants";

const getBrands = async () => {
    const response = axios.get(GET_BRAND_URL);
    return response;
}

export default getBrands
