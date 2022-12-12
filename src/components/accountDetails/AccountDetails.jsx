import React from 'react';

function AccountDetails(props) {
    return (
        <div>
            <div className={"flex flex-col gap-3 px-2"}>
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

export default AccountDetails;