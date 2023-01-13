import React from 'react';
import {AiFillPrinter, AiOutlineEye} from "react-icons/ai";
import {TbEditCircle} from "react-icons/tb";

const CustomerManagementTableRow = () => {
    return (
        <tr className={"border-b-[1px] text-sm text-center text-black/70"}>
            <td className={"py-4 font-semibold text-black/50"}>#860</td>
            <td>Maverick </td>
            <td>Grizemann</td>
            <td>maverickgrizemann@gmail.com</td>
            <td>+1123456789</td>
            <td >10.11.1996</td>
            <td> United states</td>
            <td className={"text-center px-2"}>
                <div className={"flex items-center justify-around"}>
                    <button className={"bg-gray-200 hover:bg-gray-300 transition-colors shadow-inner flex justify-center items-center rounded-lg py-2 px-3 gap-1 font-semibold"}><AiOutlineEye/></button>
                    <button className={"bg-gray-200 hover:bg-gray-300 transition-colors shadow-inner flex justify-center items-center rounded-lg p-2 gap-1 font-semibold text-lg"}><TbEditCircle/></button>
                </div>
            </td>
        </tr>
    );
}

export default CustomerManagementTableRow;