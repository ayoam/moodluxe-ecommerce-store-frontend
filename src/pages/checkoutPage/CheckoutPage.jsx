import React, {useEffect, useState} from 'react'
import CheckoutLayout from "../../layouts/checkoutLayout/CheckoutLayout";
import CheckoutOrderShippingInfo from "../../components/checkoutOrderShippingInfo/CheckoutOrderShippingInfo";
import CheckoutOrderItems from "../../components/checkoutOrderItems/CheckoutOrderItems";
import {IoIosArrowBack} from "react-icons/io";
import {useRecoilState, useRecoilValue} from "recoil";
import {cartItemsState} from "../../recoil/atoms/cartAtom";
import {appUserState} from "../../recoil/atoms/AuthenticationAtom";
import UnauthorizedPage from "../../components/unauthorizedPage/UnauthorizedPage";
import {useNavigate} from "react-router-dom";
import getCustomerCartBycartId from "../../service/cartRequests/getCustomerCart";
import {PayPalButtons, PayPalScriptProvider} from "@paypal/react-paypal-js";
import StripeContainer from "../../components/stripe/StripeContainer";
import loadingSpinner from "../../assets/img/loading2.svg"
import placeOrderRequest from "../../service/checkoutRequests/placeOrderRequest";
import {useCookies} from "react-cookie";

const CheckoutPage = ()=>{
    const user = useRecoilValue(appUserState);
    const [cartItems,setCartItems] = useRecoilState(cartItemsState);
    const navigate = useNavigate();
    const [totalAmount,setTotalAmount] = useState(null);
    const [getCartLoading,setGetCartLoading] = useState(true);
    const [paymentLoading,setPaymentLoading] = useState(false);
    const [orderAdresseInfo,setOrderAdresseInfo] = useState(null);
    const [cookies, setCookie] = useCookies(["order-number"]);

    useEffect(() => {
        if(user){
            getCustomerCartBycartId(user.cartId)
                .then(response=>{
                    setCartItems(response?.data?.cartItemList);
                })
                .finally(()=>{
                    setGetCartLoading(false);
                })
        }
    }, [user]);

    useEffect(()=>{
        cartItems.length>0 && setTotalAmount( cartItems?.map((item)=>item.quantity*item.price).reduce((sum,num)=>sum+num).toFixed(2))
    },[cartItems])

    const paypalCreateOrderRequest = ()=>{
        return {
            purchase_units: [
                {
                    amount: {
                        currency_code:"USD",
                        value:totalAmount+"",
                        breakdown:{
                            item_total:{
                                currency_code:"USD",
                                value:totalAmount+""
                            }
                        }
                    },
                    description:"test description here",
                    items: cartItems.map((item,index)=>{
                        return {
                            name: item.libelle,
                            quantity: item.quantity+"",
                            unit_amount:{
                                currency_code:"USD",
                                value:item.price+""
                            }
                        }
                    })
                },

            ],
        }
    }


    const PaypalContainer = ()=>{
        return <PayPalScriptProvider
            options={{"client-id":`${process.env.REACT_APP_PAYPAL_CLIENTID}`}}>
            <PayPalButtons
                createOrder={(data, actions) => {
                    return actions.order
                        .create(paypalCreateOrderRequest())
                        .then((orderId) => {
                            // Your code here after create the order
                            return orderId;
                        });
                }}
                onApprove={function (data, actions) {
                    return actions.order.capture().then(function (details) {
                        // Your code here after capture the order
                        const name = details.payer.name.given_name;
                        handlePaymentCompleted();
                        // alert(`Transaction completed by ${name}`);
                    });
                }}

                fundingSource={"paypal"}
                style={{
                    layout: 'horizontal',
                    label:'checkout',
                    tagline:true
                }}/>

        </PayPalScriptProvider>
    }

    const handleStripePaymentLoading = (value)=>{
        setPaymentLoading(value);
    }

    const handlePaymentCompleted = ()=>{
        //create order in backend
        const data = {
            customerID:user?.customerId,
            adresse:orderAdresseInfo,
            items:cartItems.map(item=>{
                return {
                    productId:item.productId,
                    libelle:item.productId,
                    price:item.price,
                    quantity:item.quantity,
                    mainPhoto:{extension:item.mainPhoto.extension,photo:item.mainPhoto.photo}
                }
            })

        }
        setPaymentLoading(true);
        placeOrderRequest(data)
            .then(response=>{
                setCookie("order-number", response?.data?.orderNumber, {
                    path: "/",
                    //10 minutes
                    maxAge:10*60
                });
                navigate("/order-completed");
            })
            .finally(()=>{
                setPaymentLoading(false);
            })
    }

    const handleOrderAdresseInfo =(adresse)=>{
        setOrderAdresseInfo(adresse);
        console.log(adresse)
    }


    console.log(cartItems);

    //TODO:add loading
    if(getCartLoading && user) return <p>Loading ...</p>

    if(!user) return <UnauthorizedPage/>

    return(
        <>
            {paymentLoading &&
                <div className={"absolute w-full h-full bg-black/40 z-[9999] flex flex-col items-center justify-center"}>
                    <img src={loadingSpinner} alt={"loading spinner"} className={"w-[100px]"}/>
                </div>
            }
            <CheckoutLayout>
                <section className={"bg-secondaryBgColor"}>
                    <div className={"max-w-6xl min-h-screen pt-8 pb-12 mx-auto px-2 sm:px-6 text-white"}>
                        <h1 className={"text-3xl font-semibold mb-6 text-center lg:text-left"}>CHECKOUT</h1>
                        <div className={"sm:w-[90%] md:w-[80%] lg:w-full mx-auto"}>
                            <a href={"/cart"} className={"flex flex-row items-center gap-1 text-blue-400 mb-6"}>
                                <IoIosArrowBack/>
                                Return to cart
                            </a>
                        </div>
                        <div className={"flex flex-col-reverse gap-6 lg:gap-0 lg:flex-row w-full sm:w-[90%] md:w-[80%] lg:w-full mx-auto justify-between"}>
                            <div className={"flex flex-col w-full lg:pr-6 justify-between gap-6"}>
                                <div className={"flex flex-col gap-6 justify-between h-full"}>
                                    <CheckoutOrderShippingInfo orderAdresseInfo={handleOrderAdresseInfo}/>
                                    <div>
                                        <PaypalContainer/>
                                        <StripeContainer amount={totalAmount} paymentLoading={handleStripePaymentLoading} paymentCompleted={handlePaymentCompleted}/>
                                    </div>
                                </div>
                            </div>
                            <CheckoutOrderItems/>
                        </div>
                    </div>
                </section>
            </CheckoutLayout>
        </>
    )
}

export default CheckoutPage
