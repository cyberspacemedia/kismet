import React from "react";
import Layout from "../dashboard/Layout";
import { Chip, Grid } from "@mui/material";
function Gurugramgame() {
    return (
        <Layout>
            <Grid container>
                <Grid item xs={12} mt={20}>
                    <Chip label="Coming Soon" size="medium" color="warning" />
                </Grid>
            </Grid>
        </Layout>
    );
}

export default Gurugramgame;
