import React from 'react';
import {orderDateFormatter} from "../../utils/orderDateFormatter";

function OrderDetailsTableRow({orderLineItem}) {
    const subTotal = orderLineItem?.price * orderLineItem?.quantity;

    return (
            <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {orderLineItem?.libelle}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    ${orderLineItem?.price.toFixed(2)}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {orderLineItem?.quantity}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    ${subTotal.toFixed(2)}
                </td>
            </tr>
    );
}

export default OrderDetailsTableRow;