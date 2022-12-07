import React, {useEffect, useRef, useState} from 'react'
import HomeLayout from "../../layouts/homeLayout/HomeLayout";
import {useForm,Controller} from "react-hook-form";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import RegisterCustomer from "../../service/customerRequests/RegisterCustomer";
import {axiosInstance} from "../../service/apiService";
import {POST_REGISTER_CUSTOMER_URL} from "../../constants/apiUrlsConstants";
import CheckEmailExistance from "../../service/customerRequests/CheckEmailExistance";
import { useCookies } from "react-cookie";
import{useNavigate} from "react-router-dom";

const RegisterPage = () => {
    const {register, handleSubmit, watch, formState: {errors},control} = useForm(
        {
            mode: 'onSubmit',
            reValidateMode: 'onBlur',
        }
    );
    const [isLoading,setIsLoading] = useState(false);
    const [cookies, setCookie] = useCookies(["verify-email"]);
    const navigate = useNavigate();


    const password = useRef({});
    password.current = watch("password", "");

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


        setIsLoading(true);
        RegisterCustomer({...customerDetails, customerAdresse})
            .then(response =>{
                console.log(response);
                setCookie("verifyEmail", customerDetails.email.replace(/(\w{3})[\w.-]+@([\w.]+\w)/, "$1*****@$2"), {
                    path: "/",
                    maxAge:24*60*60
                });
                navigate("/verify-your-email");
            })
            .catch(e=>{
                console.log(e);
            })
            .finally(()=>{
                setIsLoading(false);
            });

    }


    // const testSubmit = (e)=>{
    //     e.preventDefault();
    //     console.log("hi")
    //     // setIsLoading(true);
    //     // setTimeout(()=>{setIsLoading(false);console.log("hola");}, 5000)
    //     setCookie("verifyEmail", "ayoub@mail.com".replace(/(\w{3})[\w.-]+@([\w.]+\w)/, "$1*****@$2"), {
    //         path: "/",
    //         maxAge:24*60*60
    //     });
    //     navigate("/verify-your-email");
    // }

    const checkEmailExistanceValidation = async(email)=>{
        return await CheckEmailExistance(email)
            .then(response=>{
                if(response?.status===200){
                    return "email already exists";
                }
            })
            .catch(error=>{
                return true;
            });
    }

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
                                    },
                                    validate :{
                                        value:(v)=>checkEmailExistanceValidation(v)
                                    }
                                })}/>
                                {errors?.email &&
                                    <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.email.message}</p>}
                            </div>
                            <div className={""}>
                                <p className={"text-sm font-light mb-2"}>Phone number</p>
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
                                {errors?.stateProvince &&
                                    <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.stateProvince.message}</p>}
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
                                {errors?.postalCode &&
                                    <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.postalCode.message}</p>}
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
                                    <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.privacyPolicyCB.message}</p>
                                }

                                <div className={"flex flex-row justify-center items-center gap-2 mt-8"}>
                                    <input type={"submit"} value={"REGISTER"} className={"bg-white w-full text-black p-2 hover:bg-black hover:text-white cursor-pointer border-[1px] border-transparent hover:border-gray-200 transition-all disabled:bg-gray-200 disabled:text-gray-400 disabled:hover:bg-gray-200 disabled:hover:text-gray-400 disabled:cursor-default"} disabled={isLoading}/>
                                    {isLoading &&
                                        <svg aria-hidden="true" className="mr-2 w-8 h-8 text-gray-400 animate-spin fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                        </svg>
                                    }
                                </div>

                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </HomeLayout>
    )
}

export default RegisterPage
