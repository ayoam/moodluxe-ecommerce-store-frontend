import React from 'react'
import HomeLayout from "../../layouts/homeLayout/HomeLayout";
import {useParams } from 'react-router-dom';
import BrandCatgories from "../../components/brandCategories/BrandCatgories";

const BrandPage = ()=>{
    //check if brand name exist , if not return 404 page
    let { brandName } = useParams();
    return(
        <HomeLayout>
            <div className={"bg-secondaryBgColor"}>
                <div className={"max-w-7xl mx-auto text-white py-16 min-h-[90vh]"}>
                    <h1 className={"text-4xl font-semibold text-center"}>{brandName.toUpperCase()} WATCHES</h1>
                    <div className={"my-10"}>
                        <BrandCatgories brand={brandName}/>
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}

export default BrandPage
