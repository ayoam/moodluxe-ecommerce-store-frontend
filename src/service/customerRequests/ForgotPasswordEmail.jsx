import React from 'react';
import {axiosInstance} from "../apiService";
import {POST_FORGOT_PASSWORD_EMAIL} from "../../constants/apiUrlsConstants";

const ForgotPasswordEmail = async(data) => {
    const response = await axiosInstance.post(POST_FORGOT_PASSWORD_EMAIL,data)
    return response;
}

export default ForgotPasswordEmail;