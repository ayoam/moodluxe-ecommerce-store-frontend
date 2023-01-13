import React, {useState} from 'react';
import AdminLayout from "../../layouts/adminLayout/AdminLayout";
import MessageInboxManagement from "../../components/messageInboxManagement/MessageInboxManagement";
function MessagesPage() {
    return (
        <AdminLayout>
            <section className={"bg-secondaryBgColor min-h-[85vh]"}>
                <div className={"p-3 py-8 sm:p-8 md:p-14 max-w-7xl mx-auto"}>
                    <MessageInboxManagement/>
                </div>
            </section>
        </AdminLayout>
    );
}

export default MessagesPage;