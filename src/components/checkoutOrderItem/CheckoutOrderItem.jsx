import React, {useEffect} from 'react'
import testPhoto from "../../assets/testPhoto";

const CheckoutOrderItem = ({item})=>{


    return(
        <div className={"flex flex-row bg-white/10 border-gray-100/10 shadow shadow-sm"}>
            <div>
                <div className={"w-[80px] h-full"}>
                    <img
                        src={`data:image/${item.mainPhoto.extension};base64,${item.mainPhoto.photo}`}
                        alt={'image photo'}
                        className={"w-full h-full object-cover"}
                    />
                </div>
            </div>
            <div className={"flex flex-col justify-between w-full p-2"}>
                <p className={"text-[14px]"}>{item.libelle}</p>
                <div className={"flex flex-row justify-between items-center mt-2"}>
                    <p>x{item.quantity}</p>
                    <p className={"font-semibold"}>{(item.quantity*item.price).toFixed(2)}$</p>
                </div>
            </div>
        </div>
    )
}

export default CheckoutOrderItem
