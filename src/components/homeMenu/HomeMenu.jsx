import React, {useEffect, useState} from 'react'
import {HiMenuAlt2, HiOutlineUser} from "react-icons/hi"
import {IoClose} from "react-icons/io5"
import {NavLink, useNavigate} from "react-router-dom";
import NavbarDropdownList from "../navbarDropdownList/NavbarDropdownList";
import {useRecoilState} from "recoil"
import {menuActiveState} from "../../recoil/atoms/homeMenuAtom";


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


    const userBtnHandler = () => {
        navigate("/login")
    }

    return (
        <div>
            {/*<div className={"flex justify-center items-center sm:hidden"}>*/}
            {/*    {*/}
            {/*        !menuActive ?*/}
            {/*            <button onClick={() => setMenuActive(true)}><HiMenuAlt2 className={"text-white text-3xl"}/>*/}
            {/*            </button>*/}
            {/*            :*/}
            {/*            <button onClick={() => setMenuActive(false)}><IoClose className={"text-white text-3xl"}/>*/}
            {/*            </button>*/}
            {/*    }*/}
            {/*</div>*/}


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
                        <button className={"flex sm:hidden justify-center items-center py-5"}>
                            <HiOutlineUser className={"text-3xl text-white"} onClick={userBtnHandler}/>
                        </button>
                    </ul>
                </div>


            }</div>
    );
}

export default HomeMenu;