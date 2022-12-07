import React from 'react'
import {axiosInstance} from "../apiService";
import {GET_CHECK_EMAIL_URL} from "../../constants/apiUrlsConstants";

const CheckEmailExistance = async(email)=>{
    let response = await axiosInstance.get(GET_CHECK_EMAIL_URL+"/"+email);
    return response;
}

export default CheckEmailExistance
