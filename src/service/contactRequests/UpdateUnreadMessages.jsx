import React from 'react';
import {axiosInstance} from "../apiService";
import {
    GET_CONTACT_URL,
    PUT_UPDATE_UNREAD_MESSAGE_BY_ID_URL
} from "../../constants/apiUrlsConstants";


const UpdateUnreadMessages =async (id) => {
    let response = await axiosInstance.put(GET_CONTACT_URL+"/"+ id+PUT_UPDATE_UNREAD_MESSAGE_BY_ID_URL);
    return response;
}

export default UpdateUnreadMessages;