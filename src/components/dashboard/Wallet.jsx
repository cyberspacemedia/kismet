import React, { useState } from "react";
import Layout from "./Layout";
import {
    Paper,
    Box,
    Grid,
    Typography,
    Chip,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import Slide from "@mui/material/Slide";

import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function Wallet() {
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

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
                                onClick={handleOpenModal}
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
                <Grid item mt={5} sx={{ width: "90%" }}>
                    <Button
                        variant="contained"
                        color="success"
                        size="large"
                        sx={{ padding: 2, borderRadius: 20 }}
                        fullWidth
                    >
                        Transaction History
                    </Button>
                </Grid>
            </Grid>

            {/* Add Money Dialog */}
            <Dialog
                open={openModal}
                onClose={handleCloseModal}
                TransitionComponent={Transition}
                fullScreen
                PaperProps={{
                    sx: {
                        position: "absolute",
                        bottom: 0,
                        maxHeight: "50vh", // Set maxHeight to 50% of the viewport height
                        width: "100%",
                        borderTopLeftRadius: "20px",
                        borderTopRightRadius: "20px",
                    },
                }}
            >
                <DialogTitle
                    sx={{
                        backgroundColor: "black",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <CurrencyRupeeIcon sx={{ marginRight: "5px" }} />
                    Add Money
                </DialogTitle>

                <DialogContent sx={{ mt: 5 }}>
                    <TextField
                        id="amount"
                        label="Amount"
                        variant="standard"
                        type="number"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseModal}>Cancel</Button>
                    <Button
                        onClick={handleCloseModal}
                        variant="contained"
                        color="primary"
                    >
                        Add Money
                    </Button>
                </DialogActions>
            </Dialog>
            {/* Add Money Dialog */}
        </Layout>
    );
}

export default Wallet;
