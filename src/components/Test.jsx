import * as React from "react";

import Box from "@mui/material/Box";

import CircularProgress from "@mui/material/CircularProgress";

function GradientCircularProgress() {
    return (
        <React.Fragment>
            <svg width={0} height={0}>
                <defs>
                    <linearGradient
                        id="my_gradient"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                    >
                        <stop offset="0%" stopColor="#e01cd5" />
                        <stop offset="100%" stopColor="#1CB5E0" />
                    </linearGradient>
                </defs>
            </svg>
            <CircularProgress
                sx={{ "svg circle": { stroke: "url(#my_gradient)" } }}
            />
        </React.Fragment>
    );
}

export default function AppLoader() {
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
            <GradientCircularProgress />
        </Box>
    );
}
