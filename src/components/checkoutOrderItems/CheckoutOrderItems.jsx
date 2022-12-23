import React, {useEffect, useState} from 'react'
import testPhoto from "../../assets/testPhoto";
import CheckoutOrderItem from "../checkoutOrderItem/CheckoutOrderItem";
import {useRecoilState} from "recoil";
import {cartItemsState} from "../../recoil/atoms/cartAtom";
import {useLocalStorage} from "../../hooks/useLocalStorage";
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";

const CheckoutOrderItems = ({orderItems,totalAmount})=>{
    const [orderSummaryVisible,setOrderSummaryVisible] = useState(false);

    const [dimensions, setDimensions] = React.useState({
        width: window.innerWidth,
    });

    useEffect(() => {

        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
            });
            window.addEventListener("load", handleResize, false);
            window.addEventListener("resize", handleResize, false);
        };
        handleResize();
        if(dimensions.width>=1024){
            setOrderSummaryVisible(true);
        }
        if(dimensions.width<1024){
            setOrderSummaryVisible(false);
        }
    },[window.innerWidth]);


    return(
        <div className={"w-full lg:w-[800px] lg:border-l-[1px] lg:border-white/30 rounded-md lg:rounded-none overflow-hidden"}>
            <div className={"flex flex-row justify-between p-5 bg-black lg:hidden"}>
                <button className={"flex flex-row items-center gap-2"} onClick={()=>setOrderSummaryVisible(prev=>!prev)}>
                    {
                        !orderSummaryVisible ?
                            <>
                                <p>Show order summary</p>
                                <IoIosArrowDown/>
                            </>
                        :
                            <>
                                <p>Hide order summary</p>
                                <IoIosArrowUp/>
                            </>
                    }
                </button>
                <p className={"font-semibold"}>{orderItems.length>0 ? orderItems.map((item)=>item.quantity*item.price).reduce((sum,num)=>sum+num).toFixed(2):"0.00"}$</p>
            </div>

            {
                orderSummaryVisible
                &&
                <div className={"bg-white/10 lg:bg-transparent px-4 sm:px-6 py-4 lg:py-0 border-[1px] border-t-[0] border-white/30 rounded-b-md lg:border-none lg:rounded-none"}>
                    <h1 className={"font-semibold text-2xl mb-4 hidden lg:block"}>Your Order</h1>
                    <div className={"flex flex-col gap-3 h-[300px] overflow-y-auto scrollbar scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-100 pr-2"}>
                        {orderItems.map((item,index)=>{
                            return <CheckoutOrderItem item={item} key={index}/>
                        })}
                    </div>

                    <div className={"mt-6 flex flex-col gap-3"}>
                        <div className={"flex flex-row justify-between text-sm"}>
                            <p>Subtotal</p>
                            <p>{totalAmount}$</p>
                        </div>
                        <div className={"flex flex-row justify-between text-sm"}>
                            <p>Shipping</p>
                            <p>Free</p>
                        </div>
                        <div className={"flex flex-row text-xl font-semibold justify-between border-t-2 border-white pt-3"}>
                            <p>Total</p>
                            <p className={"text-2xl"}>{totalAmount}$</p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default CheckoutOrderItems
