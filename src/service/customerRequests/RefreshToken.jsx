import React from 'react'
import {axiosInstance} from "../apiService";
import {POST_REFRESH_TOKEN_URL} from "../../constants/apiUrlsConstants";

const refreshToken = async(refreshToken)=>{
    let response = await axiosInstance.post(POST_REFRESH_TOKEN_URL, {
        "refresh_token":refreshToken
    });
    return response;
}

export default refreshToken
