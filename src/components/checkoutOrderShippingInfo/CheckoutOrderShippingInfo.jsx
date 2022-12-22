import React, {useEffect, useState} from 'react'
import {useForm} from "react-hook-form";
import GetCustomerById from "../../service/customerRequests/GetCustomerById";
import {useRecoilValue} from "recoil";
import {appUserState} from "../../recoil/atoms/AuthenticationAtom";

const CheckoutOrderShippingInfo = ({orderAdresseInfo})=>{
    // const [phone,setPhone] = useState("");
    const user = useRecoilValue(appUserState);
    const [shippingFormEditing,setShippingFormEditing] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [userInfo,setUserInfo] = useState({
        // firstName:"Mavrick",
        // lastName:"Russel",
        // adresse:"248 Main St",
        // city:"Ogunquit",
        // zipCode:"03907",
        // stateProvince:"Massachusetts",
        // country:"United States"
    });

    useEffect(()=>{
        if(user){
            GetCustomerById(user?.customerId)
                .then(response=>{
                    // console.log(response?.data?.country);
                    // setUserInfo(response.data)
                    setUserInfo((prev)=>{
                        return {
                            firstName:response?.data?.firstName,
                            lastName:response?.data?.lastName,
                            HomeAdresse:response?.data?.adresse.HomeAdresse,
                            city:response?.data?.adresse.city,
                            country:response?.data?.adresse.country.countryName,
                            postalCode:response?.data?.adresse.postalCode,
                            stateProvince:response?.data?.adresse.stateProvince
                        }
                    });
                })
        }
    },[user])

    useEffect(() => {
        orderAdresseInfo(userInfo);
    }, [userInfo]);


    const onShippingInfoSubmit = (data) => {
        setUserInfo((prev)=>{
            return {
                firstName:data.firstName,
                lastName:data.lastName,
                HomeAdresse:data.adresse,
                city:data.city,
                country:data.country,
                postalCode:data.zipCode,
                stateProvince:data.stateProvince
            }
        });
        setShippingFormEditing(false);
    }


    return(
        <div className={"rounded-md overflow-hidden w-full"}>
            <div className={""}>
                <div className={"text-md bg-black p-4 flex flex-row justify-between"}>
                    <h1>Shipping adresse</h1>
                    {!shippingFormEditing && <button className={"text-blue-400 underline hover:text-blue-300"} onClick={()=>setShippingFormEditing(true)}>Edit</button>}
                </div>
                { shippingFormEditing ?
                    <form onSubmit={handleSubmit(onShippingInfoSubmit)}>
                        <div
                            className={"p-4 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 border-[1px] border-t-[0] border-white/30 rounded-b-md p-4 bg-white/10"}>
                            <div className={""}>
                                <p className={"text-sm font-light mb-1"}>First name</p>
                                <input type={"text"} placeholder={"First name"}
                                       defaultValue={userInfo?.firstName}
                                       className={"w-full p-2 outline-2 outline-blue-400 bg-transparent border-[1px] border-gray-400 bg-secondaryBgColor placeholder:font-light placeholder:text-sm"} {...register("firstName", {
                                    required: "first name required!",
                                })}/>
                                {errors?.firstName &&
                                    <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.firstName.message}</p>}
                            </div>
                            <div className={""}>
                                <p className={"text-sm font-light mb-1"}>Last name</p>
                                <input type={"text"} placeholder={"Last name"}
                                       defaultValue={userInfo?.lastName}
                                       className={"w-full p-2 outline-2 outline-blue-400 bg-transparent border-[1px] border-gray-400 bg-secondaryBgColor placeholder:font-light placeholder:text-sm"} {...register("lastName", {
                                    required: "last name required!",
                                })}/>
                                {errors?.lastName &&
                                    <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.lastName.message}</p>}
                            </div>
                            <div className={"md:col-span-2"}>
                                <p className={"text-sm font-light mb-1"}>Adresse</p>
                                <input type={"text"} placeholder={"Adresse"}
                                       defaultValue={userInfo?.HomeAdresse}
                                       className={"w-full p-2 outline-2 outline-blue-400 bg-transparent border-[1px] border-gray-400 bg-secondaryBgColor placeholder:font-light placeholder:text-sm"} {...register("adresse", {
                                    required: "adresse required!",
                                })}/>
                                {errors?.adresse &&
                                    <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.adresse.message}</p>}
                            </div>
                            <div className={""}>
                                <p className={"text-sm font-light mb-1"}>City</p>
                                <input type={"text"} placeholder={"City"}
                                       defaultValue={userInfo?.city}
                                       className={"w-full p-2 outline-2 outline-blue-400 bg-transparent border-[1px] border-gray-400 bg-secondaryBgColor placeholder:font-light placeholder:text-sm"} {...register("city", {
                                    required: "first name required!",
                                })}/>
                                {errors?.city &&
                                    <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.city.message}</p>}
                            </div>
                            <div className={""}>
                                <p className={"text-sm font-light mb-1"}>State/Province</p>
                                <input type={"text"} placeholder={"State/Province"}
                                       defaultValue={userInfo?.stateProvince}
                                       className={"w-full p-2 outline-2 outline-blue-400 bg-transparent border-[1px] border-gray-400 bg-secondaryBgColor placeholder:font-light placeholder:text-sm"} {...register("stateProvince", {
                                    required: "state/province required!",
                                })}/>
                                {errors?.stateProvince &&
                                    <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.stateProvince.message}</p>}
                            </div>
                            <div className={""}>
                                <p className={"text-sm font-light mb-1"}>Country</p>
                                <select
                                    defaultValue={userInfo?.country}
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
                                       defaultValue={userInfo?.postalCode}
                                       className={"w-full p-2 outline-2 outline-blue-400 bg-transparent border-[1px] border-gray-400 bg-secondaryBgColor placeholder:font-light placeholder:text-sm"} {...register("zipCode", {
                                    required: "zip code required!",
                                })}/>
                                {errors?.zipCode &&
                                    <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.zipCode.message}</p>}
                            </div>
                            <div></div>
                            <div className={"text-right"}>
                                <input type={"submit"} value={"save and continue"}
                                       className={"bg-blue-500 py-2 px-4 cursor-pointer rounded-sm w-full sm:w-auto"}/>
                            </div>
                        </div>
                    </form>
                    :
                    <div className={"p-4 border-[1px] border-t-[0] border-white/30 rounded-b-md bg-white/10"}>
                        <p>{userInfo.firstName} {userInfo.lastName}</p>
                        <p><span>{userInfo?.HomeAdresse}</span>. <span>{userInfo?.city}</span>, <span>{userInfo?.postalCode}</span></p>
                        <p><span>{userInfo?.stateProvince}</span>, <span>{userInfo?.country}</span></p>
                    </div>
                }
            </div>
        </div>
    )
}

export default CheckoutOrderShippingInfo
