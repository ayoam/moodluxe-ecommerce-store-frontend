import React from 'react';
import SideBarList from "../../components/sideBarList/SideBarList";
import HomeLayout from "../homeLayout/HomeLayout";

function CustomerSettingsLayout({children}) {
    return (
        <HomeLayout>
            <div className={"bg-secondaryBgColor px-4 sm:px-8"}>
                <section className={"container mx-auto max-w-screen-lg text-white"}>
                    <h1 className={"py-10 flex justify-between text-3xl font-semibold text-white"}>SETTINGS</h1>
                    <main className={"min-h-[70vh] flex flex-col md:flex-row gap-6"}>
                        <SideBarList/>
                        {children}
                    </main>
                </section>
            </div>
        </HomeLayout>
    );
}

export default CustomerSettingsLayout;