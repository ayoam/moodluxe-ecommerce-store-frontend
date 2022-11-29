import ENV_VARS from "../config.env"
const { API_GATEWAY_URL, API_GATEWAY_PORT } = ENV_VARS;
export const SERVER_URL = `${API_GATEWAY_URL}:${API_GATEWAY_PORT}/api/v1`;

//------------Product List----------------
export const GET_PRODUCT_LIST_URL = `${SERVER_URL}/products`;
