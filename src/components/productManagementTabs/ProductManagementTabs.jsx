import React, {useEffect, useState} from 'react'
import {useSearchParams} from "react-router-dom";
import {getValueFromURL} from "../../utils/getValueFromURL";

const activeTabClassName = "border-amber-400  border-b-[3px] text-black";


const ProductManagementTabs = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [tabs, setTabs] = useState([
            {
                text: "All Products",
                active: true
            },
            {
                text: "Active",
                active: false
            },
            {
                text: "Draft",
                active: false
            }
        ]);

    useEffect(()=>{
        const tabParam = getValueFromURL("status",searchParams);
        tabParam && setTabs(prev=>{
            return prev.map(item=> {
                if(tabParam==="") return item;
                if(item.text.toLowerCase() === tabParam) return {...item, active: true}
                return {...item,active:false};
            })
        })
    },[searchParams])

    const handleTabChange = (index,value)=>{
        setTabs(tabs.map((item,i)=>{
            if(i===index) return {...item,active: true}
            return {...item,active: false}
        }));

        if(index===0){
            searchParams.delete("status");
            setSearchParams(searchParams);
        }
        else{
            searchParams.set("status", value.toLowerCase());
            setSearchParams(searchParams);
        }

    }


    return (
        <div className={"px-2 sm:px-4 py-[2px] border-b-[1px]"}>
            <ul className={"flex flex-row  gap-0 sm:gap-2 font-semibold text-gray-400/90"}>
                {tabs.map((tab, index) => {
                    return (
                        <li className={`text-xs sm:text-base px-3 py-4 sm:p-4 cursor-pointer ${tab.active && activeTabClassName}`}
                            key={index}
                            onClick={()=>{
                                handleTabChange(index,tab.text);
                            }}>
                            {tab.text}
                        </li>)
                })}
            </ul>
        </div>
    )
}

export default ProductManagementTabs
