import React, {useEffect} from 'react'
import HomeLayout from "../../layouts/homeLayout/HomeLayout";
import {useRecoilState} from "recoil";
import {cartIsActiveState, cartItemsState} from "../../recoil/atoms/cartAtom";
import {useLocalStorage} from "../../hooks/useLocalStorage";
import testPhoto from "../../assets/testPhoto";
import {useNavigate} from "react-router-dom";
import CartItem from "../../components/cartItem/CartItem";
import CartPageCartItem from "../../components/cartPageCartItem/CartPageCartItem";

const CartPage = ()=>{
    const [cartIsActive,setCartIsActive] = useRecoilState(cartIsActiveState);
    const [cartItems,setCartItems] = useRecoilState(cartItemsState);

    const navigate =useNavigate();

    return(
        <HomeLayout>
            <section className={"bg-secondaryBgColor text-white"}>
                <div className={"max-w-5xl mx-auto py-12"}>
                    <div className={"text-center mb-12 space-y-4"}>
                        <h1 className={"text-4xl font-bold"}>Shopping bag</h1>
                        <p className={"text-md"}>({cartItems.length} item{cartItems.length>1 && 's'})</p>
                    </div>
                    <div className={"p-4 border-[1px] border-white/50 space-y-2"}>
                        {cartItems?.length>0 && <CartPageCartItem item={cartItems[0]}/>}
                        {cartItems?.length>0 && <CartPageCartItem item={cartItems[0]}/>}
                        {cartItems?.length>0 && <CartPageCartItem item={cartItems[0]}/>}
                    </div>
                </div>
            </section>
        </HomeLayout>
    )
}

export default CartPage
