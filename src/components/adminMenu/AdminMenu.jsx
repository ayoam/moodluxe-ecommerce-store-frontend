import React, {useEffect, useState} from 'react'
import {NavLink} from "react-router-dom";
import NavbarDropdownList from "../navbarDropdownList/NavbarDropdownList";
import {HiOutlineUser} from "react-icons/hi";
import UserDropDownList from "../userDropDownList/UserDropDownList";
import {useRecoilState} from "recoil";
import {menuActiveState} from "../../recoil/atoms/homeMenuAtom";

const AdminMenu = ()=>{
    const [menuActive,setMenuActive] = useRecoilState(menuActiveState);
    const [dimensions, setDimensions] = React.useState({width: window.innerWidth});
    const [userBtnActive,setUserBtnActive] = useState(false);

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

    const menuItems = [
        {
            name:"Dashboard",
            url:"/admin/dashboard"
        },
        {
            name:"Products",
            url:"/admin/products"
        },
        {
            name:"Orders",
            url:"/admin/orders"
        },
        {
            name:"Customers",
            url:"/admin/customers"
        }
        ,
        {
            name:"Messages",
            url:"/admin/messages"
        }
    ]


    return (
        <>
            {menuActive &&
                <div className={"absolute sm:relative z-50 bg-red-600 w-full  text-white text-lg font-semibold"}>
                    <ul className={"flex flex-col sm:flex-row justify-center mx-auto text-center py-5 sm:py-0"}>

                        {menuItems.map((item,index)=>{
                            return(
                                    <NavLink
                                        className={({isActive}) => (isActive ? 'sm:border-b-4 sm:border-white' : '')}
                                        to={`${item.url}`} key={index}>
                                        <li className={"p-4"}>{item.name}</li>
                                    </NavLink>
                                )
                            })
                        }
                        {/*<button className={"relative flex sm:hidden py-5 justify-center items-center"}*/}
                        {/*        onMouseOver={() => setUserBtnActive(prev => true)}*/}
                        {/*        onMouseOut={() => setUserBtnActive(prev => false)}>*/}
                        {/*    <HiOutlineUser className={"text-3xl text-white"}/>*/}
                        {/*    <UserDropDownList active={userBtnActive}/>*/}
                        {/*</button>*/}
                    </ul>
                </div>
            }
        </>
    );
}

export default AdminMenu
