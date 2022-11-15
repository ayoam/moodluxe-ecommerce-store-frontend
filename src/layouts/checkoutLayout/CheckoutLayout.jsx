import React from 'react'
import logo from "../../assets/img/logo.png";
import smallLogo from "../../assets/img/small-logo.png";
import {useNavigate} from "react-router-dom";

const CheckoutLayout = ({children})=>{
    const navigate = useNavigate();

    const logoClickHandler = () => {
        navigate("/home");
    }
    return(
        <>
            <header className={"bg-mainBgColor"}>
                <div className={"max-w-7xl p-4 mx-auto flex justify-center"}>
                    <img src={logo} alt={"logo"} className={"w-[200px] hidden sm:block cursor-pointer"} onClick={logoClickHandler}/>
                    <img src={smallLogo} alt={"logo"} className={"w-[40px] block sm:hidden cursor-pointer"} onClick={logoClickHandler}/>
                </div>
            </header>
            <main>
                {children}
            </main>
            <footer className={"bg-mainBgColor py-8 text-center font-medium  text-red-500"}>
                <p>© {new Date().getFullYear()} MOODLUXE All Rights Reserved. </p>
            </footer>
        </>
    )
}

export default CheckoutLayout
