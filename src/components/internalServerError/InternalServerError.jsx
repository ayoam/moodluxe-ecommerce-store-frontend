import React from 'react';
import HomeLayout from "../../layouts/homeLayout/HomeLayout";
// import error from "../../assets/img/500.pnj.webp";
import error from "../../assets/img/505-illustration.png"

import {useNavigate} from "react-router-dom";

const InternalServerError = () => {
    const navigate = useNavigate();
    const refreshPage = () => {
        navigate(0);
    }

    return (
        <HomeLayout>
            <section className={"bg-secondaryBgColor @bg-white bg-opacity-95 h-[85vh] relative"}>
                <div className={"absolute pt-56 text-white space-y-8 text-center left-[50%] top-[30%] translate-x-[-50%] translate-y-[-50%]"}>
                    <div className={"w-full md:w-[600px]"}>
                        <img src={error} alt={"bg"} className={"w-full h-full object-cover drop-shadow-[0_20px_20px_rgba(255,255,255,0.25)]"}/>
                    </div>

                    <div className={"text-sm w-full sm:w-[400px] mx-auto"}>
                        <h1 className={"font-bold text-4xl tracking-wide mb-3"}>Internal Server Error</h1>
                        <p>The server has been deserted for a while. Please be patient or try again later</p>
                    </div>
                    <button className={"bg-red-600 py-3 px-5 font-semibold  hover:bg-red-700 hover:border-black-600 border-transparent border-2 hover:backdrop-blur-sm transition-all"} onClick={refreshPage}>REFRECH</button>
                </div>

            </section>
        </HomeLayout>
    );
}

export default InternalServerError;