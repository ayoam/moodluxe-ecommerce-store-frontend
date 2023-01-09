import React, {useEffect, useState} from 'react'
import {useForm} from "react-hook-form";
import GetCustomerById from "../../service/customerRequests/GetCustomerById";
import {useRecoilValue} from "recoil";
import {appUserState} from "../../recoil/atoms/AuthenticationAtom";
import GetCountries from "../../service/dataRequests/getCountries";

const CheckoutOrderShippingInfo = ({orderAdresseInfo,setOrderAdresseInfo})=>{
    const user = useRecoilValue(appUserState);
    const [shippingFormEditing,setShippingFormEditing] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        GetCountries().then(
            (response) => {
                setCountries(response.data.data)
            }
        ).catch((error) => console.log(error));
    }, [])

    const onShippingInfoSubmit = (data) => {
        setOrderAdresseInfo((prev)=>{
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


    if(orderAdresseInfo) return(
        <div className={"rounded-md overflow-hidden w-full"}>
            <div className={""}>
                <div className={"text-md bg-black p-4 flex flex-row justify-between"}>
                    <h1>Shipping adresse</h1>
                    {(!shippingFormEditing && orderAdresseInfo) && <button className={"text-blue-400 underline hover:text-blue-300"} onClick={()=>setShippingFormEditing(true)}>Edit</button>}
                </div>
                {orderAdresseInfo &&
                    <>
                        { shippingFormEditing ?
                            <form onSubmit={handleSubmit(onShippingInfoSubmit)}>
                                <div
                                    className={"p-4 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 border-[1px] border-t-[0] border-white/30 rounded-b-md p-4 bg-white/10"}>
                                    <div className={""}>
                                        <p className={"text-sm font-light mb-1"}>First name</p>
                                        <input type={"text"} placeholder={"First name"}
                                               defaultValue={orderAdresseInfo?.firstName}
                                               className={"w-full p-2 outline-2 outline-blue-400 bg-transparent border-[1px] border-gray-400 bg-secondaryBgColor placeholder:font-light placeholder:text-sm"} {...register("firstName", {
                                            required: "first name required!",
                                        })}/>
                                        {errors?.firstName &&
                                            <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.firstName.message}</p>}
                                    </div>
                                    <div className={""}>
                                        <p className={"text-sm font-light mb-1"}>Last name</p>
                                        <input type={"text"} placeholder={"Last name"}
                                               defaultValue={orderAdresseInfo?.lastName}
                                               className={"w-full p-2 outline-2 outline-blue-400 bg-transparent border-[1px] border-gray-400 bg-secondaryBgColor placeholder:font-light placeholder:text-sm"} {...register("lastName", {
                                            required: "last name required!",
                                        })}/>
                                        {errors?.lastName &&
                                            <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.lastName.message}</p>}
                                    </div>
                                    <div className={"md:col-span-2"}>
                                        <p className={"text-sm font-light mb-1"}>Adresse</p>
                                        <input type={"text"} placeholder={"Adresse"}
                                               defaultValue={orderAdresseInfo?.HomeAdresse}
                                               className={"w-full p-2 outline-2 outline-blue-400 bg-transparent border-[1px] border-gray-400 bg-secondaryBgColor placeholder:font-light placeholder:text-sm"} {...register("adresse", {
                                            required: "adresse required!",
                                        })}/>
                                        {errors?.adresse &&
                                            <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.adresse.message}</p>}
                                    </div>
                                    <div className={""}>
                                        <p className={"text-sm font-light mb-1"}>City</p>
                                        <input type={"text"} placeholder={"City"}
                                               defaultValue={orderAdresseInfo?.city}
                                               className={"w-full p-2 outline-2 outline-blue-400 bg-transparent border-[1px] border-gray-400 bg-secondaryBgColor placeholder:font-light placeholder:text-sm"} {...register("city", {
                                            required: "first name required!",
                                        })}/>
                                        {errors?.city &&
                                            <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.city.message}</p>}
                                    </div>
                                    <div className={""}>
                                        <p className={"text-sm font-light mb-1"}>State/Province</p>
                                        <input type={"text"} placeholder={"State/Province"}
                                               defaultValue={orderAdresseInfo?.stateProvince}
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
                                        })}
                                            defaultValue={orderAdresseInfo?.country}>
                                            {countries.map((country, index) => (
                                                    <option value={country.idc}
                                                            key={index}>{country.countryName}</option>
                                                )
                                            )}
                                        </select>
                                        {errors?.country &&
                                            <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.country.message}</p>}
                                    </div>
                                    <div className={""}>
                                        <p className={"text-sm font-light mb-1"}>Zip code</p>
                                        <input type={"text"} placeholder={"Zip code"}
                                               defaultValue={orderAdresseInfo?.postalCode}
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
                                <p>{orderAdresseInfo.firstName} {orderAdresseInfo.lastName}</p>
                                <p><span>{orderAdresseInfo?.HomeAdresse}</span>. <span>{orderAdresseInfo?.city}</span>, <span>{orderAdresseInfo?.postalCode}</span></p>
                                <p><span>{orderAdresseInfo?.stateProvince}</span>, <span>{orderAdresseInfo?.country}</span></p>
                            </div>
                        }
                    </>
                }
            </div>
        </div>
    )
}

export default CheckoutOrderShippingInfo
