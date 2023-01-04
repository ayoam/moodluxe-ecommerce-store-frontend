import React, {useState} from 'react'
import {BsSearch} from "react-icons/bs";
import DashboardOrdersTableRow from "../dashboardOrdersTableRow/DashboardOrdersTableRow";
import orderStatusTag from "../../constants/prderStatusConstants";
import {AiFillPrinter, AiOutlineEye} from "react-icons/ai";
import OrderManagementTableRow from "../orderManagementTableRow/OrderManagementTableRow";
import {TablePagination} from "@mui/material";

const OrderManagementTable = ()=>{
    const [tabs,setTabs]=useState([
        {
            text:"All Orders",
            active:true
        },
        {
            text:"In Progress",
            active:false
        },
        {
            text:"Shipped",
            active:false
        },
        {
            text:"Delivered",
            active:false
        }
    ]);

    const activeTabClassName = "border-amber-400  border-b-[3px] text-black";

    const tablePaginationStyle={
        ".MuiTablePagination-selectLabel":{
        fontFamily:"Poppins,sans-serif",
            fontWeight:"600"
        },
        ".MuiTablePagination-displayedRows ":{
            fontFamily:"Poppins,sans-serif!important"
        },
        ".MuiTablePagination-select":{
            fontFamily:"Poppins,sans-serif!important"
        },
        ".MuiTablePagination-toolbar":{
            paddingRight:"10px"
        }
    };

    return(
        <div>
            <h1 className={"text-3xl font-semibold text-white mb-8"}>Order Management</h1>
            <div className={"bg-gradient-to-br from-white to-gray-100 rounded-md shadow-[2px_2px_1px_2px_rgba(255,255,255,0.25)] overflow-hidden"}>
                <div className={"px-4 py-[2px] border-b-[1px]"}>
                    <ul className={"flex flex-row gap-2 font-semibold text-gray-400/90"}>
                        {tabs.map((tab,index)=>{
                            return(
                                <li className={`p-4 cursor-pointer ${tab.active && activeTabClassName}`} key={index}
                                       onClick={()=>{
                                            setTabs(tabs.map((item,i)=>{
                                                if(i===index) return {...item,active: true}
                                                return {...item,active: false}
                                            }));
                                        }}>
                                    {tab.text}
                                </li>)
                        })}
                    </ul>
                </div>
                <div className={"p-5 border-b-[1px]"}>
                    <div className={"flex rounded-lg overflow-hidden"}>
                        <input type={"text"} className={"border-[1px] p-2 rounded-bl-md rounded-tl-md placeholder:font-light placeholder:text-sm outline-0 shadow-inner shadow-lg"} placeholder={"Search Orders"}/>
                        <button className={"hover:bg-gray-100 transition-colors flex items-center justify-center py-2 px-4 rounded-br-md rounded-tr-md border-[1px] border-l-0"}>
                            <BsSearch/>
                        </button>
                    </div>
                </div>
                <div className={"overflow-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 overflow-x-scroll h-[440px] border-b-[1px]"}>
                    <table className={"table min-w-[900px] w-full"}>
                        <thead>
                            <tr className={"border-b-[1px] text-gray-600 bg-gray-100 text-sm text-center"}>
                                <th className={"py-4 w-32"}>Order ID</th>
                                <th>Customer</th>
                                <th>Adresse</th>
                                <th>Items</th>
                                <th>Total</th>
                                <th>Status</th>
                                <th>Date</th>
                                <th className={"w-30"}></th>
                            </tr>
                        </thead>
                        <tbody>
                            <OrderManagementTableRow/>
                            <OrderManagementTableRow/>
                            <OrderManagementTableRow/>
                            <OrderManagementTableRow/>
                            <OrderManagementTableRow/>
                            <OrderManagementTableRow/>
                            <OrderManagementTableRow/>
                        </tbody>
                    </table>
                </div>
                <div className={"bg-white h-[80px]"}>
                    <TablePagination
                        count={14}
                        onPageChange={()=>console.log("hi")}
                        page={0}
                        rowsPerPage={5}
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        sx={tablePaginationStyle}
                    />
                </div>
            </div>
        </div>
    )
}

export default OrderManagementTable
