import React, {useEffect, useState} from 'react';
import {useRecoilValue} from "recoil";
import {appUserState} from "../../recoil/atoms/AuthenticationAtom";
import {useForm} from "react-hook-form";
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai";
import UpdateCustomerPassword from "../../service/customerRequests/UpdateCustomerPassword";
import {useNavigate} from "react-router-dom";

function CustomerPasswordUpdate(props) {
    const user = useRecoilValue(appUserState);
    const [oldPasswordShown, setOldPasswordShown] = useState(false);
    const [newPasswordShown, setNewPasswordShown] = useState(false);
    const [passwordShown, setPasswordShown] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();



    const submit = (data) => {
        console.log(data)
        const customerPasword = {
            oldPassword:data.oldPassword,
            newPassword:data.newPassword

        }
        UpdateCustomerPassword(customerPasword).then(
            (response) => {
                console.log("==>",response)
                if (response?.status === 200) {
                    navigate('/settings');
                }

            }
        )
    }
    return (


        <form onSubmit={handleSubmit(submit)}>
            <h1 className={"font-bold w-3xl py-6 gap-4"}>Change the Password</h1>
            <div
                className={"p-4 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 border-[1px] border-t-[0] border-white/30 rounded-b-md p-4 bg-white/10"}>

                <div className={"md:col-span-2"}>
                    <p className={"text-sm font-light mb-1"}>Old Password</p>
                    <div className={"relative flex items-center"}>
                    <input type={oldPasswordShown ? "text" : "password"} placeholder={"Old Password"}
                           className={"w-full p-2 outline-2 outline-blue-400 bg-transparent border-[1px] border-gray-400 bg-secondaryBgColor placeholder:font-light placeholder:text-sm"} {...register("oldPassword", {
                        required: "old password required!",
                    })}/>
                    {!oldPasswordShown ?
                        <i onClick={() => setOldPasswordShown(prev=>!prev)}><AiFillEye
                            className="w-5 h-5 absolute right-2 top-0 translate-y-1/2 cursor-pointer"/></i>
                        :
                        <i onClick={() => setOldPasswordShown(prev=>!prev)}><AiFillEyeInvisible
                            className="w-5 h-5 absolute  right-2 top-0 translate-y-1/2 cursor-pointer"/></i>
                    }
                    </div>
                    {errors?.oldPassword &&
                        <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.oldPassword.message}</p>}
                </div>
                <div className={"md:col-span-2"}>
                    <p className={"text-sm font-light mb-1"}>New Password</p>
                    <div className={"relative flex items-center"}>
                    <input type={newPasswordShown ? "text" : "password"} placeholder={"New Password"}
                           className={"w-full p-2 outline-2 outline-blue-400 bg-transparent border-[1px] border-gray-400 bg-secondaryBgColor placeholder:font-light placeholder:text-sm"} {...register("newPassword", {
                        required: "new password required!",
                    })}/>
                    {!newPasswordShown ?
                        <i onClick={() => setNewPasswordShown(prev=>!prev)}><AiFillEye
                            className="w-5 h-5 absolute right-2 top-0 translate-y-1/2 cursor-pointer"/></i>
                        :
                        <i onClick={() => setNewPasswordShown(prev=>!prev)}><AiFillEyeInvisible
                            className="w-5 h-5 absolute right-2 top-0 translate-y-1/2 cursor-pointer"/></i>
                    }
                    </div>
                    {errors?.newPassword &&
                        <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.newPassword.message}</p>}
                </div>
                <div className={"md:col-span-2"}>
                    <p className={"text-sm font-light mb-1"}> Confirm New Password</p>
                    <div className={"relative flex items-center"}>
                    <input type={passwordShown ? "text" : "password"} placeholder={"New Password"}
                           className={"w-full p-2 outline-2 outline-blue-400 bg-transparent border-[1px] border-gray-400 bg-secondaryBgColor placeholder:font-light placeholder:text-sm"} {...register("newPassword", {
                        required: "new password required!",
                    })}/>
                    {!passwordShown ?
                        <i onClick={() => setPasswordShown(prev=>!prev)}><AiFillEye
                            className="w-5 h-5 absolute right-2 top-0 translate-y-1/2 cursor-pointer"/></i>
                        :
                        <i onClick={() => setPasswordShown(prev=>!prev)}><AiFillEyeInvisible
                            className="w-5 h-5 absolute right-2 top-0 translate-y-1/2 cursor-pointer"/></i>
                    }</div>
                    {errors?.newPassword &&
                        <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.newPassword.message}</p>}
                </div>

                <div></div>
                <div className={"text-right"}>
                    <button type={"submit"}
                            className={"bg-blue-500 py-2 px-4 cursor-pointer rounded-sm w-full sm:w-auto"}>SAVE AND CONTINUE</button>
                </div>

            </div>
        </form>

    );
}

export default CustomerPasswordUpdate;