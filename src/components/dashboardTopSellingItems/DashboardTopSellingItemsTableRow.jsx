import React from 'react';

function DashboardTopSellingItemsTableRow({sellingItem}) {
    return (
        <tr>
        <td className={"flex gap-2 py-2 items-center"}>
            <div className={"w-10 h-10 bg-black"}>
                <img src={`data:image/${sellingItem?.photoList[0].extension};base64,${sellingItem?.photoList[0].photo}`} alt={"image"}/>
            </div>
            <div className={"space-y-1"}>
                <p>{sellingItem.libelle}</p>
                <p className={"text-xs"}>${sellingItem.price}</p>
            </div>
        </td>
    <td className={"py-2 text-center"}>{sellingItem.ordersCount}</td>
</tr>
    );
}

export default DashboardTopSellingItemsTableRow;