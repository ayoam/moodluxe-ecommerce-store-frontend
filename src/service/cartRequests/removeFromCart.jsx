import React from 'react'
import {axiosInstance} from "../apiService";
import {
    CART_MAIN_URL,
    DELETE_REMOVE_CART_ITEM_PATH} from "../../constants/apiUrlsConstants";

const removeFromCart = async (cartId, cartItemId)=>{
    let response = await axiosInstance.delete(CART_MAIN_URL+cartId+"/cartItems/"+cartItemId+DELETE_REMOVE_CART_ITEM_PATH);
    return response;
}

export default removeFromCart
