import React, {useState} from 'react';
import {RiDeleteBin5Fill} from "react-icons/ri";
import {AiOutlineEye} from "react-icons/ai";
import CustomerInfoModal from "../customerInfoModal/CustomerInfoModal";
import DeleteConfirmationModal from "../deleteConfirmationModal/DeleteConfirmationModal";
import deleteCustomerById from "../../service/customerRequests/deleteCustomerById";
import {useSearchParams} from "react-router-dom";


const CustomerManagementTableRow = ({customer}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    const customerBirthDate = new Date(customer?.birthDate);
    const formattedDate = (('0' + customerBirthDate.getDate()).slice(-2) + '/'
        + ('0' + (customerBirthDate.getMonth() + 1)).slice(-2) + '/'
        + customerBirthDate.getFullYear()).replaceAll("/", ".");


    const handleModalClose = ()=>{
        setIsOpen(false);
        setShowDeleteModal(false)
    }

    const handleCustomerDelete=()=>{
        deleteCustomerById(customer.idc)
            .then(response => {
                console.log(response);
                setSearchParams(searchParams);
            }).catch(error => console.log(error))
    }

    return (
        <tr className={"border-b-[1px] text-sm text-center text-black/70"}>
            <td className={"py-4 font-semibold text-black/50"}>#{customer?.idc}</td>
            <td>{customer?.firstName} </td>
            <td>{customer?.lastName}</td>
            <td>{customer?.email}</td>
            <td>+{customer?.phoneNumber}</td>
            <td>{formattedDate}</td>
            <td className={"text-center px-2"}>
                <div className={"flex items-center justify-around"}>
                    <button><RiDeleteBin5Fill className={"text-lg hover:text-red-600 transition-colors"}
                                              onClick={()=>setShowDeleteModal(true)}/></button>
                    {showDeleteModal&& <DeleteConfirmationModal customer={customer} closeModal={handleModalClose} deleteConfirmed={handleCustomerDelete}/>}
                    <button
                        className={"bg-gray-200 hover:bg-gray-300 transition-colors shadow-inner flex justify-center items-center rounded-lg p-2 gap-1 font-semibold"}
                        onClick={() => setIsOpen(true)}><AiOutlineEye/></button>
                    {isOpen && <CustomerInfoModal customer={customer} customerBirthDate={formattedDate} closeModal={handleModalClose} />}
                </div>
            </td>
        </tr>
    );
}

export default CustomerManagementTableRow;