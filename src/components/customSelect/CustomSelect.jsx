import React, {useState} from 'react'
import {MdKeyboardArrowDown} from "react-icons/md";

const CustomSelect = ({style, children, onChange, defaultValue,customRef,register}) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className={"relative"} onClick={() => setIsActive(prev => !prev)} onBlur={() => setIsActive(false)}>
            <select className={`${style} w-full`}
                    style={{
                        "WebkitAppearance": "none",
                        "MozAppearance": "none",
                        "appearance": "none",
                        "padding": "8px"
                    }}
                    onChange={onChange}
                    defaultValue={defaultValue}
                    ref={customRef}
                    {...register}>
                {children}
            </select>
            <div className={`absolute right-2 top-[50%] translate-y-[-50%] ${isActive ? "rotate-180" : ""}`} onClick={()=>setIsActive(prev=>!prev)}>
                <MdKeyboardArrowDown className={"text-black text-lg"}/>
            </div>
        </div>
    )
}

export default CustomSelect
