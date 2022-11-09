import React, {useEffect, useRef} from 'react'
import HomeHeader from "../../components/homeHeader/HomeHeader";
import HomeFooter from "../../components/homeFooter/HomeFooter";
import Cart from "../../components/cart/Cart";
import {useRecoilState} from 'recoil';
import {cartIsActiveState} from "../../recoil/atoms/cartAtom"

const scrollBarStatus = {
    hidden:"hidden",
    auto:"auto",
    visible:"visible"
}

const HomeLayout = ({children})=>{
    const [cartIsActive,setCartIsActive] = useRecoilState(cartIsActiveState);

    useEffect(()=>{
        cartIsActive?setScrollBar(scrollBarStatus.hidden):setScrollBar(scrollBarStatus.auto)
    },[cartIsActive])

    const setScrollBar = (status)=>{
        document.body.style.overflow = status;
    }

    return(
        <>
            <div className={"flex flex-row-reverse w-full relative"}>
                <div className={`bg-gray-100 h-screen ${cartIsActive?"w-full sm:w-[400px]":"w-0"} transition-all ease-out fixed`}>
                    <Cart className={`${!cartIsActive && "hidden"}`}/>
                </div>
                <div className={`w-screen ${cartIsActive && "translate-x-[-400px]"} transition-transform ease-out`}>
                    <HomeHeader/>
                    <main>{children}</main>
                    <HomeFooter/>
                </div>
            </div>
        </>
    )
}

export default HomeLayout
