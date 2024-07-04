import React from "react";
import AppNavigation from "./Appnavigation";

import { Grid, Box } from "@mui/material";

import BottomMenu from "./Appcomp/Bottommenu";

function Layout({ children }) {
    return (
        <Grid
            container
            direction="column"
            sx={{
                minHeight: "100vh",
                backgroundColor: "black",
                backgroundImage: `url('./StaticAssets/Images/Background_bg.jpg')`,
                backgroundPosition: "center",
            }}
        >
            <Box sx={{ flexGrow: 1 }}>
                <AppNavigation />

                <Box textAlign="center" sx={{ height: "80vh" }}>
                    {children}
                </Box>
            </Box>
            <BottomMenu />
        </Grid>
    );
}

export default Layout;
