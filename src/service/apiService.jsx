import axios from 'axios';

export const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(config => {
    // if (keycloak.token !== undefined) {
    //     if (keycloak.isTokenExpired(1000)) {
    //         keycloak.updateToken(1).success((refreshed) => {
    //             localStorage.setItem('kc_token', keycloak.token);
    //             localStorage.setItem('kc_refreshToken', keycloak.refreshToken);
    //         })
    //     }
    //     config.headers.Authorization = `Bearer ${keycloak.token}`;
    // }

    return config;
});
