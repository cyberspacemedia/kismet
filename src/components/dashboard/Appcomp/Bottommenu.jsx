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
                background:
                    "linear-gradient(180deg, rgba(71,43,171,1) 0%, rgba(17,11,25,1) 85%)",
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
                                        ? "#ff00bb"
                                        : "white",
                            }}
                            onClick={() => navigate("/dashboard")}
                        >
                            <HomeIcon />
                        </IconButton>
                        <Typography
                            variant="caption"
                            sx={{
                                color:
                                    currentPath === "/dashboard"
                                        ? "#ff00bb"
                                        : "white",
                            }}
                        >
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
                                        ? "#ff00bb"
                                        : "white",
                            }}
                            onClick={() => navigate("/charts")}
                        >
                            <BarChartIcon />
                        </IconButton>
                        <Typography
                            variant="caption"
                            sx={{
                                color:
                                    currentPath === "/charts"
                                        ? "#ff00bb"
                                        : "white",
                            }}
                        >
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
                                    currentPath === "/mygame" ||
                                    currentPath === "/gamedetails"
                                        ? "#ff00bb"
                                        : "white",
                            }}
                            onClick={() => navigate("/mygame")}
                        >
                            <EmojiEventsIcon />
                        </IconButton>
                        <Typography
                            variant="caption"
                            sx={{
                                color:
                                    currentPath === "/mygame" ||
                                    currentPath === "/gamedetails"
                                        ? "#ff00bb"
                                        : "white",
                            }}
                        >
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
                                        ? "#ff00bb"
                                        : "white",
                            }}
                            onClick={() => navigate("/shareapp")}
                        >
                            <ShareIcon />
                        </IconButton>
                        <Typography
                            variant="caption"
                            sx={{
                                color:
                                    currentPath === "/shareapp"
                                        ? "#ff00bb"
                                        : "white",
                            }}
                        >
                            Share
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default BottomMenu;
