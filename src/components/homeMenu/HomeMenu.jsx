import React, {useEffect, useState} from 'react'
import {HiMenuAlt2, HiOutlineUser} from "react-icons/hi"
import {IoClose} from "react-icons/io5"
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import NavbarDropdownList from "../navbarDropdownList/NavbarDropdownList";
import {useRecoilState, useRecoilValue} from "recoil"
import {menuActiveState} from "../../recoil/atoms/homeMenuAtom";
import UserDropDownList from "../userDropDownList/UserDropDownList";
import {appUserState} from "../../recoil/atoms/AuthenticationAtom";


const categoryItems = ["Chronograph watches", "Digital watches", "Automatic watches", "Quartz watches", "Skeleton watches"]
const brandItems = ["Casio", "Fossil", "Rolex", "Guess", "Swatch", "Hugo", "Tissot"]

const HomeMenu = () => {
    // const [menuActive, setMenuActive] = useState(false);
    const [menuActive,setMenuActive] = useRecoilState(menuActiveState);

    const [dimensions, setDimensions] = React.useState({
        width: window.innerWidth,
    });
    const [categoryActive, setCategoryActive] = useState(false);
    const [brandActive, setBrandActive] = useState(false);
    const [userBtnActive,setUserBtnActive] = useState(false);
    const user = useRecoilValue(appUserState);
    const navigate = useNavigate();


    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
            });
            window.addEventListener("load", handleResize, false);
            window.addEventListener("resize", handleResize, false);
        };
        handleResize();
        if (dimensions.width >= 640) {
            setMenuActive(true);
        }
        if (dimensions.width < 640) {
            setMenuActive(false);
        }
    }, [window.innerWidth]);

    const userBtnClickHandler = () => {
        navigate("/login")
    }

    return (
        <div>
            {menuActive &&
                <div className={"absolute sm:relative z-50 bg-red-600 w-full  text-white text-lg font-semibold"}>
                    <ul className={"flex flex-col sm:flex-row justify-center mx-auto text-center py-5 sm:py-0"}>
                        <NavLink
                            className={(navData) => (navData.isActive ? 'sm:border-b-4 sm:border-white' : '')}
                            to="/home"
                        >
                            <li className={"p-4"}>Home</li>
                        </NavLink>
                        <button className={"relative"}
                                onMouseOver={() => setCategoryActive(prev => true)}
                                onMouseOut={() => setCategoryActive(prev => false)}>
                            <li className={"p-4 cursor-pointer border-b-4 border-transparent"}>Shop</li>
                            <NavbarDropdownList items={categoryItems} active={categoryActive}/>
                        </button>
                        <button className={"relative"}
                                onMouseOver={() => setBrandActive(prev => true)}
                                onMouseOut={() => setBrandActive(prev => false)}>
                            <li className={"p-4 cursor-pointer border-b-4 border-transparent"}>Brands</li>
                            <NavbarDropdownList items={brandItems} active={brandActive} isBrand={true}/>
                        </button>
                        <NavLink
                            className={(navData) => (navData.isActive ? 'sm:border-b-4 sm:border-white' : '')}
                            to="/products/all"
                        >
                            <li className={"p-4"}>Sale</li>
                        </NavLink>
                        <NavLink
                            className={(navData) => (navData.isActive ? 'sm:border-b-4 sm:border-white' : '')}
                            to="/contact-us"
                        >
                            <li className={"p-4"}>Contact us</li>
                        </NavLink>
                        { user ?
                            <button className={"relative flex sm:hidden py-5 justify-center items-center"}
                                    onMouseOver={() => setUserBtnActive(prev => true)}
                                    onMouseOut={() => setUserBtnActive(prev => false)}>
                                <HiOutlineUser className={"text-3xl text-white"}/>
                                <UserDropDownList active={userBtnActive}/>
                            </button>
                            :
                            <button className={"flex sm:hidden py-5 justify-center items-center"}>
                                <HiOutlineUser className={"text-3xl text-white"} onClick={userBtnClickHandler}/>
                            </button>
                        }
                    </ul>
                </div>
            }</div>
    );
}

export default HomeMenu;