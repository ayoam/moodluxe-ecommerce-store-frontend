import React from 'react';
import HomeLayout from "../../layouts/homeLayout/HomeLayout";
import SettingsLayout from "../../layouts/settingsLayout/SettingsLayout";

function SettingsPage(props) {
    return (
        <HomeLayout>
            <SettingsLayout></SettingsLayout>
        </HomeLayout>
    );
}

export default SettingsPage;