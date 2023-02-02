import React from 'react';
import HomeLayout from "../../layouts/homeLayout/HomeLayout";
import emailImage from "../../assets/img/verify-email.png";

const ConfirmEmailVerified = () => {
    return (
        <HomeLayout>
            <section className={"h-[85vh] bg-secondaryBgColor"}>
                <div className={"px-8 py-16 max-w-[700px] text-center mx-auto"}>
                    <img src={emailImage} alt={"image"} className={"w-[250px] sm:w-[300px] mx-auto"}/>
                    <div className={"text-white leading-8"}>
                        <h1 className={"text-3xl py-8 font-semibold"}>Email Verification</h1>
                        <p>Your email was verified.You can continue using the application</p>
                    </div>
                </div>
            </section>
        </HomeLayout>
    );
}

export default ConfirmEmailVerified;