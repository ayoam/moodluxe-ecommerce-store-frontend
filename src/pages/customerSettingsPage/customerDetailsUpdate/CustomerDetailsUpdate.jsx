import React, {useEffect, useState} from 'react';
import {useRecoilValue} from "recoil";
import {appUserState} from "../../../recoil/atoms/AuthenticationAtom";
import {Controller, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import GetCustomerById from "../../../service/customerRequests/GetCustomerById";
import PhoneInput from "react-phone-input-2";
import UpdateCustomerDetailsById from "../../../service/customerRequests/UpdateCustomerDetailsById";
import CustomerSettingsLayout from "../../../layouts/settingsLayout/CustomerSettingsLayout";
import {ImUser} from "react-icons/im";
import CustomerInfosUpdatedModal from "../../../components/customerInfosUpdatedModal/CustomerInfosUpdatedModal";

function CustomerDetailsUpdate(props) {
    const user = useRecoilValue(appUserState);
    const [customerInfo, setCustomerInfo] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const {register, handleSubmit, watch, formState: {errors}, control, reset} = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        const CustomerRequest = async () => {
            return await Promise.all([
                GetCustomerById(user?.customerId)
                    .then(response => {
                        console.log(response)
                        setCustomerInfo((prev) => {
                            return {
                                firstName: response?.data?.firstName,
                                lastName: response?.data?.lastName,
                                phoneNumber: response?.data?.phoneNumber,
                                country: response?.data?.adresse.country.countryName,
                                birthDate: response?.data?.birthDate,
                                email: response?.data?.email
                            }
                        });
                    })
            ])
        }

        if (user) {
            CustomerRequest();
        }
    }, [user]);


    const submit = (data) => {
        console.log(data)
        const customerDetails = {
            firstName: data.firstName,
            lastName: data.lastName,
            phoneNumber: data.phoneNumber,
            birthDate: data.birthDate
        };
        UpdateCustomerDetailsById(user.customerId, customerDetails).then(
            (response) => {
                // console.log("==>", response)
                if (response?.data) {
                    // navigate(0);
                    setShowModal(true)
                }
            }
        )
    }

    const formatDate = (inputDate) => {
        if (inputDate) {
            let splitedDate = inputDate.toString().split("-")
            return `${splitedDate[0]}-${splitedDate[1]}-${splitedDate[2].slice(0, 2)}`
        } else {
            return ""
        }

    }
    const handleModalClose = ()=>{
        navigate(0);
    }
    return (
        <CustomerSettingsLayout>
            {customerInfo &&
                <form onSubmit={handleSubmit(submit)} className={"w-full"}>
                    <h1 className={"font-bold text-xl  mb-4"}>Update your personal information</h1>
                    <div
                        className={"p-4 py-6 grid grid-cols-1 lg:grid-cols-2 w-full gap-2 md:gap-4 rounded-md p-4 bg-white text-black"}>
                        <div>
                            <p className={"text-sm font-light mb-1"}>First name</p>
                            <input type={"text"} placeholder={"First name"}
                                   defaultValue={customerInfo?.firstName}
                                   className={"w-full p-2 outline-2 outline-blue-400 border-[1px] border-gray-400 placeholder:font-light placeholder:text-sm"} {...register("firstName", {
                                required: "first name required!",
                            })}/>
                            {errors?.firstName &&
                                <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.firstName.message}</p>}
                        </div>
                        <div className={""}>
                            <p className={"text-sm font-light mb-1"}>Last name</p>
                            <input type={"text"} placeholder={"Last name"}
                                   defaultValue={customerInfo?.lastName}
                                   className={"w-full p-2 outline-2 outline-blue-400 border-[1px] border-gray-400 placeholder:font-light placeholder:text-sm"} {...register("lastName", {
                                required: "last name required!",
                            })}/>
                            {errors?.lastName &&
                                <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.lastName.message}</p>}
                        </div>
                        <div className={"lg:col-span-2"}>
                            <p className={"text-sm font-light mb-1"}>Email</p>
                            <input type={"text"} placeholder={"Email"}
                                   defaultValue={customerInfo?.email}
                                   readOnly
                                   className={"w-full p-2 outline-none border-[1px] border-gray-400 placeholder:font-light placeholder:text-sm read-only:bg-gray-100 read-only:text-gray-500"}/>
                        </div>
                        <div className={"lg:col-span-2"}>
                            <p className={"text-sm font-light mb-1"}>Phone Number</p>
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
                                    defaultValue={customerInfo?.phoneNumber}
                                    render={({field}) => (
                                        <PhoneInput
                                            country={'us'}
                                            value={customerInfo?.phoneNumber}
                                            onChange={(e) => {
                                                field.onChange(e)
                                            }}
                                            inputRef={field.ref}
                                            containerClass={""}
                                            inputClass={"!w-full !rounded-none !border-[1px] !border-gray-400 !py-4 !text-black"}
                                            dropdownClass={"!text-black"}
                                            buttonClass={"!bg-white !rounded-none !border-[1px] !border-gray-400"}
                                        />

                                    )}
                                />
                            </div>
                            {errors?.phoneNumber &&
                                <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.phoneNumber.message}</p>}
                        </div>
                        <div className={"lg:col-span-2"}>
                            <p className={"text-sm font-light mb-1"}>Birth Date</p>
                            <input type={"date"} placeholder={""}
                                   defaultValue={formatDate(customerInfo?.birthDate)}
                                   className={"w-full p-2 outline-2 outline-blue-400 border-[1px] border-gray-400 placeholder:font-light placeholder:text-sm"} {...register("birthDate", {
                                required: "birth date required!",
                            })}/>
                            {errors?.birthDate &&
                                <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.birthDate.message}</p>}
                        </div>
                        <div></div>
                        <div className={"text-right"}>
                            <button type={"submit"}
                                    className={"bg-blue-500 hover:bg-blue-600 py-2 px-4  cursor-pointer rounded-sm w-full sm:w-auto text-white"}
                                    >Save
                            </button>
                        </div>

                    </div>
                </form>
            }
            {showModal && (
               <CustomerInfosUpdatedModal closeModal={handleModalClose}/>
            )}
        </CustomerSettingsLayout>
    );
}

export default CustomerDetailsUpdate;