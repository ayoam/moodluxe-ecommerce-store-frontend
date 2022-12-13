import React from 'react';

function OrderAddressDetails(props) {
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
                    <span>Louis John</span>
                </div>
                <div className={"inline-flex space-x-2 text-sm"}>
                    <span>151 O'Connor Street</span>
                </div>
                <div className={"inline-flex space-x-2 text-sm"}>
                    <span>Ottawa ON K2P 2L8</span>
                </div>
                <div className={"inline-flex space-x-2 text-sm"}>
                    <span>Canada</span>
                </div>
            </div>
            <div>
                <h1 className={"font-medium text-2xl pt-8 tracking-wide"}>Shipping Address</h1>
            </div>
            <div className={"flex flex-col gap-3"}>
                <div className={"inline-flex space-x-2 text-sm mt-10"}>
                    <span className={"font-extralight"}>Fulfillment status:</span>
                    <span>Unfulfilled</span>
                </div>
                <div className={"inline-flex space-x-2 text-sm"}>
                    <span>Louis John</span>
                </div>
                <div className={"inline-flex space-x-2 text-sm"}>
                    <span>151 O'Connor Street</span>
                </div>
                <div className={"inline-flex space-x-2 text-sm"}>
                    <span>Ottawa ON K2P 2L8</span>
                </div>
                <div className={"inline-flex space-x-2 text-sm"}>
                    <span>Canada</span>
                </div>
            </div>
        </div>
    );
}

export default OrderAddressDetails;