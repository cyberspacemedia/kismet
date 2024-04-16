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
    InputAdornment,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import Slide from "@mui/material/Slide";

import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useNavigate } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function Wallet() {
    const [openModal, setOpenModal] = useState(false);
    const [amount, setAmount] = useState("0");
    const navigate = useNavigate();

    const handletransactions = () => {
        navigate("/history");
    };

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
                        onClick={handletransactions}
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
                        backgroundColor: (theme) =>
                            alpha(theme.palette.grey[800], 0.8),
                    },
                }}
            >
                <DialogTitle
                    sx={{
                        backgroundColor: "red",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <CurrencyRupeeIcon sx={{ marginRight: "5px" }} />
                    Add Money
                </DialogTitle>

                <DialogContent sx={{ mt: 5, textAlign: "center" }}>
                    <TextField
                        id="amount"
                        label="Enter Amount between 100 - 5000"
                        variant="standard"
                        type="number"
                        color="secondary"
                        value={amount}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <CurrencyRupeeIcon
                                        sx={{ color: "#ffff" }}
                                    />
                                </InputAdornment>
                            ),
                        }}
                        onChange={(e) => {
                            setAmount(e.target.value);
                        }}
                        fullWidth
                    />

                    <Chip
                        label="100% Safe and Secure"
                        color="success"
                        sx={{ mt: 5, width: "80%" }}
                        size="medium"
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleCloseModal}
                        variant="outlined"
                        color="inherit"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleCloseModal}
                        variant="contained"
                        color="secondary"
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
