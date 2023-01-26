import React, {useState} from 'react'
import ProductQuantity from "../productQuantity/ProductQuantity";
import {BsPatchCheck,BsTruck,BsArrowCounterclockwise} from "react-icons/bs"
import {BiLockAlt} from "react-icons/bi"
import {useRecoilState, useRecoilValue} from 'recoil';
import {cartIsActiveState,cartItemsState} from "../../recoil/atoms/cartAtom"
import testPhoto from "../../assets/testPhoto";
import addToCartRequest from "../../service/cartRequests/addToCartRequest";
import {appUserState} from "../../recoil/atoms/AuthenticationAtom";

const ProductCTA = ({item})=>{
    const [cartItems,setCartItems] = useRecoilState(cartItemsState);
    const [cartIsActive,setCartIsActive] = useRecoilState(cartIsActiveState);
    const [quantity,setQuantity] = useState(1);
    const user = useRecoilValue(appUserState);

    const handleQuantityChange = (value)=>{
        if(value<=10 && value>0){
            setQuantity(value);
        }
    }

    const handleAddToCartClick = ()=>{
        setCartIsActive(true);
        const newCartItem = {
            "productId":item.idp,
            "mainPhoto":{extension:item.photoList[0].extension,photo:item.photoList[0].photo},
            "libelle":item.libelle,
            "price":item.price,
            "quantity":quantity,
            "productStock":item.quantity,
        };

        if(user){
            addToCartRequest(user?.cartId,newCartItem)
                .then(response=>{
                    console.log(response);
                    setCartItems(response?.data?.cartItemList);
                })
        }else{
            if(cartItems.find(x=>x.productId===item.idp)){
                setCartItems(prev=>{
                    const newState = prev.map((x)=>{
                        if(x.productId===item.idp){
                            return {...x,quantity:x.quantity+quantity}
                        }
                        return x;
                    })
                    return newState;
                })
            }
            else{
                setCartItems(prev=>{
                    return [...prev,newCartItem];
                })
            }
        }

    }
    console.log("===",item.quantity)
    return(
        <>
            <div className={"text-white  lg:w-1/2 flex flex-col gap-6"}>
                <h1 className={"font-semibold text-xl font-playfair"}>{item.brand.name.toUpperCase()}</h1>

                <p className={"font-extralight text-xl"}>{item.libelle}</p>

                <div className={"flex flex-row items-center gap-4 text-2xl"}>
                    {item?.compareToPrice && <p className={"line-through font-extralight text-xl"}>{item?.compareToPrice}$</p>}
                    <p>{item?.price}$</p>
                </div>

                <div className={"flex flex-row gap-3 items-center"}>
                    <p className={"font-extralight font-playfair"}>Quantity</p>
                    <ProductQuantity quantity={quantity} setQuantity={handleQuantityChange} limit={item.quantity}/>
                </div>

                <div>
                    {item?.quantity > 0 ?
                        <button
                            className={`bg-gradient-to-b from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white text-md font-semibold px-16 py-4 mt-4 transition-all w-full sm:w-auto lg:min-w-[300px]`}
                            onClick={handleAddToCartClick}
                        >
                            ADD TO SHOPPING BAG
                        </button>
                        :
                        <button
                            className={`bg-gray-500 border-2 border-gray-400 text-white text-md font-semibold px-16 py-3.5 mt-4 transition-all w-full sm:w-auto lg:min-w-[300px] cursor-default opacity-50`}
                            disabled={true}
                        >
                            SOLD OUT
                        </button>
                    }
                    {item.quantity > 0 &&  item.quantity <= 3 && <p className="text-orange-400 mt-6">Only {item.quantity} left in stock </p>}
                </div>

                <ul className={"font-light flex flex-col gap-2 mt-2"}>
                    <li className={"flex items-center gap-2"}><BsPatchCheck/> Price match promise</li>
                    <li className={"flex items-center gap-2"}><BsTruck/> Free delivery on all orders</li>
                    <li className={"flex items-center gap-2"}><BsArrowCounterclockwise/> Safe & secure transaction</li>
                    <li className={"flex items-center gap-2"}><BiLockAlt/> 30 day return policy</li>
                </ul>
            </div>
        </>
    )
}

export default ProductCTA
