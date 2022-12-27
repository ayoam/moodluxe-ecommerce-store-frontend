import React from 'react'
import {useCookies} from "react-cookie";
import {useRecoilValue} from "recoil";
import {appUserState} from "../../recoil/atoms/AuthenticationAtom";
import UnauthorizedPage from "../../components/unauthorizedPage/UnauthorizedPage";
import NotFoundPage from "../404Page/NotFoundPage";
import HomeLayout from "../../layouts/homeLayout/HomeLayout";
import {IoMdCheckmarkCircle} from "react-icons/io"

const OrderCompletedPage = ({order})=>{
    const [cookies, setCookie] = useCookies();
    const user = useRecoilValue(appUserState);

    //if(!cookies["order-number"]) return <NotFoundPage/>

    return(
        <>
            <HomeLayout>
                <section className={"bg-secondaryBgColor text-white min-h-[85vh]"}>
                    <div className={"pt-24 flex flex-col items-center"}>
                        <p className={"font-semibold text-4xl text-center sm:px-12 sm:py12"}>Your order has been received</p>
                        <IoMdCheckmarkCircle className={"mt-12 text-green-600 text-6xl"}/>
                        <p className={"pt-5 font-normal text-2xl"}>Thank you for your purchase ! </p>
                        <p className={"pt-4"}>Your order ID is : {cookies["order-number"]}</p>
                        <p className={"pt-4 text-center sm:px-12 sm:py12"}>You will receive an order confirmation email with your details of your order.</p>
                        <button className={"mt-16 bg-red-600 py-3 px-6 font-semibold shadow-[1px_1px_20px_3px_rgba(220,38,38,0.6)] hover:bg-transparent hover:border-red-600 border-transparent border-2 hover:backdrop-blur-sm transition-all"}>View orders</button>
                    </div>

                </section>
            </HomeLayout>
        </>
    )
}

export default OrderCompletedPage
