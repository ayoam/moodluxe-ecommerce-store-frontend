import React, {useEffect, useState} from 'react'
import HomeLayout from "../../layouts/homeLayout/HomeLayout";
import testPhoto from "../../assets/testPhoto"
import {testPhoto2} from "../../assets/testPhoto"
import ProductImages from "../../components/productImages/ProductImages";
import ProductCTA from "../../components/productCTA/ProductCTA";
import ProductInfo from "../../components/productInfo/ProductInfo";
import GetProductsByQueryParams from "../../service/productRequests/GetProductsByQueryParams";
import useUrlSearchParams from "../../hooks/useUrlSearchParams";
import {useParams,useNavigate} from "react-router-dom";
import GetProductById from "../../service/productRequests/GetProductById";
import {logDOM} from "@testing-library/react";
import NotFoundPage from "../404Page/NotFoundPage";


// const photoList= [
//     {
//         "photoId":1655121,
//         "photo":testPhoto,
//         "extension":"jpg"
//     },
//     {
//         "photoId":14545121,
//         "photo":testPhoto2,
//         "extension":"jpg"
//     },
//     {
//         "photoId":121233321,
//         "photo":testPhoto,
//         "extension":"jpg"
//     },
//     {
//         "photoId":1212321,
//         "photo":testPhoto2,
//         "extension":"jpg"
//     }
//     ,
//     {
//         "photoId":1212121,
//         "photo":testPhoto,
//         "extension":"jpg"
//     }
//     ,
//     {
//         "photoId":1212121,
//         "photo":testPhoto,
//         "extension":"jpg"
//     }
//
// ];
//
//
// const product =
//     {
//         "brand":{
//             "idb":1,
//             "name":"Fossil"
//         },
//         "libelle":"Captain Cook Chronograph 43mm",
//         "originalPrice":399.99,
//         "discountPrice":329.99,
//         "photoList":photoList,
//         "idp":"12SQZ21SDE",
//     };


const ProductPage = ()=>{
    const {productId}=useParams();
    const navigate = useNavigate();
    const [product,setProduct] = useState(null);
    const [isLoading,setIsLoading] = useState(false);
    const [status,setStatus] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        GetProductById(productId)
            .then(response =>{
            setProduct(response?.data);
            setStatus(response?.status);
        }).catch(error=> {
            console.log(error);
            setStatus(error?.response?.status);
        }).finally(()=>{
            setIsLoading(false);
        });
    }, []);

    if(isLoading) {return <HomeLayout><p className={"h-screen bg-secondaryBgColor text-white pt-28 text-center text-lg"}>loading ...</p></HomeLayout>}
    if(status===200) return(
        <>
            <HomeLayout>
                <section className={"bg-secondaryBgColor py-16"}>
                    <div className={"max-w-6xl mx-auto"}>
                        <div className={"flex flex-col lg:flex-row p-8 lg:p-16 xl:p-0 lg:justify-between gap-16"}>
                            {product &&
                                <>
                                    <ProductImages images={product.photoList}/>
                                    <ProductCTA item={product}/>
                                </>
                            }
                        </div>
                        <ProductInfo item={product}/>
                    </div>
                </section>
            </HomeLayout>
        </>
    )
    if([400,404,500].includes(status)){return  <NotFoundPage/>}
}

export default ProductPage
