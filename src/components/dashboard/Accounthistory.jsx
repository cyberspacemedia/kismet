import React from "react";
import Layout from "./Layout";
import { Box, Typography } from "@mui/material";

function Accounthistory() {
    return (
        <Layout>
            <Box sx={{ m: 2, textAlign: "center" }}>
                <Typography variant="h6">Transaction History</Typography>
            </Box>
            <Box textAlign={'center'} mt={12}>
                <Typography variant="h3">
                    Coming Soon
                </Typography>
            </Box>
        </Layout>
    );
}

export default Accounthistory;
