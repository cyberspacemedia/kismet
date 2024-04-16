import React from "react";
import Layout from "./Layout";
import { Paper, Grid, Box, Typography, Chip, Button } from "@mui/material";
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
            <Grid container spacing={1} justifyContent={"center"} mt={2}>
                <Grid item xs={4}>
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
                <Grid item xs={4}>
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
                <Grid item xs={4}>
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
                <Grid item sx={{ width: "90%" }}>
                    <Grid
                        container
                        spacing={2}
                        mt={2}
                        justifyContent="center" // Align items horizontally in the center
                    >
                        <Grid item sx={{ width: "50%" }}>
                            <Button
                                variant="contained"
                                color="secondary"
                                size="large"
                                fullWidth
                                sx={{ borderRadius: "50px", padding: 2 }}
                            >
                                Add Money
                            </Button>
                        </Grid>
                        <Grid item sx={{ width: "50%" }}>
                            <Button
                                variant="contained"
                                color="secondary"
                                size="large"
                                fullWidth
                                sx={{ borderRadius: "50px", padding: 2 }}
                            >
                                Withdraw
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Layout>
    );
}

export default Wallet;
