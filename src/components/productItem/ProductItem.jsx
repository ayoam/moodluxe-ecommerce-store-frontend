import React from 'react'
import { useNavigate } from "react-router-dom";

const ProductItem = ({product})=>{
    const navigate = useNavigate();

    return(
        <>
            <div className={"relative bg-black p-3 pb-4 sm:pb-6 cursor-pointer border-[1px] border-transparent hover:border-white/50 transition-colors hover:shadow-sm hover:shadow-white/30"}
                 onClick={()=> navigate("/products/"+product.idp)}
            >
                {product.discountPrice && <p className={"absolute bg-red-600 text-white font-semibold top-[-5px] left-[-5px] px-2 py-1"}>SALE</p>}
                <div className={"w-full mx-auto  bg-red-300"}>
                    <img
                        src={`data:image/${product.photoList[0].extension};base64,${product.photoList[0].photo}`}
                        alt={"img"}
                        className={"w-full h-full object-cover"}
                    />
                </div>
                <div className={"text-white"}>
                    <p className={"mt-2 font-semibold text-md font-playfair"}>{product.brand.name}</p>
                    <p className={"text-sm md:text-base mt-2 font-extralight h-10"}>{product.libelle} </p>
                    <div className={"flex flex-row gap-3 mt-2"}>
                        {product.discountPrice && <p className={"line-through text-md sm:text-base lg:text-lg"}>{product.originalPrice}$</p>}
                        <p className={"font-semibold text-md sm:text-base lg:text-lg scale-105"}>{product.discountPrice?product.discountPrice:product.originalPrice}$</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductItem
