import React from 'react';
import {NavLink, Outlet} from "react-router-dom"
import {MdLocationOn} from "react-icons/md";
import {HiOutlineKey, HiOutlineUser} from "react-icons/hi";

const SideBarList = () => {
    return (
        <div className={"flex flex-col gap-6 sm:flex-row"}>
            <div className="w-full">
                <aside className={"w-full md:w-64"} aria-label="Sidebar">
                    <div className="overflow-y-auto">
                        <ul className="space-y-2">
                            <li>
                                <NavLink
                                    className={(navData) => (navData.isActive ? 'flex p-2 rounded-lg bg-gray-700 ' : 'flex p-2 rounded-lg ')}
                                    to={"/settings/address"}>
                                    <span className="flex items-center ml-3">
                                        <MdLocationOn className={"text-3xl mr-3"}/>
                                        Shipping Address
                                    </span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={(navData) => (navData.isActive ? 'flex p-2 rounded-lg bg-gray-700 ' : 'flex p-2 rounded-lg ')}
                                    to="/settings/personalDetails">
                                    <span className="flex items-center ml-3">
                                        <HiOutlineUser className={"text-3xl mr-3"}/>
                                        Personal Details
                                    </span>

                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={(navData) => (navData.isActive ? 'flex p-2 rounded-lg bg-gray-700 ' : 'flex p-2 rounded-lg ')}
                                    to="/settings/password">
                                    <span className="flex items-center ml-3">
                                        <HiOutlineKey className={"text-3xl mr-3"}/>
                                        Password
                                    </span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>
            {/*<div className={"w-full flex flex-col gap-3"}>*/}
            {/*    <Outlet/>*/}
            {/*</div>*/}
        </div>
    );
}

export default SideBarList;