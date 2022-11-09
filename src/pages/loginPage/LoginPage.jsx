import React from 'react'
import HomeLayout from "../../layouts/homeLayout/HomeLayout";

const LoginPage = ()=>{
    return(
        <HomeLayout>
            <div className={"bg-secondaryBgColor"}>
                <div className={"flex flex-row max-w-5xl mx-auto py-10"}>
                    <div className={"h-[400px] w-full text-white px-8"}>
                        <h1 className={"text-4xl font-semibold"}>LOG IN</h1>
                        <p className={"text-sm font-extralight mt-5 leading-6"}>Already registered with Moodluxe shop? Enter your details below to access your account.</p>
                        <form className={"flex flex-col gap-7 mt-5"}>
                            <div>
                                <input type={"text"} placeholder={"Email"} className={"w-full p-2 outline-2 outline-blue-400 bg-transparent border-[1px] border-gray-400 placeholder:font-light"}/>
                            </div>
                            <div>
                                <input type={"password"} placeholder={"Password"} className={"w-full p-2 outline-2 outline-blue-400 bg-transparent border-[1px] border-gray-400 placeholder:font-light"}/>
                                <button className={"underline text-sm font-extralight mt-2"}>Forgotten your password?</button>
                            </div>
                            <input type={"submit"} value={"LOG IN "} className={"bg-white text-black p-2 hover:bg-black hover:text-white cursor-pointer border-[1px] border-transparent hover:border-gray-200 transition-all"}/>
                        </form>
                    </div>
                    <div className={"h-[400px] bg-blue-300 w-full"}>

                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}

export default LoginPage
