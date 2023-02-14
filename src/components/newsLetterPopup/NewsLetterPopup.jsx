import React, {useEffect, useState} from 'react';
import watchBG from '../../assets/img/men-watch.jpg'
import {useForm} from "react-hook-form";
import {MdOutlineClose} from "react-icons/md";

const NewsLetterPopup = () => {
    const {register, handleSubmit, formState: {errors}, control} = useForm();
    const [showPopup, setShowPopup] = useState(false);
    useEffect(() => {
        // const timer = setTimeout(() => {
        //     setShowPopup(true);
        // }, 3000)
        // return clearTimeout(timer);
        setTimeout(() => {
            setShowPopup(true);
        }, 3000)
    }, [])
    const onSubmit = data => {
        // console.log(data);
    };
    return (
        <div className={`fixed bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:flex sm:items-center sm:justify-center ${
            showPopup ? "opacity-100 z-50" : "opacity-0 pointer-events-none"
        }`}
        >
            <div
                className="fixed inset-0 transition-opacity"
                onClick={() => setShowPopup(false)}
            >
                <div className="absolute inset-0 bg-black/80 opacity-75"></div>
            </div>
            <div className="flex sm:flex-row mb-60 sm:mb-6">
                <div
                    className="@pt-5 @pb-5 overflow-hidden shadow-xl transform transition-all sm:max-w-lg w-auto hidden sm:flex sm:w-full"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-headline">
                    <img src={watchBG}/>
                </div>
                <div
                    className="bg-white px-4 pt-5 pb-4 h-[512px] overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full rounded sm:rounded-none"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-headline"
                >
                    <div>
                        <button onClick={() => setShowPopup(false)}>
                            <MdOutlineClose className={"absolute text-2xl right-3 top-3 hover:text-gray-500"}/>
                        </button>
                        <div className="mt-14 mx-auto font-bold text-2xl text-center text-dark-800">
                            Subscribe to our Newsletter
                        </div>
                        <p className="mt-6 text-center text-black font-base">be the first to learn about our latest
                            trends and get exclusive offers</p>
                        <form className="mt-10 mx-7" onSubmit={handleSubmit(onSubmit)}>
                            <div className="rounded-md shadow-sm">
                                <input
                                    type="email" placeholder="Enter your email"
                                    className={" relative rounded-none w-full  px-3 py-3 border border-gray-500 placeholder-gray-500 focus:outline-none text-gray-900  sm:text-sm sm:leading-5"}{...register("email", {
                                    required: "email required!",
                                    pattern: {
                                        value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.([a-zA-Z0-9-]){3,}$/,
                                        message: "invalid email!"
                                    }
                                })}/>
                                {errors?.email &&
                                    <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.email.message}</p>}
                            </div>

                            <div className={"flex flex-col my-4"}>
                                <span className={"flex flex-row gap-2 items-center"}>
                                    <input type={"checkbox"}{...register("privacyPolicyCB", {
                                        required: "Please check this box if you want to proceed.",
                                    })}/>
                                    <p className={"font-playfair"}>I accept the <a href={"/privacy-policy"}
                                                                                   alt="privacy policy"
                                                                                   className={"underline hover:text-blue-400"}>privacy policy</a></p>
                                </span>
                                {errors?.privacyPolicyCB &&
                                    <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.privacyPolicyCB.message}</p>
                                }
                                <div className="mt-8 flex justify-center">
                                    <button
                                        type="submit"
                                        className="py-3 px-4 border border-transparent text-sm leading-5 font-medium  text-white bg-red-600 hover:bg-red-500"
                                    >
                                        SUBSCRIBE
                                    </button>
                                </div>

                            </div>


                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsLetterPopup;