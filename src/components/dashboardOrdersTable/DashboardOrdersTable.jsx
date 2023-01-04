import React from 'react'
import DashboardOrdersTableRow from "../dashboardOrdersTableRow/DashboardOrdersTableRow";

const DashboardOrdersTable = ({latestOrders})=>{
    return(
        <div className={"mt-8 bg-gradient-to-br from-white to-gray-100 rounded-md shadow-[2px_2px_1px_2px_rgba(255,255,255,0.25)] p-4"}>
            <h1 className={"text-lg font-semibold text-red-600 drop-shadow-sm"}>Latest orders</h1>
            <div className={"overflow-auto h-[400px] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 mt-4 overflow-x-scroll"}>
                {
                    latestOrders?.length>0 ?
                    <table className={"table min-w-[900px] w-full"}>
                        <tbody>
                            {latestOrders?.map((item,index)=>{
                                return <DashboardOrdersTableRow order={item} key={index}/>
                            })}
                        </tbody>
                    </table>
                    :
                    <p className={"text-center text-sm opacity-70"}>orders list is empty!</p>
                }
            </div>
        </div>
    )
}

export default DashboardOrdersTable
