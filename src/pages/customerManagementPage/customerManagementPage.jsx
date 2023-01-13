import React from 'react';
import AdminLayout from "../../layouts/adminLayout/AdminLayout";
import OrderManagementTable from "../../components/orderManagementTable/OrderManagementTable";
import CustomerManagementTable from "../../components/customerManagementTable/CustomerManagementTable";

const CustomerManagementPage = () => {
    return (
        <AdminLayout>
            <section className={"bg-secondaryBgColor min-h-[85vh]"}>
                <div className={"p-3 py-8 sm:p-8 md:p-10 max-w-7xl mx-auto"}>
                    <CustomerManagementTable/>
                </div>
            </section>
        </AdminLayout>
    );
}

export default CustomerManagementPage;