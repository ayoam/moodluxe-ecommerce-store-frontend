import React from 'react';
import deleteProductById from "../../service/adminRequests/deleteProductById";
import {useSearchParams} from "react-router-dom";
import {BsExclamationTriangle} from "react-icons/bs";
import deleteCustomerById from "../../service/customerRequests/deleteCustomerById";

const DeleteConfirmationModal = ({deleteConfirmed, closeModal}) => {

    return (
        <div className="fixed z-50 top-0 px-4 pb-6 inset-0 sm:p-0 flex items-center justify-center">
            <div className="fixed inset-0 transition-opacity" onClick={closeModal}>
                <div className="absolute inset-0 bg-black/100 opacity-75"></div>
            </div>
            <div
                className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-xl w-full"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline">
                <div className="px-4 pt-5 pb-3 sm:px-6 sm:pt-6 sm:pb-4 space-y-6">
                    <div className={"flex flex-col sm:flex-row items-center gap-3 pb-4"}>
                        <div
                            className="flex-shrink-0 flex items-center justify-center rounded-full bg-red-100 sm:mx-0 h-12 w-12">
                            <BsExclamationTriangle className={"text-red-600 text-2xl"}/>
                        </div>
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left @pt-5">
                            <h3 className="text-lg leading-6 font-medium text-gray-900"
                                id="modal-headline">
                                Confirm delete
                            </h3>
                            <div className="mt-2">
                                <p className={"text-black"}>Are you sure you want to delete this record? </p>
                            </div>
                        </div>
                    </div>
                    <div className="@px-4 @py-3 @sm:px-6 sm:flex sm:flex-row-reverse">
                        <span className="flex w-full rounded-md sm:ml-3 sm:w-auto justify-center">
                            <button
                                className={'bg-gray-400 text-white px-3 py-2 rounded-md hover:bg-gray-500 transition-colors mx-3'}
                                onClick={closeModal}
                            >
                                Cancel
                            </button>
                            <button
                                className={'bg-red-600 text-white px-3 py-2 rounded-md hover:bg-red-700 transition-colors'}
                                onClick={()=>{deleteConfirmed();closeModal();}}
                            >
                                delete
                            </button>
                        </span>
                    </div>
                </div>

            </div>
        </div>);
}

export default DeleteConfirmationModal;