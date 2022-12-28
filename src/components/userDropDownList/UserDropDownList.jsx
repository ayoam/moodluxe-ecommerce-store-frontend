import React from 'react'
import {NavLink, useNavigate} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {appUserState} from "../../recoil/atoms/AuthenticationAtom";
import {MdLogout, MdManageAccounts, MdOutlineManageAccounts} from "react-icons/md";
import {menuActiveState} from "../../recoil/atoms/homeMenuAtom";
import {useCookies} from "react-cookie";

const UserDropDownList = ({active})=>{
    const navigate = useNavigate();
    const setUser = useSetRecoilState(appUserState);
    const setMenuActive = useSetRecoilState(menuActiveState);
    const [cookies, setCookie ,removeCookie] = useCookies();

    const handleLogout = ()=>{
        localStorage.removeItem("kc_token");
        localStorage.removeItem("kc_refreshToken");
        setUser(null);
        removeCookie("order-number",{path:'/'});
        navigate("/");
    }

    return(
        <>
            <AnimatePresence>
                {
                    active &&
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={"translate-x-[-50%] right-0 sm:translate-x-[0] sm:right-0 absolute bg-white top-[100%] shadow-lg inline-block min-w-[200px] z-[9999] rounded overflow-hidden "}>
                        <ul className={"font-normal text-left text-black text-sm"}>
                            <NavLink to="/myAccount">
                                <li className={"hover:bg-gray-300 px-5 py-3 flex items-center gap-2"}>
                                    <MdManageAccounts className={"text-xl"} onClick={()=>setMenuActive(false)}/>
                                    Account
                                </li>
                            </NavLink>
                            <li className={"hover:bg-gray-300 px-5 py-3 flex items-center gap-2"} onClick={handleLogout}>
                                <MdLogout className={"text-lg"}/>
                                Logout
                            </li>
                        </ul>
                    </motion.div>
                }
            </AnimatePresence>
        </>
    )
}

export default UserDropDownList
