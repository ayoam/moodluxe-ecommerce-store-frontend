import axios from 'axios';
// import {keycloak} from "../util/keycloak";

export const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(config => {
    return config;
});
