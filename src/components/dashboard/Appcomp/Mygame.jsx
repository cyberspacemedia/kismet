import React from "react";
import Layout from "../Layout";
import Typography from "@mui/material/Typography";
import { Grid, CardHeader, Avatar, IconButton, Card } from "@mui/material";

function Mygame() {
    return (
        <Layout>
            <Typography variant="caption"> My Game</Typography>
            <Grid container justifyContent="center">
                <Grid item xs={12} md={10}>
                    <Card sx={{ width: "90%", margin: "0 auto" }}>
                        <CardHeader
                            avatar={<Avatar aria-label=""></Avatar>}
                            action={<IconButton aria-label=""></IconButton>}
                            title="Game Name"
                            subheader="Game Status"
                        />
                    </Card>
                </Grid>
            </Grid>
        </Layout>
    );
}

export default Mygame;
