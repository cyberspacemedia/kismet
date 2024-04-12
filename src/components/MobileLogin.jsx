import React from "react";
import theme from "../theme/Theme";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Typography from "@mui/material/Typography";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

function MobileLogin() {
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
                    <Grid item sx={{ mt: 10 }}>
                        <img
                            src="./StaticAssets/Images/moblogo.png"
                            alt="Logo"
                            style={{ height: "100px" }}
                        />
                    </Grid>
                    <Grid item sx={{ width: "80%", margin: "auto", mt: 5 }}>
                        <Typography variant="h5" sx={{ textAlign: "left" }}>
                            Login with OTP
                        </Typography>
                        <Typography variant="h6" sx={{ textAlign: "left" }}>
                            Enter your mobile number
                        </Typography>
                        <hr style={{ marginBottom: "20px" }} />
                        <form>
                            <TextField
                                id="phone"
                                size="large"
                                variant="filled"
                                label="Enter Phone Number"
                                color="secondary"
                                type="number"
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
                                    },
                                }}
                                InputProps={{
                                    // Change position to "end"
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <PhoneAndroidIcon
                                                sx={{ color: "#ffffff" }}
                                            />
                                        </InputAdornment>
                                    ),
                                }}
                            />

                            <Button
                                variant="contained"
                                sx={{ mt: 2, ...theme.buttons.gradient }}
                                size="large"
                                type="submit"
                            >
                                Get OTP
                            </Button>
                        </form>
                    </Grid>
                </Box>
                <Grid item sx={{ mt: 5 }}>
                    <Typography variant="subtitle2">
                        {" "}
                        Do not have account?{" "}
                        <Link to="/register">Register Here</Link>
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
}

export default MobileLogin;
