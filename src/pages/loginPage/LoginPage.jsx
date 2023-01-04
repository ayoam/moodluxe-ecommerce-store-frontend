import React, {useState} from 'react'
import HomeLayout from "../../layouts/homeLayout/HomeLayout";
import {AiOutlineCheckCircle} from "react-icons/ai"
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import loginCustomer from "../../service/customerRequests/LoginCustomer";
import {useRecoilState, useSetRecoilState} from "recoil";
import {appUserState} from "../../recoil/atoms/AuthenticationAtom";
import postOfflineCartItems from "../../service/cartRequests/postOfflineCartItems";
import {cartItemsState} from "../../recoil/atoms/cartAtom";
import {axiosInstance} from "../../service/apiService";
import {AiFillEye} from "react-icons/ai";
import {AiFillEyeInvisible} from "react-icons/ai";
import {ROLE_ADMIN, ROLE_CUSTOMER} from "../../constants/rolesConstants";


const LoginPage = () => {
    const navigate = useNavigate();
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const [user, setUser] = useRecoilState(appUserState);
    const [cartItems, setCartItems] = useRecoilState(cartItemsState);
    const [invalidCreds, setInvalidCreds] = useState(false);
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisiblity = () => {
        setPasswordShown(prev=>!prev);
    };

    const onSubmit = (data) => {
        loginCustomer(data)
            .then(response => {
                localStorage.setItem('kc_token', response?.data["access_token"]);
                localStorage.setItem('kc_refreshToken', response?.data["refresh_token"]);
                setUser(response?.data["userInfo"]);
                axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${response?.data["access_token"]}`;
                setInvalidCreds(false);

                if(response?.data["userInfo"]?.roles?.includes(ROLE_ADMIN)){
                    navigate("/admin/dashboard");
                }
                else if(response?.data["userInfo"]?.roles?.includes(ROLE_CUSTOMER)){
                    //add current cart items to customers cart
                    postOfflineCartItems(response?.data["userInfo"].cartId, cartItems)
                        .then(response => {
                            setCartItems(response?.data?.cartItemList);
                            localStorage.removeItem("cartItems");
                        })
                    navigate("/myAccount");
                }

            })
            .catch((error) => {
                setInvalidCreds(true);
            });
    }

    return (
        <HomeLayout>
            <div className={"bg-secondaryBgColor sm:h-[80vh]"}>
                <div className={"flex flex-col sm:flex-row max-w-6xl mx-auto py-14 gap-10 sm:gap-0"}>
                    <div className={"w-full text-white px-8"}>
                        <h1 className={"text-4xl font-semibold"}>LOG IN</h1>
                        <p className={"text-sm font-light mt-5 leading-6"}>Already registered with Moodluxe shop? Enter
                            your details below to access your account.</p>
                        <form className={"flex flex-col gap-5 mt-5"} onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <p className={"mb-2 text-sm"}>Email</p>
                                <input type={"text"} placeholder={""}
                                       className={"w-full p-2 outline-2 outline-blue-400 bg-transparent border-[1px] border-gray-400 placeholder:font-light"} {...register("email", {
                                    required: "email required!",
                                    pattern: {
                                        value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.([a-zA-Z0-9-]){3,}$/,
                                        message: "invalid email!"
                                    }
                                })}/>
                                {errors?.email &&
                                    <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.email.message}</p>}
                            </div>
                            <div>
                                <p className={"mb-2 text-sm"}>Password</p>
                                <div className={"relative flex items-center"}>
                                    <input type={passwordShown ? "text" : "password"} placeholder={""}
                                           className={"w-full p-2 outline-2 outline-blue-400 bg-transparent border-[1px] border-gray-400 placeholder:font-light"} {...register("password", {
                                        required: "password required!"
                                    })}/>
                                    {!passwordShown ?
                                        <i onClick={togglePasswordVisiblity}><AiFillEye
                                            className="w-5 h-5 absolute right-2 top-0 translate-y-1/2 cursor-pointer"/></i>
                                        :
                                        <i onClick={togglePasswordVisiblity}><AiFillEyeInvisible
                                            className="w-5 h-5 absolute right-2 top-0 translate-y-1/2 cursor-pointer"/></i>
                                    }
                                </div>

                                {errors?.email &&
                                    <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.password.message}</p>}
                                <a className={"underline text-sm font-extralight mt-2 hover:text-blue-300"}
                                   href={"/forgotten-password"} alt={"forgotten password"}>Forgotten your password?</a>
                            </div>
                            <input type={"submit"} value={"LOG IN "}
                                   className={"bg-white text-black p-2 hover:bg-black hover:text-white cursor-pointer border-[1px] border-transparent hover:border-gray-200 transition-all mt-4"}/>
                            {invalidCreds &&
                                <p className={"text-base mt-2 font-light text-red-400"}>username or password
                                    invalid!</p>}
                        </form>
                    </div>
                    <div className={"sm:border-l-[1px] border-gray-200/30 w-full text-white px-8"}>
                        <h1 className={"text-4xl font-semibold"}>REGISTER</h1>
                        <p className={"text-sm font-light mt-5 leading-6"}>Not registered with Moodluxe shop yet? Set up
                            your account in no time and make ordering with us even easier.</p>
                        <div>
                            <h3 className={"text-md mt-4 mb-2"}>Why Register?</h3>
                            <ul className={"text-sm font-light flex flex-col gap-1"}>
                                <li className={"flex flex-row items-center gap-1"}><AiOutlineCheckCircle
                                    className={"text-lg text-green-400"}/> Access exclusive offers via email
                                </li>
                                <li className={"flex flex-row items-center gap-1"}><AiOutlineCheckCircle
                                    className={"text-lg text-green-400"}/> View and track your current orders
                                </li>
                                <li className={"flex flex-row items-center gap-1"}><AiOutlineCheckCircle
                                    className={"text-lg text-green-400"}/> View your order history
                                </li>
                            </ul>
                            <button
                                className={"bg-white text-black p-2 hover:bg-black hover:text-white cursor-pointer border-[1px] border-transparent hover:border-gray-200 transition-all mt-6 w-full"}
                                onClick={() => navigate("/register")}>CREATE ACCOUNT
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}

export default LoginPage
