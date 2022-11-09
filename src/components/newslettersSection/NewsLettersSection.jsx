import React from 'react'

const NewsLettersSection = ()=>{
    return(
        <div className={"bg-secondaryBgColor text-white py-14"}>
            <div className={"max-w-6xl p-4 mx-auto text-center gap-5 flex flex-col"}>
                <h1 className={"font-semibold text-4xl sm:text-5xl"}>Subscribe to our newsletter</h1>
                <p className={"font-extralight text-md sm:text-lg"}>Discover how to find the best watch and enjoy exclusive products and offers via email</p>
                <form className={"sm:bg-white w-full sm:w-[500px] mx-auto flex flex-col sm:flex-row sm:p-2 gap-2 sm:gap-0 mt-8"}>
                    <input type={"email"} placeholder={"Email adresse"} className={"w-full p-3 outline-0 text-black"}/>
                    <input type={"submit"} value={"subscribe"} className={"px-3 py-2 bg-red-600 text-lg cursor-pointer hover:bg-red-500 transition-colors"}/>
                </form>
            </div>
        </div>
    )
}

export default NewsLettersSection
