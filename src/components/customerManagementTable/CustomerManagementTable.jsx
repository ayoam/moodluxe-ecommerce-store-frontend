import React, {useState} from 'react';
import {BsSearch} from "react-icons/bs";
import OrderManagementTableRow from "../orderManagementTableRow/OrderManagementTableRow";
import {TablePagination} from "@mui/material";
import CustomerManagementTableRow from "../customerManagementTableRow/CustomerManagementTableRow";
import MaterialTablePagination from "../materialTablePagination/MaterialTablePagination";

const CustomerManagementTable = () => {
    const [totalCount,setTotalCount]=useState(12);
    return (
        <div>
            <h1 className={"text-2xl sm:text-3xl font-semibold text-white mb-8"}>Customer Management</h1>
            <div className={"bg-gradient-to-br from-white to-gray-100 rounded-md shadow-[2px_2px_1px_2px_rgba(255,255,255,0.25)] overflow-hidden"}>
                <div className={"p-3 sm:p-5 border-b-[1px]"}>
                    <div className={"flex rounded-lg overflow-hidden"}>
                        <input type={"text"} className={"border-[1px] py-1 px-2 sm:p-2 rounded-bl-md rounded-tl-md placeholder:font-light placeholder:text-sm outline-0 shadow-inner shadow-lg"} placeholder={"Search Orders"}/>
                        <button className={"hover:bg-gray-100 transition-colors flex items-center justify-center py-2 px-4 rounded-br-md rounded-tr-md border-[1px] border-l-0"}>
                            <BsSearch/>
                        </button>
                    </div>
                </div>
                <div className={"overflow-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 overflow-x-scroll h-[440px] border-b-[1px]"}>
                    <table className={"table min-w-[900px] w-full"}>
                        <thead>
                        <tr className={"border-b-[1px] text-gray-600 bg-gray-100 text-sm text-center"}>
                            <th className={"py-4 w-32"}>Customer ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Birth Date</th>
                            <th className={"w-30"}></th>
                        </tr>
                        </thead>
                        <tbody>
                        <CustomerManagementTableRow/>
                        <CustomerManagementTableRow/>
                        <CustomerManagementTableRow/>
                        <CustomerManagementTableRow/>
                        <CustomerManagementTableRow/>
                        <CustomerManagementTableRow/>
                        <CustomerManagementTableRow/>
                        </tbody>
                    </table>
                </div>
                <div className={"bg-white h-[80px]"}>
                    {totalCount>0 && <MaterialTablePagination count={totalCount}/>}
                </div>
            </div>
        </div>    );
}

export default CustomerManagementTable;