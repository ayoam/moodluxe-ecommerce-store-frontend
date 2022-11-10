import React, {useEffect, useState} from 'react'
import logo from "../../assets/img/logo.png"
import smallLogo from "../../assets/img/small-logo.png"
import {MdOutlineShoppingBag} from "react-icons/md"
import {HiOutlineUser} from "react-icons/hi"
import {HiMenuAlt2} from "react-icons/hi"
import {IoClose} from "react-icons/io5"
import { NavLink } from "react-router-dom";
import NavbarDropdownList from "../navbarDropdownList/NavbarDropdownList";
import {useRecoilState} from 'recoil';
import {cartIsActiveState,cartItemsState} from "../../recoil/atoms/cartAtom"
import {useNavigate} from "react-router-dom";

const categoryItems=["Chronograph watches","Digital watches","Automatic watches","Quartz watches","Skeleton watches"]
const brandItems=["Casio","Fossil","Rolex","Guess","Swatch","Hugo","Tissot"]

const HomeHeader = ()=>{
    const [progress,setProgress] = useState(0);
    const [categoryActive,setCategoryActive]=useState(false);
    const [brandActive,setBrandActive]=useState(false);
    const [menuActive,setMenuActive] =  useState(false);
    const [cartIsActive,setCartIsActive] = useRecoilState(cartIsActiveState);
    const [cartItems,setCartItems] = useRecoilState(cartItemsState);
    const navigate = useNavigate();

    const [dimensions, setDimensions] = React.useState({
        width: window.innerWidth,
    });

    useEffect(() => {

        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
            });
            window.addEventListener("load", handleResize, false);
            window.addEventListener("resize", handleResize, false);
        };
        handleResize();
        if(dimensions.width>=640){
            setMenuActive(true);
        }
        if(dimensions.width<640){
            setMenuActive(false);
        }
    },[window.innerWidth]);

    const logoClickHandler = () =>{
        navigate("/home");
    }

    const userBtnClickHandler = () =>{
        navigate("/login")
    }

    return(
        <header className={"bg-mainBgColor"}>
            <div className={"max-w-7xl p-4 mx-auto flex justify-between"}>
                <div className={"flex justify-center items-center sm:hidden"}>
                    {
                        !menuActive ?
                            <button onClick={()=>setMenuActive(true)}><HiMenuAlt2 className={"text-white text-3xl"}/></button>
                        :
                            <button onClick={()=>setMenuActive(false)}><IoClose className={"text-white text-3xl"}/></button>
                    }
                </div>
                <div>
                    <img src={logo} alt={"logo"} className={"w-[200px] hidden sm:block cursor-pointer"} onClick={logoClickHandler}/>
                    <img src={smallLogo} alt={"logo"} className={"w-[40px] block sm:hidden cursor-pointer"} onClick={logoClickHandler}/>
                </div>
                <div className={"flex gap-3"}>
                    <button className={"hidden sm:flex justify-center items-center"}>
                        <HiOutlineUser className={"text-3xl text-white"} onClick={userBtnClickHandler}/>
                    </button>
                    <button className={"flex justify-center items-center relative"} onClick={()=>setCartIsActive(prev=>!prev)}>
                        {cartItems.length>0 && <div className={"bg-green-500 w-[10px] h-[10px] absolute bottom-2 right-0 rounded-full"}/>}
                        <MdOutlineShoppingBag className={"text-3xl text-white"}/>
                    </button>
                </div>
            </div>
            {
                menuActive &&
                <div className={"absolute sm:relative z-50 bg-red-600 w-full  text-white text-lg font-semibold"}>
                    <ul className={"flex flex-col sm:flex-row justify-center mx-auto text-center py-5 sm:py-0"}>
                        <NavLink
                            className={(navData) => (navData.isActive ? 'sm:border-b-4 sm:border-white' : '')}
                            to="/home"
                        >
                            <li className={"p-4"}>Home</li>
                        </NavLink>
                        <button className={"relative"}
                                onMouseOver={()=>setCategoryActive(prev=>true)}
                                onMouseOut={()=>setCategoryActive(prev=>false)}>
                            <li className={"p-4 cursor-pointer border-b-4 border-transparent"}>Shop</li>
                            <NavbarDropdownList items={categoryItems} active={categoryActive}/>
                        </button>
                        <button className={"relative"}
                                onMouseOver={()=>setBrandActive(prev=>true)}
                                onMouseOut={()=>setBrandActive(prev=>false)}>
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
                            <HiOutlineUser className={"text-3xl text-white"} onClick={userBtnClickHandler}/>
                        </button>
                    </ul>
                </div>
            }

        </header>
    )
}

export default HomeHeader
