import React from 'react';
import {useNavigate} from "react-router-dom";

function OrderHistory(props) {
    const navigate = useNavigate();
    const orderDetailsHandlerClick = () => {
        navigate("/order")
    }
    return (
        <div> <table className="min-w-full" onClick={orderDetailsHandlerClick}>
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
            <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 cursor-pointer">
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
                    $620.00
                </td>
            </tr>
            </tbody>
        </table></div>
    );
}

export default OrderHistory;