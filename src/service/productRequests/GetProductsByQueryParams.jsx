import React, {useState} from 'react'
import {axiosInstance} from "../apiService";
import {GET_PRODUCT_LIST_URL} from "../../constants/apiUrlsConstants";
const GetProductsByQueryParams = async(params)=>{
    let response = null;
    // const {page,limit,minPrice,maxPrice,brand,q} = params;

    try {
        response = await axiosInstance.get(GET_PRODUCT_LIST_URL, {
            params: {
                ...params
            }
        });

        // const total = response.headers["x-total-count"];
        // setpageCount(Math.ceil(total / limit));
        // response.data.map((elt) => {
        //     if (elt.speciality) {
        //         elt.speciality = elt.speciality.name;
        //     }
        //     elt.birthDate = elt.birthDate.substring(0, 10);
        //     return elt;
        // })
        // console.log(response.data);
        return response;
    } catch (e) {
        // console.log(e);
        return null;
    }

}

export default GetProductsByQueryParams
