import React from 'react';

function OrderAddressDetails({customerInfo,orderStatus}) {
    return (
        <div>
            <div>
                <h1 className={"font-medium text-2xl  tracking-wide"}>Billing Address</h1>
            </div>
            <div className={"flex flex-col gap-3"}>
                <div className={"inline-flex space-x-2 text-sm mt-10"}>
                    <span className={"font-extralight"}>Payment status:</span>
                    <span>Paid</span>
                </div>
                <div className={"inline-flex space-x-2 text-sm"}>
                    <span>{customerInfo.firstName} {customerInfo.lastName}</span>
                </div>
                <div className={"inline-flex space-x-2 text-sm"}>
                    <span>{customerInfo.HomeAdresse}</span>
                </div>
                <div className={"inline-flex space-x-2 text-sm"}>
                    <span>{customerInfo.city} , {customerInfo.postalCode}</span>
                </div>
                <div className={"inline-flex space-x-2 text-sm"}>
                    <span>{customerInfo.stateProvince} , {customerInfo.country}</span>
                </div>
            </div>
            <div>
                <h1 className={"font-medium text-2xl pt-8 tracking-wide"}>Shipping Address</h1>
            </div>
            <div className={"flex flex-col gap-3"}>
                <div className={"inline-flex space-x-2 text-sm mt-10"}>
                    <span className={"font-extralight"}>Fulfillment status:</span>
                    <span>{orderStatus}</span>
                </div>
                <div className={"inline-flex space-x-2 text-sm"}>
                    <span>{customerInfo.firstName} {customerInfo.lastName}</span>
                </div>
                <div className={"inline-flex space-x-2 text-sm"}>
                    <span>{customerInfo.HomeAdresse}</span>
                </div>
                <div className={"inline-flex space-x-2 text-sm"}>
                    <span>{customerInfo.city} , {customerInfo.postalCode}</span>
                </div>
                <div className={"inline-flex space-x-2 text-sm"}>
                    <span>{customerInfo.stateProvince} , {customerInfo.country}</span>
                </div>
            </div>
        </div>
    );
}

export default OrderAddressDetails;