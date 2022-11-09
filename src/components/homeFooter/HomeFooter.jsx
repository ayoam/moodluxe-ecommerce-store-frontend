import React from 'react'

const categoryItems=["Chronograph watches","Digital watches","Automatic watches","Quartz watches","Skeleton watches"]


const HomeFooter = ()=>{
    return(
        <footer className={"bg-mainBgColor pt-16 pb-8 text-white"}>
            {/*<div className={"max-w-7xl mx-auto flex flex-row justify-between"}>*/}
                <div className={" max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center gap-12 font-extralight text-center sm:text-left "}>
                    <div>
                        <h1 className={"font-semibold text-xl mb-3 font-playfair"}>MOODLUXE</h1>
                        <span className={"font-light"}>
                            <p>7445 Leatherwood Rd.</p>
                            <p>Livermore, CA 94550</p>
                            <p>+1 813 455 6338</p>
                            <p>contact@moodluxe.com</p>
                        </span>
                    </div>
                    <ul className={"flex flex-col gap-1"}>
                        <p className={"font-semibold mb-2 text-lg font-playfair"}>Navigate</p>
                        {categoryItems.map((item,index)=>{
                            return <li key={index}>{item}</li>
                        })}
                    </ul>
                    <ul className={"flex flex-col gap-1"}>
                        <p className={"font-semibold mb-2 text-lg font-playfair"}>Customer Service</p>
                        <li>Get in Touch</li>
                        <li>About us</li>
                        <li>Services</li>
                        <li>Login / Register</li>
                        <li>FAQS</li>
                    </ul>
                    <ul className={"flex flex-col gap-1"}>
                        <p className={"font-semibold mb-2 text-lg font-playfair"}>Policies</p>
                        <li>Delivery Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy & Cookies</li>
                        <li>Returns Policy</li>
                    </ul>
                </div>
            <div className={"mt-16 text-center font-medium  text-red-500"}>
                <p>© {new Date().getFullYear()} MOODLUXE All Rights Reserved. </p>
            </div>
            {/*</div>*/}
        </footer>
    )
}

export default HomeFooter
