import React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ShareIcon from "@mui/icons-material/Share";
import BarChartIcon from "@mui/icons-material/BarChart";
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
                    label="Charts"
                    icon={<BarChartIcon sx={{ color: "white" }} />}
                    component={Link}
                    to="/charts"
                    sx={{ color: "inherit" }}
                />

                <BottomNavigationAction
                    label="My Game"
                    icon={<EmojiEventsIcon sx={{ color: "white" }} />}
                    component={Link}
                    to="/mygame"
                    sx={{ color: "inherit" }}
                />
                <BottomNavigationAction
                    label="Share"
                    icon={<ShareIcon sx={{ color: "white" }} />}
                    component={Link}
                    to="/shareapp"
                    sx={{ color: "inherit" }}
                />
            </BottomNavigation>
        </Box>
    );
}
