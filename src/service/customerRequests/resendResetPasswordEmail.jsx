import React from 'react'
import {axiosInstance} from "../apiService";
import {POST_RESEND_RESET_PASSWORD_EMAIL} from "../../constants/apiUrlsConstants";

const resendResetPasswordEmail = async(token)=>{
    let response = await axiosInstance.post(POST_RESEND_RESET_PASSWORD_EMAIL+"/"+token);
    return response;
}

export default resendResetPasswordEmail
