import React from "react";
import theme from "../../../theme/Theme";
import { Grid, Button, Box, Modal, Typography } from "@mui/material";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

function Jodigame() {
    const gameNumbers = Array.from({ length: 100 }, (_, i) => i);

    const [open, setOpen] = React.useState(false);
    const [selectedNumber, setSelectedNumber] = React.useState(null);

    const handleOpen = (number) => {
        setSelectedNumber(number);
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        setSelectedNumber(null);
    };

    return (
        <Box
            sx={{
                height: "75vh", // 75% of the viewport height
                overflowY: "auto", // Enable vertical scrolling
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
                            {number}
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
                        variant="h6"
                        sx={{ color: "black" }}
                    >
                        Number Selected: {selectedNumber}
                    </Typography>
                    <Typography
                        id="modal-modal-description"
                        sx={{ mt: 2, color: "black" }}
                    >
                        Coming Soon
                    </Typography>
                </Box>
            </Modal>
        </Box>
    );
}

export default Jodigame;
