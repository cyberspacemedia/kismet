import { Grid } from "@mui/material";
import React from "react";
import AppLoader from "./Loaders/AppLoader";

function Test() {
    return (
        <Grid container>
            <Grid item xs={12} md={10}>
                <AppLoader />
            </Grid>
        </Grid>
    );
}

export default Test;
