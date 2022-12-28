import { atom } from "recoil";

export const appUserState= atom({
    key:"user",
    default: null
});

export const userLoadingState= atom({
    key:"userLoading",
    default: true
});

export const authenticationState= atom({
    key:"authenticated",
    default: false
});





