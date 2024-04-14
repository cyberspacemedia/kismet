import React from "react";
import Layout from "./Layout";
import { Paper, Grid, Box, Typography, Chip } from "@mui/material";
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
                    borderColor: "white",
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
                        <Grid container direction="column" spacing={0}>
                            <Grid item>
                                <Typography variant="body1" color={"white"}>
                                    Total Balance
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h2" component="span">
                                    <span
                                        style={{
                                            fontSize: "0.5em",
                                            verticalAlign: "super",
                                        }}
                                    >
                                        ₹
                                    </span>
                                    0
                                </Typography>
                            </Grid>

                            <Grid item>
                                <Chip
                                    label="100% Secure payments"
                                    color="success"
                                    size="medium"
                                    sx={{ width: "100%" }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
            <Grid container spacing={2} justifyContent={"center"} mt={2}>
                <Grid item>
                    {/* Deposit Paper */}
                    <Paper
                        sx={{
                            padding: 2,
                            borderRadius: 5,
                            borderColor: "white",
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
                                <Grid container direction="column" spacing={0}>
                                    <Grid item>
                                        <Typography
                                            variant="h4"
                                            component="span"
                                        >
                                            <span
                                                style={{
                                                    fontSize: "0.5em",
                                                    verticalAlign: "super",
                                                }}
                                            >
                                                ₹
                                            </span>
                                            0
                                        </Typography>
                                    </Grid>

                                    <Grid item>
                                        <Chip
                                            label="Deposit"
                                            color="secondary"
                                            size="small"
                                            sx={{ width: "100%" }}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                    {/* Deposit Paper */}
                </Grid>
                <Grid item>
                    {/* Earnings */}
                    <Paper
                        sx={{
                            padding: 2,
                            borderRadius: 5,
                            borderColor: "white",
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
                                <Grid container direction="column" spacing={0}>
                                    <Grid item>
                                        <Typography
                                            variant="h4"
                                            component="span"
                                        >
                                            <span
                                                style={{
                                                    fontSize: "0.5em",
                                                    verticalAlign: "super",
                                                }}
                                            >
                                                ₹
                                            </span>
                                            0
                                        </Typography>
                                    </Grid>

                                    <Grid item>
                                        <Chip
                                            label="Earnings"
                                            color="secondary"
                                            size="small"
                                            sx={{ width: "100%" }}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                    {/*  Earnings */}
                </Grid>
                <Grid item>
                    {/* Commission */}
                    <Paper
                        sx={{
                            padding: 2,
                            borderRadius: 5,
                            borderColor: "white",
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
                                <Grid container direction="column" spacing={0}>
                                    <Grid item>
                                        <Typography
                                            variant="h4"
                                            component="span"
                                        >
                                            <span
                                                style={{
                                                    fontSize: "0.5em",
                                                    verticalAlign: "super",
                                                }}
                                            >
                                                ₹
                                            </span>
                                            0
                                        </Typography>
                                    </Grid>

                                    <Grid item>
                                        <Chip
                                            label="Commission"
                                            color="secondary"
                                            size="small"
                                            sx={{ width: "100%" }}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                    {/* Commission */}
                </Grid>
            </Grid>
        </Layout>
    );
}

export default Wallet;
