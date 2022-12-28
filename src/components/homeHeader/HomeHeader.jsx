import React, {useState} from 'react'
import logo from "../../assets/img/logo.png"
import smallLogo from "../../assets/img/small-logo.png"
import {MdOutlineShoppingBag} from "react-icons/md"
import {HiMenuAlt2, HiOutlineUser} from "react-icons/hi"
import {NavLink} from "react-router-dom";
import NavbarDropdownList from "../navbarDropdownList/NavbarDropdownList";
import {useRecoilState, useRecoilValue} from 'recoil';
import {cartIsActiveState, cartItemsState} from "../../recoil/atoms/cartAtom"
import {useNavigate} from "react-router-dom";
import HomeMenu from "../homeMenu/HomeMenu";
import {IoClose} from "react-icons/io5";
import {menuActiveState} from "../../recoil/atoms/homeMenuAtom";
import HomeMenuButton from "../homeMenuButton/HomeMenuButton";
import {AiOutlineSearch} from "react-icons/ai"
import {searchIsActiveState} from "../../recoil/atoms/searchBarAtom";
import {appUserState, authenticationState} from "../../recoil/atoms/AuthenticationAtom";
import UserDropDownList from "../userDropDownList/UserDropDownList";

const categoryItems = ["Chronograph watches", "Digital watches", "Automatic watches", "Quartz watches", "Skeleton watches"]
const brandItems = ["Casio", "Fossil", "Rolex", "Guess", "Swatch", "Hugo", "Tissot"]

const HomeHeader = () => {
    const [categoryActive, setCategoryActive] = useState(false);
    const [brandActive, setBrandActive] = useState(false);
    const [cartIsActive, setCartIsActive] = useRecoilState(cartIsActiveState);
    const [cartItems, setCartItems] = useRecoilState(cartItemsState);
    const [searchIsActive, setSearchIsActive] = useRecoilState(searchIsActiveState);
    const [userBtnActive,setUserBtnActive] = useState(false);
    const user = useRecoilValue(appUserState);
    const navigate = useNavigate();


    const logoClickHandler = () => {
        navigate("/home");
    }

    const userBtnClickHandler = () => {
        user ? navigate("/myAccount"):navigate("/login")
    }

    return (
        <header className={"bg-mainBgColor"}>
            <div className={"max-w-7xl p-4 mx-auto flex justify-between"}>
                <HomeMenuButton/>
                <div>
                    <img src={logo} alt={"logo"} className={"w-[200px] hidden sm:block cursor-pointer"}
                         onClick={logoClickHandler}/>
                    <img src={smallLogo} alt={"logo"} className={"w-[40px] justify-center block sm:hidden cursor-pointer mx-auto "}
                         onClick={logoClickHandler}/>
                </div>
                <div className={"flex gap-3"}>
                    <button className={"flex justify-center items-center relative"}>
                        <AiOutlineSearch className={"text-3xl text-white"} onClick={() => setSearchIsActive(true)}/>
                    </button>

                    { user ?
                        <button className={"relative hidden sm:flex justify-center items-center"}
                                onMouseOver={() => setUserBtnActive(prev => true)}
                                onMouseOut={() => setUserBtnActive(prev => false)}>
                            <HiOutlineUser className={"text-3xl text-white"}/>
                            <UserDropDownList active={userBtnActive}/>
                        </button>
                        :
                        <button className={"hidden sm:flex justify-center items-center"}>
                            <HiOutlineUser className={"text-3xl text-white"} onClick={userBtnClickHandler}/>
                        </button>
                    }

                    <button className={"flex justify-center items-center relative"}
                            onClick={() => setCartIsActive(prev => !prev)}>
                        {cartItems.length > 0 &&
                            <div className={"bg-green-500 w-[10px] h-[10px] absolute bottom-2 right-0 rounded-full"}/>}
                        <MdOutlineShoppingBag className={"text-3xl text-white"}/>
                    </button>
                </div>
            </div>
            <HomeMenu/>
        </header>
    )
}

export default HomeHeader
