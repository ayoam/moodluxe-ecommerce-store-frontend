import React from 'react';
import {axiosInstance} from "../apiService";
import {GET_CUSTOMER_BY_ID_URL, PUT_UPDATE_CUSTOMER_DETAILS_BY_ID_URL} from "../../constants/apiUrlsConstants";


const UpdateCustomerAddressById =async (id,data) => {
    let response = await axiosInstance.put(GET_CUSTOMER_BY_ID_URL+"/"+ id+PUT_UPDATE_CUSTOMER_DETAILS_BY_ID_URL,data);
    return response;
}

export default UpdateCustomerAddressById;