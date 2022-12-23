import React from 'react';
import OrderHistoryTableRow from "./OrderHistoryTableRow";

function OrderHistory({ordersList}) {

    return (
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
                                {ordersList?.map((item,index)=>{
                                    return <OrderHistoryTableRow key={index} order={item}/>;
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderHistory;