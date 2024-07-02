import React from "react";

import { Grid, Typography } from "@mui/material";
import Domesticliveresult from "./Domesticliveresult";

function LiveGame() {
    return (
        <Grid container spacing={1}>
            <Grid item xs={12} textAlign={"left"} sx={{ ml: "0.5em" }}>
                <Typography variant="h5">Live Results</Typography>
            </Grid>
            <Grid item xs={12} md={10}>
                <Domesticliveresult />
            </Grid>
            <Grid item xs={12} md={10}></Grid>
        </Grid>
    );
}

export default LiveGame;
