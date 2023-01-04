import React, {useState} from 'react'
import HomeMenuButton from "../homeMenuButton/HomeMenuButton";
import logo from "../../assets/img/logo.png";
import smallLogo from "../../assets/img/small-logo.png";
import {HiOutlineUser} from "react-icons/hi";
import UserDropDownList from "../userDropDownList/UserDropDownList";
import {MdOutlineKeyboardArrowDown} from "react-icons/md";
import {useNavigate} from "react-router-dom";
import AdminMenu from "../adminMenu/AdminMenu";
import {useRecoilValue} from "recoil";
import {appUserState} from "../../recoil/atoms/AuthenticationAtom";

const AdminHeader = ()=>{
    const navigate = useNavigate();
    const user = useRecoilValue(appUserState);
    const [userBtnActive,setUserBtnActive] = useState(false);

    const logoClickHandler = () => {
        navigate("/admin/dashboard");
    }

    return(
        <header className={"bg-mainBgColor"}>
            <div className={"max-w-7xl p-4 mx-auto flex justify-between"}>
                <HomeMenuButton/>
                <div>
                    <img src={logo} alt={"logo"} className={"w-[200px] hidden sm:block cursor-pointer"}
                         onClick={logoClickHandler}/>
                    <img src={smallLogo} alt={"logo"} className={"w-[40px] justify-center block sm:hidden cursor-pointer mx-auto "}
                         onClick={logoClickHandler}/>
                </div>
                <button className={"relative flex justify-center items-center gap-2 ml-10 sm:ml-0"} onClick={()=>setUserBtnActive(prev=>!prev)}>
                    <div className={"flex items-end gap-2 text-white"}>
                        <HiOutlineUser className={"text-3xl"}/>
                        <p className={"hidden sm:block"}>{user?.firstName} {user?.lastName}</p>
                        <MdOutlineKeyboardArrowDown className={`text-xl mb-1 ${userBtnActive && "rotate-180"} transition-transform hidden sm:block`}/>
                    </div>
                    <UserDropDownList active={userBtnActive}/>
                </button>
            </div>
            <AdminMenu/>
        </header>
    )
}

export default AdminHeader
