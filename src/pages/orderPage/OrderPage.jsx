import React from 'react';
import HomeLayout from "../../layouts/homeLayout/HomeLayout";
import AccountLayout from "../../layouts/accountLayout/AccountLayout";

function OrderPage(props) {

    return (
        <HomeLayout>
            <AccountLayout>
                <div className={"flex flex-col lg:flex-row gap-6 lg:gap-10"}>
                    <div className={"@mx-auto @max-w-screen-sm text-white w-full"}>
                        <a href={"/myAccount"} className={"text-sm mt-5 py-12 underline"}>return to account details</a>

                        <h3 className={"font-semibold text-lg mt-10"}> ORDER #1001 </h3>
                        <p className={"text-sm py-8"}>Placed on November 23, 2022 at 8.19 pm</p>

                        <div className="flex flex-col">
                            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                    <div className="overflow-hidden">
                                        <table className="min-w-full">
                                            <thead className="bg-white border-b">
                                            <tr>
                                                <th scope="col"
                                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                    Product
                                                </th>
                                                <th scope="col"
                                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                    Price
                                                </th>
                                                <th scope="col"
                                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                    Quantity
                                                </th>
                                                <th scope="col"
                                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                    Total
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">lenovo
                                                    Thinkpad T480s
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    $620.00
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    1
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    $620.00
                                                </td>
                                            </tr>
                                            <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">

                                                <td colSpan="5" className="text-sm  text-gray-900 w-full font-light px-6 py-4 whitespace-nowrap">
                                                    <div className="grid grid-cols-[20%_68%_10%] md:grid-cols-[20%_65%_10%] lg:grid-cols-[20%_66%_10%]">
                                                        <div>
                                                            <p className={"mb-2"}> SubTotal</p>
                                                            <p> Shipping</p>
                                                            <p className="my-4 font-semibold">Total</p>
                                                        </div>
                                                        <div></div>
                                                        <div className="table-active text-sm text-gray-900 font-light whitespace-nowrap">
                                                            <p className="text-sm font-light mb-2">
                                                                $620.00
                                                            </p>
                                                            <p className="text-sm font-light">
                                                                free
                                                            </p>
                                                            <p className="font-semibold my-4">
                                                                $620.00
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"w-full lg:w-[30%] @w-1/2 text-white pt-6 @px-0 @md:px-16 @my-24"}>
                        <div>
                            <h1 className={"font-medium text-2xl  tracking-wide"}>Billing Address</h1>
                        </div>
                        <div className={"flex flex-col gap-3"}>
                            <div className={"inline-flex space-x-2 text-sm mt-10"}>
                                <span className={"font-extralight"}>Payment status:</span>
                                <span>Paid</span>
                            </div>
                            <div className={"inline-flex space-x-2 text-sm"}>
                                <span>Louis John</span>
                            </div>
                            <div className={"inline-flex space-x-2 text-sm"}>
                                <span>151 O'Connor Street</span>
                            </div>
                            <div className={"inline-flex space-x-2 text-sm"}>
                                <span>Ottawa ON K2P 2L8</span>
                            </div>
                            <div className={"inline-flex space-x-2 text-sm"}>
                                <span>Canada</span>
                            </div>
                        </div>
                        <div>
                            <h1 className={"font-medium text-2xl pt-8 tracking-wide"}>Shipping Address</h1>
                        </div>
                        <div className={"flex flex-col gap-3"}>
                            <div className={"inline-flex space-x-2 text-sm mt-10"}>
                                <span className={"font-extralight"}>Fulfillment status:</span>
                                <span>Unfulfilled</span>
                            </div>
                            <div className={"inline-flex space-x-2 text-sm"}>
                                <span>Louis John</span>
                            </div>
                            <div className={"inline-flex space-x-2 text-sm"}>
                                <span>151 O'Connor Street</span>
                            </div>
                            <div className={"inline-flex space-x-2 text-sm"}>
                                <span>Ottawa ON K2P 2L8</span>
                            </div>
                            <div className={"inline-flex space-x-2 text-sm"}>
                                <span>Canada</span>
                            </div>
                        </div>
                    </div>
                </div>
            </AccountLayout>
        </HomeLayout>
    );
}

export default OrderPage;


