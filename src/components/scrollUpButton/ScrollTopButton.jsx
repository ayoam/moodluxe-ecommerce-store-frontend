import React, {useState} from 'react'
import {BsFillArrowUpSquareFill} from "react-icons/bs"

const ScrollTopButton = ()=>{
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
            setVisible(true)
        }
        else if (scrolled <= 300){
            setVisible(false)
        }
    };

    const scrollToTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return(
        <>
            {
                visible &&
                <button className={"fixed bottom-6 right-6"} onClick={()=>scrollToTop()}>
                    <BsFillArrowUpSquareFill className={"text-red-600 text-4xl rounded-md"}/>
                    <div className={"absolute bg-white w-[80%] h-[80%] translate-x-[50%] translate-y-[-50%] -z-50 right-[50%] top-[50%]"}></div>
                </button>
            }
        </>
    )
}

export default ScrollTopButton
