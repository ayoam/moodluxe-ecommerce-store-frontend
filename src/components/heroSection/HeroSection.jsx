import React from 'react'
import bg1 from "../../assets/img/bg1.jpg"

const HeroSection = ()=>{
    return(
        <>
            <div className={"relative h-[80vh] bg-black bg-opacity-30"}>
                <img src={bg1} alt={"bg"} className={"w-full h-full object-cover mix-blend-overlay"}/>
                <div className={"absolute text-white z-30 top-0 left-[50%] top-[40%] translate-x-[-50%] translate-y-[-50%] text-center"}>
                    <p className={"text-5xl sm:text-6xl font-semibold"}>DISCOVER OUR PREMIUM WATCHES</p>
                    <button className={"px-5 py-3 bg-white text-black font-semibold mt-5 hover:bg-transparent transition-colors backdrop-blur-sm border-transparent hover:border-red-600 border-2 hover:text-white "}>BUY NOW</button>
                </div>
            </div>
        </>
    )
}

export default HeroSection
