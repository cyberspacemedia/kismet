import React from "react";

import { Grid, Typography } from "@mui/material";
import Domesticupcominggames from "./Domesticupcominggames";

function Upcominggames() {
    return (
        <Grid container spacing={1} mt={1}>
            <Grid item xs={12} textAlign={"center"} sx={{ ml: "0.5em" }}>
                <Typography variant="h5">Upcoming Games</Typography>
            </Grid>
            <Grid item xs={12} md={10}>
                <Domesticupcominggames />
            </Grid>
            <Grid item xs={12} md={10}></Grid>
        </Grid>
    );
}

export default Upcominggames;
