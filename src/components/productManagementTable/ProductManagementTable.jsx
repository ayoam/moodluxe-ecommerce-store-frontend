import React, {useEffect, useRef, useState} from 'react'
import {BsArrowDown, BsSearch} from "react-icons/bs";
import OrderManagementTableRow from "../orderManagementTableRow/OrderManagementTableRow";
import {TablePagination} from "@mui/material";
import ProductManagementTableRow from "../productManagementTableRow/ProductManagementTableRow";
import ProductManagementTabs from "../productManagementTabs/ProductManagementTabs";
import MaterialTablePagination from "../materialTablePagination/MaterialTablePagination";
import {getValueFromURL} from "../../utils/getValueFromURL";
import useUrlSearchParams from "../../hooks/useUrlSearchParams";
import {useNavigate, useSearchParams} from "react-router-dom";
import getOrdersByUrlParams from "../../service/adminRequests/getOrdersByUrlParams";
import {useRecoilValue} from "recoil";
import {appUserState} from "../../recoil/atoms/AuthenticationAtom";
import getProductsByQueryParams from "../../service/productRequests/GetProductsByQueryParams";
import TableLoadingSpinner from "../tableLoadingSpinner/TableLoadingSpinner";

const ProductManagementTable = () => {
    const [totalCount, setTotalCount] = useState(null);
    const [products, setProducts] = useState(null);
    const searchRef = useRef();
    const [searchInput, setSearchInput] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    const [sort, setSort] = useState("asc");
    const [tableLoading, setTableLoading] = useState(true);
    const navigate = useNavigate();
    const {urlSearchParams} = useUrlSearchParams();
    const user = useRecoilValue(appUserState);

    useEffect(() => {
        setSearchInput(getValueFromURL("q", searchParams));
        const sort = getValueFromURL("sort", searchParams);
        sort && console.log("===>", sort);
        sort && setSort(sort);
    }, [searchParams])

    useEffect(() => {
        console.log(urlSearchParams);
        if(urlSearchParams && user) {
            setTableLoading(true);
            getProductsByQueryParams({limit: 5, ...urlSearchParams})
                .then(response => {
                    setProducts(response?.data?.data);
                    setTotalCount(response?.data?.totalCount);
                })
                .finally(() => setTableLoading(false));
        }
    }, [urlSearchParams, user])

    const handleSearchClick = () => {
        if (searchRef.current.value.trim() !== "") {
            searchParams.set("q", searchRef.current.value);
            setSearchParams(searchParams);
        }
    }

    const handleSearchChange = () => {
        if (searchRef.current.value.trim() === "") {
            searchParams.delete("q");
            setSearchParams(searchParams);
        }
    }

    const handleSort = () => {
        switch (sort) {
            case "asc":
                setSort("desc");
                searchParams.set("sort", "desc");
                break;
            case "desc":
                setSort("asc");
                searchParams.set("sort", "asc");
                break;
        }
        setSearchParams(searchParams);
    }

    return (
        <div>
            <h1 className={"text-2xl sm:text-3xl font-semibold text-white mb-8"}>Product Management</h1>
            <div
                className={"bg-gradient-to-br from-white to-gray-100 rounded-md shadow-[2px_2px_1px_2px_rgba(255,255,255,0.25)] overflow-hidden"}>
                <ProductManagementTabs/>

                <div className={"p-3 sm:p-5 border-b-[1px] flex flex-col sm:flex-row gap-2 justify-between"}>
                    <div className={"flex rounded-lg overflow-hidden"}>
                        <input type={"text"}
                               ref={searchRef} onChange={handleSearchChange} defaultValue={searchInput}
                               className={"border-[1px] py-1 px-2 sm:p-2 rounded-bl-md rounded-tl-md placeholder:font-light placeholder:text-sm outline-0 shadow-inner shadow-lg w-full sm:w-auto"}
                               placeholder={"Search Products"}
                        />
                        <button
                            className={"hover:bg-gray-100 transition-colors flex items-center justify-center py-2 px-4 rounded-br-md rounded-tr-md border-[1px] border-l-0"}
                            onClick={handleSearchClick}>
                            <BsSearch/>
                        </button>
                    </div>
                    <div>
                        <button className={"bg-green-600 hover:bg-green-700 transition-colors rounded px-5 shadow-inner py-2 text-white text-sm"} onClick={()=>navigate("/admin/products/create")}>Add Product</button>
                    </div>
                </div>

                <div
                    className={" relative overflow-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 overflow-x-scroll h-[440px] border-b-[1px]"}>
                    <table className={"table min-w-[900px] w-full"}>
                        <thead>
                        <tr className={"border-b-[1px] text-gray-600 bg-gray-100 text-sm"}>
                            <th className={"w-20"}></th>
                            <th className={"py-4 w-32"}>
                                <button className={"flex justify-center items-center gap-1 mx-auto"}
                                        onClick={handleSort}>
                                    Product ID
                                    <BsArrowDown
                                        className={`transition-all ${sort === "desc" ? "rotate-180" : "rotate-0"}`}/>
                                </button>
                            </th>
                            <th>Name</th>
                            <th className={"w-28"}>Status</th>
                            <th>Brand</th>
                            <th>Price</th>
                            <th>Inventory</th>
                            <th className={"w-32"}></th>
                        </tr>
                        </thead>
                        <tbody>
                            <TableLoadingSpinner tableLoading={tableLoading}/>
                            {products?.map((item, index) => {
                                    return <ProductManagementTableRow product={item} key={index}/>;
                            })}
                        </tbody>
                    </table>
                </div>

                <div className={"bg-white h-[80px]"}>
                    {totalCount > 0 && <MaterialTablePagination count={totalCount}/>}
                </div>
            </div>
        </div>)
}

export default ProductManagementTable
