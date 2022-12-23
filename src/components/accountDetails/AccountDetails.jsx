import React, {useEffect, useState} from 'react';
import GetCustomerById from "../../service/customerRequests/GetCustomerById";
import {useRecoilValue} from "recoil";
import {appUserState} from "../../recoil/atoms/AuthenticationAtom";

function AccountDetails({customerInfo}) {

    if(customerInfo) return (
        <div>
            <div className={"flex flex-col gap-3 px-2"}>
                <div className={"inline-flex space-x-2 text-sm"}>
                    <span>{customerInfo.firstName} {customerInfo.lastName}</span>
                </div>
                <div className={"inline-flex space-x-2 text-sm"}>
                    <span>{customerInfo.adresse.HomeAdresse}</span>
                </div>
                <div className={"inline-flex space-x-2 text-sm"}>
                    <span>{customerInfo.adresse.city} , {customerInfo.adresse.postalCode}</span>
                </div>
                <div className={"inline-flex space-x-2 text-sm"}>
                    <span>{customerInfo.adresse.stateProvince} , {customerInfo.adresse.country.countryName}</span>
                </div>
            </div>
        </div>
    );
}

export default AccountDetails;