import React, {useEffect, useState} from 'react';
import HomeLayout from "../../layouts/homeLayout/HomeLayout";
import AccountLayout from "../../layouts/accountLayout/AccountLayout";
import OrderDetails from "../../components/orderDetails/OrderDetails";
import OrderAddressDetails from "../../components/orderAddressDetails/OrderAddressDetails";
import {useNavigate, useParams} from "react-router-dom";
import getOrderById from "../../service/orderRequests/getOrderById";
import NotFoundPage from "../404Page/NotFoundPage";
import GenerateInvoice from "../../service/orderRequests/generateInvoice";

function OrderPage(props) {
    const {orderId} = useParams();
    const [order, setOrder] = useState(null);
    const [status, setStatus] = useState(null);
    const [pageLoading, setPageLoading] = useState(true);
    const [invoiceLoading, setInvoiceLoading] = useState(false);

    useEffect(() => {
        getOrderById(orderId)
            .then(response => {
                console.log(response?.data);
                setOrder(response?.data);
                setStatus(response?.status);
            }).catch(error => {
            setStatus(error?.response?.status);
        })
            .finally(() => {
                setPageLoading(false);
            });

    }, [])

    const handleViewInvoiceClick = () => {
        const invoiceId = order?.invoice?.invoiceId;

        setInvoiceLoading(true)
        GenerateInvoice(invoiceId)
            .then(response => {
                const filename = response.headers["content-disposition"].split('filename=')[1].split(';')[0].replaceAll('"', '');
                const downloadUrl = window.URL.createObjectURL(new Blob([response?.data]));
                const link = document.createElement('a');
                link.href = downloadUrl;
                link.setAttribute('download', filename);
                document.body.appendChild(link);
                link.click();
                link.remove();
            }).finally(() => setInvoiceLoading(false));

    }

    if (pageLoading) return <HomeLayout><p
        className={"h-screen bg-secondaryBgColor text-white pt-28 text-center text-lg"}>loading ...</p></HomeLayout>

    if (status === 200) return (
        <HomeLayout>
            <AccountLayout>
                <div className={"flex flex-col lg:flex-row gap-6 lg:gap-10 pb-16"}>
                    <div className={"text-white w-full"}>
                        <a href={"/myAccount"} className={"text-sm mt-5 py-12 underline"}>return to account details</a>
                        <OrderDetails order={order}/>
                    </div>
                    <div className={"w-full lg:w-[30%] text-white "}>
                        <button
                            className={"bg-green-500 hover:bg-green-600 transition-colors py-3 px-14 rounded mb-10 lg:w-full relative"}
                            onClick={handleViewInvoiceClick}>
                            View Invoice
                            {invoiceLoading && <div className={"absolute top-0 translate-y-1/2 right-1"}>
                                <svg aria-hidden="true" className="mr-2 w-6 h-6 text-gray-400 animate-spin fill-white"
                                     viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="currentColor"/>
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentFill"/>
                                </svg>
                            </div>}
                        </button>
                        <OrderAddressDetails orderStatus={order?.status?.status} customerInfo={order?.orderAdresse}/>
                    </div>
                </div>
            </AccountLayout>
        </HomeLayout>
    );

    if ([400, 404, 500, 503].includes(status)) {
        return <NotFoundPage/>
    }
}

export default OrderPage;


