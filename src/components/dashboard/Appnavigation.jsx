import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Button,
    Box,
    Paper,
    Grid,
    LinearProgress,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import WalletIcon from "@mui/icons-material/Wallet";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const AppNavigation = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const navigate = useNavigate();
    const handlelogout = () => {
        // Delete the 'hasOpenedBefore' flag from local storage
        localStorage.removeItem("hasOpenedBefore");
        navigate("/login");
    };

    // Function to handle opening the drawer
    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    // Function to handle closing the drawer
    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    return (
        <>
            {/* AppBar */}
            <AppBar position="static" sx={{ backgroundColor: "black" }}>
                <Toolbar>
                    {/* Left side menu icon */}
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleDrawerOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                    {/* Logo in the middle */}
                    <img
                        src="./StaticAssets/Images/moblogo.png"
                        alt="Logo"
                        style={{ height: "40px", margin: "5px" }}
                    />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            fontSize: "1rem",
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        KISMET
                    </Typography>

                    {/* Right side settings menu */}

                    <IconButton
                        edge="end"
                        color="inherit"
                        aria-label="settings"
                        onClick={() => {
                            navigate("/wallet");
                        }}
                    >
                        <Paper
                            sx={{
                                backgroundColor: "#494949",
                                display: "flex",
                                alignItems: "center", // Align items vertically center
                                justifyContent: "center", // Center content horizontally
                                padding: "3px",
                                width: "3em",
                                borderRadius: "20px",
                                textAlign: "center",
                                border: "solid 1px #878787",
                            }}
                        >
                            <WalletIcon sx={{ fontSize: "20px" }} />{" "}
                            <Typography variant="body2" color="inherit">
                                ₹ <span style={{ fontSize: "16px" }}>0</span>
                            </Typography>
                        </Paper>
                    </IconButton>
                </Toolbar>
            </AppBar>
            {/* Drawer for left-side menu */}
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={handleDrawerClose}
                PaperProps={{
                    sx: {
                        backgroundColor: "#2A2A2A",
                        width: "15em",
                    },
                }}
            >
                <Grid
                    container
                    justifyContent={"center"}
                    alignItems={"center"}
                    direction={"row"}
                    mt={5}
                >
                    <Grid item>
                        <AccountBoxIcon sx={{ fontSize: "100px" }} />
                        <Typography variant="body1" textAlign="center">
                            Test
                        </Typography>
                        <Typography variant="body2" textAlign="center">
                            Test@test.com
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <span style={{ fontSize: "10px" }}>
                            Profile Completeness (60%)
                        </span>
                        <LinearProgress
                            variant="determinate"
                            value={60}
                            color="warning"
                            sx={{ height: "5px", borderRadius: "10px" }}
                        />
                    </Grid>
                </Grid>

                <hr style={{ borderColor: "red", width: "200px" }} />

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        height: "70%",
                        justifyContent: "space-between",
                    }}
                >
                    <List>
                        {/* List items for the drawer */}
                        <ListItem>
                            <ListItemText
                                primary={"How to Play"}
                                onClick={() => {
                                    navigate("/howtoplay");
                                }}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary={"Change Password"} />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary={"Leaderboard"}
                                onClick={() => {
                                    navigate("/leaderboard");
                                }}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary={"Company Profile"}
                                onClick={() => {
                                    navigate("/companyprofile");
                                }}
                            />
                        </ListItem>
                    </List>
                    <Box p={2}>
                        <Button
                            fullWidth
                            variant="contained"
                            color="secondary"
                            onClick={handlelogout}
                            size="small"
                            sx={{ borderRadius: "20px" }}
                        >
                            Logout
                        </Button>
                    </Box>
                </Box>
            </Drawer>
        </>
    );
};

export default AppNavigation;
