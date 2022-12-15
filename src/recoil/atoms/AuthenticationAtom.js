import { atom } from "recoil";

export const appUserState= atom({
    key:"user",
    default: null
});

export const authenticationState= atom({
    key:"authenticated",
    default: false
});




