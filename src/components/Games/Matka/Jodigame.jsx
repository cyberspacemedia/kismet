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
    const gameNumber = [];
    for (let i = 0; i <= 99; i++) {
        gameNumber.push(i);
    }

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Box
            sx={{
                height: "75vh", // 80% of the viewport height
                overflowY: "auto", // Enable vertical scrolling
            }}
        >
            <Grid container justifyContent={"center"}>
                <Grid item xs={12}>
                    {gameNumber.map((number) => (
                        <Button
                            variant="contained"
                            sx={{ ...theme.buttons.squarenumberbutton }}
                            key={number}
                            onClick={handleOpen}
                        >
                            {number}
                        </Button>
                    ))}
                </Grid>
            </Grid>

            {/* Modal */}
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
                        Coming Soon 
                    </Typography>
                </Box>
            </Modal>
            {/* Modal */}
        </Box>
    );
}

export default Jodigame;
