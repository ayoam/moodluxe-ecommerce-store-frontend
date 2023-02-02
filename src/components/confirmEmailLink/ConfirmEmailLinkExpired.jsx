import React, {useEffect, useState} from 'react';
import expiredVerificationImg from "../../assets/img/expiredVerification.png";
import HomeLayout from "../../layouts/homeLayout/HomeLayout";
import ResendConfirmEmail from "../../service/customerRequests/ResendConfirmEmail";
import GetCustomerById from "../../service/customerRequests/GetCustomerById";
import {useRecoilValue} from "recoil";
import {appUserState} from "../../recoil/atoms/AuthenticationAtom";



const ConfirmEmailLinkExpired = () => {
    const user = useRecoilValue(appUserState);
    const [resendLoading, setResendLoading] = useState(false);
    const [resendSuccess, setResendSuccess] = useState(false);
    const [resendError, setResendError] = useState(null);
     const [keycloakId, setKeycloakId] = useState(null);

    const CustomerRequest = async () => {
        return await Promise.all([
            GetCustomerById(user?.customerId)
                .then(response => {
                    // console.log(response)
                    setKeycloakId(response?.data?.keycloakId);
                })
        ])
    }

    useEffect(() => {
        if (user) {
            CustomerRequest();
        }
    }, [user]);

    const handleResendClick = async () => {
        setResendLoading(true);

        try {
            await ResendConfirmEmail(keycloakId);
            setResendLoading(false);
            setResendSuccess(true);
        } catch (error) {
            setResendLoading(false);
            setResendError(error);
            console.log(error)
        }
    };
    return (
        <HomeLayout>
            <section className={"h-[85vh] bg-secondaryBgColor"}>
                <div className={"px-8 py-16 max-w-[700px] text-center mx-auto"}>
                    <img src={expiredVerificationImg} alt={"image"} className={"w-[250px] sm:w-[300px] mx-auto"}/>
                    <div className={"text-white leading-8"}>
                        <h1 className={"text-3xl py-8 font-semibold"}>Email verification link expired</h1>
                        <p>Looks like the verification link has expired. Not to worry. we can send you the link again. </p>
                        {resendLoading ? (
                            <div>Loading...</div>
                        ) : resendSuccess ? (
                            <div>Verification link sent successfully!</div>
                        ) : resendError ? (
                            <div>Failed to send verification link. Please try again later.</div>
                        ) : (
                        <button type={"submit"} className={"bg-blue-500 px-4 py-2 mt-6"} onClick={handleResendClick}>Resend verification link</button>
                        )}
                        <p className={"mt-6"}>You can re-enter your email <b>
                            <a className={"text-blue-400 underline cursor-pointer"} href={"/login"}> here</a> </b>if the one you entered was incorrect .
                        </p>
                    </div>
                </div>
            </section>
        </HomeLayout>

    );
}

export default ConfirmEmailLinkExpired;