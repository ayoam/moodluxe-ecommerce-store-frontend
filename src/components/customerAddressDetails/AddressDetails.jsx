import React, {useEffect, useState} from 'react';
import {useRecoilValue} from "recoil";
import {appUserState} from "../../recoil/atoms/AuthenticationAtom";
import {useForm} from "react-hook-form";
import GetCustomerById from "../../service/customerRequests/GetCustomerById";
import {useNavigate} from "react-router-dom";
import AddAddressForm from "./AddAddressForm";
import UpdateCustomerAddressById from "../../service/customerRequests/UpdateCustomerAddressById";
import axios from "axios";


function AddressDetails() {
    const user = useRecoilValue(appUserState);
    const [orderAddressInfo, setOrderAddressInfo] = useState(null);
    const [orderAddressEditing, setOrderAddressEditing] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [countries, setCountries] = useState([]);
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        const CustomerRequest = async () => {
            return await Promise.all([

                GetCustomerById(user?.customerId)
                    .then(response => {
                        setOrderAddressInfo((prev) => {
                            console.log("===", response.data);
                            return {
                                firstName: response?.data?.firstName,
                                lastName: response?.data?.lastName,
                                HomeAdresse: response?.data?.adresse.HomeAdresse,
                                city: response?.data?.adresse.city,
                                country: response?.data?.adresse.country,
                                postalCode: response?.data?.adresse.postalCode,
                                stateProvince: response?.data?.adresse.stateProvince
                            }

                        });
                        setOrderAddressEditing(false);
                    })
            ])
        }
        if (user) {
            CustomerRequest();
        }
    }, [user]);
    const getCountries = () => {
        axios.get("http://localhost:8080/api/v1/countries").then(
            (response) => {
                console.log("==>", response.data)
                setCountries(response.data.data)
            }
        ).catch((error) => console.log(error));
    }
    useEffect(() => {
        getCountries();
    }, [])
    const handleEdit = (e) => {
        setOrderAddressInfo({...orderAddressInfo, [e.target.name]: e.target.value})
    }

    const submit = (data) => {
        console.log(data)
        const customerAdresse = {
            adresse: data.adresse,
            city: data.city,
            stateProvince: data.stateProvince,
            postalCode: data.zipCode,
            countryId: data.country
        }
        UpdateCustomerAddressById(user.customerId, customerAdresse).then(
            (response) => {
                console.log("==>", response)
                if (response?.data) {
                    navigate('/settings');
                }

            }
        )
    }


    return (
        <div className={"w-full flex flex-col gap-4 py-6"}>
            <h1 className={"font-bold w-3xl"}>My Shipping Address</h1>
            {(!orderAddressEditing && !isClicked) &&

                <button className={"text-md bg-black p-4 flex flex-row justify-between w-3/4"}
                        onClick={() => setIsClicked(true)}>
                    + Add New Address
                </button>}
            {isClicked && <AddAddressForm/>}
            {orderAddressInfo && !isClicked &&
                <> {orderAddressEditing ?
                    <form>
                        <div
                            className={"p-4 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 border-[1px] border-t-[0] border-white/30 rounded-b-md p-4 bg-white/10"}>
                            <div className={"md:col-span-2"}>
                                <p className={"text-sm font-light mb-1"}>Adresse</p>
                                <input type={"text"} placeholder={"Adresse"}
                                       defaultValue={orderAddressInfo?.HomeAdresse}
                                       className={"w-full p-2 outline-2 outline-blue-400 bg-transparent border-[1px] border-gray-400 bg-secondaryBgColor placeholder:font-light placeholder:text-sm"} {...register("adresse", {
                                    required: "adresse required!",
                                })}
                                       onChange={(e) => handleEdit(e)}/>
                                {errors?.adresse &&
                                    <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.adresse.message}</p>}
                            </div>
                            <div className={""}>
                                <p className={"text-sm font-light mb-1"}>City</p>
                                <input type={"text"} placeholder={"City"}
                                       defaultValue={orderAddressInfo?.city}
                                       className={"w-full p-2 outline-2 outline-blue-400 bg-transparent border-[1px] border-gray-400 bg-secondaryBgColor placeholder:font-light placeholder:text-sm"} {...register("city", {
                                    required: "city required!",
                                })} onChange={(e) => handleEdit(e)}/>
                                {errors?.city &&
                                    <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.city.message}</p>}
                            </div>
                            <div className={""}>
                                <p className={"text-sm font-light mb-1"}>State/Province</p>
                                <input type={"text"} placeholder={"State/Province"}
                                       defaultValue={orderAddressInfo?.stateProvince}
                                       className={"w-full p-2 outline-2 outline-blue-400 bg-transparent border-[1px] border-gray-400 bg-secondaryBgColor placeholder:font-light placeholder:text-sm"} {...register("stateProvince", {
                                    required: "state/province required!",
                                })} onChange={(e) => handleEdit(e)}/>
                                {errors?.stateProvince &&
                                    <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.stateProvince.message}</p>}
                            </div>
                            <div className={""}>
                                <p className={"text-sm font-light mb-1"}>Country</p>

                                <select
                                    className={"w-full p-2 outline-2 outline-blue-400 bg-transparent border-[1px] border-gray-400 bg-secondaryBgColor"} {...register("country", {
                                    required: "country required!",
                                })}
                                    defaultValue={orderAddressInfo?.country.idc}>

                                    {countries.map((country, index) => (
                                            <option className={"text-white"} value={country.idc}
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
                                       defaultValue={orderAddressInfo?.postalCode}
                                       className={"w-full p-2 outline-2 outline-blue-400 bg-transparent border-[1px] border-gray-400 bg-secondaryBgColor placeholder:font-light placeholder:text-sm"} {...register("zipCode", {
                                    required: "zip code required!",
                                })} onChange={(e) => handleEdit(e)}/>
                                {errors?.zipCode &&
                                    <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.zipCode.message}</p>}
                            </div>
                            <div></div>
                            <div className={"text-right"}>
                                <button type={"submit"}
                                        className={"bg-blue-500 py-2 px-4  mb-4 sm:mr-8 cursor-pointer rounded-sm w-full sm:w-auto"}
                                        onClick={handleSubmit(submit)}>SAVE
                                </button>
                                <button
                                    className={"bg-blue-500 py-2 px-4 cursor-pointer rounded-sm w-full sm:w-auto"}>CANCEL
                                </button>
                            </div>
                        </div>
                    </form>
                    :


                    <div className={"p-4 border-[1px] border-t-[0] border-white/30 rounded-b-md bg-white/10 w-3/4"}>
                        <p>{orderAddressInfo.firstName.toUpperCase()} {orderAddressInfo.lastName.toUpperCase()}</p>
                        <p>
                            <span>{orderAddressInfo?.HomeAdresse.toUpperCase()}</span>. <span>{orderAddressInfo?.city.toUpperCase()}</span>, <span>{orderAddressInfo?.postalCode}</span>
                        </p>
                        <p>
                            <span>{orderAddressInfo?.stateProvince.toUpperCase()}</span>, <span>{orderAddressInfo?.country.countryName.toUpperCase()}</span>
                        </p>
                        <div className={"pt-3  py-2 px-4 cursor-pointer  w-full sm:w-auto"}>
                            {(!orderAddressEditing && orderAddressInfo) &&
                                <button className={"text-blue-400 underline hover:text-blue-300"}
                                        onClick={() => setOrderAddressEditing(true)}>Edit</button>}
                            <button className={"text-blue-400 underline hover:text-blue-300 ml-6"}>Delete</button>
                        </div>
                    </div>} </>}

        </div>
    );
}

export default AddressDetails;