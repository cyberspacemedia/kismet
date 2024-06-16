import React from "react";
import Layout from "../dashboard/Layout";
import { Grid } from "@mui/material";
import { useLocation } from "react-router-dom";

import Gametab from "./Matka/Gametab";
function Gurugramgame() {
    const location = useLocation();
    const { gameName, gameId } = location.state || {};

    return (
        <Layout>
            <Grid container>
                <Grid item xs={12} md={12}>
                    <Gametab gameName={gameName} gameId={gameId} />
                </Grid>
            </Grid>
        </Layout>
    );
}

export default Gurugramgame;
