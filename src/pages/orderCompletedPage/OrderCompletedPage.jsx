import React from 'react'
import {useCookies} from "react-cookie";
import {useRecoilValue} from "recoil";
import {appUserState} from "../../recoil/atoms/AuthenticationAtom";
import UnauthorizedPage from "../../components/unauthorizedPage/UnauthorizedPage";
import NotFoundPage from "../404Page/NotFoundPage";
import HomeLayout from "../../layouts/homeLayout/HomeLayout";

const OrderCompletedPage = ()=>{
    const [cookies, setCookie] = useCookies();
    const user = useRecoilValue(appUserState);

    if(!user) return <UnauthorizedPage/>
    if(!cookies["order-number"]) return <NotFoundPage/>

    return(
        <>
            <HomeLayout>
                <section className={"bg-secondaryBgColor text-white min-h-[85vh]"}>
                    <div className={"pt-8 flex flex-col items-center"}>
                        <p>order completed</p>
                        <p>order number : #{cookies["order-number"]}</p>
                    </div>
                </section>
            </HomeLayout>
        </>
    )
}

export default OrderCompletedPage
