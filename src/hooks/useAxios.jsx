import React, {useEffect} from 'react'
import useRefreshToken from '../hooks/useRefreshToken'
import {axiosInstance} from "../service/apiService";
import {useNavigate} from "react-router-dom";

const useAxios = ()=>{
    const navigate = useNavigate();
    const refresh = useRefreshToken();

    useEffect(()=>{
        const requestInterceptor = axiosInstance.interceptors.request.use(
            config => config, (error) => Promise.reject(error)
        );

        const responseInterceptor = axiosInstance.interceptors.response.use(
            response=>response,
            async(error)=>{
                const prevRequest = error?.config;
                if (error?.response?.status === 401 && !prevRequest?.sent) {
                    console.log("sent");
                    prevRequest.sent = true;
                    const data = await refresh();
                    if(!data){
                        navigate("/login",{replace:true})
                    }
                    prevRequest.headers['Authorization'] = `Bearer ${data["access_token"]}`;
                    return axiosInstance(prevRequest);
                }
                return Promise.reject(error);
            }
        )

        return () => {
            axiosInstance.interceptors.request.eject(requestInterceptor);
            axiosInstance.interceptors.response.eject(responseInterceptor);
        }

    },[])

    return axiosInstance
}

export default useAxios