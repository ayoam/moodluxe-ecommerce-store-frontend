import React, {useEffect, useRef, useState} from 'react'
import {BsArrowDown, BsSearch} from "react-icons/bs";
import OrderManagementTableRow from "../orderManagementTableRow/OrderManagementTableRow";
import useUrlSearchParams from "../../hooks/useUrlSearchParams";
import {useSearchParams} from "react-router-dom";
import OrderManagementTabs from "../orderManagementTabs/OrderManagementTabs";
import MaterialTablePagination from "../materialTablePagination/MaterialTablePagination";
import {getValueFromURL} from "../../utils/getValueFromURL";
import getOrdersByUrlParams from "../../service/adminRequests/getOrdersByUrlParams";
import {useRecoilValue} from "recoil";
import {appUserState} from "../../recoil/atoms/AuthenticationAtom";
import TableLoadingSpinner from "../tableLoadingSpinner/TableLoadingSpinner";

const OrderManagementTable = ()=>{

    const searchRef = useRef();
    const [searchInput,setSearchInput]=useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    const [sort,setSort]=useState("asc");
    const [orders,setOrders] = useState(null);
    const [totalCount,setTotalCount] = useState(null);
    const { urlSearchParams } = useUrlSearchParams();
    const user = useRecoilValue(appUserState);
    const [tableLoading, setTableLoading] = useState(true);

    useEffect(()=>{
        setSearchInput(getValueFromURL("q",searchParams));
        const sort = getValueFromURL("sort",searchParams);
        sort && console.log("===>",sort);
        sort && setSort(sort);
    },[searchParams])

    useEffect(()=>{
        console.log(urlSearchParams);
        if(urlSearchParams && user) {
            setTableLoading(true);
            getOrdersByUrlParams(urlSearchParams)
                .then(response => {
                    setOrders(response?.data?.orderList);
                    setTotalCount(response?.data?.totalCount);
                })
                .finally(() => setTableLoading(false));
        }
    },[urlSearchParams,user])

    const handleSearchClick = ()=>{
        searchRef.current.value.trim()===""?searchParams.delete("q"):searchParams.set("q", searchRef.current.value);
        setSearchParams(searchParams);
    }

    const handleSearchChange = ()=>{
        searchRef.current.value.trim()==="" && handleSearchClick();
    }

    const handleSort = ()=>{
        switch(sort){
            case "asc":setSort("desc");searchParams.set("sort", "desc");break;
            case "desc":setSort("asc");searchParams.set("sort", "asc");break;
        }
        setSearchParams(searchParams);
    }

    return(
        <div>
            <h1 className={"text-2xl sm:text-3xl font-semibold text-white mb-8"}>Order Management</h1>
            <div className={"bg-gradient-to-br from-white to-gray-100 rounded-md shadow-[2px_2px_1px_2px_rgba(255,255,255,0.25)] overflow-hidden"}>
                <OrderManagementTabs/>

                <div className={"p-3 sm:p-5 border-b-[1px]"}>
                    <div className={"flex rounded-lg overflow-hidden"}>
                        <input type={"number"} ref={searchRef} onChange={handleSearchChange} defaultValue={searchInput} className={"border-[1px] py-1 px-2 sm:p-2 rounded-bl-md rounded-tl-md placeholder:font-light placeholder:text-sm outline-0 shadow-inner shadow-lg"} placeholder={"Search Order ID"}/>
                        <button className={"hover:bg-gray-100 transition-colors flex items-center justify-center py-2 px-4 rounded-br-md rounded-tr-md border-[1px] border-l-0"} onClick={handleSearchClick}>
                            <BsSearch/>
                        </button>
                    </div>
                </div>

                <div className={"relative overflow-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 overflow-x-scroll h-[440px] border-b-[1px]"}>
                    <table className={"table min-w-[900px] w-full"}>
                        <thead>
                            <tr className={"border-b-[1px] text-gray-600 bg-gray-100 text-sm text-center"}>
                                <th className={"py-4 w-32"}>
                                    <button className={"flex justify-center items-center gap-1 mx-auto"} onClick={handleSort}>
                                        Order ID
                                        <BsArrowDown className={`transition-all ${sort==="desc"?"rotate-180":"rotate-0"}`}/>
                                    </button>
                                </th>
                                <th>Customer</th>
                                <th>Adresse</th>
                                <th>Items</th>
                                <th>Total</th>
                                <th>Status</th>
                                <th>Date</th>
                                <th className={"w-35"}></th>
                            </tr>
                        </thead>
                        <tbody>
                            <TableLoadingSpinner tableLoading={tableLoading}/>
                            {orders?.map((item,index)=>{
                                return <OrderManagementTableRow order={item} key={index}/>
                            })}
                        </tbody>
                    </table>
                </div>
                <div className={"bg-white h-[80px]"}>
                    {totalCount>0 && <MaterialTablePagination count={totalCount}/>}
                </div>
            </div>
        </div>
    )
}

export default OrderManagementTable
