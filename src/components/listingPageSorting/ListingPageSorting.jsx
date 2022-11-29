import React, {useEffect, useState} from 'react'
import {useSearchParams} from "react-router-dom";


const ListingPageSorting = ()=>{
    const [searchParams, setSearchParams] = useSearchParams();
    const [sortBy,setSortBy] = useState("");


    useEffect(() => {
        let sortParam = "";
        for (let [key, value] of searchParams.entries()) {
            if(key==="sort"){
                sortParam = value;
            }
        }

        console.log(sortParam);
        setSortBy(sortParam);

    }, []);

    const handleSortChange = (e) =>{
        setSortBy(e.target.value);
        searchParams.set("sort", e.target.value);
        setSearchParams(searchParams);
    }

    return(
        <div className={"order-3 sm:order-none"}>
            <select className={"py-2.5 px-3 text-sm outline-0 w-full sm:w-auto"} onChange={handleSortChange} value={sortBy}>
                <option value={""}>Recommended</option>
                <option value={"nameAsc"}>Name(Ascending)</option>
                <option value={"nameDesc"}>Name(Descending)</option>
                <option value={"priceAsc"}>Price(Low To High)</option>
                <option value={"priceDesc"}>Price(High To Low)</option>
            </select>
        </div>
    )
}

export default ListingPageSorting
