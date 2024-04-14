import React from "react";
import Layout from "./Layout";
import { Paper, Grid, Box, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";

function Wallet() {
    return (
        <Layout>
            <Box sx={{ m: 2, textAlign: "center" }}>
                <Typography variant="h6">Wallet</Typography>
            </Box>
            <Paper
                variant="outlined"
                sx={{
                    padding: 2,
                    borderRadius: 5,
                    backgroundColor: (theme) =>
                        alpha(theme.palette.grey[500], 0.5),
                    width: "95%", // Adjust width to 95%
                    textAlign: "center", // Align center horizontally
                    margin: "auto", // Center horizontally
                }}
            >
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    style={{ height: "100%" }}
                >
                    <Grid item>
                        <Grid container direction="column" spacing={1}>
                            <Grid item>
                                <Typography variant="h4">
                                    <span>Balance</span>
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h1" color="initial">
                                    0
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Layout>
    );
}

export default Wallet;
