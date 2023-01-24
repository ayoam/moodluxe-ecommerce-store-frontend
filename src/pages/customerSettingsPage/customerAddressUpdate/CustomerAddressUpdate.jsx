import React, {useEffect, useState} from 'react';
import {useRecoilValue} from "recoil";
import {appUserState} from "../../../recoil/atoms/AuthenticationAtom";
import {useForm} from "react-hook-form";
import GetCustomerById from "../../../service/customerRequests/GetCustomerById";
import {useNavigate} from "react-router-dom";
import UpdateCustomerAddressById from "../../../service/customerRequests/UpdateCustomerAddressById";
import GetCountries from "../../../service/dataRequests/getCountries";
import CustomerSettingsLayout from "../../../layouts/settingsLayout/CustomerSettingsLayout";
import CustomerInfosUpdatedModal from "../../../components/customerInfosUpdatedModal/CustomerInfosUpdatedModal";


function CustomerAddressUpdate() {
    const user = useRecoilValue(appUserState);
    const [orderAddressInfo, setOrderAddressInfo] = useState(null);
    const [orderAddressEditing, setOrderAddressEditing] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [countries, setCountries] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        const CustomerRequest = async () => {
            return await Promise.all([
                GetCustomerById(user?.customerId)
                    .then(response => {
                        setOrderAddressInfo((prev) => {
                            // console.log("===", response.data);
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
                        // setOrderAddressEditing(false);
                    })
            ])
        }
        if (user) {
            CustomerRequest();
        }
    }, [user]);

    useEffect(() => {
        GetCountries().then(
            (response) => {
                console.log("==>", response.data)
                setCountries(response.data.data)
            }
        ).catch((error) => console.log(error));
    }, [])


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
                // console.log("==>", response)
                if (response?.data) {
                    // navigate(0);
                    setShowModal(true);
                }
            }
        )
    }
    const handleModalClose = ()=>{
        navigate(0);
    }

    return (
        <CustomerSettingsLayout>
            <div className={"w-full flex flex-col gap-4 py-4 md:py-0"}>
                <h1 className={"font-bold text-xl"}>My Shipping Address</h1>
                {(!orderAddressEditing && !isClicked) &&
                    <button className={"text-md bg-white/20 hover:bg-white/30 transition-colors p-4 flex flex-row justify-between w-full lg:w-3/4"}
                            onClick={() => setIsClicked(prev=>prev)}>
                        + Add New Address
                    </button>}
                {/*{isClicked && <AddAddressForm/>}*/}
                {(orderAddressInfo && !isClicked) &&
                    <> {orderAddressEditing ?
                        <form>
                            <div
                                className={"p-4 py-6 grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4 rounded-md p-4 bg-white text-black"}>
                                <div className={"lg:col-span-2"}>
                                    <p className={"text-sm font-light mb-1"}>Adresse</p>
                                    <input type={"text"} placeholder={"Adresse"}
                                           defaultValue={orderAddressInfo?.HomeAdresse}
                                           className={"w-full p-2 outline-2 outline-blue-400 border-[1px] border-gray-400 placeholder:font-light placeholder:text-sm"} {...register("adresse", {
                                        required: "adresse required!",
                                    })}/>
                                    {errors?.adresse &&
                                        <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.adresse.message}</p>}
                                </div>
                                <div className={""}>
                                    <p className={"text-sm font-light mb-1"}>City</p>
                                    <input type={"text"} placeholder={"City"}
                                           defaultValue={orderAddressInfo?.city}
                                           className={"w-full p-2 outline-2 outline-blue-400 border-[1px] border-gray-400  placeholder:font-light placeholder:text-sm"} {...register("city", {
                                        required: "city required!",
                                    })}/>
                                    {errors?.city &&
                                        <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.city.message}</p>}
                                </div>
                                <div className={""}>
                                    <p className={"text-sm font-light mb-1"}>State/Province</p>
                                    <input type={"text"} placeholder={"State/Province"}
                                           defaultValue={orderAddressInfo?.stateProvince}
                                           className={"w-full p-2 outline-2 outline-blue-400 border-[1px] border-gray-400  placeholder:font-light placeholder:text-sm"} {...register("stateProvince", {
                                        required: "state/province required!",
                                    })}/>
                                    {errors?.stateProvince &&
                                        <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.stateProvince.message}</p>}
                                </div>
                                <div className={""}>
                                    <p className={"text-sm font-light mb-1"}>Country</p>

                                    <select
                                        className={"w-full p-2 outline-2 outline-blue-400  border-[1px] border-gray-400 "} {...register("country", {
                                        required: "country required!",
                                    })}
                                        defaultValue={orderAddressInfo?.country.idc}>

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
                                           defaultValue={orderAddressInfo?.postalCode}
                                           className={"w-full p-2 outline-2 outline-blue-400 border-[1px] border-gray-400  placeholder:font-light placeholder:text-sm"} {...register("zipCode", {
                                        required: "zip code required!",
                                    })}/>
                                    {errors?.zipCode &&
                                        <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.zipCode.message}</p>}
                                </div>
                                <div className={"text-right text-white lg:col-span-2 flex justify-end gap-2 mt-2"}>
                                    <button type="submit"
                                            className={"bg-blue-500 hover:bg-blue-600 py-2 px-6 cursor-pointer rounded-sm w-full sm:w-auto"}
                                            onClick={handleSubmit(submit)}>Save
                                    </button>
                                    <button
                                        type="button"
                                        className={"bg-gray-400 hover:bg-gray-500 py-2 px-4 cursor-pointer rounded-sm w-full sm:w-auto"}
                                        onClick={()=>setOrderAddressEditing(false)}>Cancel
                                    </button>
                                </div>
                            </div>
                        </form>

                        :

                        <div className={"p-4 rounded-md bg-white w-full lg:w-3/4 text-black"}>
                            <p className={"font-semibold"}>{orderAddressInfo.firstName.toUpperCase()} {orderAddressInfo.lastName.toUpperCase()}</p>
                            <p>
                                <span>{orderAddressInfo?.HomeAdresse.toUpperCase()}</span>
                            </p>
                            <p>
                                <span>{orderAddressInfo?.city.toUpperCase()}</span>, <span>{orderAddressInfo?.postalCode}</span>
                            </p>
                            <p>
                                <span>{orderAddressInfo?.stateProvince.toUpperCase()}</span>, <span>{orderAddressInfo?.country.countryName.toUpperCase()}</span>
                            </p>
                            <div className={"pt-3  py-2  cursor-pointer  w-full sm:w-auto"}>
                                {(!orderAddressEditing && orderAddressInfo) &&
                                    <button className={"text-blue-500 underline hover:text-blue-400"}
                                            onClick={() => setOrderAddressEditing(true)}>Edit</button>}
                                {/*<button className={"text-blue-500 underline hover:text-blue-400 ml-4"}>Delete</button>*/}
                            </div>
                        </div>} </>}

                </div>
            {showModal && (
                <CustomerInfosUpdatedModal closeModal={handleModalClose}/>
            )}
            </CustomerSettingsLayout>
    );
}

export default CustomerAddressUpdate;