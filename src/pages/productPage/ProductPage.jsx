import React, {useEffect, useState} from 'react'
import HomeLayout from "../../layouts/homeLayout/HomeLayout";
import testPhoto from "../../assets/testPhoto"
import {testPhoto2} from "../../assets/testPhoto"
import ProductImages from "../../components/productImages/ProductImages";
import ProductCTA from "../../components/productCTA/ProductCTA";
import ProductInfo from "../../components/productInfo/ProductInfo";
import GetProductsByQueryParams from "../../service/productRequests/GetProductsByQueryParams";
import useUrlSearchParams from "../../hooks/useUrlSearchParams";
import {useParams} from "react-router-dom";
import GetProductById from "../../service/productRequests/GetProductById";


const photoList= [
    {
        "photoId":1655121,
        "photo":testPhoto,
        "extension":"jpg"
    },
    {
        "photoId":14545121,
        "photo":testPhoto2,
        "extension":"jpg"
    },
    {
        "photoId":121233321,
        "photo":testPhoto,
        "extension":"jpg"
    },
    {
        "photoId":1212321,
        "photo":testPhoto2,
        "extension":"jpg"
    }
    ,
    {
        "photoId":1212121,
        "photo":testPhoto,
        "extension":"jpg"
    }
    ,
    {
        "photoId":1212121,
        "photo":testPhoto,
        "extension":"jpg"
    }

];


const product =
    {
        "brand":{
            "idb":1,
            "name":"Fossil"
        },
        "libelle":"Captain Cook Chronograph 43mm",
        "originalPrice":399.99,
        "discountPrice":329.99,
        "photoList":photoList,
        "idp":"12SQZ21SDE",
    };


const ProductPage = ()=>{
    const {productId}=useParams();
    const [product,setProduct] = useState(null);


    useEffect(() => {
        GetProductById(productId)
            .then(response =>{
            // console.log(response);
            setProduct(response?.data)
        });
    }, []);

    return(
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
}

export default ProductPage
