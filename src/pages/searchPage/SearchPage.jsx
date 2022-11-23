import React from 'react';
import HomeLayout from "../../layouts/homeLayout/HomeLayout";
import testPhoto from "../../assets/testPhoto";
import ProductItem from "../../components/productItem/ProductItem";
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
    return (
        <HomeLayout>

            <>
                <div>
                    <p className={"text-2xl text-gray-800 text-center italic mx-auto mt-9 mb-3"}>YOUR SEARCH FOR "Rolex" REVEALED THE FOLLOWING:</p>
                </div>
                <div className={"w-full sm:col-span-2 order-4 sm:order-none"}>
                    <div className={`grid grid-cols-1   md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-3 gap-4`}>
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
                    <div className={"flex flex-col items-center"}>
                    <button type="button" className="text-white text-center bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200  font-medium rounded-lg text-sm px-5 py-2.5 mt-8 mr-2 mb-8">
                        <a className="load-more_btn text-center mt-12"
                           onClick="loadMoreProducts()">Load More results</a>

                    </button>
                    </div>
                </div>
            </>

        </HomeLayout>
    );
}

export default SearchPage;