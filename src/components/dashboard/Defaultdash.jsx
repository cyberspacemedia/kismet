import React, { useState, useEffect } from "react";
import {
    Paper,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
} from "@mui/material";
import Imageslider from "./slider/Imageslider";

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
                    <Button onClick={handleClose} variant="contained" color="secondary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
            <Paper
                sx={{
                    backgroundColor: "black",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <div style={{ width: "85%" }}>
                    <Imageslider />
                </div>
            </Paper>
        </div>
    );
}

export default Defaultdash;
