import React from 'react';
import {axiosInstance} from "../apiService";
import {PUT_RESET_PASSWORD} from "../../constants/apiUrlsConstants";

const ResetPassword = async(passwordResetToken, data) => {
    const response = await axiosInstance.put(PUT_RESET_PASSWORD+"/"+passwordResetToken, data);
    return response;
}

export default ResetPassword;