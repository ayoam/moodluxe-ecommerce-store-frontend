import React from 'react'
import {axiosInstance} from "../apiService";
import {CART_MAIN_URL, POST_CART_ITEMS_LIST_PATH} from "../../constants/apiUrlsConstants";

const postOfflineCartItems = async(cartId,cartItemsList)=>{
    let response = await axiosInstance.post(CART_MAIN_URL+cartId+POST_CART_ITEMS_LIST_PATH,{
        cartItems:cartItemsList
    });
    return response;
}

export default postOfflineCartItems
