import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function GettingStarted() {
    return (
        <Grid
            container
            sx={{
                height: "100vh",
                backgroundImage: `url('./StaticAssets/Images/Getting_Started.jpg')`,
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
                <Button
                    variant="contained"
                    color="secondary"
                    sx={{ mt: 80, width: "70%", borderRadius: "50px" }}
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
