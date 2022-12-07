import React, {useEffect} from 'react'
import HomeLayout from "../../layouts/homeLayout/HomeLayout";
import emailImage from "../../assets/img/verify-email.png"
import{useNavigate} from "react-router-dom";
import { useCookies } from "react-cookie";
import NotFoundPage from "../404Page/NotFoundPage";
const VerifyEmailPage = ()=>{
    const [cookies, setCookie] = useCookies(["user"]);

    if(!cookies?.verifyEmail) return <NotFoundPage/>

    return(
        <>
            <HomeLayout>
                <section className={"h-[85vh] bg-secondaryBgColor"}>
                    <div className={"px-8 py-16 max-w-[700px] text-center mx-auto"}>
                        <img src={emailImage} alt={"image"} className={"w-[250px] sm:w-[300px] mx-auto"}/>
                        <div className={"text-white leading-8"}>
                            <h1 className={"text-3xl py-8 font-semibold"}>Verify your email</h1>
                            <p>we've sent an email to <b>{cookies?.verifyEmail}</b> verify your email
                                address and activate your account. The link in the email will expire in 24 hours.</p>
                            <p className={"mt-6"}>
                                <a className={"text-blue-400 underline cursor-pointer"} href={"/contact-us"}>Click here</a> if you did not receive an email .
                            </p>
                        </div>
                    </div>
                </section>
            </HomeLayout>
        </>
    )
}

export default VerifyEmailPage
