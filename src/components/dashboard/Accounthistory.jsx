import React, { useContext, useEffect } from "react";
import { Box, Chip, Grid, Typography } from "@mui/material";
import PaymentIcon from "@mui/icons-material/Payment";
import BottomMenu from "./Appcomp/Bottommenu";
import Topmenu from "./Appcomp/Topmenu";
import { apiClient } from "../config/Config";
import UserContext from "../UserContext";

function CustomGridItem({ status, amount, datetime, txnId }) {
    return (
        <Box
            sx={{
                p: 1,
                border: "0.1px solid #ccc",
                borderRadius: "15px",
                mb: 1,
                background:
                    "linear-gradient(0deg, rgba(207,0,231,1) 0%, rgba(128,0,209,1) 100%)",
            }}
        >
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Grid item>
                    <Box display="flex" alignItems="center">
                        <PaymentIcon
                            sx={{ color: "yellow", fontSize: 40 }} // Increased fontSize to make it more noticeable
                        />
                    </Box>
                </Grid>
                <Grid item xs>
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                    >
                        <Typography variant="subtitle2">
                            Status: {status}
                        </Typography>
                        <Chip
                            label={`${txnId}`}
                            size="small"
                            color="primary"
                            sx={{ mt: 1, fontSize: "0.5em" }}
                        />
                    </Box>
                </Grid>
                <Grid item>
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="flex-end"
                    >
                        <Typography variant="body1">{amount}</Typography>
                        <Typography variant="body2">{datetime}</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default function Accounthistory() {
    const { userId } = useContext(UserContext);
    useEffect(() => {
        const data = { userId };
        const fetchtransactions = async () => {
            try {
                const response = await apiClient.post(
                    "/getAllTransaction",
                    data
                );
                console.log(response.data);
            } catch (error) {
                console.error("API Error Fetch All Transaction", error);
            }
        };
        fetchtransactions();
    }, [userId]);

    return (
        <div className="layout-container">
            <div className="top-menu">
                <Topmenu menu="TRANSACTIONS" />
            </div>

            <div className="content">
                <Grid container direction="column" justifyContent="center">
                    <Grid item>
                        <CustomGridItem
                            status="Completed"
                            amount="$120"
                            datetime="2024-07-25 14:35"
                            txnId="1234567890"
                        />
                    </Grid>
                </Grid>
            </div>
            <div className="bottom-menu">
                <BottomMenu />
            </div>
        </div>
    );
}
