import React, { useState, useContext, useEffect } from "react";
import Layout from "./Layout";
import { Grid, InputAdornment, TextField, Button } from "@mui/material";
import UserContext from "../UserContext";
import { apiClient } from "../config/Config";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

function MyAccount() {
    const { userId } = useContext(UserContext);

    const [profile, setProfile] = useState({ name: "", email: "", phone: "" });
    useEffect(() => {
        const data = {
            userId: userId,
        };
        const fetchdata = async () => {
            try {
                const response = await apiClient.post("/getuserprofile", data);
                setProfile(response.data.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchdata();
    }, [userId]);

    const handleupdateprofile = async () => {
        const data = {
            id: userId,
            name: profile.name,
            email: profile.email,
            mobile: profile.phone,
        };

        try {
            const response = await apiClient.post("/updateprofile", data);
            console.log(response);
        } catch (error) {
            console.error(error);
        }

        console.log(data);
    };
    return (
        <Layout>
            <Grid container justifyContent="center" alignItems="center">
                {" "}
                {/* Center and vertically align content */}
                <Grid item xs={10} md={10} textAlign="center">
                    <p>Profile Details {userId}</p>
                </Grid>
                <Grid item xs={10} md={10} textAlign="center">
                    <TextField
                        id="Name"
                        name="name"
                        size="small"
                        variant="filled"
                        label="Full Name"
                        color="secondary"
                        fullWidth
                        required
                        autoComplete="off"
                        autoFocus
                        value={profile.name}
                        onChange={(e) => {
                            setProfile({
                                ...profile,
                                name: e.target.value,
                            });
                        }}
                        sx={{
                            margin: "0 0 10px",
                            "& .MuiFilledInput-root": {
                                backgroundColor: "rgba(211, 211, 211, 0.1)",
                            },
                            "& .MuiInputBase-input": {
                                color: "#fffff",
                                fontSize: "1rem",
                                textAlign: "center",
                            },
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <AccountCircle sx={{ color: "#ffffff" }} />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid item xs={10} md={10} textAlign="center">
                    <TextField
                        id="email"
                        name="email"
                        size="small"
                        variant="filled"
                        label="Email"
                        color="secondary"
                        fullWidth
                        required
                        autoComplete="off"
                        autoFocus
                        value={profile.email}
                        onChange={(e) => {
                            setProfile({
                                ...profile,
                                email: e.target.value,
                            });
                        }}
                        sx={{
                            margin: "0 0 10px",
                            "& .MuiFilledInput-root": {
                                backgroundColor: "rgba(211, 211, 211, 0.1)",
                            },
                            "& .MuiInputBase-input": {
                                color: "#fffff",
                                fontSize: "1rem",
                                textAlign: "center",
                            },
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <EmailIcon sx={{ color: "#ffffff" }} />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid item xs={10} md={10} textAlign="center">
                    <TextField
                        id="phone"
                        name="phone"
                        size="small"
                        variant="filled"
                        label="Phone"
                        color="secondary"
                        fullWidth
                        required
                        autoComplete="off"
                        autoFocus
                        value={profile.phone}
                        onChange={(e) => {
                            setProfile({
                                ...profile,
                                phone: e.target.value,
                            });
                        }}
                        sx={{
                            margin: "0 0 10px",
                            "& .MuiFilledInput-root": {
                                backgroundColor: "rgba(211, 211, 211, 0.1)",
                            },
                            "& .MuiInputBase-input": {
                                color: "#fffff",
                                fontSize: "1rem",
                                textAlign: "center",
                            },
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <PhoneAndroidIcon
                                        sx={{ color: "#ffffff" }}
                                    />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid item xs={10} md={10} textAlign="center">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleupdateprofile}
                    >
                        Update profile
                    </Button>
                </Grid>
            </Grid>
        </Layout>
    );
}

export default MyAccount;
