import React from 'react'
import {useSetRecoilState} from 'recoil';
import {axiosInstance} from "../service/apiService";
import {POST_REFRESH_TOKEN_URL} from "../constants/apiUrlsConstants";
import {appUserState, userLoadingState} from "../recoil/atoms/AuthenticationAtom";

const useRefreshToken = ()=>{

    const setUser = useSetRecoilState(appUserState);
    const setUserLoading = useSetRecoilState(userLoadingState);
    const refresh = async () => {
        if(!localStorage.getItem("kc_refreshToken") && !localStorage.getItem('kc_token')){
            setUser(null);
            setUserLoading(false);
            return null;
        }

        setUserLoading(true);
        try {
            const response = await axiosInstance.post(POST_REFRESH_TOKEN_URL, {
                "refresh_token":localStorage.getItem("kc_refreshToken")
            });

            if (response.status === 200) {
                localStorage.setItem('kc_token', response?.data["access_token"]);
                localStorage.setItem('kc_refreshToken', response?.data["refresh_token"]);
                setUser(response?.data["userInfo"]);
                setUserLoading(false);
                axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${response?.data["access_token"]}`;
                console.log("token refreshed!");
            }
            return response.data;

        } catch (e) {
            localStorage.removeItem('kc_token');
            localStorage.removeItem('kc_refreshToken');
            console.log("refresh token error")
            setUserLoading(false);
            return null;
        }

    }
    return refresh;
}

export default useRefreshToken