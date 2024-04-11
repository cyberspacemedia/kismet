import React from "react";
import theme from "../theme/Theme";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Password";
import Typography from "@mui/material/Typography";

function UserRegister() {
    return (
        <>
            <Grid
                container
                direction={"column"}
                display="flex"
                textAlign="center"
                sx={{
                    backgroundColor: "black",
                    height: "100vh",
                    backgroundImage: `url('./StaticAssets/Images/Background_bg.jpg')`,
                    backgroundPosition: "center",
                }}
            >
                <Box xs={12} sm={4} md={4} lg={4}>
                    <Grid item sx={{ mt: 2 }}>
                        <img
                            src="./StaticAssets/Images/moblogo.png"
                            alt="Logo"
                            style={{ height: "100px" }}
                        />
                    </Grid>
                    <Grid item sx={{ width: "80%", margin: "auto", mt: 5 }}>
                        <Typography variant="h5">Register & Play</Typography>
                        <Typography variant="h6">Earn big in Kismet</Typography>
                        <hr />
                        <form>
                            <TextField
                                id="Name"
                                size="large"
                                variant="filled"
                                label="Name"
                                color="secondary"
                                fullWidth
                                required
                                autoComplete="off"
                                autoFocus
                                sx={{
                                    margin: "0 0 20px", // Add margin bottom for spacing
                                    "& .MuiFilledInput-root": {
                                        backgroundColor:
                                            "rgba(211, 211, 211, 0.1)", // Light gray transparent background
                                    },
                                    "& .MuiInputBase-input": {
                                        color: "#fffff", // Font color
                                        fontSize: "1rem", // Font size
                                        textAlign: "center",
                                        padding: "10px",
                                    },
                                }}
                                InputProps={{
                                    // Change position to "end"
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <AccountCircle
                                                sx={{ color: "#ffffff" }}
                                            />
                                        </InputAdornment>
                                    ),
                                }}
                            />

                            <TextField
                                id="email"
                                size="large"
                                variant="filled"
                                label="Email"
                                color="secondary"
                                type="email"
                                fullWidth
                                required
                                autoComplete="off"
                                sx={{
                                    margin: "0 0 20px", // Add margin bottom for spacing
                                    "& .MuiFilledInput-root": {
                                        backgroundColor:
                                            "rgba(211, 211, 211, 0.1)", // Light gray transparent background
                                    },
                                    "& .MuiInputBase-input": {
                                        color: "#fffff", // Font color
                                        fontSize: "1rem", // Font size
                                        textAlign: "center",
                                        padding: "10px",
                                    },
                                }}
                                InputProps={{
                                    // Change position to "end"
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <EmailIcon
                                                sx={{ color: "#ffffff" }}
                                            />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField
                                id="password"
                                size="large"
                                variant="filled"
                                label="Password"
                                color="secondary"
                                fullWidth
                                type="text"
                                required
                                autoComplete="off"
                                sx={{
                                    margin: "0 0 20px", // Add margin bottom for spacing
                                    "& .MuiFilledInput-root": {
                                        backgroundColor:
                                            "rgba(211, 211, 211, 0.1)", // Light gray transparent background
                                    },
                                    "& .MuiInputBase-input": {
                                        color: "#fffff", // Font color
                                        fontSize: "1rem", // Font size
                                        textAlign: "center",
                                        padding: "10px",
                                    },
                                }}
                                InputProps={{
                                    // Change position to "end"
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <PasswordIcon
                                                sx={{ color: "#ffffff" }}
                                            />
                                        </InputAdornment>
                                    ),
                                }}
                            />

                            <Typography variant="body2">
                                <Checkbox
                                    sx={{
                                        "& .MuiSvgIcon-root": {
                                            fontSize: 28,
                                            color: "#ffffff",
                                        },
                                    }}
                                />
                                I, Agree to all terms and conditions of this
                                app.
                            </Typography>

                            <Button
                                variant="contained"
                                sx={{ mt: 2, ...theme.buttons.gradient }}
                                size="large"
                                type="submit"
                            >
                                Register Now
                            </Button>
                        </form>
                    </Grid>
                </Box>
            </Grid>
        </>
    );
}

export default UserRegister;
