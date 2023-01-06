import React from 'react';
import SideBarList from "../../components/sideBarList/SideBarList";

function SettingsLayout({children}) {
    return (

        <div className={"bg-secondaryBgColor px-4 sm:px-8"}>
            <section className={"container mx-auto max-w-screen-lg text-white"}>
                <h1 className={"py-10 flex justify-between text-3xl font-semibold text-white"}>SETTINGS</h1>
                <SideBarList/>
                <main className={"min-h-[70vh]"}>{children}</main>
            </section>
        </div>
    );
}

export default SettingsLayout;