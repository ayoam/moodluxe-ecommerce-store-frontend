import React, {useState} from 'react';
import HomeLayout from "../../layouts/homeLayout/HomeLayout";
import {useForm} from "react-hook-form";
import {TfiEmail} from "react-icons/tfi";
import {BsTelephone} from "react-icons/bs";
import {GoLocation} from "react-icons/go";
import {FaFacebook} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import ContactUs from "../../service/contactRequests/ContactUs";

const ContactPage = () => {
    const {register, handleSubmit, formState: {errors},reset} = useForm();
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [status, setStatus] = useState();
    const [isLoading,setIsLoading] = useState(false);

    const onSubmitMsg = (data,e) => {
        //console.log(data);
        const contactor = {
            username:data.username,
            email:data.email,
            message:data.message,
        };

        setIsLoading(true);
        ContactUs({...contactor})
            .then(response =>{
                console.log(response);
                if(response.status === 201){
                    setUserName("")
                    setEmail("")
                    setMessage("")
                }
            }).then(() => {
            setStatus({ type: 'success' });
            reset();
        })
            .catch(e=>{
                console.log(e);
                setStatus({ type: 'error', e });

            }).finally(()=>setIsLoading(false));
    }
    return (
        <HomeLayout>

            <div className={"flex flex-col space-y-14 bg-secondaryBgColor px-6 sm:px-8 py-6 sm:py-12 md:py-20 shadow-lg text-white"}>

                <div  className="container max-w-6xl flex flex-col px-0 sm:px-4 mx-auto my-4 md:my-0 @space-y-4 @md:space-y-0 md:flex-row">

                    <div className={"flex flex-col sm:flex-row max-w-6xl py-0 md:py-14 mb-12 md:mb-0 gap-10 sm:gap-0 w-full"}>
                        <div className={"flex flex-col justify-between"}>
                            <div className={"flex flex-col gap-8 w-full text-white px-0 md:px-8"}>
                                <div>
                                    <h1 className={"font-bold text-4xl tracking-wide"}>Get in Touch</h1>
                                    <p className={"text-sm font-light mt-5 leading-6"}>We’re here to help and answer any
                                        question you might have.<br/>
                                        We look forward to hearing from you.</p>
                                </div>
                                <div className={"flex flex-col gap-4"}>
                                    <div className={"inline-flex space-x-2 text-xl"}>
                                        <BsTelephone className={"text-white text-2xl"}/>
                                        <span>+1 813 455 6338</span>
                                    </div>
                                    <div className={"inline-flex space-x-2 text-xl"}>
                                        <TfiEmail className={"text-white text-2xl"}/>
                                        <span>contact@moodluxe.com</span>
                                    </div>
                                    <div className={"inline-flex space-x-2 text-xl"}>
                                        <GoLocation className={"text-white text-2xl"}/>
                                        <span>Livermore, CA 94550</span>
                                    </div>
                                </div>
                                <div className={"flex space-x-4 text-lg"}>
                                    <a href={"/facebook"}>
                                        <FaFacebook className={"text-white hover:text-red-600 transition-colors text-2xl"}/>
                                    </a>
                                    <a href={"/instagram"}>
                                        <FaInstagram className={"text-white hover:text-red-600 transition-colors text-2xl"}/>
                                    </a>
                                    <a href={"/twitter"}>
                                        <FaTwitter className={"text-white hover:text-red-600 transition-colors text-2xl"}/>
                                    </a>

                                </div>
                            </div>
                        </div>


                    </div>

                    <div className={"w-full md:w-[800px]"}>

                        <div className={"bg-white rounded-xl shadow-lg p-4 md:px-6 lg:px-8 w-full"}>
                            <form className={"flex flex-col gap-3 mt-5 w-full text-black"} onSubmit={handleSubmit(onSubmitMsg)}>
                                <div>
                                    <p className={"mb-2 text-sm text-black"}>Your name</p>
                                    <input type={"text"} placeholder={"Your name"}
                                           className={"w-full p-2 outline-2 outline-gray-400 bg-transparent border-[1px] border-gray-400 placeholder:font-light"} {...register("username", {
                                        required: "Name required!",

                                    })}/>
                                    {errors?.username &&
                                        <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.username.message}</p>}
                                </div>
                                <div className={""}>
                                    <p className={"mb-2 text-sm text-black"}>Email</p>
                                    <input type={"text"} placeholder={"Email"}
                                           className={"w-full p-2 outline-2 outline-gray-400 bg-transparent border-[1px] border-gray-400 placeholder:font-light"} {...register("email", {
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
                                    <p className={"mb-2 text-sm text-black "}>Message</p>
                                    <textarea type={"text"} placeholder={"Your message"}
                                              className={"w-full p-2 outline-2 outline-gray-400 bg-transparent border-[1px] border-gray-400 placeholder:font-light h-52"} {...register("message", {
                                        required: "message required!",

                                    })}></textarea>
                                    {errors?.message &&
                                        <p className={"text-sm mt-2 font-light text-red-400"}>{errors?.message.message}</p>}
                                </div>

                                <div className={"flex gap-2 mt-4 items-center"}>
                                    <input type={"submit"} value={"SEND MESSAGE"} className={"bg-black text-white p-2 cursor-pointer border-[1px] border-transparent hover:border-white hover:bg-red-600 transition-all w-full"}/>
                                    {isLoading &&
                                        <svg aria-hidden="true" className="mr-2 w-8 h-8 text-gray-400 animate-spin fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                        </svg>
                                    }
                                </div>

                                <div>
                                    {status?.type === 'success' && <p className={"text-green-600 font-normal mt-2"}>Contact request submitted successfully</p>}
                                    {status?.type === 'error' && (<p className={"text-red-600 font-normal mt-2"}>Invalid form submission</p>)}
                                </div>
                            </form>


                        </div>
                    </div>

                </div>
            </div>
        </HomeLayout>
    );
}

export default ContactPage;