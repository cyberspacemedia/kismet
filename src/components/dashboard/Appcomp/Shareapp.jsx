import React, { useContext, useEffect, useState } from "react";

import {
    Card,
    CardContent,
    Grid,
    Typography,
    Button,
    Box,
} from "@mui/material";
import { apiClient } from "../../config/Config";
import UserContext from "../../UserContext";
import AppLoader from "../../Loaders/AppLoader";
import BottomMenu from "./Bottommenu";
function Shareapp() {
    const userId = useContext(UserContext);
    const [referralData, setReferralData] = useState([]);
    const [referralCode, setReferralCode] = useState("");
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        const fetchdata = async () => {
            setLoader(true); // Show loader
            try {
                const response = await apiClient.post(
                    "get_referral_info",
                    userId
                );
                // console.log(response.data);
                setReferralData(response.data.data);
                setReferralCode(response.data.data.code);
            } catch (error) {
                console.error("API Error", error);
            } finally {
                setLoader(false); // Hide loader
            }
        };
        fetchdata();
    }, [userId]);

    const handleInviteFriends = async () => {
        try {
            await navigator.clipboard.writeText(referralCode);
            console.log("Referral code copied to clipboard:", referralCode);
            // Optionally, show a success message or perform other actions
        } catch (error) {
            console.error("Failed to copy referral code:", error);
            // Handle error (e.g., show an error message)
        }
    };

    return (
        <Box sx={{ backgroundColor: "black", minHeight: "100vh" }}>
            <Typography variant="caption">Invite & Earn</Typography>
            {loader && <AppLoader />}
            <Grid container justifyContent={"center"} spacing={2}>
                <Grid item xs={10}>
                    <Card
                        variant="outlined"
                        sx={{
                            minWidth: 275,
                            backgroundColor: "black",
                            border: "2px solid orange",
                            borderRadius: 10,
                        }}
                    >
                        <CardContent>
                            <Typography
                                variant="body1"
                                component="div"
                                gutterBottom
                                sx={{ color: "white" }}
                            >
                                Commission
                            </Typography>
                            <Typography
                                variant="body2"
                                component="div"
                                sx={{ color: "white", fontSize: "2rem" }}
                            >
                                <span
                                    style={{
                                        fontSize: "1rem",
                                        verticalAlign: "super",
                                    }}
                                >
                                    ₹
                                </span>
                                {referralData.commission}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={10} mt={5}>
                    <Typography
                        variant="body1"
                        p={2}
                        sx={{ border: "0.1px solid white", bgcolor: "#212121" }}
                    >
                        Total People Added : {referralData.userCount}
                    </Typography>
                </Grid>
                <Grid item xs={10} mt={5}>
                    <Typography variant="h4">Your referral Code</Typography>
                    <Typography
                        variant="h1"
                        sx={{
                            border: "3px dotted orange",
                            padding: "10px",
                            borderRadius: "15px",
                        }}
                    >
                        {referralData.code}
                    </Typography>
                </Grid>
                <Grid item xs={10}>
                    <Button variant="contained" onClick={handleInviteFriends}>
                        Copy Referral Code
                    </Button>
                </Grid>
            </Grid>
            <BottomMenu />
        </Box>
    );
}

export default Shareapp;
