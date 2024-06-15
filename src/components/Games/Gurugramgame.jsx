import React from "react";
import Layout from "../dashboard/Layout";
import { Grid } from "@mui/material";
import { useLocation } from "react-router-dom";

import Gametab from "./Matka/Gametab";
function Gurugramgame() {
    const location = useLocation();
    const { gameName, gameID } = location.state || {};

    return (
        <Layout>
            <Grid container>
                <Grid item xs={12} md={12}>
                    <Gametab gameName={gameName} gameID={gameID} />
                </Grid>
            </Grid>
        </Layout>
    );
}

export default Gurugramgame;
