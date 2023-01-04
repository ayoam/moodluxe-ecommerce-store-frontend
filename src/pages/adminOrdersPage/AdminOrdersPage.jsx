import React from 'react'
import AdminLayout from "../../layouts/adminLayout/AdminLayout";
import OrderManagementTable from "../../components/orderManagementTable/OrderManagementTable";

const AdminOrdersPage = ()=>{
    return(
        <AdminLayout>
            <section className={"bg-secondaryBgColor min-h-[85vh]"}>
                <div className={"p-4 py-8 sm:p-8 md:p-16 max-w-7xl mx-auto"}>
                    <OrderManagementTable/>
                </div>
            </section>
        </AdminLayout>
    )
}

export default AdminOrdersPage
