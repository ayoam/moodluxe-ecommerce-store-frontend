import React, {useState} from 'react'

const ProductQuantity = ({quantity,setQuantity})=>{

    return(
        <>
            <div className={"text-black bg-white flex flex-row"}>
                <button className={"px-2"} onClick={()=>setQuantity(quantity-1)}>-</button>
                <p className={"flex justify-center w-8 py-2 "}>{quantity}</p>
                <button className={"px-2"} onClick={()=>setQuantity(quantity+1)}>+</button>
            </div>
        </>
    )
}

export default ProductQuantity
