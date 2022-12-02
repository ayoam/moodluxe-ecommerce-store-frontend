import React from 'react'
import HomeLayout from "../../layouts/homeLayout/HomeLayout";
import {useNavigate} from "react-router-dom";
import bg1 from "../../assets/img/bg1.jpg";

const NotFoundPage = ()=>{
    const navigate = useNavigate();

    return(
        <>
            <HomeLayout>
                <section className={"bg-secondaryBgColor bg-opacity-95 h-[85vh] relative"}>
                    <img src={bg1} alt={"bg"} className={"w-full h-full object-cover mix-blend-overlay"}/>
                    <div className={"absolute pt-44 text-white space-y-8 text-center left-[50%] top-[30%] translate-x-[-50%] translate-y-[-50%]"}>
                        <h1 className={"font-montserrat text-8xl sm:text-9xl font-bold"}>Oops!</h1>
                        <p className={"text-lg font-semibold"}>404 - PAGE NOT FOUND</p>
                        <div className={"text-sm w-full sm:w-[400px] mx-auto"}>
                            The page you are looking for might have been removed had its name changed or is temporarily unavailable.
                        </div>
                        <button className={"bg-red-600 py-3 px-5 font-semibold shadow-[1px_1px_20px_3px_rgba(220,38,38,0.6)] hover:bg-transparent hover:border-red-600 border-transparent border-2 hover:backdrop-blur-sm transition-all"} onClick={()=>navigate("/")}>GO TO HOMEPAGE</button>
                    </div>
                </section>
            </HomeLayout>
        </>
    )
}

export default NotFoundPage
