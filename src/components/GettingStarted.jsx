import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import theme from "../theme/Theme";

function GettingStarted() {
    return (
        <Grid
            container
            sx={{
                height: "100vh",
                backgroundImage: `url('./StaticAssets/Images/Getting_Started_wologo.jpg')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundColor: "black",
            }}
        >
            <Grid
                item
                xs={12}
                sm={4}
                md={4}
                lg={4}
                display="flex"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
                flexDirection="column" // Display items below each other
            >
                <img
                    src="./StaticAssets/Images/moblogo.png"
                    alt="Logo"
                    style={{ height: "150px" }}
                />
                <Typography variant="body1" sx={{ mt: 5 }}>
                    Welcome to
                </Typography>
                <Typography variant="h4">KISMET APP</Typography>
            </Grid>
            <Grid
                item
                xs={12}
                sm={4}
                md={4}
                lg={4}
                display="flex"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
                flexDirection="column" // Display items below each other
            >
                <Button
                    variant="contained"
                    sx={{ mt: 10, ...theme.buttons.gradient }}
                    size="large"
                >
                    Register Now
                </Button>
                <Typography variant="body1" color="white" sx={{mt:2}}>
                    Already registered, <a href="pathtologincomponent">Login</a>
                </Typography>
            </Grid>
            <Box
                sx={{
                    position: "absolute",
                    bottom: 1,
                    right: 1,
                    // Add padding to create some space
                }}
            >
                <Typography variant="caption" color="white">
                    V1.0
                </Typography>
            </Box>
        </Grid>
    );
}

export default GettingStarted;
