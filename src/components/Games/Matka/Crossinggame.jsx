import { Grid, Paper, Typography, TextField } from "@mui/material";
import React from "react";

function Crossinggame() {
    return (
        <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
            direction="column" // Change to column for better vertical alignment on mobile
        >
            <Grid item xs={12}>
                <Paper
                    sx={{
                        backgroundColor: "transparent",
                        padding: 2,
                        width: "100%", // Ensure Paper takes full width on mobile
                    }}
                >
                    <TextField
                        id="crossingnumbers"
                        label="Crossing Numbers"
                        variant="standard"
                        fullWidth
                    />
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper
                    sx={{
                        backgroundColor: "transparent",
                        padding: 2,
                        width: "100%", // Ensure Paper takes full width on mobile
                    }}
                >
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
