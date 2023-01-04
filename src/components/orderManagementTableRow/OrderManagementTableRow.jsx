import React from 'react'
import orderStatusTag from "../../constants/prderStatusConstants";
import {AiFillPrinter, AiOutlineEye} from "react-icons/ai";

const OrderManagementTableRow = ()=>{
    return(
        <tr className={"border-b-[1px] text-sm text-center text-black/70"}>
            <td className={"py-4 font-semibold text-black/50"}>#1705</td>
            <td>Maverick Grizemann</td>
            <td>United states</td>
            <td>3</td>
            <td>$799.00</td>
            <td className={"p-3 w-32"}>
                <p className={`rounded-2xl p-1 text-center ${orderStatusTag["Shipped"]?.className}`}>{orderStatusTag["Shipped"]?.text}</p>
            </td>
            <td>07.05.2022</td>
            <td className={"text-center px-2"}>
                <div className={"flex items-center justify-around"}>
                    <button><AiFillPrinter className={"text-xl"}/></button>
                    <button className={"bg-gray-200 hover:bg-gray-300 transition-colors shadow-inner flex justify-center items-center rounded-lg py-2 px-3 gap-1 font-semibold"}><AiOutlineEye/></button>
                </div>
            </td>
        </tr>
    )
}

export default OrderManagementTableRow
