import React from 'react';
import {NavLink, Outlet} from "react-router-dom"
import {MdLocationOn} from "react-icons/md";
import {HiOutlineKey, HiOutlineUser} from "react-icons/hi";

const SideBarList = () => {


    return (
        <div>
                <div className={"flex flex-col gap-6 sm:flex-row"}>
                <div className="max-w-2xl">

                    <aside className="w-64" aria-label="Sidebar">
                        <div className="px-3 py-4 overflow-y-auto">
                            <ul className="space-y-4">

                                <li>
                                    <NavLink
                                        className ={ (navData) => (navData.isActive ? 'flex items-center p-2 text-base font-normal rounded-lg text-white bg-gray-700 -ml-2' :'')}

                                        to={ "/settings/address"}>


                                        <span className="flex items-center ml-3">

                                        <MdLocationOn className={"text-3xl mr-3"}/>
                                        Shipping Address</span>

                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className={ (navData) => (navData.isActive ? 'flex items-center p-2 text-base font-normal rounded-lg text-white bg-gray-700 -ml-2' :'')}
                                        to="/settings/personalData">
                                        <span className="flex items-center ml-3">

                                        <HiOutlineUser className={"text-3xl mr-3"}/>
                                        Personal Data</span>

                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                       className={ (navData) => (navData.isActive ? 'flex items-center p-2 text-base font-normal rounded-lg text-white bg-gray-700 -ml-2' :'')}
                                       to="/settings/password">
                                        <span className="flex items-center ml-3">

                                        <HiOutlineKey className={"text-3xl mr-3"}/>
                                        Password</span>

                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </aside>
                </div>
                <div className={"w-full flex flex-col gap-3"}>

                    <Outlet />

                </div>
                </div>

</div>
    );
}

export default SideBarList;