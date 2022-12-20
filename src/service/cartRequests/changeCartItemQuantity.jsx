import React from 'react'
import {axiosInstance} from "../apiService";
import {CART_MAIN_URL, PUT_UPDATE_CART_ITEMS_QUANTITY_PATH} from "../../constants/apiUrlsConstants";

const changeCartItemQuantity = async (cartItemId,quantity)=>{
    let response = await axiosInstance.put(CART_MAIN_URL+"cartItems/"+cartItemId+PUT_UPDATE_CART_ITEMS_QUANTITY_PATH,null,{
        params:{quantity}
    });
    return response;
}

export default changeCartItemQuantity
