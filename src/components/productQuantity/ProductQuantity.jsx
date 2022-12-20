import React, {useState} from 'react'
import {DECREASE, INCREASE} from "../../constants/cartConstants";
const ProductQuantity = ({quantity,setQuantity=null,setAction=null})=>{

    return(
        <>
            <div className={"text-black bg-white flex flex-row"}>
                <button className={"px-2"} onClick={()=>{
                    setAction && setAction(DECREASE,quantity-1);
                    setQuantity && setQuantity(quantity-1)}
                }>-</button>
                <p className={"flex justify-center w-8 py-2 "}>{quantity}</p>
                <button className={"px-2"} onClick={()=>{
                    setAction && setAction(INCREASE,quantity+1);
                    setQuantity && setQuantity(quantity+1)}
                }>+</button>
            </div>
        </>
    )
}

export default ProductQuantity
