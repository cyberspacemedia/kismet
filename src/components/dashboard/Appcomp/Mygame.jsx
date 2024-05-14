import React from "react";
import Layout from "../Layout";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

function Mygame() {
    return (
        <Layout>
            <Typography variant="caption"> My Game</Typography>
            <Grid container>
                <Grid item>Item 2</Grid>
            </Grid>
        </Layout>
    );
}

export default Mygame;
