import React from "react";
import { Box, CircularProgress } from "@mui/material";

function AppLoader() {
    return (
        <Box
            sx={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 9999, // Ensure it's on top of other content
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional: semi-transparent background
                width: "100vw",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <CircularProgress color="secondary" />
        </Box>
    );
}

export default AppLoader;
