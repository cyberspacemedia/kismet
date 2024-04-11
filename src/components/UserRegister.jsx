import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

function UserRegister() {
    return (
        <Grid
            container
            direction={"column"}
            sx={{
                backgroundImage: `url('./StaticAssets/Images/Background_bg.jpg')`,
            }}
            height="100vh" // Make the container fill the entire viewport vertically
        >
            <Grid item textAlign="center">
                <img
                    src="./StaticAssets/Images/moblogo.png"
                    alt="Logo"
                    style={{ height: "80px" }} // Adjust the height as needed
                />
            </Grid>
            <Grid item textAlign="center">
                {/* Form */}
                <form>
                    <Grid container direction="column" spacing={2}>
                        <Grid item>
                            <TextField
                                id="name"
                                placeholder="Enter Name"
                                sx={{
                                    borderRadius: "80px", // Rounded corners
                                    borderColor: "#ffff", // White border color
                                    borderWidth: "1px", // Border width
                                    backgroundColor: "#c6bbc2",
                                    color: "#c28f07",
                                    "&:hover": {
                                        borderColor: "#c28f07", // Yellow border color on hover
                                        borderStyle: "solid", // Ensure border style is solid
                                        borderWidth: "2px", // Increase border width on hover
                                    },
                                    textAlign: "center", // Centered text
                                    fontSize: "2.5em", // Responsive font size
                                }}
                            />
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    );
}

export default UserRegister;
