import React from 'react'
import {axiosInstance} from "../apiService";
import {CUSTOMER_MAIN_URL, POST_CONFIRM_EMAIL_URL} from "../../constants/apiUrlsConstants";

const ConfirmEmail = async(confirmToken)=>{
    const response = await axiosInstance.post(POST_CONFIRM_EMAIL_URL+"/"+confirmToken)
    return response;
}

export default ConfirmEmail
