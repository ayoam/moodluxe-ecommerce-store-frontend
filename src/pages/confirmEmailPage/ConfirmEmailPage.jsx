import React, {useEffect, useState} from 'react'
import {useSearchParams} from "react-router-dom";
import ConfirmEmail from "../../service/customerRequests/ConfirmEmail";
import NotFoundPage from "../404Page/NotFoundPage";
import ConfirmEmailLinkExpired from "../../components/confirmEmailLink/ConfirmEmailLinkExpired";
import ConfirmEmailVerified from "../../components/confirmEmailLink/ConfirmEmailVerified";

const ConfirmEmailPage = ()=>{
    const [searchParams,setSearchParams]=useSearchParams();
    const [emailVerified, setEmailVerified] = useState(false);
    const [linkInvalid, setLinkInvalid] = useState(false);
    const [linkExpired, setLinkExpired] = useState(false);
    const [keycloakId, setKeycloakId] = useState(null);

    useEffect(()=>{
        const confirmToken = searchParams.get("token");
        confirmToken && ConfirmEmail(confirmToken)
            .then(response=>{
                if(response.status===200){
                    console.log("email verified!");
                    setEmailVerified(true);
                }
            }).catch(error=>{
                if(error.response.status===404){
                    console.log("link invalid/broken");
                    setLinkInvalid(true)
                }
                else if(error.response.status===500){
                    console.log("link expired!");
                    setLinkExpired(true);
                    setKeycloakId(error?.response?.data?.keycloakID);
                }
            });

    },[linkExpired])

    return(
        <div>
            {emailVerified && (
               <ConfirmEmailVerified/>

            )}
            {linkInvalid && (
                <NotFoundPage/>
            )}
            {linkExpired && (
                <ConfirmEmailLinkExpired keycloakId={keycloakId}/>
            )}
        </div>
    )
}

export default ConfirmEmailPage
