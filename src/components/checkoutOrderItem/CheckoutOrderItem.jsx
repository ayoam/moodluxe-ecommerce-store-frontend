import React from 'react'
import testPhoto from "../../assets/testPhoto";

const CheckoutOrderItem = ()=>{
    return(
        <div className={"flex flex-row bg-white/10 border-gray-100/10 shadow shadow-sm"}>
            <div>
                <div className={"w-[70px] h-[70px]"}>
                    <img
                        src={`data:image/jpg;base64,${testPhoto}`}
                        alt={'image photo'}
                        className={"w-full h-full object-cover"}
                    />
                </div>
            </div>
            <div className={"flex flex-col justify-between w-full p-2"}>
                <p className={"text-[14px]"}>Captain Cook Chronograph 43mm</p>
                <div className={"flex flex-row justify-between items-center mt-2"}>
                    <p>x3</p>
                    <p className={"font-semibold"}>9.99$</p>
                </div>
            </div>
        </div>
    )
}

export default CheckoutOrderItem
