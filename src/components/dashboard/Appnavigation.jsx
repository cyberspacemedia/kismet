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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import WalletIcon from "@mui/icons-material/Wallet";

const AppNavigation = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const navigate = useNavigate();

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
                        sx={{ mr: "10px" }}
                    >
                        <WalletIcon /> ₹ 0
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
                        height: "90vh",
                        backgroundColor: "black",
                    },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        height: "80%",
                        justifyContent: "space-between",
                    }}
                >
                    <List>
                        {/* List items for the drawer */}
                        <ListItem button>
                            <ListItemText primary={"How to Play"} />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary={"Change Password"} />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary={"Leaderboard"} />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary={"Company Profile"} />
                        </ListItem>
                    </List>
                    <Box p={2}>
                        <Button fullWidth variant="contained" color="secondary">
                            Logout
                        </Button>
                    </Box>
                </Box>
            </Drawer>
        </>
    );
};

export default AppNavigation;
