import React from 'react'
import axios from "axios";
import {COUNTRIES_MAIN_URL} from "../../constants/apiUrlsConstants";

const GetCountries = async()=>{
    const response = axios.get(COUNTRIES_MAIN_URL);
    return response;
}

export default GetCountries
