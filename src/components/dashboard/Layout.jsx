import React from "react";
import AppNavigation from "./Appnavigation";

import { Grid, Box } from "@mui/material";
import Bottomnav from "./Bottomnav";

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
                <Box
                    sx={{
                        minHeight: "calc(100vh - 64px - 56px)", // Adjust for the height of AppNavigation and Bottomnav
                    }}
                >
                    <Box textAlign="center">{children}</Box>
                </Box>
                <Bottomnav />
            </Box>
        </Grid>
    );
}

export default Layout;
