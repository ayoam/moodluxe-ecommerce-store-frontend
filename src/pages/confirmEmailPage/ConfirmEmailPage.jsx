import React, {useEffect} from 'react'
import {useSearchParams} from "react-router-dom";
import ConfirmEmail from "../../service/customerRequests/ConfirmEmail";

const ConfirmEmailPage = ()=>{
    const [searchParams,setSearchParams]=useSearchParams();

    useEffect(()=>{
        const confirmToken = searchParams.get("token");
        confirmToken && ConfirmEmail(confirmToken)
            .then(response=>{
                if(response.status===200){
                    console.log("email verified!");
                }
            }).catch(error=>{
                if(error.response.status===404){
                    console.log("link invalid/broken");
                }
                else if(error.response.status===500){
                    console.log("link expired!");
                }
            });

    },[])

    return(
        <></>
    )
}

export default ConfirmEmailPage
