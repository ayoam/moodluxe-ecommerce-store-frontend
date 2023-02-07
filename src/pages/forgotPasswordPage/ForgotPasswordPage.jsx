import React, {useState} from 'react';
import HomeLayout from "../../layouts/homeLayout/HomeLayout";
import {useForm} from "react-hook-form";

import ForgotPasswordEmail from "../../service/customerRequests/ForgotPasswordEmail";

const ForgotPasswordPage = () => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm();
    const [responseMessage, setResponseMessage] = useState(null);

    const Submit = async data => {
        try {
            const response = await ForgotPasswordEmail( {
                email: data.email
            });
            if (response.status === 200) {
                console.log(response.status)
                setResponseMessage(<p className={"text-green-500"}>A link has been sent to your email. Please check your inbox.</p>);
            }
        } catch (error) {
            setResponseMessage(<p className={"text-red-500"}>An error occurred while processing your request. Please try again later.</p>);
        }
        reset()
    };

    return (
        <HomeLayout>
        <section className="bg-secondaryBgColor sm:h-[80vh]">
            <div className={"px-8 py-16 max-w-[600px] text-center mx-auto text-white"}>

            <form onSubmit={handleSubmit(Submit)}>

                <h2 className="text-3xl font-medium mb-4">Forgot Password?</h2>
                <div className={"m-4"}>
                <p className="mt-10 py-4 font-normal flex text-left">No worries! just enter the email associated with your account and we'll send you a link to reset your password</p>
                <div className="mb-4 mt-6 text-left">
                    <p className="block font-medium mb-2">Email</p>
                    <input
                        type="text"
                        className="w-full border border-gray-400 p-2 rounded text-black outline-0"
                        {...register("email", {
                            required: "email required!",
                            pattern: {
                                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.([a-zA-Z0-9-]){3,}$/,
                                message: "invalid email!"
                            }
                        })}
                    />
                    {errors?.email &&
                        <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.email.message}</p>}
                </div>
                <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors" onClick={handleSubmit(Submit)}>
                    Continue
                </button>

                    <div className={"mt-4"}>
                        {responseMessage && <p>{responseMessage}</p>}
                    </div>

                <div className={"mt-14"}>
                    <p>Don't have an account? <a className={"text-blue-300 hover:text-blue-5400"} href={"/register"}>Sign up</a></p>
                </div>
                </div>
            </form>
            </div>
        </section>
        </HomeLayout>
    );
};

export default ForgotPasswordPage;
