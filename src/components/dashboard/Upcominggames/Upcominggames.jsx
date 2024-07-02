import React from "react";
import { Grid, Typography } from "@mui/material";
import Domesticupcominggames from "./Domesticupcominggames";
import Intupcominggames from "./Intupcominggames";

function Upcominggames() {
    return (
        <Grid container spacing={2} mt={1} justifyContent="center" alignItems="center">
            <Grid item xs={12} textAlign="center">
                <Typography variant="h5">Upcoming Games</Typography>
            </Grid>
            <Grid item xs={12} md={10} container justifyContent="center">
                <Domesticupcominggames />
            </Grid>
            <Grid item xs={12} md={10} container justifyContent="center">
                <Intupcominggames />
            </Grid>
        </Grid>
    );
}

export default Upcominggames;
