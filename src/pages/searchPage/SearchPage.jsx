import React, {useEffect, useState} from 'react';
import HomeLayout from "../../layouts/homeLayout/HomeLayout";
import testPhoto from "../../assets/testPhoto";
import ProductItem from "../../components/productItem/ProductItem";
import GetProductsByQueryParams from "../../service/productRequests/GetProductsByQueryParams";
import useUrlSearchParams from "../../hooks/useUrlSearchParams";
import {useRecoilState} from "recoil";
import { totalCountState } from "../../recoil/atoms/productListingAtom";
import { useNavigate } from "react-router-dom";

// const querySearchList = [
//     {
//         "brand":{
//             "idb":11,
//             "name":"Rolex"
//         },
//         "libelle":"Captain Cook Chronograph 43mm",
//         "originalPrice":399.99,
//         "discountPrice":null,
//         "photoList":[
//             {
//                 "photoId":1212121,
//                 "photo":testPhoto,
//                 "extension":"jpg"
//             }
//         ],
//         "idp":"12SQZ21SDE",
//     },
//     {
//         "brand":{
//             "idb":2,
//             "name":"Rolex"
//         },
//         "libelle":"Captain Cook Chronograph 43mm",
//         "originalPrice":12999.99,
//         "discountPrice":11300.99,
//         "photoList":[
//             {
//                 "photoId":13232332,
//                 "photo":testPhoto,
//                 "extension":"jpg"
//             }
//         ],
//         "idp":"12SQZ21SDE",
//     },
//     {
//         "brand":{
//             "idb":9,
//             "name":"Rolex"
//         },
//         "libelle":"Captain Cook Chronograph 43mm",
//         "originalPrice":69.99,
//         "discountPrice":62.99,
//         "photoList":[
//             {
//                 "photoId":1322212,
//                 "photo":testPhoto,
//                 "extension":"jpg"
//             }
//         ],
//         "idp":"12SQZ21SDE",
//     },
//     {
//         "brand":{
//             "idb":8,
//             "name":"Rolex"
//         },
//         "libelle":"Captain Cook Chronograph 43mm",
//         "originalPrice":129.99,
//         "discountPrice":99.99,
//         "photoList":[
//             {
//                 "photoId":1388712,
//                 "photo":testPhoto,
//                 "extension":"jpg"
//             }
//         ],
//         "idp":"12SQZ21SDE",
//     }
// ]


function SearchPage() {
    const limit = 8;
    const navigate = useNavigate();
    const {urlSearchParams, page ,setPage} = useUrlSearchParams();
    const [productsList,setProductsList] = useState(null);
    const [searchQuery,setSearchQuery] = useState("");
    const [totalCount,setTotalCount] = useRecoilState(totalCountState);
    const [loadMoreActive,setLoadMoreActive] = useState(false);
    const currentPage = page-1;

    useEffect(()=>{
        if(urlSearchParams){
            setSearchQuery(urlSearchParams?.q || null);
        }
    },[urlSearchParams])

    // useEffect(() => {
    //     console.log(searchQuery);
    // }, [searchQuery]);


    //load new data on searchQuery change
    useEffect(() => {
        if(searchQuery===null){
            navigate("/");
        }

        if(searchQuery){
            GetProductsByQueryParams({...urlSearchParams,limit,q:searchQuery})
                .then(response =>{
                    // console.log(response);
                    setTotalCount(Math.ceil(parseInt(response?.data?.totalCount) / limit));
                    setProductsList(response?.data?.data);
                });
        }
    }, [searchQuery]);

    //change load more button state
    useEffect(() => {
        if(totalCount-currentPage>1){
            setLoadMoreActive(true);
        }
    }, [totalCount,currentPage]);

    //load more result to products list
    useEffect(() => {
        if(productsList){
            GetProductsByQueryParams({page:page-1,limit,q:searchQuery})
                .then(response =>{
                    // console.log(response);
                    setProductsList(prev=>[...prev,...response?.data?.data]);
                    if(totalCount-currentPage===1){
                        setLoadMoreActive(false);
                    }
                });
        }

    }, [page]);



    const handleLoadMore = ()=>{
        if(currentPage<totalCount){
            setPage(prev=>prev+1);
        }
    }

    return (
        <HomeLayout>
                <div className={"bg-secondaryBgColor"}>
                    <div className={"py-16"}>
                        <p className={"text-2xl text-center mx-auto text-white"}>YOUR SEARCH FOR <b>"{searchQuery?.toUpperCase()}"</b> REVEALED THE FOLLOWING:</p>
                    </div>
                    <div className={"container mx-auto w-full sm:col-span-2 order-4 sm:order-none px-8 pb-12"}>
                        {productsList?.length==0 &&
                            <div className={"text-white text-center h-[50vh]"}>
                                <p>Sorry, we couldn't find any products based on your search.</p>
                            </div>
                        }
                        <div className={`grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-3 gap-4`}>
                            {productsList?.map((item,index)=>{
                                return <ProductItem key={index} product={item}/>
                            })}
                        </div>
                        <div className={"flex flex-col items-center pb-6"}>
                            {loadMoreActive &&
                                <button type="button" className="px-5 py-3 bg-white text-black font-semibold mt-5 hover:bg-transparent transition-colors backdrop-blur-sm border-transparent hover:border-red-600 border-2 hover:text-white" onClick={handleLoadMore}>
                                    <a className="load-more_btn text-center mt-12">Load More Results</a>
                                </button>
                            }
                        </div>
                    </div>
                </div>
        </HomeLayout>
    );
}

export default SearchPage;