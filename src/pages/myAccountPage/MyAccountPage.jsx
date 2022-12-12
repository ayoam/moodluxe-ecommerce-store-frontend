import React, {useState} from 'react';
import HomeLayout from "../../layouts/homeLayout/HomeLayout";
import AccountLayout from "../../layouts/accountLayout/AccountLayout";
import OrderHistory from "../../components/orderHistory/OrderHistory";
import AccountDetails from "../../components/accountDetails/AccountDetails";


function MyAccountPage() {
    const [orderHistory, setOrderHistory] = useState(null);

    return (
        <HomeLayout>
            <AccountLayout>
                <p className={"text-md font-light"}>From your account you can view your recent
                    orders, manage
                    your shipping and billing addresses.</p>
                <div className={"card border-white bg-black text-white mt-12 py-3 pl-4 shadow-lg"}>
                    <h3 className={"font-medium"}> ORDER HISTORY</h3>

                </div>
                {!orderHistory ?
                    <div className="flex flex-col">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    <OrderHistory/>
                                </div>
                            </div>
                        </div>
                    </div>
                    : <p className={"text-sm mt-5"}>you haven't placed any orders yet.</p>
                }
                <div className={"card border-white bg-black text-white my-8 py-3 pl-4  shadow-lg"}>
                    <h3 className={"font-medium"}> ACCOUNT DETAILS</h3>
                </div>
                <div>
                    <AccountDetails/>
                    <button
                        className={"bg-white text-black py-2 px-10 my-24 hover:bg-black hover:text-white cursor-pointer border-[1px] border-transparent hover:border-gray-200 transition-all mt-6"}>EDIT
                        ADDRESS
                    </button>
                </div>
            </AccountLayout>
        </HomeLayout>
    );
}

export default MyAccountPage;