import React from 'react'
import axios from "axios";
import {CATEGORY_MAIN_URL} from "../../constants/apiUrlsConstants";

const getCollections = async()=>{
    const response = axios.get(CATEGORY_MAIN_URL);
    return response;
}

export default getCollections
