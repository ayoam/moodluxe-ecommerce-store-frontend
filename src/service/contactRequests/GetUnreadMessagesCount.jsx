import React from 'react';
import {axiosInstance} from "../apiService";
import {GET_UNREAD_MESSAGE_COUNT_URL} from "../../constants/apiUrlsConstants";

const GetUnreadMessagesCount = async() => {

        let response = null;
    response = await axiosInstance.get(GET_UNREAD_MESSAGE_COUNT_URL);
    return response;

}

export default GetUnreadMessagesCount;