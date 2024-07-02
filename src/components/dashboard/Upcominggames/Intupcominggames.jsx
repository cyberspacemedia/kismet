import React from "react";
import Grid from "@mui/material/Grid";
import { Card, CardActionArea, CardMedia, Typography } from "@mui/material";

function Intupcominggames() {
    return (
        <Grid
            container
            spacing={1}
            p={1}
            justifyContent="center"
            alignItems="center"
        >
            <Grid item xs={4}>
                {/* Card 3 */}
                <Card sx={{ backgroundColor: "transparent" }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image="./StaticAssets/Images/Icons/Rewari.png"
                            alt="Rewari"
                        />
                    </CardActionArea>
                </Card>
                <Typography variant="h6">Rewari</Typography>
                {/* Card 3 */}
            </Grid>
        </Grid>
    );
}

export default Intupcominggames;
