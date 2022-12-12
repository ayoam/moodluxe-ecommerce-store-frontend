import React from 'react';

function AccountLayout({children}) {
    return (
        <section className={"bg-secondaryBgColor w-full "}>
            <div className={"flex flex-col relative max-w-7xl mx-auto"}>
                <h1 className={"p-4 flex justify-between text-3xl font-semibold text-white"}>MY ACCOUNT</h1>
                <main>{children}</main>
            </div>
        </section>
    );
}

export default AccountLayout;