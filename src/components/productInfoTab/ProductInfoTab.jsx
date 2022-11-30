import React, {useEffect, useState} from 'react'
import {IoIosArrowForward} from "react-icons/io"

const ProductInfoTab = ({item,setIsActive})=>{

    return(
        <div className={"text-white"}>
            <div className={"py-5 text-md border-white/30 border-t-[1px] flex flex-row items-center justify-between cursor-pointer"}
                onClick={()=>setIsActive(item.id)}
            >
                {item.title.toUpperCase()}
                <IoIosArrowForward className={`text-2xl ${item.isActive?"rotate-90":""}`}/>
            </div>
            {
                item.isActive &&
                <div className={"py-8 text-sm font-light"}>
                    {item?.content}
                </div>
            }

        </div>
    )
}

export default ProductInfoTab
