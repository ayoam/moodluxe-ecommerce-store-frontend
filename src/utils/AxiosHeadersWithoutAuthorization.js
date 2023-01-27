import {axiosInstance} from "../service/apiService";

export const AxiosHeadersWithoutAuthorization = (axios)=>{
    const headers = {...axios.defaults.headers.common};
    delete headers["Authorization"];
    return headers;
}