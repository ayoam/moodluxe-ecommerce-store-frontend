import React from 'react';
import {ImWarning} from "react-icons/im";
import HomeLayout from "../../layouts/homeLayout/HomeLayout";
import bg1 from "../../assets/img/bg1.jpg";
import {useNavigate} from "react-router-dom";

const UnauthorizedPage = () => {
    const navigate = useNavigate();
    return (
        <HomeLayout>
            <section className={"bg-secondaryBgColor bg-opacity-95 h-[85vh] relative"}>
                <img src={bg1} alt={"bg"} className={"w-full h-full object-cover mix-blend-overlay"}/>
                <div className={"absolute pt-44 text-white space-y-8 px-4 text-center left-[50%] top-[30%] translate-x-[-50%] translate-y-[-50%] w-full sm:w-[80%] lg:w-[50%]"}>
                    <ImWarning className={"text-center text-red-600 text-6xl mx-auto"}/>
                    <p className={"text-3xl sm:text-4xl font-semibold"}>You do not have permission to access the requested page</p>
                    <div className={"text-base sm:text-lg  mx-auto"}>
                        Either go back to the previous page or log in.
                    </div>
                    <div className={"flex flex-row gap-2 justify-center"}>
                        <button className={"bg-red-600 py-3 px-6 font-semibold shadow-[1px_1px_20px_3px_rgba(220,38,38,0.6)] hover:bg-transparent hover:border-red-600 border-transparent border-2 hover:backdrop-blur-sm transition-all"} onClick={()=>navigate("/login")}>Log in</button>
                        <button className={"py-3 px-5 font-semibold hover:bg-transparent hover:border-red-600 border-white border-2 hover:backdrop-blur-sm transition-all"} onClick={()=>navigate(-1)}>Go back</button>
                    </div>
                </div>

            </section>
        </HomeLayout>
    );
}

export default UnauthorizedPage;