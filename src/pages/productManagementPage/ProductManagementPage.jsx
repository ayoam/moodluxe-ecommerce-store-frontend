import React from 'react'
import AdminLayout from "../../layouts/adminLayout/AdminLayout";
import OrderManagementTable from "../../components/orderManagementTable/OrderManagementTable";
import ProductManagementTable from "../../components/productManagementTable/ProductManagementTable";

const ProductManagementPage = ()=>{
    return(
        <AdminLayout>
            <section className={"bg-secondaryBgColor min-h-[85vh]"}>
                <div className={"p-3 py-8 sm:p-8 md:p-10 max-w-7xl mx-auto"}>
                    <ProductManagementTable/>
                </div>
            </section>
        </AdminLayout>
    )
}

export default ProductManagementPage
