import React from 'react';

function OrderDetailsTableRow(props) {
    return (

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

    );
}

export default OrderDetailsTableRow;