import React, {useEffect} from 'react'
import {Outlet} from 'react-router-dom'
import {axiosInstance} from "../../service/apiService";
import {POST_REFRESH_TOKEN_URL} from "../../constants/apiUrlsConstants";
import useRefreshToken from '../../hooks/useRefreshToken'

// export const updateToken =(setUser)=>{
//     if(!localStorage.getItem("kc_refreshToken") && !localStorage.getItem('kc_token')){
//         setUser(null);
//     }
//     else{
//         refreshToken(localStorage.getItem('kc_refreshToken'))
//             .then(response=>{
//                 localStorage.setItem('kc_token', response?.data["access_token"]);
//                 localStorage.setItem('kc_refreshToken', response?.data["refresh_token"]);
//                 setUser(response?.data["userInfo"]);
//                 axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${response?.data["access_token"]}`;
//
//             })
//             .catch(error=>{
//                 localStorage.removeItem('kc_token');
//                 localStorage.removeItem('kc_refreshToken');
//                 setUser(null);
//             });
//     }
// }

const AuthenticationProvider = ()=>{
    const refreshToken = useRefreshToken();

    useEffect( () => {
        refreshToken();
    }, []);


    return(
        <>
            <Outlet/>
        </>
    )
}

export default AuthenticationProvider
