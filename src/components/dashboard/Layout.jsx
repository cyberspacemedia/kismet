import React from "react";
import AppNavigation from "./Appnavigation";

function Layout({ children }) {
    return (
        <>
            <AppNavigation />
            {children}
        </>
    );
}

export default Layout;
