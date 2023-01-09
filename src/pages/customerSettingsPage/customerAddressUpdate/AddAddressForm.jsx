import React, {useState} from 'react';
import {useForm} from "react-hook-form";

const AddAddressForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    return (


        <form>
            <div
                className={"p-4 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 border-[1px] border-t-[0] border-white/30 rounded-b-md p-4 bg-white/10"}>

                <div className={"md:col-span-2"}>
                    <p className={"text-sm font-light mb-1"}>Adresse</p>
                    <input type={"text"} placeholder={"Adresse"}

                           className={"w-full p-2 outline-2 outline-blue-400 bg-transparent border-[1px] border-gray-400 bg-secondaryBgColor placeholder:font-light placeholder:text-sm"} {...register("adresse", {
                        required: "adresse required!",
                    })}/>
                    {errors?.adresse &&
                        <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.adresse.message}</p>}
                </div>
                <div className={""}>
                    <p className={"text-sm font-light mb-1"}>City</p>
                    <input type={"text"} placeholder={"City"}

                           className={"w-full p-2 outline-2 outline-blue-400 bg-transparent border-[1px] border-gray-400 bg-secondaryBgColor placeholder:font-light placeholder:text-sm"} {...register("city", {
                        required: "first name required!",
                    })}/>
                    {errors?.city &&
                        <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.city.message}</p>}
                </div>
                <div className={""}>
                    <p className={"text-sm font-light mb-1"}>State/Province</p>
                    <input type={"text"} placeholder={"State/Province"}

                           className={"w-full p-2 outline-2 outline-blue-400 bg-transparent border-[1px] border-gray-400 bg-secondaryBgColor placeholder:font-light placeholder:text-sm"} {...register("stateProvince", {
                        required: "state/province required!",
                    })}/>
                    {errors?.stateProvince &&
                        <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.stateProvince.message}</p>}
                </div>
                <div className={""}>
                    <p className={"text-sm font-light mb-1"}>Country</p>
                    <select

                        className={"w-full p-2 outline-2 outline-blue-400 bg-transparent border-[1px] border-gray-400 bg-secondaryBgColor"} {...register("country", {
                        required: "country required!",
                    })}>
                        <option>United States</option>
                        <option>Denmark</option>
                        <option>Canada</option>
                    </select>
                    {errors?.country &&
                        <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.country.message}</p>}
                </div>
                <div className={""}>
                    <p className={"text-sm font-light mb-1"}>Zip code</p>
                    <input type={"text"} placeholder={"Zip code"}

                           className={"w-full p-2 outline-2 outline-blue-400 bg-transparent border-[1px] border-gray-400 bg-secondaryBgColor placeholder:font-light placeholder:text-sm"} {...register("zipCode", {
                        required: "zip code required!",
                    })}/>
                    {errors?.zipCode &&
                        <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.zipCode.message}</p>}
                </div>
                <div></div>
                <div className={"text-right"}>
                    <input type={"submit"} value={"SAVE"}
                           className={"bg-blue-500 py-2 px-4  mb-4 sm:mr-8 cursor-pointer rounded-sm w-full sm:w-auto"}/>
                    <input type={"submit"} value={"CANCEL"}
                           className={"bg-blue-500 py-2 px-4 cursor-pointer rounded-sm w-full sm:w-auto"}/>
                </div>
            </div>
        </form>


    );
}

export default AddAddressForm;