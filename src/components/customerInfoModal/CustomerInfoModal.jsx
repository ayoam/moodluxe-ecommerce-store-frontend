import React, {useEffect, useState} from 'react'
import {ImUser} from "react-icons/im";
import TableLoadingSpinner from "../tableLoadingSpinner/TableLoadingSpinner";
import {AiOutlineEye} from "react-icons/ai";
import getCustomerOrders from "../../service/orderRequests/getCustomerOrders";
import {useNavigate} from "react-router-dom";

const CustomerInfoModal = ({customer, customerBirthDate, closeModal}) => {
    const [customerOrders, setCustomerOrders] = useState(null);
    useEffect(() => {
        getCustomerOrders(customer?.idc)
            .then(response=>{
                setCustomerOrders(response?.data?.orderList);
            })
            .catch(error=>console.log("error"))
    }, []);

    return (
        <div
            className="fixed z-50 top-0 px-4 pb-6 inset-0 sm:p-0 flex items-center justify-center">
            <div className="fixed inset-0 transition-opacity" onClick={() => closeModal()}>
                <div className="absolute inset-0 bg-black/100 opacity-75"></div>
            </div>
            <div
                className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-xl w-full"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
            >
                <div className="px-4 pt-5 pb-3 sm:px-6 sm:pt-6 sm:pb-4">
                    <div className={"flex flex-col sm:flex-row items-center gap-3 pb-4"}>
                        <div
                            className="flex-shrink-0 flex items-center justify-center rounded-full bg-red-100 sm:mx-0 h-10 w-10">
                            <ImUser className={"text-red-600 text-2xl"}/>
                        </div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900"
                            id="modal-headline">
                            Customer Information
                        </h3>
                    </div>
                    <div
                        className={"grid grid-cols-2 sm:grid-cols-3 gap-6 mt-8 text-left px-2 sm:px-4 max-h-screen scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 overflow-y-scroll h-[550px] sm:h-auto"}>
                        <div className={""}>
                            <p className={"text-sm font-light mb-2"}>First name</p>
                            <p className="text-sm leading-5 font-medium">{customer.firstName}</p>

                        </div>
                        <div className={""}>
                            <p className={"text-sm font-light mb-2"}>Last name</p>
                            <p className="text-sm leading-5 font-medium">{customer.lastName}</p>

                        </div>
                        <div className={""}>
                            <p className={"text-sm font-light mb-2"}>Gender</p>
                            <p className="text-sm leading-5 font-medium">{customer.gender}</p>
                        </div>
                        <div className={"col-span-2"}>
                            <p className={"text-sm font-light mb-2"}>Email</p>
                            <p className="text-sm leading-5 font-medium">{customer.email}</p>
                        </div>
                        <div className={""}>
                            <p className={"text-sm font-light mb-2"}>Birth date</p>
                            <p className="text-sm leading-5 font-medium">{customerBirthDate.replaceAll(".", "/")}</p>

                        </div>

                        <div className={"col-span-2 sm:col-span-3"}>
                            <p className={"text-sm font-light mb-2"}>Adresse</p>
                            <p className="text-sm leading-5 font-medium">{customer.adresse.HomeAdresse}</p>
                        </div>
                        <div className={""}>
                            <p className={"text-sm font-light mb-2"}>City</p>
                            <p className="text-sm leading-5 font-medium">{customer.adresse.city}</p>

                        </div>
                        <div className={""}>
                            <p className={"text-sm font-light mb-2"}>State/Province</p>
                            <p className="text-sm leading-5 font-medium">{customer.adresse.stateProvince}</p>

                        </div>
                        <div className={""}>
                            <p className={"text-sm font-light mb-2"}>Country</p>
                            <p className="text-sm leading-5 font-medium">{customer.adresse.country.countryName}</p>

                        </div>
                        <div className={""}>
                            <p className={"text-sm font-light mb-2"}>Postal Code</p>
                            <p className="text-sm leading-5 font-medium">{customer.adresse.postalCode}</p>
                        </div>
                        <div className={"col-span-2"}>
                            <p className={"text-sm font-light mb-2"}>Phone number</p>
                            <p className="text-sm leading-5 font-medium">{customer.phoneNumber}</p>

                        </div>
                        <div className={"col-span-2 sm:col-span-3"}>
                            <p className={"text-sm font-light mb-2"}>Orders</p>
                            <OrdersTable orders={customerOrders}/>
                        </div>
                    </div>
                </div>
                <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                  <button
                      type="button"
                      className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-800"
                      onClick={() => closeModal()}
                  >
                    Close
                  </button>
                </span>
                </div>
            </div>

        </div>
    )
}

const OrdersTable = ({orders}) => {
    const navigate = useNavigate();
    return (
        <div
            className={"h-[200px] w-full rounded-lg overflow-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 overflow-x-scroll border-[1px]"}>
            <table className={"table @min-w-[900px] w-full"}>
                <thead>
                <tr className={"text-gray-600 bg-gray-100 text-xs text-center"}>
                    <th className={"py-4 w-32"}>Order ID</th>
                    <th>Total</th>
                    <th className={"w-30"}></th>
                </tr>
                </thead>
                <tbody>
                { orders?.length===0 && <tr><td colSpan={3} className={"text-center py-5"}>no orders placed yet!</td></tr>}
                {orders?.map((order, index) => {
                    return (<tr className={"text-sm text-center text-black/70"} key={index}>
                        <td className={"py-4 font-semibold text-black/50"}>#{order?.orderNumber}</td>
                        <td>${order?.orderTotal?.toFixed(2)}</td>
                        <td>
                            <div className={"flex items-center justify-around"}>
                                <button
                                    className={"bg-gray-200 hover:bg-gray-300 transition-colors shadow-inner flex justify-center items-center rounded-lg p-2 gap-1 font-semibold"}
                                    onClick={()=>navigate("/admin/orders/"+order?.orderNumber)}
                                >
                                    <AiOutlineEye/>
                                </button>
                            </div>
                        </td>
                    </tr>)
                })}
                <TableLoadingSpinner tableLoading={false}/>
                </tbody>
            </table>
        </div>
    );
}

export default CustomerInfoModal
