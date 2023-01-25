import React, {useState} from 'react';

const CustomerInfosUpdatedModal = ({closeModal}) => {

    return (

        <div
            className="fixed z-50 top-0 px-4 pb-6 inset-0 sm:p-0 flex items-center justify-center"
            onClick={() => closeModal()}>
            <div className="fixed inset-0 transition-opacity">
                <div className="absolute inset-0 bg-black/100 opacity-75"></div>
            </div>
            <div
                className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-xl w-full"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
            >
                <div className="px-4 pt-5 pb-3 sm:px-6 sm:pt-6 sm:pb-4 space-y-6">
                    <div className={"flex flex-col sm:flex-row items-center gap-3 pb-4"}>

                        <p className={"text-black"}>Your changes have been saved </p>
                    </div>
                    <div className="@px-4 @py-3 @sm:px-6 sm:flex sm:flex-row-reverse">
                        <span className="flex w-full rounded-md sm:ml-3 sm:w-auto justify-center">
                            <button
                                className={'bg-green-500 text-white px-3 py-2 rounded-md hover:bg-green-600'}
                                onClick={() => closeModal()}
                            >
                                Close
                            </button>
                        </span>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default CustomerInfosUpdatedModal;