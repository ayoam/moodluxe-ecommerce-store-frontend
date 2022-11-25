import React from 'react';
import HomeLayout from "../../layouts/homeLayout/HomeLayout";
import testPhoto from "../../assets/testPhoto";
import ProductItem from "../../components/productItem/ProductItem";
import {useLocation} from "react-router-dom";

const querySearchList = [
    {
        "brand":{
            "idb":11,
            "name":"Rolex"
        },
        "libelle":"Captain Cook Chronograph 43mm",
        "originalPrice":399.99,
        "discountPrice":null,
        "photoList":[
            {
                "photoId":1212121,
                "photo":testPhoto,
                "extension":"jpg"
            }
        ],
        "idp":"12SQZ21SDE",
    },
    {
        "brand":{
            "idb":2,
            "name":"Rolex"
        },
        "libelle":"Captain Cook Chronograph 43mm",
        "originalPrice":12999.99,
        "discountPrice":11300.99,
        "photoList":[
            {
                "photoId":13232332,
                "photo":testPhoto,
                "extension":"jpg"
            }
        ],
        "idp":"12SQZ21SDE",
    },
    {
        "brand":{
            "idb":9,
            "name":"Rolex"
        },
        "libelle":"Captain Cook Chronograph 43mm",
        "originalPrice":69.99,
        "discountPrice":62.99,
        "photoList":[
            {
                "photoId":1322212,
                "photo":testPhoto,
                "extension":"jpg"
            }
        ],
        "idp":"12SQZ21SDE",
    },
    {
        "brand":{
            "idb":8,
            "name":"Rolex"
        },
        "libelle":"Captain Cook Chronograph 43mm",
        "originalPrice":129.99,
        "discountPrice":99.99,
        "photoList":[
            {
                "photoId":1388712,
                "photo":testPhoto,
                "extension":"jpg"
            }
        ],
        "idp":"12SQZ21SDE",
    }
]


function SearchPage() {
    const location = useLocation()
    const getSearchKeyWord = () => {
        return location.search.split("=")[1].toUpperCase()
    }
    return (
        <HomeLayout>
                <div className={"bg-secondaryBgColor"}>
                <div className={"py-16"}>
                    <p className={"text-2xl text-center mx-auto text-white"}>YOUR SEARCH FOR <b>"{getSearchKeyWord()}"</b> REVEALED THE FOLLOWING:</p>
                </div>
                <div className={"container mx-auto w-full sm:col-span-2 order-4 sm:order-none px-8 pb-12"}>
                    <div className={`grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-3 gap-4`}>
                        {querySearchList.map((item,index)=>{
                            return <ProductItem key={index} product={item}/>
                        })}
                        {querySearchList.map((item,index)=>{
                            return <ProductItem key={index} product={item}/>
                        })}
                        {querySearchList.map((item,index)=>{
                            return <ProductItem key={index} product={item}/>
                        })}
                    </div>
                    <div className={"flex flex-col items-center pb-6"}>
                    <button type="button" className="px-5 py-3 bg-white text-black font-semibold mt-5 hover:bg-transparent transition-colors backdrop-blur-sm border-transparent hover:border-red-600 border-2 hover:text-white ">
                        <a className="load-more_btn text-center mt-12">Load More Results</a>

                    </button>
                    </div>
                </div>
                </div>
        </HomeLayout>
    );
}

export default SearchPage;