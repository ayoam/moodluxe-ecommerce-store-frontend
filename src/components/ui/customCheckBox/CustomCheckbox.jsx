import React, {useState} from 'react'

const CustomCheckbox = ({item,changeChecked})=>{
    return(
        <>
            <div className={`w-4 h-4 border-[1px] border-white ${item.checked && "bg-white"}`}
                 onClick={()=>changeChecked(item.value)}>
            </div>
        </>
    )
}

export default CustomCheckbox
