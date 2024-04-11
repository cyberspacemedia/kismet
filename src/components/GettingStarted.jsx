import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import logo from "../logo.svg";
import Button from "@mui/material/Button";

function GettingStarted() {
    return (
        <Grid
            container
            spacing={2}
            sx={{
                height: "100vh",
                backgroundImage: `url('./staticassets/images/Background_bg.jpg')`,
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
                <img src={logo} className="App-logo" alt="logo" />
                <Typography variant="h3" color="red">
                    Coming Soon
                </Typography>
                <Typography variant="h5" color="red">
                    Stay Tuned
                </Typography>

                <Button
                    variant="contained"
                    color="secondary"
                    sx={{ mt: 10, width: "70%", borderRadius: "50px" }}
                    size="large"
                >
                    Register Now
                </Button>
                <Typography variant="body1" color="white">
                    Already registered, <a href="pathtologincomponent">Login</a>
                </Typography>

                <Typography variant="body2" color="white">
                    Version 1.0
                </Typography>
            </Grid>
        </Grid>
    );
}

export default GettingStarted;
