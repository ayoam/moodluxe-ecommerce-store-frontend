import React from 'react'

const orderStatusTag = {
    "In progress": {
        className:"bg-orange-400/40 text-orange-700",
        text:"In progress"
    },
    "Shipped": {
        className:"bg-blue-500/40 text-blue-800",
        text:"Shipped"
    },
    "Delivered": {
            className:"bg-green-400/40 text-green-800",
            text:"Delivered"
    }
}

const DashboardOrdersTableRow = ({order})=>{
    const orderDate = new Date(order?.orderDate);
    const formattedDate = (('0' + orderDate.getDate()).slice(-2) + '/'
        + ('0' + (orderDate.getMonth()+1)).slice(-2) + '/'
        + orderDate.getFullYear()).replaceAll("/",".");

    return(
        <tr className={"border-b-[1px] text-sm text-black/70 transition duration-300 ease-in-out hover:bg-gray-100 hover:cursor-pointer"}>
            <td className={"p-3 text-black/60 font-semibold"}>#{order?.orderNumber}</td>
            <td className={"font-semibold p-3 text-black/100"}>{order?.orderAdresse?.fullName}</td>
            <td className={"p-3"}>{order?.orderAdresse?.country}</td>
            <td className={"p-3"}>${order?.orderTotal?.toFixed(2)}</td>
            <td className={"p-3 w-32"}>
                <p className={`rounded-2xl p-1 text-center ${orderStatusTag[order?.status?.status]?.className}`}>{orderStatusTag[order?.status?.status]?.text}</p>
            </td>
            <td className={"p-3 text-center"}>{formattedDate}</td>
        </tr>
    )
}

export default DashboardOrdersTableRow
