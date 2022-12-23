import React from 'react';
import {useNavigate} from "react-router-dom";

function OrderHistoryTableRow({order}) {
    const navigate = useNavigate();
    const orderDetailsHandlerClick = () => {
        navigate("/orders/"+order?.orderNumber)
    }

    const orderDate = (new Date(order?.orderDate)).toLocaleDateString("en-US");
    const OrderAmount = order?.orderLineItemList.map((orderLineItem)=>orderLineItem.quantity*orderLineItem.price).reduce((sum,num)=>sum+num).toFixed(2);


    if(order) return (
        <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 cursor-pointer" onClick={orderDetailsHandlerClick}>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#{order?.orderNumber}</td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {orderDate}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Paid
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {order?.status?.status}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                ${OrderAmount}
            </td>
        </tr>
    );
}

export default OrderHistoryTableRow;