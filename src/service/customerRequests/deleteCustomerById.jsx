import React from 'react';
import {axiosInstance} from "../apiService";
import {CUSTOMER_MAIN_URL} from "../../constants/apiUrlsConstants";

const deleteCustomerById = async(id) => {
    const response = await axiosInstance.delete(CUSTOMER_MAIN_URL+"/"+id)
    return response;
}

export default deleteCustomerById;