import React from "react";
import AppNavigation from "./Appnavigation";
import { Grid, Box } from "@mui/material";

function Layout({ children }) {
    return (
        <>
            <Grid
                container
                direction={"column"}
                display="flex"
                sx={{
                    backgroundColor: "black",
                    height: "100vh",
                    backgroundImage: `url('./StaticAssets/Images/Background_bg.jpg')`,
                    backgroundPosition: "center",
                }}
            >
                <Box xs={12} sm={4} md={4} lg={4}>
                    <Grid item>
                        <AppNavigation />
                        {children}
                    </Grid>
                </Box>
            </Grid>
        </>
    );
}

export default Layout;
