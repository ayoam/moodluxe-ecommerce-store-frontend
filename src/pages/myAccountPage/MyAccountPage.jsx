import React, {useState} from 'react';
import HomeLayout from "../../layouts/homeLayout/HomeLayout";


function MyAccountPage() {
    const [orderHistory, setOrderHistory] = useState(null);
    return (
        <HomeLayout>
        <div className={"bg-secondaryBgColor px-8"}>
            <div className={"container mx-auto max-w-screen-lg text-white"}>
            <h1 className={"text-3xl font-semibold " +
                "py-12"}>MY ACCOUNT</h1>
                <p className={"text-xl font-light mx-3 leading-6"}>From your account you can view your recent orders, manage
                    your shipping and billing addresses.</p>
                <div className={"card border-white bg-black text-white mt-12 py-3 pl-4 shadow-lg"}>
                    <h3 className={"font-medium"}> ORDER HISTORY</h3>

                </div>
                {orderHistory ?
                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full">
                                    <thead className="bg-white border-b">
                                    <tr>
                                        <th scope="col"
                                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Order
                                        </th>
                                        <th scope="col"
                                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Date
                                        </th>
                                        <th scope="col"
                                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Payment Status
                                        </th>
                                        <th scope="col"
                                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Fulfillment Status
                                        </th>
                                        <th scope="col"
                                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Total
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#1001</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            27-11-2022
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            Paid
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            Unfulfilled
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            620$
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                    : <p className={"text-sm mt-5"}>you haven't placed any orders yet.</p>
                }
                <div className={"card border-white bg-black text-white my-8 py-3 pl-4  shadow-lg"}>
                    <h3 className={"font-medium"}>  ACCOUNT DETAILS</h3>
                </div>
                <div>
                    <h1 className={"font-medium text-2xl tracking-wide"}>Account Details</h1>
                </div>
                <div className={"flex flex-col gap-3"}>
                    <div className={"inline-flex space-x-2 text-sm mt-10"}>
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
                    <button className={"bg-white text-black p-2 my-24 hover:bg-black hover:text-white cursor-pointer border-[1px] border-transparent hover:border-gray-200 transition-all mt-6 w-1/4"} >EDIT ADDRESS</button>
                </div>
            </div>
        </div>
    </HomeLayout>
    );
}

export default MyAccountPage;