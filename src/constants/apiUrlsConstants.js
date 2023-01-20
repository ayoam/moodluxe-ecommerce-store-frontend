import ENV_VARS from "../config.env"
const { API_GATEWAY_URL, API_GATEWAY_PORT } = ENV_VARS;
export const SERVER_URL = `${API_GATEWAY_URL}:${API_GATEWAY_PORT}/api/v1`;

//------------Product List----------------
export const PRODUCT_MAIN_URL = `${SERVER_URL}/products`;
export const GET_PRODUCT_LIST_URL = `${PRODUCT_MAIN_URL}`;
export const GET_PRODUCT_URL = `${PRODUCT_MAIN_URL}`;
export const POST_REGISTER_CUSTOMER_URL = `${SERVER_URL}/auth/register`;
export const GET_BRAND_URL = `${SERVER_URL}/brands`;
export const GET_CHECK_EMAIL_URL = `${SERVER_URL}/auth/check-email`;
export const POST_LOGIN_URL = `${SERVER_URL}/auth/login`;
export const POST_REFRESH_TOKEN_URL = `${SERVER_URL}/auth/refreshToken`;
export const PUT_UPDATE_CUSTOMER_PASSWORD_URL = `${SERVER_URL}/auth/updatePassword`;
export const GET_CUSTOMER_CART_URL = `${SERVER_URL}/carts`;
export const CART_MAIN_URL = `${SERVER_URL}/carts/`;
export const POST_CART_ITEMS_LIST_PATH = `/addCartItemsList`;
export const PUT_UPDATE_CART_ITEMS_QUANTITY_PATH = "/updateQuantity"
export const DELETE_REMOVE_CART_ITEM_PATH = "/removeFromCart"
export const CUSTOMER_MAIN_URL = `${SERVER_URL}/customers`;
export const ORDERS_MAIN_URL = `${SERVER_URL}/orders`;
export const COUNTRIES_MAIN_URL = `${SERVER_URL}/countries`;
export const CATEGORY_MAIN_URL = `${PRODUCT_MAIN_URL}/categories`;
export const GET_CUSTOMER_BY_ID_URL = `${CUSTOMER_MAIN_URL}`
export const PUT_UPDATE_CUSTOMER_ADDRESS_BY_ID_URL = `/updateAdresse`
export const PUT_UPDATE_CUSTOMER_DETAILS_BY_ID_URL = `/updateDetails`
export const POST_STRIPE_CHARGE_URL = `${SERVER_URL}/payments/stripe/charge`;
export const POST_PLACE_ORDER_URL = `${ORDERS_MAIN_URL}/placeOrder`;
export const GET_CUSTOMER_ORDERS_URL = `${ORDERS_MAIN_URL}/customer`;
export const POST_CONTACT_US_URL = `${SERVER_URL}/contacts`;
export const GET_CONTACT_URL = `${SERVER_URL}/contacts`;
export const PUT_UPDATE_UNREAD_MESSAGE_BY_ID_URL =`/read`
export const GET_UNREAD_MESSAGE_COUNT_URL = `${SERVER_URL}/contacts/unread-count`;
export const POST_GENERATE_INVOICE_URL = `${ORDERS_MAIN_URL}/invoice/`;




