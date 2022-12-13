import React from 'react';
import OrderDetailsTableRow from "./OrderDetailsTableRow";

function OrderDetails(props) {
    return (
        <div>

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

                                    <OrderDetailsTableRow/>

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
    );
}

export default OrderDetails;