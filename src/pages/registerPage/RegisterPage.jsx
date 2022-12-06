import React, {useEffect, useRef, useState} from 'react'
import HomeLayout from "../../layouts/homeLayout/HomeLayout";
import {useForm,Controller} from "react-hook-form";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import RegisterCustomer from "../../service/customerRequests/RegisterCustomer";
import {axiosInstance} from "../../service/apiService";
import {POST_REGISTER_CUSTOMER_URL} from "../../constants/apiUrlsConstants";

const RegisterPage = () => {
    const {register, handleSubmit, watch, formState: {errors},control} = useForm();


    const onSubmit = (data) => {
        const customerAdresse = {
            adresse:data.adresse,
            city:data.city,
            stateProvince:data.stateProvince,
            postalCode:data.postalCode,
            countryId:data.country
        }

        const customerDetails = {
            firstName:data.firstName,
            lastName:data.lastName,
            email:data.email,
            phoneNumber:data.phoneNumber,
            birthDate:data.birthDate,
            password:data.password,
            gender:data.gender,
        };

        RegisterCustomer({...customerDetails, customerAdresse})
            .then(response =>{
                console.log(response);
            })
            .catch(e=>{
                console.log(e);
            })
            .finally(()=>{
                console.log("hi");
            });
    }

    const password = useRef({});
    password.current = watch("password", "");

    return (
        <HomeLayout>
            <div className={"bg-secondaryBgColor"}>
                <div className={"max-w-5xl mx-auto text-white py-16 px-6"}>
                    <h1 className={"text-4xl font-semibold"}>REGISTER</h1>
                    <p className={"text-sm font-light mt-5 leading-6"}>To register for your Moodluxe shop account,
                        please fill in the below form then click 'Register'</p>
                    <form className={"mt-8"} onSubmit={handleSubmit(onSubmit)}>
                        <div className={"grid grid-cols-1 sm:grid-cols-2 gap-8"}>
                            <div className={""}>
                                <p className={"text-sm font-light mb-2"}>First name</p>
                                <input type={"text"}
                                       className={"w-full py-1 px-2 outline-2 outline-blue-400 bg-transparent border-[1px] border-gray-400"} {...register("firstName", {
                                    required: "first name required!",
                                })}/>
                                {errors?.firstName &&
                                    <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.firstName.message}</p>}
                            </div>
                            <div className={""}>
                                <p className={"text-sm font-light mb-2"}>Last name</p>
                                <input type={"text"}
                                       className={"w-full py-1 px-2 outline-2 outline-blue-400 bg-transparent border-[1px] border-gray-400"} {...register("lastName", {
                                    required: "last name required!",
                                })}/>
                                {errors?.lastName &&
                                    <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.lastName.message}</p>}
                            </div>
                            <div className={""}>
                                <p className={"text-sm font-light mb-2"}>Email</p>
                                <input type={"text"} placeholder={"mark.zuckerberg@mail.com"}
                                       className={"w-full py-1 px-2 outline-2 outline-blue-400 bg-transparent border-[1px] border-gray-400"} {...register("email", {
                                    required: "email required!",
                                    pattern: {
                                        value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.([a-zA-Z0-9-]){3,}$/,
                                        message: "invalid email!"
                                    }
                                })}/>
                                {errors?.email &&
                                    <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.email.message}</p>}
                            </div>
                            <div className={""}>
                                <p className={"text-sm font-light mb-2"}>Phone number</p>
                                {/*<input type={"text"} placeholder={"+1 923 343 2329"}*/}
                                {/*       className={"w-full py-1 px-2  outline-2 outline-blue-400 bg-transparent border-[1px] border-gray-400"} {...register("phoneNumber", {*/}
                                {/*    required: "phone number required!",*/}
                                {/*    pattern: {*/}
                                {/*        value: /^\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/,*/}
                                {/*        message: "invalid phone number!"*/}
                                {/*    }*/}
                                {/*})}/>*/}
                                <div className={"text-white"}>
                                    <Controller
                                    control={control}
                                    name="phoneNumber"
                                    rules={{
                                        required: "phone number required!",
                                        pattern: {
                                            value: /^(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/,
                                            message: "invalid phone number!"
                                        }
                                    }}
                                    render={({ field }) => (
                                                <PhoneInput
                                                    country={'us'}
                                                    value={field.value}
                                                    onChange={(e)=>{field.onChange(e)}}
                                                    inputRef={field.ref}
                                                    containerClass={""}
                                                    inputClass={"!w-full !rounded-none !bg-secondaryBgColor !border-[1px] !border-gray-400 !py-4 !text-base"}
                                                    dropdownClass={"!text-black"}
                                                    buttonClass={"!bg-white !rounded-none !border-none"}
                                                />
                                            )}
                                        />
                                </div>
                                {errors?.phoneNumber &&
                                    <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.phoneNumber.message}</p>}
                            </div>
                            <div className={""}>
                                <p className={"text-sm font-light mb-2"}>Birth date</p>
                                <input type={"date"} placeholder={""}
                                       className={"w-full py-1 px-2 outline-2 outline-blue-400 bg-transparent border-[1px] border-gray-400 text-white"} {...register("birthDate", {
                                    required: "birth date required!",
                                })}/>
                                {errors?.birthDate &&
                                    <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.birthDate.message}</p>}
                            </div>
                            <div className={""}>
                                <p className={"text-sm font-light mb-2"}>Gender</p>
                                <select
                                    className={"w-full py-1 px-2 outline-2 outline-blue-400 bg-transparent border-[1px] border-gray-400"} {...register("gender", {
                                    required: "gender required!",
                                })}
                                defaultValue={""}>
                                    <option className={"text-black"} disabled value={""}>-- select gender --</option>
                                    <option className={"text-black"} value={"male"}>male</option>
                                    <option className={"text-black"} value={"female"}>female</option>
                                </select>
                                {errors?.gender &&
                                    <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.gender.message}</p>}
                            </div>
                            <div className={""}>
                                <p className={"text-sm font-light mb-2"}>Password</p>
                                <input type={"password"} placeholder={""}
                                       className={"w-full py-1 px-2 outline-2 outline-blue-400 bg-transparent border-[1px] border-gray-400"} {...register("password", {
                                    required: "password required!",
                                })}/>
                                {errors?.password &&
                                    <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.password.message}</p>}
                            </div>
                            <div className={""}>
                                <p className={"text-sm font-light mb-2"}>Confirm password</p>
                                <input type={"password"} placeholder={""}
                                       className={"w-full py-1 px-2 outline-2 outline-blue-400 bg-transparent border-[1px] border-gray-400"} {...register("passwordConfirm",
                                    {
                                        validate: value =>
                                            value === password.current || "passwords doesn't match"
                                    }
                                )}/>
                                {errors?.passwordConfirm &&
                                    <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.passwordConfirm.message}</p>}
                            </div>
                            <div className={""}>
                                <p className={"text-sm font-light mb-2"}>Adresse</p>
                                <input type={"text"} placeholder={""}
                                       className={"w-full py-1 px-2 outline-2 outline-blue-400 bg-transparent border-[1px] border-gray-400"} {...register("adresse", {
                                    required: "adresse required!",
                                })}/>
                                {errors?.adresse &&
                                    <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.adresse.message}</p>}
                            </div>
                            <div className={""}>
                                <p className={"text-sm font-light mb-2"}>City</p>
                                <input type={"text"} placeholder={""}
                                       className={"w-full py-1 px-2 outline-2 outline-blue-400 bg-transparent border-[1px] border-gray-400"} {...register("city", {
                                    required: "city required!",
                                })}/>
                                {errors?.city &&
                                    <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.city.message}</p>}
                            </div>
                            <div className={""}>
                                <p className={"text-sm font-light mb-2"}>State/Province</p>
                                <input type={"text"} placeholder={""}
                                       className={"w-full py-1 px-2 outline-2 outline-blue-400 bg-transparent border-[1px] border-gray-400"} {...register("stateProvince", {
                                    required: "state required!",
                                })}/>
                                {errors?.state &&
                                    <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.state.message}</p>}
                            </div>
                            <div className={""}>
                                <p className={"text-sm font-light mb-2"}>Country</p>
                                <select
                                    className={"w-full p-1 outline-2 outline-blue-400 bg-transparent border-[1px] border-gray-400"} {...register("country", {
                                    required: "country required!",
                                })}
                                defaultValue={""}>
                                    <option className={"text-black"} value={""} disabled>-- select country --</option>
                                    <option className={"text-black"} value={1}>United states</option>
                                    <option className={"text-black"} value={2}>Denmark</option>
                                </select>
                                {errors?.country &&
                                    <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.country.message}</p>}
                            </div>
                            <div className={""}>
                                <p className={"text-sm font-light mb-2"}>Postal Code</p>
                                <input type={"number"}
                                       className={"w-full py-1 px-2 outline-2 outline-blue-400 bg-transparent border-[1px] border-gray-400"} {...register("postalCode", {
                                    required: "Zip Code required!",
                                    minLength: {value: 5, message: "Zip Code must be 5 numbers"},
                                    maxLength: {value: 5, message: "Zip Code must be 5 numbers"},
                                })}/>
                                {errors?.zipCode &&
                                    <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.zipCode.message}</p>}
                            </div>

                            <div></div>

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
                                    <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.privacyPolicyCB.message}</p>}
                                <input type={"submit"} value={"REGISTER"}
                                       className={"bg-white text-black p-2 hover:bg-black hover:text-white cursor-pointer border-[1px] border-transparent hover:border-gray-200 transition-all mt-8"}/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </HomeLayout>
    )
}

export default RegisterPage
