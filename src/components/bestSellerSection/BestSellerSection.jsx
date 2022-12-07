import React, {useEffect, useState} from 'react'
import CollectionItem from "../collectionItem/CollectionItem";
import ProductItem from "../productItem/ProductItem";
import testPhoto from "../../assets/testPhoto"
import GetProductsByQueryParams from "../../service/productRequests/GetProductsByQueryParams";


const BestSellerSection = ()=>{
    const [productsList,setProductsList]=useState(null);

    useEffect(() => {
        GetProductsByQueryParams({page:0,limit:4,category:"best-seller"})
            .then(response =>{
                // console.log(response);
                setProductsList(response?.data?.data);
            });
    }, []);



    return(
        <>
            <div className={"bg-mainBgColor py-16"}>
                <h1 className={"text-white text-center text-4xl font-semibold mb-12"}>Best Seller</h1>
                <div className={"max-w-7xl @w-[80%] mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 xl:gap-4  justify-items-center px-4 sm:px-6"}>
                    {productsList?.map((item,index)=>{
                        return <ProductItem key={index} product={item}/>
                    })}
                </div>
            </div>
        </>
    )
}

export default BestSellerSection
