import React from 'react'
import {axiosInstance} from "../apiService";
import {GET_CUSTOMER_ORDERS_URL, POST_GENERATE_INVOICE_URL} from "../../constants/apiUrlsConstants";
import {options} from "axios";

const generateInvoice = async(invoiceId)=>{
    let response = await axiosInstance.get(POST_GENERATE_INVOICE_URL+invoiceId,{responseType:"blob"});
    return response;
}

export default generateInvoice
