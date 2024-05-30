import React from "react";
import Layout from "../dashboard/Layout";
import { Grid } from "@mui/material";
import Test from "../Test";
function Gurugramgame() {
    return (
        <Layout>
            <Grid container>
                <Grid item xs={12} md={12}>
                    <Test />
                </Grid>
            </Grid>
        </Layout>
    );
}

export default Gurugramgame;
