import React, {useState} from 'react';
import {RiDeleteBin5Fill} from "react-icons/ri";
import {useSearchParams} from "react-router-dom";
import deleteCustomerById from "../../service/customerRequests/deleteCustomerById";
import {AiOutlineEye} from "react-icons/ai";
import {ImUser} from "react-icons/im";


const CustomerManagementTableRow = ({customer}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    const customerBirthDate = new Date(customer?.birthDate);
    const formattedDate = (('0' + customerBirthDate.getDate()).slice(-2) + '/'
        + ('0' + (customerBirthDate.getMonth() + 1)).slice(-2) + '/'
        + customerBirthDate.getFullYear()).replaceAll("/", ".");

    const handleDeleteBtnClick = () => {
        if (window.confirm("are you sure?") === true) {
            deleteCustomerById(customer.idc)
                .then(response => {
                    console.log(response);
                    setSearchParams(searchParams);
                })
        }
    }
    return (
        <tr className={"border-b-[1px] text-sm text-center text-black/70"}>
            <td className={"py-4 font-semibold text-black/50"}>#{customer?.idc}</td>
            <td>{customer?.firstName} </td>
            <td>{customer?.lastName}</td>
            <td>{customer?.email}</td>
            <td>{customer?.phoneNumber}</td>
            <td>{formattedDate}</td>
            <td className={"text-center px-2"}>
                <div className={"flex items-center justify-around"}>
                    <button><RiDeleteBin5Fill className={"text-lg hover:text-red-600 transition-colors"}
                                              onClick={handleDeleteBtnClick}/></button>
                    <button
                        className={"bg-gray-200 hover:bg-gray-300 transition-colors shadow-inner flex justify-center items-center rounded-lg p-2 gap-1 font-semibold"}
                        onClick={() => setIsOpen(true)}><AiOutlineEye/></button>
                    {isOpen && (
                        <div
                            className="fixed bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center">
                            <div className="fixed inset-0 transition-opacity">
                                <div className="absolute inset-0 bg-black/100 opacity-75"></div>
                            </div>
                            <div
                                className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all mb-12 sm:-mb-10 sm:max-w-lg sm:w-full"
                                role="dialog"
                                aria-modal="true"
                                aria-labelledby="modal-headline"
                            >
                                <div className="px-4 pt-5 pb-3 sm:px-6 sm:pt-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"><ImUser className={"text-red-600 text-2xl"}/>
                                        </div>
                                        <div className="mt-3 text-center sm:mt-2 sm:ml-4 sm:text-left">
                                            <h3 className="text-lg leading-6 font-medium text-gray-900"
                                                id="modal-headline">
                                                Customer Information
                                            </h3>
                                            <div className="mt-2">
                                                <form className={"mt-8"}>
                                                    <div className={"grid grid-cols-2 sm:grid-cols-2 gap-8"}>
                                                        <div className={""}>
                                                            <p className={"text-sm font-light mb-2"}>First name</p>
                                                            <p className="text-sm leading-5 text-gray-500">{customer.firstName}</p>

                                                        </div>
                                                        <div className={""}>
                                                            <p className={"text-sm font-light mb-2"}>Last name</p>
                                                            <p className="text-sm leading-5 text-gray-500">{customer.lastName}</p>

                                                        </div>
                                                        <div className={""}>
                                                            <p className={"text-sm font-light mb-2"}>Email</p>
                                                            <p className="text-sm leading-5 text-gray-500">{customer.email}</p>
                                                        </div>
                                                        <div className={""}>
                                                            <p className={"text-sm font-light mb-2"}>Phone number</p>
                                                            <p className="text-sm leading-5 text-gray-500">{customer.phoneNumber}</p>

                                                        </div>
                                                        <div className={""}>
                                                            <p className={"text-sm font-light mb-2"}>Birth date</p>
                                                            <p className="text-sm leading-5 text-gray-500">{formattedDate}</p>

                                                        </div>
                                                        <div className={""}>
                                                            <p className={"text-sm font-light mb-2"}>Gender</p>
                                                            <p className="text-sm leading-5 text-gray-500">{customer.gender}</p>

                                                        </div>

                                                        <div className={""}>
                                                            <p className={"text-sm font-light mb-2"}>Adresse</p>
                                                            <p className="text-sm leading-5 text-gray-500">{customer.adresse.HomeAdresse}</p>
                                                        </div>
                                                        <div className={""}>
                                                            <p className={"text-sm font-light mb-2"}>City</p>
                                                            <p className="text-sm leading-5 text-gray-500">{customer.adresse.city}</p>

                                                        </div>
                                                        <div className={""}>
                                                            <p className={"text-sm font-light mb-2"}>State/Province</p>
                                                            <p className="text-sm leading-5 text-gray-500">{customer.adresse.stateProvince}</p>

                                                        </div>
                                                        <div className={""}>
                                                            <p className={"text-sm font-light mb-2"}>Country</p>
                                                            <p className="text-sm leading-5 text-gray-500">{customer.adresse.country.countryName}</p>

                                                        </div>
                                                        <div className={""}>
                                                            <p className={"text-sm font-light mb-2"}>Postal Code</p>
                                                            <p className="text-sm leading-5 text-gray-500">{customer.adresse.postalCode}</p>

                                                        </div>

                                                    </div>


                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                  <button
                      type="button"
                      className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-800"
                      onClick={() => setIsOpen(false)}
                  >
                    Close
                  </button>
                </span>
                                </div>
                            </div>

                        </div>
                    )}
                </div>
            </td>
        </tr>
    );
}

export default CustomerManagementTableRow;