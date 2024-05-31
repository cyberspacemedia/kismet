import React from "react";
import Layout from "../dashboard/Layout";
import { Grid } from "@mui/material";

import Gametab from "./Matka/Gametab";
function Gurugramgame() {
    return (
        <Layout>
            <Grid container>
                <Grid item xs={12} md={12}>
                    <Gametab />
                </Grid>
            </Grid>
        </Layout>
    );
}

export default Gurugramgame;
