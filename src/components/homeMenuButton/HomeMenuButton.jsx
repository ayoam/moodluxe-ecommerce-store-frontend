import React from 'react'
import {IoClose} from "react-icons/io5";
import {HiMenuAlt2} from "react-icons/hi";
import {useRecoilState} from "recoil";
import {menuActiveState} from "../../recoil/atoms/homeMenuAtom";

const HomeMenuButton = ()=>{
    const [menuActive,setMenuActive] = useRecoilState(menuActiveState);

    return(
        <>
            <div className={"flex justify-center items-center sm:hidden"}>
                {
                    <button onClick={() => setMenuActive(prev=>!prev)}>
                        {
                            menuActive
                                ?
                                <IoClose className={"text-white text-3xl"}/>
                                :
                                <HiMenuAlt2 className={"text-white text-3xl"}/>
                        }
                    </button>
                }
            </div>
        </>
    )
}

export default HomeMenuButton
