import React from 'react'
import {NavLink} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"

const NavbarDropdownList = ({items,active,isBrand})=>{
    const brandClasses = isBrand ? "grid grid-cols-3" :"";
    const itemLink = isBrand?"/brands/":"/collections/";
    return(
        <>
            <AnimatePresence>
            {
            active &&
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={"absolute bg-white top-[80%] translate-x-[-50%] left-[50%] sm:left-4 sm:translate-x-[0%] shadow-lg inline-block min-w-[300px] z-50"}>
                <ul className={"font-normal text-left text-black "+brandClasses}>
                    {items.map((item,index)=>{
                        return <NavLink to={itemLink+item.trim().replace(" ","-").toLocaleLowerCase()} key={index}>
                            <p className={"hover:bg-red-200 px-5 py-3 "}>{item}</p>
                        </NavLink>

                    })}
                </ul>
            </motion.div>
            }
            </AnimatePresence>
        </>
    )
}

export default NavbarDropdownList
