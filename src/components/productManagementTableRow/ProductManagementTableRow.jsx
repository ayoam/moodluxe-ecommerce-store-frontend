import React from 'react'
import {TbEditCircle} from "react-icons/tb";
import testPhoto from "../../assets/testPhoto";
import productStatusTag from "../../constants/productStatusConstants";
import {RiDeleteBin5Fill} from "react-icons/ri";
import deleteProductById from "../../service/adminRequests/deleteProductById";
import {useSearchParams} from "react-router-dom";

const ProductManagementTableRow = ({product})=>{
    const [searchParams, setSearchParams] = useSearchParams();

    const handleDeleteBtnClick = ()=>{
        if(window.confirm("are you sure?")===true){
            deleteProductById(product.idp)
                .then(response=>{
                    console.log(response);
                    //this updates the table
                    setSearchParams(searchParams);
                })
        }
    }

    return(
        <tr className={"border-b-[1px] text-sm text-center text-black/70"}>
            <td className={"py-2 font-semibold text-black/50"}>
                <div className={"w-10 h-10 mx-auto"}>
                    <img src={`data:image/${product?.photoList[0].extension};base64,${product?.photoList[0].photo}`} alt={"image"}/>
                </div>
            </td>
            <td className={"font-semibold text-black/50"}>#{product.idp}</td>
            <td>{product?.libelle}</td>
            <td>
                {product.active ?
                    <p className={`rounded-2xl p-1 text-center w-20 mx-auto ${productStatusTag.ACTIVE.className}`}>{productStatusTag.ACTIVE.text}</p>
                    :
                    <p className={`rounded-2xl p-1 text-center w-20 mx-auto ${productStatusTag.DRAFT.className}`}>{productStatusTag.DRAFT.text}</p>
                }
            </td>
            <td>{product?.brand.name}</td>
            <td>${product?.discountPrice ? product?.discountPrice.toFixed(2) : product?.originalPrice.toFixed(2)}</td>
            <td >
                {product?.quantity>0 ?  <p className={"text-green-600 font-semibold"}>In stock <span className={"font-normal"}>({product?.quantity})</span></p> : <p className={"text-red-600/80 font-semibold"}>Out of stock</p>}
            </td>
            <td className={"text-center px-2"}>
                <div className={"flex items-center justify-around"}>
                    <button><RiDeleteBin5Fill className={"text-lg hover:text-red-600 transition-colors"} onClick={handleDeleteBtnClick}/></button>
                    <button className={"bg-gray-200 hover:bg-gray-300 transition-colors shadow-inner flex justify-center items-center rounded-lg p-2 gap-1 font-semibold text-lg"}><TbEditCircle/></button>
                </div>
            </td>
        </tr>
    )
}

export default ProductManagementTableRow
