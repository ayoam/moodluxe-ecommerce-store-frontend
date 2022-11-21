import React, {useEffect, useState} from 'react'
import ProductInfoTab from "../productInfoTab/ProductInfoTab";

const ProductInfo = ()=>{
    const [tabsState,setTabsState]=useState([
        {
            "id":1,
            "title":"DESCRIPTION",
            "content":"",
            "isActive":true
        },
        {
            "id":2,
            "title":"DELIVERY & RETURNS",
            "content":"",
            "isActive":false
        }
        ]);

    const handleSetIsActive = (id)=>{
        setTabsState(prev=>{
            return prev.map((item)=>{
                if(item.id==id){
                    return {...item,isActive:!item.isActive}
                }
                return {...item,isActive:false};
            });
        })
    }
    return(
        <div className={"w-full mx-auto mt-20 p-4 lg:p-16 xl:p-0"}>
            {tabsState.map((item,index)=>{
                return <ProductInfoTab key={index} item={item}
                                       setIsActive={handleSetIsActive}
                />
            })}
        </div>
    )
}

export default ProductInfo
