import React from "react";
import theme from "../../../theme/Theme";
import { Grid, Button, Box, Modal, Typography, TextField } from "@mui/material";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    background:
        "linear-gradient(90deg, rgba(85,85,85,1) 0%, rgba(40,40,40,1) 100%)",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
};

function Jodigame() {
    const gameNumbers = Array.from({ length: 100 }, (_, i) => i);

    const [open, setOpen] = React.useState(false);
    const [selectedNumber, setSelectedNumber] = React.useState(null);
    const [amounts, setAmounts] = React.useState(Array(100).fill(null)); // Array to store amounts for each number
    const [amount, setAmount] = React.useState("");

    const handleOpen = (number) => {
        setSelectedNumber(number);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedNumber(null);
        setAmount("");
    };

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handleSave = () => {
        const newAmounts = [...amounts]; // Create a copy of the amounts array
        newAmounts[selectedNumber] = amount; // Set the amount for the selected number
        setAmounts(newAmounts); // Update the amounts array
        handleClose();
    };

    return (
        <Box
            sx={{
                height: "75vh",
                overflowY: "auto",
            }}
        >
            <Grid container spacing={2} justifyContent="center">
                {gameNumbers.map((number) => (
                    <Grid item key={number}>
                        <Button
                            variant="contained"
                            sx={{ ...theme.buttons.squarenumberbutton }}
                            onClick={() => handleOpen(number)}
                        >
                            {number}{" "}
                            <Typography variant="caption" color={'yellow'}>
                                {amounts[number] !== null &&
                                    `${amounts[number]}`}
                            </Typography>
                        </Button>
                    </Grid>
                ))}
            </Grid>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h2"
                        sx={{
                            color: "white",
                            backgroundColor: "black",
                            borderRadius: "10px",
                            padding: "10px",
                            textAlign: "center",
                            fontSize: "2rem",
                        }}
                    >
                        {selectedNumber}
                    </Typography>
                    <Typography
                        variant="caption"
                        id="modal-modal-description"
                        sx={{ mt: 2, color: "white", textAlign: "center" }}
                    >
                        Place amount on selected number
                    </Typography>
                    <TextField
                        id="amount"
                        variant="standard"
                        size="small"
                        type="number"
                        inputProps={{ style: { textAlign: "center" } }}
                        value={amount}
                        onChange={handleAmountChange}
                    />

                    <Typography
                        variant="caption"
                        id="modal-modal-description"
                        sx={{ mt: 2, color: "white", textAlign: "center" }}
                    >
                        * Amount below 5000
                    </Typography>

                    <Button
                        variant="contained"
                        sx={{ mt: 2, ...theme.buttons.gradient }}
                        size="small"
                        onClick={handleSave}
                    >
                        SAVE
                    </Button>
                </Box>
            </Modal>
        </Box>
    );
}

export default Jodigame;
