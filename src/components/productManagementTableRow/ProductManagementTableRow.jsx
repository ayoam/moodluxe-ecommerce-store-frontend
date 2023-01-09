import React from 'react'
import {TbEditCircle} from "react-icons/tb";
import testPhoto from "../../assets/testPhoto";

const ProductManagementTableRow = ()=>{
    return(
        <tr className={"border-b-[1px] text-sm text-center text-black/70"}>
            <td className={"py-2 font-semibold text-black/50"}>
                <div className={"w-14 h-14 mx-auto"}>
                    <img src={testPhoto} alt={"image"}/>
                </div>
            </td>
            <td className={"font-semibold text-black/50"}>#1200</td>
            <td>Rolex watch A7654</td>
            <td>Rolex</td>
            <td>$799.00</td>
            <td className={"text-green-600 font-semibold"}>In stock</td>
            {/*<td className={"text-red-600 font-semibold"}>Out of stock</td>*/}
            <td className={"text-center px-2"}>
                <div className={"flex items-center justify-around"}>
                    <button className={"bg-gray-200 hover:bg-gray-300 transition-colors shadow-inner flex justify-center items-center rounded-lg p-2 gap-1 font-semibold text-lg"}><TbEditCircle/></button>
                </div>
            </td>
        </tr>
    )
}

export default ProductManagementTableRow
