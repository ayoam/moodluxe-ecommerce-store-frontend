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
                    <BsFillArrowUpSquareFill className={"text-red-600 text-4xl bg-white rounded-md"}/>
                </button>
            }
        </>
    )
}

export default ScrollTopButton
