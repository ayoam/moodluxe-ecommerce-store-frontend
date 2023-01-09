import React from 'react'
import {NavLink, useNavigate} from "react-router-dom";
import {AnimatePresence, motion} from "framer-motion"
import {useRecoilState, useSetRecoilState} from "recoil";
import {appUserState} from "../../recoil/atoms/AuthenticationAtom";
import {MdLogout} from "react-icons/md";
import {menuActiveState} from "../../recoil/atoms/homeMenuAtom";
import {useCookies} from "react-cookie";
import {axiosInstance} from "../../service/apiService";
import {ROLE_ADMIN} from "../../constants/rolesConstants";
import {RiAccountPinBoxFill, RiDashboardFill, RiSettings2Line} from "react-icons/ri";

const UserDropDownList = ({active})=>{
    const navigate = useNavigate();
    const [user,setUser] = useRecoilState(appUserState);
    const setMenuActive = useSetRecoilState(menuActiveState);
    const [cookies, setCookie ,removeCookie] = useCookies();

    const handleLogout = ()=>{
        localStorage.removeItem("kc_token");
        localStorage.removeItem("kc_refreshToken");
        setUser(null);
        removeCookie("order-number",{path:'/'});
        delete axiosInstance.defaults.headers.common["Authorization"];
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
                        className={`${user?.roles?.includes(ROLE_ADMIN) ? "right-0":"translate-x-[50%] sm:translate-x-[0] right-1/2 sm:right-0"} absolute bg-white top-[100%] shadow-lg inline-block min-w-[200px] z-[9999] rounded overflow-hidden `}>
                        {(user?.roles?.includes(ROLE_ADMIN)) ?
                            <ul className={"font-normal text-left text-black text-sm"}>
                                <NavLink to="/admin/dashboard">
                                    <li className={"hover:bg-gray-300 px-5 py-3 flex items-center gap-2"}>
                                        <RiDashboardFill className={"text-xl"}/>
                                        Dashboard
                                    </li>
                                </NavLink>
                                <NavLink to="/admin/settings">
                                    <li className={"hover:bg-gray-300 px-5 py-3 flex items-center gap-2"}>
                                        <RiSettings2Line className={"text-xl"}/>
                                        Settings
                                    </li>
                                </NavLink>
                                <li className={"hover:bg-gray-300 px-5 py-3 flex items-center gap-2"} onClick={handleLogout}>
                                    <MdLogout className={"text-lg"}/>
                                    Logout
                                </li>
                            </ul>
                            :
                            <ul className={"font-normal text-left text-black text-sm"}>
                                <NavLink to="/myAccount">
                                    <li className={"hover:bg-gray-300 px-5 py-3 flex items-center gap-2"}>
                                        <RiAccountPinBoxFill className={"text-xl"} onClick={()=>setMenuActive(false)}/>
                                        Account
                                    </li>
                                </NavLink>
                                <NavLink to="/settings/address">
                                    <li className={"hover:bg-gray-300 px-5 py-3 flex items-center gap-2"}>
                                        <RiSettings2Line className={"text-xl"} onClick={()=>setMenuActive(false)}/>
                                        Settings
                                    </li>
                                </NavLink>
                                <li className={"hover:bg-gray-300 px-5 py-3 flex items-center gap-2"} onClick={handleLogout}>
                                    <MdLogout className={"text-xl"}/>
                                    Logout
                                </li>
                            </ul>
                        }
                    </motion.div>
                }
            </AnimatePresence>
        </>
    )
}

export default UserDropDownList
