import React from "react";
import Layout from "../dashboard/Layout";
import { Chip, Grid } from "@mui/material";
import Test from "../Test";
function Gurugramgame() {
    return (
        <Layout>
            <Grid container spacing={1}>
                <Grid item xs={12} md={12}>
                    <Chip label="Gurugram" size="small" color="warning" />
                </Grid>
                <Grid item xs={12} md={12}>
                    <Test />
                </Grid>
            </Grid>
        </Layout>
    );
}

export default Gurugramgame;
