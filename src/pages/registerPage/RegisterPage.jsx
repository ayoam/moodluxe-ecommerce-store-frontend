import React from 'react'
import HomeLayout from "../../layouts/homeLayout/HomeLayout";

const RegisterPage = ()=>{
    return(
        <HomeLayout>
            <div className={"bg-secondaryBgColor"}>
                <div className={"max-w-5xl mx-auto text-white py-16"}>
                    <h1 className={"text-4xl font-semibold"}>REGISTER</h1>
                    <p className={"text-sm font-light mt-5 leading-6"}>To register for your Moodluxe shop account, please fill in the below form then click 'Register'</p>
                    <form className={"mt-8"}>
                        <div className={"grid grid-cols-2 gap-8"}>
                            <div className={""}>
                                <p className={"text-sm font-light mb-2"}>First name</p>
                                <input type={"password"} placeholder={""} className={"w-full p-1 outline-2 outline-blue-400 bg-transparent border-[1px] border-gray-400"}/>
                            </div>
                            <div className={""}>
                                <p className={"text-sm font-light mb-2"}>Last name</p>
                                <input type={"password"} placeholder={""} className={"w-full p-1 outline-2 outline-blue-400 bg-transparent border-[1px] border-gray-400"}/>
                            </div>
                            <div className={""}>
                                <p className={"text-sm font-light mb-2"}>Email</p>
                                <input type={"password"} placeholder={""} className={"w-full p-1 outline-2 outline-blue-400 bg-transparent border-[1px] border-gray-400"}/>
                            </div>
                            <div className={""}>
                                <p className={"text-sm font-light mb-2"}>Phone number</p>
                                <input type={"password"} placeholder={""} className={"w-full p-1 outline-2 outline-blue-400 bg-transparent border-[1px] border-gray-400"}/>
                            </div>
                            <div className={""}>
                                <p className={"text-sm font-light mb-2"}>Birth date</p>
                                <input type={"password"} placeholder={""} className={"w-full p-1 outline-2 outline-blue-400 bg-transparent border-[1px] border-gray-400"}/>
                            </div>
                            <div className={""}>
                                <p className={"text-sm font-light mb-2"}>Gender</p>
                                <select className={"w-full p-1 outline-2 outline-blue-400 bg-transparent border-[1px] border-gray-400"}>
                                    <option className={"text-black"}>male</option>
                                    <option className={"text-black"}>female</option>
                                </select>
                            </div>
                            <div className={""}>
                                <p className={"text-sm font-light mb-2"}>Password</p>
                                <input type={"password"} placeholder={""} className={"w-full p-1 outline-2 outline-blue-400 bg-transparent border-[1px] border-gray-400"}/>
                            </div>
                            <div className={""}>
                                <p className={"text-sm font-light mb-2"}>Confirm password</p>
                                <input type={"password"} placeholder={""} className={"w-full p-1 outline-2 outline-blue-400 bg-transparent border-[1px] border-gray-400"}/>
                            </div>
                            <div className={""}>
                                <p className={"text-sm font-light mb-2"}>Adresse</p>
                                <input type={"password"} placeholder={""} className={"w-full p-1 outline-2 outline-blue-400 bg-transparent border-[1px] border-gray-400"}/>
                            </div>
                            <div className={""}>
                                <p className={"text-sm font-light mb-2"}>City</p>
                                <input type={"password"} placeholder={""} className={"w-full p-1 outline-2 outline-blue-400 bg-transparent border-[1px] border-gray-400"}/>
                            </div>
                            <div className={""}>
                                <p className={"text-sm font-light mb-2"}>State/Province</p>
                                <input type={"password"} placeholder={""} className={"w-full p-1 outline-2 outline-blue-400 bg-transparent border-[1px] border-gray-400"}/>
                            </div>
                            <div className={""}>
                                <p className={"text-sm font-light mb-2"}>Country</p>
                                <select className={"w-full p-1 outline-2 outline-blue-400 bg-transparent border-[1px] border-gray-400"}>
                                    <option className={"text-black"}>United states</option>
                                    <option className={"text-black"}>Denmark</option>
                                </select>
                            </div>
                            <input type={"submit"} value={"REGISTER"} className={"bg-white text-black p-2 hover:bg-black hover:text-white cursor-pointer border-[1px] border-transparent hover:border-gray-200 transition-all mt-4"}/>
                        </div>
                    </form>
                </div>
            </div>
        </HomeLayout>
    )
}

export default RegisterPage
