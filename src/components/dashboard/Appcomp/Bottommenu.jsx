import React from "react";
import { Grid, IconButton, Box, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BarChartIcon from "@mui/icons-material/BarChart";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ShareIcon from "@mui/icons-material/Share";
import { useNavigate, useLocation } from "react-router-dom";

const BottomMenu = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <Box
            sx={{
                position: "fixed",
                bottom: 0,
                width: "100%",
                backgroundColor: "black",
                padding: "5px 0",
                borderTop: "1px solid gray",
            }}
        >
            <Grid container justifyContent="space-around">
                <Grid item>
                    <Box
                        textAlign="center"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                    >
                        <IconButton
                            sx={{
                                color:
                                    currentPath === "/dashboard"
                                        ? "yellow"
                                        : "white",
                            }}
                            onClick={() => navigate("/dashboard")}
                        >
                            <HomeIcon />
                        </IconButton>
                        <Typography variant="caption" sx={{ color: "white" }}>
                            Home
                        </Typography>
                    </Box>
                </Grid>
                <Grid item>
                    <Box
                        textAlign="center"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                    >
                        <IconButton
                            sx={{
                                color:
                                    currentPath === "/charts"
                                        ? "yellow"
                                        : "white",
                            }}
                            onClick={() => navigate("/charts")}
                        >
                            <BarChartIcon />
                        </IconButton>
                        <Typography variant="caption" sx={{ color: "white" }}>
                            Charts
                        </Typography>
                    </Box>
                </Grid>
                <Grid item>
                    <Box
                        textAlign="center"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                    >
                        <IconButton
                            sx={{
                                color:
                                    currentPath === "/mygame"
                                        ? "yellow"
                                        : "white",
                            }}
                            onClick={() => navigate("/mygame")}
                        >
                            <EmojiEventsIcon />
                        </IconButton>
                        <Typography variant="caption" sx={{ color: "white" }}>
                            My Game
                        </Typography>
                    </Box>
                </Grid>
                <Grid item>
                    <Box
                        textAlign="center"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                    >
                        <IconButton
                            sx={{
                                color:
                                    currentPath === "/shareapp"
                                        ? "yellow"
                                        : "white",
                            }}
                            onClick={() => navigate("/shareapp")}
                        >
                            <ShareIcon />
                        </IconButton>
                        <Typography variant="caption" sx={{ color: "white" }}>
                            Share
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default BottomMenu;
