import React, {useState} from 'react'
import ProductQuantity from "../productQuantity/ProductQuantity";
import {BsPatchCheck,BsTruck,BsArrowCounterclockwise} from "react-icons/bs"
import {BiLockAlt} from "react-icons/bi"
import {useRecoilState, useRecoilValue} from 'recoil';
import {cartIsActiveState,cartItemsState} from "../../recoil/atoms/cartAtom"
import testPhoto from "../../assets/testPhoto";
import addToCartRequest from "../../service/cartRequests/addToCartRequest";
import {appUserState} from "../../recoil/atoms/AuthenticationAtom";

const ProductCTA = ({item})=>{
    const [cartItems,setCartItems] = useRecoilState(cartItemsState);
    const [cartIsActive,setCartIsActive] = useRecoilState(cartIsActiveState);
    const [quantity,setQuantity] = useState(1);
    const user = useRecoilValue(appUserState);

    const handleQuantityChange = (value)=>{
        if(value<=10 && value>0){
            setQuantity(value);
        }
    }

    const handleAddToCartClick = ()=>{
        setCartIsActive(true);
        const newCartItem = {
            "productId":item.idp,
            "mainPhoto":{extension:item.photoList[0].extension,photo:item.photoList[0].photo},
            "libelle":item.libelle,
            "price":item.discountPrice?item.discountPrice:item.originalPrice,
            "quantity":quantity,
            "productStock":item.quantity,
        };

        if(user){
            addToCartRequest(user?.cartId,newCartItem)
                .then(response=>{
                    console.log(response);
                    setCartItems(response?.data?.cartItemList);
                })
        }else{
            if(cartItems.find(x=>x.productId===item.idp)){
                setCartItems(prev=>{
                    const newState = prev.map((x)=>{
                        if(x.productId===item.idp){
                            return {...x,quantity:x.quantity+quantity}
                        }
                        return x;
                    })
                    return newState;
                })
            }
            else{
                setCartItems(prev=>{
                    return [...prev,newCartItem];
                })
            }
        }

    }

    return(
        <>
            <div className={"text-white  lg:w-1/2 flex flex-col gap-6"}>
                <h1 className={"font-semibold text-xl font-playfair"}>{item.brand.name.toUpperCase()}</h1>

                <p className={"font-extralight text-xl"}>{item.libelle}</p>

                <div className={"flex flex-row items-center gap-4 text-2xl"}>
                    {item.discountPrice ?
                        <>
                            <p className={"line-through font-extralight text-xl"}>{item.originalPrice}$</p>
                            <p className={""}>{item.discountPrice}$</p>
                        </>
                        :
                        <p className={""}>{item.originalPrice}$</p>
                    }

                </div>

                <div className={"flex flex-row gap-3 items-center"}>
                    <p className={"font-extralight font-playfair"}>Quantity</p>
                    <ProductQuantity quantity={quantity} setQuantity={handleQuantityChange}/>
                </div>

                <button className={"bg-[linear-gradient(to_right,_#ed213a,_#93291e)] border-red-600 hover:border-white border-2 text-white text-md font-semibold p-3  mt-4 w-full transition-colors"} onClick={handleAddToCartClick}>ADD TO SHOPPING BAG</button>

                <ul className={"font-light flex flex-col gap-2 mt-4"}>
                    <li className={"flex items-center gap-2"}><BsPatchCheck/> Price match promise</li>
                    <li className={"flex items-center gap-2"}><BsTruck/> Free delivery on all orders</li>
                    <li className={"flex items-center gap-2"}><BsArrowCounterclockwise/> Safe & secure transaction</li>
                    <li className={"flex items-center gap-2"}><BiLockAlt/> 30 day return policy</li>
                </ul>
            </div>
        </>
    )
}

export default ProductCTA
