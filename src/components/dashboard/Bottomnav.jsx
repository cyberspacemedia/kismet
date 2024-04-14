import React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

export default function Bottomnav() {
    const [value, setValue] = React.useState(0);

    return (
        <Box sx={{ width: "100%" }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => setValue(newValue)}
                sx={{ backgroundColor: "rgba(0, 0, 0, 0.5)", color: "white" }}
            >
                <BottomNavigationAction
                    label="Home"
                    icon={<HomeIcon sx={{ color: "white" }} />}
                    component={Link}
                    to="/dashboard"
                    sx={{ color: "inherit" }}
                />
                <BottomNavigationAction
                    label="History"
                    icon={<RestoreIcon sx={{ color: "white" }} />}
                    component={Link}
                    to="/wallet"
                    sx={{ color: "inherit" }}
                />

                <BottomNavigationAction
                    label="Favorites"
                    icon={<FavoriteIcon sx={{ color: "white" }} />}
                    sx={{ color: "inherit" }}
                />
            </BottomNavigation>
        </Box>
    );
}
