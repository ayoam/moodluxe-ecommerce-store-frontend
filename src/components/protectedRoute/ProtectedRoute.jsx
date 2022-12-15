import React from 'react'
import {Outlet} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {appUserState} from "../../recoil/atoms/AuthenticationAtom";

const ProtectedRoute = ({authorizedRoles})=>{
    const user = useRecoilValue(appUserState);
    return(
        <>
            {
                user?.roles?.some(x=>authorizedRoles.includes(x))
                ?
                <Outlet/>
                :
                <p>access not allowed</p>
            }
        </>
    )
}

export default ProtectedRoute
