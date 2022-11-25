import React, {useEffect} from 'react'
import {IoClose} from "react-icons/io5";
import CartItem from "../cartItem/CartItem";
import testPhoto from "../../assets/testPhoto";
import {useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';
import {cartIsActiveState,cartItemsState} from "../../recoil/atoms/cartAtom"
import {useLocalStorage} from "../../hooks/useLocalStorage";
import {useNavigate} from "react-router-dom";

const Cart = ()=>{
    const [cartIsActive,setCartIsActive] = useRecoilState(cartIsActiveState);
    const [cartItems,setCartItems] = useRecoilState(cartItemsState);

    const [cartItemsLC,setCartItemsLC]=useLocalStorage("cart_items",[{
        "productId":"15JHSQS2",
        "mainPhoto":{
            "photoId":1,
            "photo":testPhoto,
            "extension":"jpg"
        },
        "libelle":"Captain Cook Chronograph 43mm",
        "price":329.99,
        "quantity":1
    }])

    const navigate =useNavigate();

    useEffect(() => {
        setCartItems(cartItemsLC);
    }, []);


    useEffect(() => {
        setCartItemsLC(cartItems);
    }, [cartItems]);

    return(
        <div className={`bg-gray-100 h-screen ${cartIsActive ? "w-full sm:w-[400px]" : "w-0"} transition-all ease-out fixed z-50`}>
            <div className={`${!cartIsActive && "hidden"} h-full py-6 flex flex-col justify-between w-full`}>
                <div>
                    <div className={"flex flex-row @bg-red-300 justify-between items-center px-6"}>
                        <p className={"text-2xl font-semibold"}>Cart</p>
                        <button onClick={()=>setCartIsActive(false)}><IoClose className={"text-3xl"}/></button>
                    </div>
                    <div className={"mt-8 pl-6 pr-6 @mr-2 flex flex-col gap-10 max-h-[400px] sm:max-h-[450px] overflow-y-auto scrollbar scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-100"}>
                        {cartItems.length<=0 && <p className={"text-center font-light"}>CART IS EMPTY</p>}
                        {cartItems.map((item,index)=>{
                            return <CartItem item={item} key={index}/>
                        })}
                    </div>
                </div>

                <div>
                    <div className={"mt-6 px-6 flex flex-row justify-between text-xl font-semibold"}>
                        <p>TOTAL :</p>
                        <p>{cartItems.length>0 ? cartItems.map((item)=>item.quantity*item.price).reduce((sum,num)=>sum+num).toFixed(2):"0.00"}$</p>
                    </div>
                    <div className={"px-6 mt-6 space-y-2"}>
                        <button className={"bg-red-600 text-white w-full p-3 hover:bg-transparent border-2 border-transparent hover:border-black hover:text-black transition-all font-semibold disabled:bg-gray-500 disabled:hover:bg-gray-500 disabled:hover:border-transparent disabled:hover:text-white/70 disabled:text-white/70"} disabled={cartItems.length<=0} onClick={()=>{navigate("/checkout");}}>CONTINUE TO CHECKOUT</button>
                        <button className={"bg-black text-white w-full p-3 hover:bg-transparent border-2 border-transparent hover:border-black hover:text-black transition-all font-semibold disabled:bg-gray-500 disabled:hover:bg-gray-500 disabled:hover:border-transparent disabled:hover:text-white/70 disabled:text-white/70"} onClick={()=>{navigate("/cart");}}>VIEW CART</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
