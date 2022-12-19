import React, {useEffect, useState} from 'react'
import {appUserState, authenticationState} from "../../recoil/atoms/AuthenticationAtom"
import {useRecoilValue, useSetRecoilState} from "recoil";
import {Outlet} from 'react-router-dom'
import refreshToken from "../../service/customerRequests/RefreshToken";

export const updateToken =(setUser)=>{
    if(!localStorage.getItem("kc_refreshToken") && !localStorage.getItem('kc_token')){
        setUser(null);
    }
    else{
        refreshToken(localStorage.getItem('kc_refreshToken'))
            .then(response=>{
                localStorage.setItem('kc_token', response?.data["access_token"]);
                localStorage.setItem('kc_refreshToken', response?.data["refresh_token"]);
                setUser(response?.data["userInfo"]);
            })
            .catch(error=>{
                localStorage.removeItem('kc_token');
                localStorage.removeItem('kc_refreshToken');
                setUser(null);
            });
    }
}

const AuthenticationProvider = ()=>{
    const setUser = useSetRecoilState(appUserState);

    useEffect( () => {
        updateToken(setUser);
    }, []);


    return(
        <>
            <Outlet/>
        </>
    )
}

export default AuthenticationProvider
