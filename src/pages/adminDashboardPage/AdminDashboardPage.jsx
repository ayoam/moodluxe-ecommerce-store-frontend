import React, {useEffect, useState} from 'react'
import AdminLayout from "../../layouts/adminLayout/AdminLayout";
import StatsCountCard from "../../components/statsCountCard/StatsCountCard";
import {BiDollar} from "react-icons/bi";
import {ImCart} from "react-icons/im";
import {FiPackage} from "react-icons/fi";
import {TbUsers} from "react-icons/tb";
import DashboardOrdersTable from "../../components/dashboardOrdersTable/DashboardOrdersTable";
import DashboardSalesStatistics from "../../components/dashboardSalesStatistics/DashboardSalesStatistics";
import DashboardTopSellingItemsTable from "../../components/dashboardTopSellingItems/DashboardTopSellingItemsTable";
import getLatestOrders from "../../service/adminRequests/getLatestOrders";
import HomeLayout from "../../layouts/homeLayout/HomeLayout";
import {useRecoilValue} from "recoil";
import {appUserState} from "../../recoil/atoms/AuthenticationAtom";
import getSalesStatistics from "../../service/adminRequests/getSalesStatistics";
import getTotalOrdersAndSales from "../../service/adminRequests/getTotalOrdersAndSales";
import getTotalProducts from "../../service/adminRequests/getTotalProducts";
import getTotalCustomers from "../../service/adminRequests/getTotalCustomers";
import getTopSellingItems from "../../service/adminRequests/getTopSellingItems";

const AdminDashboardPage = ()=>{
    const [latestOrders,setLatestOrders] = useState(null);
    const [salesStats,setSalesStats] = useState(null);
    const [pageIsLoading,setPageIsLoading] = useState(true);
    const [totalSales,setTotalSales] = useState(null);
    const [totalOrders,setTotalOrders] = useState(null);
    const [totalProducts,setTotalProducts] = useState(null);
    const [totalCustomers,setTotalCustomers] = useState(null);
    const [topSellingItems,setTopSellingItems] = useState(null);
    const user = useRecoilValue(appUserState);

    useEffect(()=>{
        const allRequests = async()=> {
            return await Promise.all([
                getLatestOrders()
                    .then(response => {
                        setLatestOrders(response?.data?.orderList);
                        // console.log(response?.data?.orderList);
                    }),
                getSalesStatistics()
                    .then(response => {
                        setSalesStats(response?.data?.salesPerMonth?.map(item=>item.total));
                        // console.log(response?.data?.salesPerMonth);
                    }),
                getTotalOrdersAndSales()
                    .then(response => {
                        setTotalOrders(response?.data?.totalOrders);
                        setTotalSales((new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD',})).format(response?.data?.totalSales));

                }),
                getTotalProducts()
                    .then(response => {
                        setTotalProducts(response?.data);
                    }),
                getTotalCustomers()
                    .then(response => {
                        setTotalCustomers(response?.data);
                    }),
                getTopSellingItems()
                    .then(response => {
                        console.log("====",response.data)
                        setTopSellingItems(response?.data);
                    })
            ]);
        }

        if(user){
            allRequests().finally(()=>setPageIsLoading(false));
        }


    },[user])

    if(pageIsLoading) {return <AdminLayout><p className={"h-screen bg-secondaryBgColor text-white pt-28 text-center text-lg"}>loading ...</p></AdminLayout>}

    return(
        <AdminLayout>
            <section className={"bg-secondaryBgColor min-h-[85vh]"}>
                <div className={"p-4 py-8 sm:p-8 md:p-16 max-w-7xl mx-auto"}>
                    <div className={"grid grid-cols-2 xl:grid-cols-4 gap-4"}>
                        <StatsCountCard icon={<BiDollar/>} title={"Total Sales"} value={totalSales} color={"yellow"}/>
                        <StatsCountCard icon={<ImCart />} title={"Total Orders"} value={totalOrders} color={"green"}/>
                        <StatsCountCard icon={<FiPackage />} title={"Total Products"} value={totalProducts} color={"blue"}/>
                        <StatsCountCard icon={<TbUsers />} title={"Total Customers"} value={totalCustomers} color={"red"}/>
                    </div>
                    <div className={"grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4 mt-8"}>
                        <DashboardSalesStatistics statsData={salesStats}/>
                        <DashboardTopSellingItemsTable topSellingItems={topSellingItems}/>
                    </div>
                    <DashboardOrdersTable latestOrders={latestOrders}/>
                </div>
            </section>
        </AdminLayout>
    )
}

export default AdminDashboardPage
