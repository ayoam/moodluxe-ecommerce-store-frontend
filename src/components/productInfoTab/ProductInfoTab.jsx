import React from 'react'
import {IoIosArrowForward} from "react-icons/io"
import parse from 'html-react-parser';

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
                <div className={"py-8 text-sm font-light !text-white "}>
                    { parse(item?.content.replaceAll("color: rgb(33, 37, 41)","color: white")) }
                </div>
            }

        </div>
    )
}

export default ProductInfoTab
