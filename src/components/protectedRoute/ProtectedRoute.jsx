import React from 'react'
import {Outlet} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {appUserState, userLoadingState} from "../../recoil/atoms/AuthenticationAtom";
import UnauthorizedPage from "../unauthorizedPage/UnauthorizedPage";

const ProtectedRoute = ({authorizedRoles})=>{
    const user = useRecoilValue(appUserState);
    const userLoading = useRecoilValue(userLoadingState);

    if(userLoading) return null

    return(
        <>
            {
                user?.roles?.some(x=>authorizedRoles.includes(x))
                ?
                <Outlet/>
                :
                <UnauthorizedPage/>
            }
        </>
    )
}

export default ProtectedRoute
