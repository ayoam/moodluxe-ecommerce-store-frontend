import React from 'react';
import HomeLayout from "../../layouts/homeLayout/HomeLayout";
import {useForm} from "react-hook-form";
import {TfiEmail} from "react-icons/tfi";
import {BsTelephone} from "react-icons/bs";
import {GoLocation} from "react-icons/go";
import {FaFacebook} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";

const ContactPage = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmitMsg = (data) => {
        console.log(data);
    }
    return (
        <HomeLayout>

            <div className={"flex flex-col space-y-6 bg-secondaryBgColor h-[80vh] sm:h-auto p-8 shadow-lg text-white"}>
                <div
                    className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row"
                >
                    <div className={"flex flex-col sm:flex-row max-w-6xl  py-14 gap-10 sm:gap-0"}>
                        <div className={"flex flex-col justify-between"}>
                            <div className={"w-full text-white px-8"}>
                                <div>
                                    <h1 className={"font-bold text-4xl tracking-wide"}>Get in Touch</h1>
                                    <p className={"text-sm font-light mt-5 leading-6"}>We’re here to help and answer any
                                        question you might have. We look forward to hearing from you.</p>
                                </div>
                                <div className={"flex flex-col space-y-4"}>
                                    <div className={"inline-flex space-x-2 mt-4 text-xl"}>
                                        <BsTelephone className={"text-white text-2xl"}/>
                                        <span>+1 813 455 6338</span>
                                    </div>
                                    <div className={"inline-flex space-x-2 mt-4 text-xl"}>
                                        <TfiEmail className={"text-white text-2xl"}/>
                                        <span>contact@moodluxe.com</span>
                                    </div>
                                    <div className={"inline-flex space-x-2 mt-4 text-xl"}>
                                        <GoLocation className={"text-white text-2xl"}/>
                                        <span>Livermore, CA 94550</span>
                                    </div>
                                </div>
                                <div className={"flex space-x-4 mt-14 text-lg"}>
                                    <a href={"/facebook"}>
                                        <FaFacebook className={"text-white text-2xl"}/>
                                    </a>
                                    <a href={"/instagram"}>
                                        <FaInstagram className={"text-white text-2xl"}/>
                                    </a>
                                    <a href={"/twitter"}>
                                        <FaTwitter className={"text-white text-2xl"}/>
                                    </a>

                                </div>
                            </div>
                        </div>


                    </div>

                    <div>

                        <div className={"bg-white rounded-xl shadow-lg p-8"}>
                            <form className={"flex flex-col gap-3 mt-5"} onSubmit={handleSubmit(onSubmitMsg)}>
                                <div>
                                    <p className={"mb-2 text-sm text-black"}>Your name</p>
                                    <input type={"text"} placeholder={"Your name"}
                                           className={"w-full p-2 outline-2 outline-gray-400 bg-transparent border-[1px] border-gray-400 placeholder:font-light"} {...register("name", {
                                        required: "Name required!",

                                    })}/>
                                    {errors?.name &&
                                        <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.name.message}</p>}
                                </div>
                                <div>
                                    <p className={"mb-2 text-sm text-black"}>Email</p>
                                    <input type={"text"} placeholder={"Email"}
                                           className={"w-96 p-2 outline-2 outline-gray-400 bg-transparent border-[1px] border-gray-400 placeholder:font-light"} {...register("email", {
                                        required: "email required!",
                                        pattern: {
                                            value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.([a-zA-Z0-9-]){3,}$/,
                                            message: "invalid email!"
                                        }
                                    })}/>
                                    {errors?.email &&
                                        <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.email.message}</p>}
                                </div>
                                <div>
                                    <p className={"mb-2 text-sm text-black "}>Message</p>
                                    <textarea type={"text"} placeholder={"Your message"}
                                              className={"w-full p-2 outline-2 outline-gray-400 bg-transparent border-[1px] border-gray-400 placeholder:font-light"} {...register("msg", {
                                        required: "message required!",

                                    })}></textarea>
                                    {errors?.msg &&
                                        <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.msg.message}</p>}
                                </div>

                                <input type={"submit"} value={"SEND MESSAGE"}
                                       className={"bg-black text-white p-2 hover:bg-black hover:text-white cursor-pointer border-[1px] border-transparent hover:border-gray-200 transition-all mt-4"}/>
                            </form>


                        </div>
                    </div>

                </div>
            </div>
        </HomeLayout>
    );
}

export default ContactPage;