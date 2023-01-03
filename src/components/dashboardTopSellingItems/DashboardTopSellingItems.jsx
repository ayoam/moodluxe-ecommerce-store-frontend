import React from 'react'
import testPhoto from "../../assets/testPhoto";
const DashboardTopSellingItems = ()=>{
    const items = [1,2,3,4,5];
    return(
        <div className={"bg-gradient-to-br from-white to-gray-100 rounded-md shadow-[2px_2px_1px_2px_rgba(255,255,255,0.25)] h-[400px] p-4"}>
            <h1 className={"font-semibold text-base text-red-600 drop-shadow-sm"}>Top selling items</h1>
            <div className={"w-full mt-4"}>
                <table className={"w-full"}>
                    <thead className={"text-left font-semibold text-sm text-black/60"}>
                        <tr>
                            <td>Item</td>
                            <td className={"text-center"}>Orders</td>
                        </tr>
                    </thead>
                    <tbody className={"text-sm text-black/70"}>
                        {items.map((item,index)=>{
                            return (
                                <tr className={"border-b-[1px] transition duration-300 ease-in-out hover:bg-gray-100 hover:cursor-pointer"} key={index}>
                                    <td className={"flex gap-2 py-2 items-center"}>
                                        <div className={"w-10 h-10 bg-black"}>
                                            <img src={testPhoto} alt={"test"}/>
                                        </div>
                                        <div className={"space-y-1"}>
                                            <p>rolex watch A9723</p>
                                            <p className={"text-xs"}>$3200.00</p>
                                        </div>
                                    </td>
                                    <td className={"py-2 text-center"}>1308</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DashboardTopSellingItems
