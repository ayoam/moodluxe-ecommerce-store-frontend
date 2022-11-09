import React, {useEffect, useState} from 'react'
import PriceFilter from "../priceFilter/PriceFilter";
import BrandFilter from "../brandFilter/BrandFilter";
import {useSearchParams} from "react-router-dom";

const ProductListingsFilter = ({filtersHidden})=>{
    const [filters, setFilters] = useState({});
    const [filtersApplied,setFiltersApplied] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        let initialFilterParams = {};
        for (let [key, value] of searchParams.entries()) {
            if(!["page","sort"].includes(key)){
                initialFilterParams[key] = value;
            }
        }

        setFilters(initialFilterParams);

        // if((Object.keys(initialParams).includes("minPrice")) || (Object.keys(initialParams).includes("maxPrice")) || (Object.keys(initialParams).includes("brand"))){
        //     setFiltersApplied(true);
        // }

        if(Object.keys(initialFilterParams).length>0){
            setFiltersApplied(true);
        }

    }, []);

    const handleApplyFilters = ()=>{
        if(!filtersApplied){
            for(let key in filters){
                searchParams.set(key, filters[key]);
            }
        }
        else{
            for(let key in filters){
                if(!["page","sort"].includes(key)){
                    searchParams.delete(key);
                }
            }
        }
        setSearchParams(searchParams);
        setFiltersApplied(prev=>!prev);
    }

    const handleMinMaxPrice = (values)=>{
        setFilters(prev => {return {...prev,minPrice:values[0],maxPrice:values[1]}})
    }

    const handleSelectedBrands = (brands)=>{
        setFilters(prev => {
            return {...prev,brand:brands}
        })
    }

    return(
        <>
            {
                !filtersHidden &&
                <div className={"px-2 my-4 sm:my-0 order-2 sm:order-none"}>
                    <PriceFilter minMaxPrices={[filters.minPrice,filters.maxPrice]} getminMaxPrice={handleMinMaxPrice}/>
                    <BrandFilter selectedBrands={filters.brand} getSelectedBrands={handleSelectedBrands}/>
                    <button className={"text-white border-[1px] border-white w-full p-2 hover:bg-white hover:text-black transition-colors"}
                            onClick={handleApplyFilters}>
                        {!filtersApplied?"APPLY FILTERS":"REMOVE FILTERS"}
                    </button>
                </div>
            }
        </>
    )
}

export default ProductListingsFilter
