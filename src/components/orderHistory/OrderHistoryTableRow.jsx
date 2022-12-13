import React from 'react';
import {useNavigate} from "react-router-dom";

function OrderHistoryTableRow(props) {
    const navigate = useNavigate();
    const orderDetailsHandlerClick = () => {
        navigate("/order/1001")
    }
    return (
        <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 cursor-pointer" onClick={orderDetailsHandlerClick}>
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
    );
}

export default OrderHistoryTableRow;