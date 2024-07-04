import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

import Gametab from "./Matka/Gametab";
function Gurugramgame() {
    const location = useLocation();
    const { gameName, gameId } = location.state || {};

    return (
        <Box sx={{ backgroundColor: "black", minHeight: "100vh" }}>
            {/* <Button variant="contained">Back</Button> */}
            <Typography variant="caption">{gameName}</Typography>
            <Grid container>
                <Grid item xs={12} md={12}>
                    <Gametab gameName={gameName} gameId={gameId} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default Gurugramgame;
