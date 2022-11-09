import { atom } from "recoil";
import testPhoto from "../../assets/testPhoto";

const cartItemsTest = [
    {
        "productId":"12JHSQS2",
        "mainPhoto":{
            "photoId":1,
            "photo":testPhoto,
            "extension":"jpg"
        },
        "libelle":"Captain Cook Chronograph 43mm",
        "price":329.99,
        "quantity":2
    },
    {
        "productId":"13JHSQS2",
        "mainPhoto":{
            "photoId":1,
            "photo":testPhoto,
            "extension":"jpg"
        },
        "libelle":"Captain Cook Chronograph 43mm",
        "price":329.99,
        "quantity":7
    },
    {
        "productId":"14JHSQS2",
        "mainPhoto":{
            "photoId":1,
            "photo":testPhoto,
            "extension":"jpg"
        },
        "libelle":"Captain Cook Chronograph 43mm",
        "price":329.99,
        "quantity":1
    },
    {
        "productId":"15JHSQS2",
        "mainPhoto":{
            "photoId":1,
            "photo":testPhoto,
            "extension":"jpg"
        },
        "libelle":"Captain Cook Chronograph 43mm",
        "price":329.99,
        "quantity":1
    }
];

export const cartIsActiveState = atom({
    key:"cartIsActive",
    default:false
});

export const cartItemsState = atom({
    key:"cartItems",
    default:[]
});

