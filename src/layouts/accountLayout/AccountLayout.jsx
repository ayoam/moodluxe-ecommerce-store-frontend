import React from 'react';

function AccountLayout({children}) {
    return (
        <div className={"bg-secondaryBgColor px-8"}>
            <section className={"container mx-auto max-w-screen-lg text-white"}>
                <h1 className={"py-10 flex justify-between text-3xl font-semibold text-white"}>MY ACCOUNT</h1>
                <main className={"min-h-[70vh]"}>{children}</main>
            </section>
        </div>
    );
}

export default AccountLayout;