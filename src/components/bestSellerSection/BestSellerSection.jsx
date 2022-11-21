import React from 'react'
import CollectionItem from "../collectionItem/CollectionItem";
import ProductItem from "../productItem/ProductItem";
import testPhoto from "../../assets/testPhoto"


const productsList = [
    {
        "brand":{
            "idb":1,
            "name":"Fossil"
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
            "name":"Casio"
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
            "name":"Swatch"
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

const BestSellerSection = ()=>{
    return(
        <>
            <div className={"bg-mainBgColor py-16"}>
                <h1 className={"text-white text-center text-4xl font-semibold mb-12"}>Best Seller</h1>
                <div className={"max-w-7xl @w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-4  justify-items-center"}>
                    {productsList.map((item,index)=>{
                        return <ProductItem key={index} product={item}/>
                    })}
                </div>
            </div>
        </>
    )
}

export default BestSellerSection
