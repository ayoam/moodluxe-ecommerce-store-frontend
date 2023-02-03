import React, {useEffect, useState} from 'react';
import expiredVerificationImg from "../../assets/img/expiredVerification.png";
import HomeLayout from "../../layouts/homeLayout/HomeLayout";
import ResendConfirmEmail from "../../service/customerRequests/ResendConfirmEmail";
import GetCustomerById from "../../service/customerRequests/GetCustomerById";
import {useRecoilValue} from "recoil";
import {appUserState} from "../../recoil/atoms/AuthenticationAtom";



const ConfirmEmailLinkExpired = ({keycloakId}) => {
    const user = useRecoilValue(appUserState);
    const [resendLoading, setResendLoading] = useState(false);
    const [resendSuccess, setResendSuccess] = useState(false);
    const [resendError, setResendError] = useState(null);


    const handleResendClick = async () => {
        setResendLoading(true);

        try {
            await ResendConfirmEmail(keycloakId);
            setResendLoading(false);
            setResendSuccess(true);
        } catch (error) {
            setResendLoading(false);
            setResendError(true);
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
                        <p>Looks like the verification link has expired. we can send you the link again. </p>
                        <button type={"submit"} className={"bg-blue-500 px-5 py-2 mt-6 rounded-lg font-semibold disabled:bg-gray-400"} onClick={handleResendClick} disabled={resendSuccess}>Resend verification link</button>
                        {resendLoading === true && (<div className={"mt-4"}>Loading...</div>)}
                        {resendSuccess === true && (<div className={"text-green-500 mt-4"}>Verification link sent successfully!</div>)}
                        {resendError === true && (<div className={"text-red-500 mt-4"}>Failed to send verification link. Please try again later.</div>)}
                    </div>
                </div>
            </section>
        </HomeLayout>

    );
}

export default ConfirmEmailLinkExpired;