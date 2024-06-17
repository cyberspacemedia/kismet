import React from "react";
import { Grid, Paper, Typography, TextField } from "@mui/material";

function Crossinggame() {
    return (
        <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12} md={8}>
                <Paper sx={{ backgroundColor: "transparent", padding: 2 }}>
                    <TextField
                        id="crossingnumbers"
                        label="Crossing Numbers"
                        variant="standard"
                        fullWidth
                    />
                </Paper>
            </Grid>
            <Grid item xs={12} md={8}>
                <Paper sx={{ backgroundColor: "transparent", padding: 2 }}>
                    <TextField
                        id="crossingamount"
                        label="Crossing into Amount"
                        variant="standard"
                        fullWidth
                    />
                    <Typography variant="caption">
                        * Amount should be below 5000
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default Crossinggame;
