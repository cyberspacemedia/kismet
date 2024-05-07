import React from "react";
import Layout from "../Layout";
import Typography from "@mui/material/Typography";
import { Box, Grid, Paper } from "@mui/material";

function Leaderboard() {
    return (
        <Layout>
            <Typography variant="caption"> Leader Board</Typography>
            <Box sx={{ maxWidth: "767px", width: "350px" }}>
                <Paper
                    variant="outlined"
                    sx={{
                        padding: 2,
                        borderRadius: 2,

                        background:
                            "linear-gradient(90deg, rgba(238,208,65,1) 0%, rgba(255,147,0,1) 100%)",

                        textAlign: "center", // Align center horizontally
                        margin: "5px auto 0", // Center horizontally
                    }}
                >
                    <Grid container>
                        <Grid item xs={4}>
                            1
                        </Grid>
                        <Grid item xs={4}>
                            Rahul
                        </Grid>
                        <Grid item xs={4}>
                            1,23,984
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        </Layout>
    );
}

export default Leaderboard;
