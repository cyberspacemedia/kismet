import React, { useState, useEffect } from "react";
import {
    Alert,
    Box,
    Button,
    Grid,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import theme from "../../../theme/Theme";
function Crossinggame() {
    const [crossingNumbers, setCrossingNumbers] = useState("");
    const [crossingAmount, setCrossingAmount] = useState("");
    const [savedCrossingAmount, setSavedCrossingAmount] = useState("");
    const [error, setError] = useState("");
    const [pairs, setPairs] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const generatePairs = (input) => {
        const digits = input.split("");
        const newPairs = [];

        digits.forEach((d1) => {
            digits.forEach((d2) => {
                newPairs.push(`${d1}${d2}`);
            });
        });

        return newPairs;
    };

    const handleSave = () => {
        if (!crossingNumbers || !crossingAmount) {
            setError("All fields must be filled.");
            return;
        }

        const digits = crossingNumbers.split("");
        const uniqueDigits = new Set(digits);

        if (digits.length !== uniqueDigits.size) {
            setError("All digits must be unique.");
            return;
        }

        setError(""); // Clear any previous error message
        const generatedPairs = generatePairs(crossingNumbers);
        setPairs(generatedPairs);
        setSavedCrossingAmount(crossingAmount);

        const amount = parseInt(crossingAmount, 10);
        const total = generatedPairs.length * amount;
        setTotalAmount(total);
    };

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => {
                setError("");
            }, 2000);

            return () => clearTimeout(timer); // Clear timeout if the component unmounts
        }
    }, [error]);
    return (
        <Box
            sx={{
                overflowY: "auto",
            }}
        >
            {error && (
                <Alert
                    severity="error"
                    onClose={() => setError("")}
                    sx={{ zIndex: "9999" }}
                >
                    {error}
                </Alert>
            )}
            <Box
                sx={{
                    height: "30vh",
                    overflowY: "auto",
                }}
            >
                <Grid container justifyContent="center" alignItems={"center"}>
                    <Grid item>
                        <Paper
                            sx={{
                                backgroundColor: "transparent",
                                width: "80%",
                                padding: 2,
                            }}
                        >
                            <TextField
                                id="crossingnumbers"
                                label="Crossing Numbers"
                                variant="standard"
                                value={crossingNumbers}
                                onChange={(e) => {
                                    setCrossingNumbers(e.target.value);
                                }}
                                size="small"
                                fullWidth
                                margin="normal"
                            />

                            <TextField
                                id="crossingamount"
                                label="Crossing into Amount"
                                variant="standard"
                                value={crossingAmount}
                                onChange={(e) => {
                                    setCrossingAmount(e.target.value);
                                }}
                                size="small"
                                fullWidth
                                margin="normal"
                            />
                            <Typography variant="caption">
                                * Amount should be below 5000
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            fullWidth
                            onClick={handleSave}
                            variant="contained"
                            color="secondary"
                            size="small"
                            sx={{ borderRadius: "20px", mt: 2 }}
                        >
                            Save
                        </Button>
                    </Grid>
                </Grid>
            </Box>
            <Box
                sx={{
                    height: "40vh",
                    overflowY: "auto",
                }}
            >
                <Grid container justifyContent={"center"}>
                    <Grid item xs={6}>
                        <Typography variant="body1">Crossing Pairs</Typography>
                        {pairs.map((pair, index) => (
                            <Typography key={index}>{pair}</Typography>
                        ))}
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="body1">Amount</Typography>
                        {pairs.map((_, index) => (
                            <Typography key={index}>
                                {savedCrossingAmount}
                            </Typography>
                        ))}
                    </Grid>
                </Grid>
            </Box>
            <Grid
                container
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                    position: "fixed", // Position the Grid container fixed within the viewport
                    bottom: "8%", // Position 8% from the bottom of the viewport
                    left: "50%", // Center horizontally
                    transform: "translateX(-50%)", // Move back to center horizontally
                    width: "98%", // Set width to 80% of the viewport
                    zIndex: 1000, // Ensure it appears above other content
                    borderRadius: "10px",
                    border: "solid 1px #676767",
                    backgroundColor: "#494949",
                }}
            >
                <Grid item xs={6}>
                    <Typography variant="caption">Total Amount :</Typography>
                    <Typography variant="h1" sx={{ fontSize: "1.5rem" }}>
                        {totalAmount}
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        sx={{ ...theme.buttons.gradient }}
                    >
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Crossinggame;
