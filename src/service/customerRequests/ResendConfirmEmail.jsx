import React from 'react';
import {axiosInstance} from "../apiService";
import {POST_RESEND_CONFIRM_EMAIL_URL} from "../../constants/apiUrlsConstants";

const ResendConfirmEmail = async (keycloakId) => {

        const response = await axiosInstance.post(POST_RESEND_CONFIRM_EMAIL_URL+"/"+keycloakId)
        return response;

}

export default ResendConfirmEmail;