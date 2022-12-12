import React from 'react';
import OrderHistoryTableRow from "./OrderHistoryTableRow";

function OrderHistory(props) {

    return (
        <div>
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
                <OrderHistoryTableRow/>
                </tbody>
            </table>
        </div>
    );
}

export default OrderHistory;