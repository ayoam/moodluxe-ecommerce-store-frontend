import React from 'react'
import {axiosInstance} from "../apiService";
import {POST_CHECK_RESET_PASSWORD_TOKEN} from "../../constants/apiUrlsConstants";

const checkResetPasswordTokenIsvalid = async(token)=>{
    let response = await axiosInstance.post(POST_CHECK_RESET_PASSWORD_TOKEN+"/"+token);
    return response;
}

export default checkResetPasswordTokenIsvalid
