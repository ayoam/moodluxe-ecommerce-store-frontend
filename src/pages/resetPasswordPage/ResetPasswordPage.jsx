import React, {useRef, useState} from 'react';
import HomeLayout from "../../layouts/homeLayout/HomeLayout";
import {useForm} from "react-hook-form";
import ResetPassword from "../../service/customerRequests/ResetPassword";
import {useNavigate, useSearchParams} from "react-router-dom";
import ResetPasswordLinkExpired from "../../components/resetPasswordLink/ResetPasswordLinkExpired";
import NotFoundPage from "../404Page/NotFoundPage";

const ResetPasswordPage = () => {
    const {register, handleSubmit, watch, formState: {errors}, reset} = useForm();
    const [searchParams, setSearchParams] = useSearchParams();
    const [linkInvalid, setLinkInvalid] = useState(false);
    const [linkExpired, setLinkExpired] = useState(false);

    const navigate = useNavigate();

    const newPassword = useRef({});
    newPassword.current = watch("newPassword", "");


    const Submit = (data) => {
        console.log(data)
        const passwordResetToken = searchParams.get("token");
        passwordResetToken && ResetPassword(passwordResetToken, {newPassword: data.newPassword})
            .then(response => {
                if (response.status === 200) {
                    navigate("/login");
                }
            })

            .catch(error => {
                if (error.response.status === 404) {
                    setLinkInvalid(true);
                } else if (error.response.status === 500) {
                    setLinkExpired(true);
                }
                reset()
            });
    };

    return (
        <div>
            {(!linkExpired && !linkInvalid)&& <HomeLayout>
                    <section className="bg-secondaryBgColor sm:h-[80vh]">
                        <div className={"px-8 py-16 max-w-[600px] text-center mx-auto text-white"}>

                            <form onSubmit={handleSubmit(Submit)}>

                                <h2 className="text-3xl font-medium mb-4">Reset account password</h2>
                                <div className={"m-4 text-left"}>
                                    <p className="py-4 font-normal flex ">Enter your new password below.</p>
                                    <p className="block font-medium mb-2 ">New password</p>
                                    <input
                                        type="password"
                                        className="border border-gray-400 p-2 w-full text-black"{...register("newPassword", {
                                        required: "new password required!"
                                    })}
                                    />
                                    {errors?.newPassword &&
                                        <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.newPassword.message}</p>}
                                    <div className="mb-4 mt-6">
                                        <p className="block font-medium mb-2 ">Confirm new password</p>
                                        <input
                                            type="password"
                                            className="border border-gray-400 p-2 w-full text-black"{...register("confirmPassword", {
                                            validate: value =>
                                                value === newPassword.current || "passwords doesn't match"
                                        })}
                                        />
                                        {errors?.confirmPassword &&
                                            <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.confirmPassword.message}</p>}
                                    </div>
                                    <p className={"text-left text-sm font-light"}>Hint : the password should be at least
                                        twelve
                                        characters long. To make it stronger,
                                        use upper and lower case letters,numbers and symbols like !"?$)/.</p>
                                </div>
                                <button className="mt-4 bg-blue-500 text-white py-2 px-4 hover:bg-blue-600">
                                    Reset password
                                </button>
                            </form>


                        </div>
                    </section>
                </HomeLayout>}
            {linkExpired&&<ResetPasswordLinkExpired/>}
            {linkInvalid && (<NotFoundPage/>)}
        </div>
    );
};

export default ResetPasswordPage;
