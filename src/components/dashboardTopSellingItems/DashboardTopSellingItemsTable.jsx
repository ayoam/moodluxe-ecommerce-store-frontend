import React from 'react'
import testPhoto from "../../assets/testPhoto";
import DashboardOrdersTableRow from "../dashboardOrdersTableRow/DashboardOrdersTableRow";
import DashboardTopSellingItemsTableRow from "./DashboardTopSellingItemsTableRow";
const DashboardTopSellingItemsTable = ({topSellingItems})=>{
    const items = [1,2,3,4,5];
    return(
        <div className={"bg-gradient-to-br from-white to-gray-100 rounded-md shadow-[2px_2px_1px_2px_rgba(255,255,255,0.25)] h-[400px] p-4"}>
            <h1 className={"font-semibold text-base text-black/80"}>Top selling items</h1>
            <div className={"w-full mt-4"}>
                <table className={"w-full"}>
                    <thead className={"text-left font-semibold text-sm text-black/60"}>
                        <tr>
                            <td>Item</td>
                            <td className={"text-center"}>Orders</td>
                        </tr>
                    </thead>
                    <tbody className={"text-sm text-black/70"}>
                        {topSellingItems.map((item,index)=>{
                            return (
                                <DashboardTopSellingItemsTableRow sellingItem={item} key={index}/>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DashboardTopSellingItemsTable
