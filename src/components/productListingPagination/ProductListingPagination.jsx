import React, {useState} from 'react'
import ReactPaginate from "react-paginate";
import useUrlSearchParams from "../../hooks/useUrlSearchParams";
import {useSearchParams} from "react-router-dom";
import {useRecoilValue} from "recoil"
import {totalCountState} from "../../recoil/atoms/productListingAtom";


const ProductListingPagination = ()=>{
    const totalCount = useRecoilValue(totalCountState);
    const { page } = useUrlSearchParams();
    let [searchParams, setSearchParams] = useSearchParams();

    const handlePageClick = data=>{
        let currentPage = data.selected;
        searchParams.set("page", currentPage+1);
        setSearchParams(searchParams);
    }

    return(
        <div className={"mt-12 text-white/80"}>
            <ReactPaginate
                forcePage={page-1}
                previousLabel={"←"}
                nextLabel={"→"}
                breakLabel={"..."}
                pageCount={totalCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={"flex flex-row gap-1 justify-center items-center"}
                pageClassName={""}
                pageLinkClassName={"border-[1px] border-transparent hover:border-white/30 py-2 px-4"}
                previousLinkClassName={"px-2"}
                nextClassName={"px-2"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"text-red-500 font-bold scale-105"}
                activeLinkClassName={"border-[1px] !border-white"}
            />
        </div>
    )
}

export default ProductListingPagination
