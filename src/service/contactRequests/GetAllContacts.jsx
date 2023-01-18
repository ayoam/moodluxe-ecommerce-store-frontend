import React from 'react';
import {axiosInstance} from "../apiService";
import {GET_CONTACT_URL} from "../../constants/apiUrlsConstants";

const GetAllContacts = async() => {

    let response = null;
    response = await axiosInstance.get(GET_CONTACT_URL);
    return response;

}

export default GetAllContacts;