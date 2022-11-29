import { atom } from "recoil";

export const defaultMinPriceState = atom({
    key:"defaultMinPrice",
    default:0
});

export const defaultMaxPriceState = atom({
    key:"defaultMaxPrice",
    default:0
});

export const totalCountState = atom({
    key:"totalCount",
    default:0
});