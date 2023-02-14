import React from 'react'
import aboutPhoto from "../../assets/img/aboutPhoto.jpg"

const AboutSection = ()=>{
    return(
        <div className={"bg-mainBgColor py-16"}>
            <div className={"max-w-5xl mx-auto flex flex-col md:flex-row gap-3 p-8 lg:p-0"}>
                <div className={"md:w-[45%] flex justify-center md:justify-end "}>
                    <img src={aboutPhoto} alt={"about photo"} className={"w-[350px] lg:w-[400px]"}/>
                </div>
                <div className={"p-2 sm:p-8 md:p-6 text-white flex flex-col justify-center md:w-[50%]"}>
                    <div className={"text-center md:text-left"}>
                        <h1 className={"font-semibold text-2xl sm:text-3xl mb-4 font-playfair"}>MOODLUXE</h1>
                        <p className={"text-md sm:text-lg font-extralight"}>We take great care in selecting our products. We offer a selection of luxury imported products that are highly rated on the world's largest e-commerce platforms.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection
