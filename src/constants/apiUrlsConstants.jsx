import ENV_VARS from "../config.env"
const { API_GATEWAY_URL, API_GATEWAY_PORT } = ENV_VARS;
export const SERVER_URL = `${API_GATEWAY_URL}:${API_GATEWAY_PORT}/api/v1`;

//------------Product List----------------
export const GET_PRODUCT_LIST_URL = `${SERVER_URL}/products`;
export const GET_PRODUCT_URL = `${SERVER_URL}/products`;
export const POST_REGISTER_CUSTOMER_URL = `${SERVER_URL}/auth/register`;
export const GET_BRAND_URL = `${SERVER_URL}/brands`;
export const GET_CHECK_EMAIL_URL = `${SERVER_URL}/auth/check-email`;
