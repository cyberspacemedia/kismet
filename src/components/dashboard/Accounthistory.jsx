import React from "react";
import Layout from "./Layout";
import { Box, Typography, Grid, Chip, Paper } from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
function Accounthistory() {
    return (
        <Layout>
            <Box sx={{ m: 2, textAlign: "center" }}>
                <Typography variant="h6" color={"#ffffff"}>
                    Transaction History
                </Typography>
            </Box>
            <Box
                mt={1}
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Paper
                    square
                    sx={{
                        backgroundColor: "#3D3D3D",
                        width: "90%",
                        padding: "10px",
                    }}
                >
                    <Grid container>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={2} textAlign={"center"}>
                                    <AccountBalanceWalletIcon />
                                </Grid>
                                <Grid item xs={5}>
                                    <Typography variant="caption">
                                        Status:{" "}
                                    </Typography>
                                    <span
                                        style={{
                                            fontSize: "16px",
                                            color: "green",
                                        }}
                                    >
                                        Success
                                    </span>
                                </Grid>
                                <Grid item xs={5} textAlign={"end"}>
                                    <Chip
                                        label="Deposit"
                                        color="success"
                                        size="small"
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sx={{ textAlign: "center" }}>
                            <Grid
                                container
                                direction="column"
                                alignItems="flex-end"
                            >
                                <Grid item>
                                    <Typography variant="h6" color={"wheat"}>
                                        ₹ 300
                                    </Typography>
                                </Grid>
                                <Typography variant="caption">
                                    07-Apr-24 10:46 AM Tue
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            mt={2}
                            sx={{ textAlign: "center", alignItems: "center" }}
                        >
                            <Chip
                                label="Transaction ID : 3976XFFF378C"
                                variant="outlined"
                                size="small"
                            />
                        </Grid>
                    </Grid>
                </Paper>
            </Box>

            <Box
                mt={1}
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Paper
                    square
                    sx={{
                        backgroundColor: "#3D3D3D",
                        width: "90%",
                        padding: "10px",
                    }}
                >
                    <Grid container>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={2} textAlign={"center"}>
                                    <AccountBalanceWalletIcon />
                                </Grid>
                                <Grid item xs={5}>
                                    <Typography variant="caption">
                                        Status:{" "}
                                    </Typography>
                                    <span
                                        style={{
                                            fontSize: "16px",
                                            color: "green",
                                        }}
                                    >
                                        Success
                                    </span>
                                </Grid>
                                <Grid item xs={5} textAlign={"end"}>
                                    <Chip
                                        label="Deposit"
                                        color="success"
                                        size="small"
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sx={{ textAlign: "center" }}>
                            <Grid
                                container
                                direction="column"
                                alignItems="flex-end"
                            >
                                <Grid item>
                                    <Typography variant="h6" color={"wheat"}>
                                        ₹ 300
                                    </Typography>
                                </Grid>
                                <Typography variant="caption">
                                    07-Apr-24 10:46 AM Tue
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            mt={2}
                            sx={{ textAlign: "center", alignItems: "center" }}
                        >
                            <Chip
                                label="Transaction ID : 3976XFFF378C"
                                variant="outlined"
                                size="small"
                            />
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
            <Box
                mt={1}
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Paper
                    square
                    sx={{
                        backgroundColor: "#3D3D3D",
                        width: "90%",
                        padding: "10px",
                    }}
                >
                    <Grid container>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={2} textAlign={"center"}>
                                    <AccountBalanceWalletIcon />
                                </Grid>
                                <Grid item xs={5}>
                                    <Typography variant="caption">
                                        Status:{" "}
                                    </Typography>
                                    <span
                                        style={{
                                            fontSize: "16px",
                                            color: "green",
                                        }}
                                    >
                                        Success
                                    </span>
                                </Grid>
                                <Grid item xs={5} textAlign={"end"}>
                                    <Chip
                                        label="Withdraw"
                                        color="warning"
                                        size="small"
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sx={{ textAlign: "center" }}>
                            <Grid
                                container
                                direction="column"
                                alignItems="flex-end"
                            >
                                <Grid item>
                                    <Typography variant="h6" color={"wheat"}>
                                        ₹ 1300
                                    </Typography>
                                </Grid>
                                <Typography variant="caption">
                                    07-Apr-24 10:46 AM Tue
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            mt={2}
                            sx={{ textAlign: "center", alignItems: "center" }}
                        >
                            <Chip
                                label="Transaction ID : 3976XFFF378C"
                                variant="outlined"
                                size="small"
                            />
                        </Grid>
                    </Grid>
                </Paper>
            </Box>

            <Box
            mt={1}
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    
                }}
            >
                <Paper
                    square
                    sx={{
                        backgroundColor: "#3D3D3D",
                        width: "90%",
                        padding: "10px",
                    }}
                >
                    <Grid container>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={2} textAlign={"center"}>
                                    <AccountBalanceWalletIcon />
                                </Grid>
                                <Grid item xs={5}>
                                    <Typography variant="caption">
                                        Status:{" "}
                                    </Typography>
                                    <span
                                        style={{
                                            fontSize: "16px",
                                            color: "green",
                                        }}
                                    >
                                        Success
                                    </span>
                                </Grid>
                                <Grid item xs={5} textAlign={"end"}>
                                    <Chip
                                        label="Deposit"
                                        color="success"
                                        size="small"
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sx={{ textAlign: "center" }}>
                            <Grid
                                container
                                direction="column"
                                alignItems="flex-end"
                            >
                                <Grid item>
                                    <Typography variant="h6" color={"wheat"}>
                                        ₹ 300
                                    </Typography>
                                </Grid>
                                <Typography variant="caption">
                                    07-Apr-24 10:46 AM Tue
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            mt={2}
                            sx={{ textAlign: "center", alignItems: "center" }}
                        >
                            <Chip
                                label="Transaction ID : 3976XFFF378C"
                                variant="outlined"
                                size="small"
                            />
                        </Grid>
                    </Grid>
                </Paper>
            </Box>


            
        </Layout>
    );
}

export default Accounthistory;
