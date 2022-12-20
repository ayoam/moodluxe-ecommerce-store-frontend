import React, {useEffect, useState} from 'react'
import ProductQuantity from "../productQuantity/ProductQuantity";
import {useRecoilState, useRecoilValue} from 'recoil';
import {cartIsActiveState,cartItemsState} from "../../recoil/atoms/cartAtom"
import {useLocalStorage} from '../../hooks/useLocalStorage';
import testPhoto from "../../assets/testPhoto";
import {appUserState} from "../../recoil/atoms/AuthenticationAtom";
import addToCartRequest from "../../service/cartRequests/addToCartRequest";
import changeCartItemQuantity from "../../service/cartRequests/changeCartItemQuantity";
import {DECREASE, INCREASE} from "../../constants/cartConstants";
import removeFromCart from "../../service/cartRequests/removeFromCart";
import getCustomerCartBycartId from "../../service/cartRequests/getCustomerCart";

const CartItem = ({item,isForPage=false})=>{
    const [cartItems,setCartItems] = useRecoilState(cartItemsState);
    const user = useRecoilValue(appUserState);

    const handleActionChange = (action,newQuantity)=>{
        if(user){
            if(action===INCREASE){
                changeCartItemQuantity(item?.cartItemId, item.quantity+1)
                    .then(response=>{
                        getCustomerCartBycartId(user.cartId)
                            .then(response=>{
                                setCartItems(response?.data?.cartItemList);
                            })
                })
            }
            else if(action===DECREASE){
                if(item.quantity-1<=0){
                    removeFromCart(user?.cartId , item?.cartItemId)
                        .then(response=>{
                            getCustomerCartBycartId(user.cartId)
                                .then(response=>{
                                    setCartItems(response?.data?.cartItemList);
                                })
                        })
                }
                else{
                    changeCartItemQuantity(item?.cartItemId, item.quantity-1)
                        .then(response=>{
                            getCustomerCartBycartId(user.cartId)
                                .then(response=>{
                                    setCartItems(response?.data?.cartItemList);
                                })
                        })
                }
            }
        }
        else{
            if(newQuantity<=0){
                setCartItems(prev=>{
                    const newState = prev.filter((x)=>{
                        return x.productId!==item.productId
                    })
                    return newState;
                })
            }
            else if(newQuantity<=10){
                setCartItems(prev=>{
                    const newState = prev.map((x)=>{
                        if(x.productId===item.productId){
                            return {...x,quantity:newQuantity}
                        }
                        return x;
                    })
                    return newState;
                })
            }
        }
    }

    if(isForPage){
        return(
            <div className={"flex flex-row gap-2  items-center p-2 sm:p-4 shadow-white/20 shadow-md bg-white/20"}>
                <div>
                    <div className={"w-[80px] h-[80px] sm:w-[110px] sm:h-[110px] shadow shadow-sm"}>
                        <img
                            src={`data:image/${item.mainPhoto.extension};base64,${item.mainPhoto.photo}`}
                            alt={'image photo'}
                            className={"w-full h-full object-cover"}
                        />
                    </div>
                </div>
                <div className={"flex flex-col sm:flex-row justify-between sm:items-center w-full"}>
                    <div className={""}>
                        <p className={"text-sm sm:text-lg"}>{item.libelle}</p>
                    </div>
                    <div className={"flex flex-row justify-between items-center mt-2 gap-2 px-2 sm:px-4"}>
                        <ProductQuantity quantity={item.quantity} setAction={handleActionChange}/>
                        <p className={"font-semibold text-lg w-32 text-center"}>{(item.quantity*item.price).toFixed(2)}$</p>
                    </div>
                </div>

            </div>
        )
    }
    else{
        return(
            <>
                {
                    item &&
                    <div className={"flex flex-row gap-2"}>
                        <div>
                            <div className={"w-[90px] h-[90px]"}>
                                <img
                                    src={`data:image/${item.mainPhoto.extension};base64,${item.mainPhoto.photo}`}
                                    alt={'image photo'}
                                    className={"w-full h-full object-cover"}
                                />
                            </div>
                        </div>
                        <div className={"flex flex-col justify-between w-full"}>
                            <p className={"text-[14px]"}>{item.libelle}</p>
                            <div className={"flex flex-row justify-between items-center mt-2"}>
                                <ProductQuantity quantity={item.quantity} setAction={handleActionChange}/>
                                <p className={"font-semibold"}>{(item.quantity*item.price).toFixed(2)}$</p>
                            </div>
                        </div>
                    </div>
                }
            </>
        )
    }
}

export default CartItem
