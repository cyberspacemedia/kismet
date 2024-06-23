import React from "react";
import Layout from "../Layout";
import { Grid, Typography } from "@mui/material";

function Appnotification() {
    const notification = false;
    return (
        <Layout>
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                sx={{ height: "100vh" }}
            >
                <Grid item xs={12} md={10} textAlign="center">
                    {notification ? (
                        <Typography variant="h1">Notification</Typography>
                    ) : (
                        <Typography variant="h1">No Notification</Typography>
                    )}
                </Grid>
            </Grid>
        </Layout>
    );
}

export default Appnotification;
