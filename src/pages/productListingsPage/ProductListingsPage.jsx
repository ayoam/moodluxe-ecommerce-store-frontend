import React, {useEffect, useState} from 'react'
import HomeLayout from "../../layouts/homeLayout/HomeLayout";
import ProductItem from "../../components/productItem/ProductItem";
import ProductListingsFilter from "../../components/productListingsFilter/ProductListingsFilter";
import ProductListingProducts from "../../components/productListingProducts/ProductListingProducts";
import {useParams, useSearchParams} from "react-router-dom";
import ListingPageSorting from "../../components/listingPageSorting/ListingPageSorting";
import ReactPaginate from "react-paginate";
import ProductListingPagination from "../../components/productListingPagination/ProductListingPagination";
import GetProductsByQueryParams from "../../service/productRequests/GetProductsByQueryParams";
import useUrlSearchParams from "../../hooks/useUrlSearchParams";
import {getCLS} from "web-vitals";
import {unstable_ClassNameGenerator} from "@mui/material";
import {useSetRecoilState} from "recoil"
import {
    defaultMaxPriceState,
    defaultMinPriceState,
    totalCountState
} from "../../recoil/atoms/productListingAtom";

const ProductListingsPage = ()=>{
    const limit = 8;
    const {collectionId:category}=useParams();
    const {urlSearchParams, page} = useUrlSearchParams();
    const [filtersHidden,setFiltersHidden] = useState(true);
    const [dimensions, setDimensions] = useState({width: window.innerWidth,});
    const setTotalCount = useSetRecoilState(totalCountState);
    const setDefaultMaxPrice = useSetRecoilState(defaultMaxPriceState);
    const setDefaultMinPrice = useSetRecoilState(defaultMinPriceState);
    const [productsList,setProductsList] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
            });
            window.addEventListener("load", handleResize, false);
            window.addEventListener("resize", handleResize, false);
        };
        handleResize();
        if(dimensions.width>=768){
            setFiltersHidden(false);
        }
        if(dimensions.width<768){
            setFiltersHidden(true);
        }
    },[window.innerWidth]);


    useEffect(() => {
        if(urlSearchParams){
            GetProductsByQueryParams({...urlSearchParams,limit,category})
                .then(response =>{
                    console.log(response);
                    setTotalCount(response && Math.ceil(parseInt(response?.data?.totalCount) / limit));
                    setDefaultMaxPrice(response && parseInt(response?.data?.maxPrice));
                    setDefaultMinPrice(response && parseInt(response?.data?.minPrice));
                    setProductsList(response?.data?.data);
                });
        }
    }, [urlSearchParams]);


    // useEffect(() => {
    //     console.log(productsList);
    // }, [productsList]);


    return(
        <>
            <HomeLayout>
                <section className={"bg-secondaryBgColor py-16 px-4"}>
                    <div className="max-w-[100rem] mx-auto">
                        <div className={"grid grid-cols-1 sm:grid-cols-[250px_1fr] sm:grid-rows-[60px_1fr] gap-x-6 gap-y-2"}>
                            <div className={"order-1 sm:order-none"}>
                                <button className={"text-black bg-white border-2 border-white hover:border-red-500 w-full p-2 hover:bg-transparent hover:text-white transition-colors mb-4"}
                                        onClick={()=>setFiltersHidden(prev=>!prev)}>
                                    {filtersHidden ?"SHOW FILTERS":"HIDE FILTERS"}
                                </button>
                            </div>
                            <ListingPageSorting/>
                            <ProductListingsFilter filtersHidden={filtersHidden}/>
                            <ProductListingProducts filtersHidden={filtersHidden} productsList={productsList}/>
                        </div>
                    </div>
                </section>
            </HomeLayout>
        </>
    )
}

export default ProductListingsPage
