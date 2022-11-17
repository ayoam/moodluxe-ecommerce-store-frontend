import React, {useEffect} from 'react'
import ProductQuantity from "../productQuantity/ProductQuantity";
import {useRecoilState} from 'recoil';
import {cartIsActiveState,cartItemsState} from "../../recoil/atoms/cartAtom"
import {useLocalStorage} from '../../hooks/useLocalStorage';
import testPhoto from "../../assets/testPhoto";

const CartItem = ({item})=>{
    const [cartItems,setCartItems] = useRecoilState(cartItemsState);

    const handleQuantityChange = (value)=>{
        if(value<=0){
            setCartItems(prev=>{
                const newState = prev.filter((x)=>{
                    return x.productId!==item.productId
                })
                return newState;
            })
        }
        else if(value<=10){
            setCartItems(prev=>{
                const newState = prev.map((x)=>{
                    if(x.productId===item.productId){
                        return {...x,quantity:value}
                    }
                    return x;
                })
                return newState;
            })
        }
    }

    return(
        <div className={"flex flex-row gap-2 border-[1px] border-white/30 items-center p-4 shadow-white/20 shadow-md from-white via-red-400 to-gray-100 bg-gradient-to-br"}>
            <div>
                <div className={"w-[130px] h-[130px] shadow shadow-sm"}>
                    <img
                        src={`data:image/${item.mainPhoto.extension};base64,${item.mainPhoto.photo}`}
                        alt={'image photo'}
                        className={"w-full h-full object-cover"}
                    />
                </div>
            </div>
            <div className={"flex flex-row justify-between items-center w-full text-black"}>
                <div className={""}>
                    <p className={"text-lg"}>{item.libelle}</p>
                </div>
                <div className={"flex flex-row justify-between items-center mt-2 gap-6 px-4"}>
                    <ProductQuantity quantity={item.quantity} setQuantity={handleQuantityChange}/>
                    <p className={"font-semibold text-lg"}>{(item.quantity*item.price).toFixed(2)}$</p>
                </div>
            </div>
        </div>
    )
}

export default CartItem
