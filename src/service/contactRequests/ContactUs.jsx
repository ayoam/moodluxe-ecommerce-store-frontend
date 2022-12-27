import React from 'react'
import {axiosInstance} from "../apiService";
import {POST_CONTACT_US_URL} from "../../constants/apiUrlsConstants";

const contactUs = async(data)=>{
    let response = await axiosInstance.post(POST_CONTACT_US_URL, {
        ...data
    });
    return response;
}

export default contactUs;
