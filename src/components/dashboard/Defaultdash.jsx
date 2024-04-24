import React, { useState, useEffect } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Grid,
    Box,
} from "@mui/material";
import Imageslider from "./slider/Imageslider";
import Allgames from "../Games/Allgames";

function Defaultdash() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        // Check if the modal has been opened before by checking local storage
        const hasOpenedBefore = localStorage.getItem("hasOpenedBefore");
        if (!hasOpenedBefore) {
            // If the modal has not been opened before, open it and set the flag in local storage
            setOpen(true);
            localStorage.setItem("hasOpenedBefore", "true");
        }
    }, []);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Grid
                container
                spacing={1}
                direction={"column"}
                textAlign={"center"}
                justifyContent="center"
                alignItems={"center"}
            >
                <Grid item xs={12}>
                    <Allgames />
                </Grid>
                <Grid
                    item
                    xs={12}
                    container
                    justifyContent="center" // Center align horizontally
                >
                    <Box width={"90%"} textAlign="center">
                        <Imageslider />
                    </Box>
                </Grid>
            </Grid>

            {/* Opening Dialog */}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle sx={{ backgroundColor: "red", color: "white" }}>
                    Notice Board
                </DialogTitle>
                <DialogContent
                    sx={{ backgroundColor: "gray", textAlign: "center" }}
                >
                    <div>
                        Play and win tons of prizes. Every hour win upto 1 lac
                    </div>
                </DialogContent>
                <DialogActions
                    sx={{ backgroundColor: "gray", textAlign: "center" }}
                >
                    <Button
                        onClick={handleClose}
                        variant="contained"
                        color="secondary"
                    >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
            {/* Opening Dialog */}
        </div>
    );
}

export default Defaultdash;
