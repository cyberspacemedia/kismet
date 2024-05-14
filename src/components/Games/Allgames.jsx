import React from "react";
import Grid from "@mui/material/Grid";
import { Card, CardActionArea, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
function Allgames() {
    const navigate = useNavigate();

    return (
        <Grid container spacing={3} p={2}>
            <Grid item xs={3}>
                {/* Card 1 */}
                <Card sx={{ backgroundColor: "transparent" }}>
                    <CardActionArea onClick={() => navigate("/gurugramgame")}>
                        <CardMedia
                            component="img"
                            image="./StaticAssets/Images/Icons/Gurugram.png"
                            alt="Gurugram"
                        />
                    </CardActionArea>
                </Card>
                <Typography variant="caption">Gurugram</Typography>
                {/* Card 1 */}
            </Grid>
            <Grid item xs={3}>
                {/* Card 2 */}
                <Card sx={{ backgroundColor: "transparent" }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image="./StaticAssets/Images/Icons/Alwar.png"
                            alt="Alwar"
                        />
                    </CardActionArea>
                </Card>
                <Typography variant="caption">Alwar</Typography>
                {/* Card 2 */}
            </Grid>
            <Grid item xs={3}>
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
                <Typography variant="caption">Rewari</Typography>
                {/* Card 3 */}
            </Grid>
            <Grid item xs={3}>
                {/* Card 4 */}
                <Card sx={{ backgroundColor: "transparent" }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image="./StaticAssets/Images/Icons/Rohtak.png"
                            alt="Rohtak"
                        />
                    </CardActionArea>
                </Card>
                <Typography variant="caption">Rohtak</Typography>
                {/* Card 4 */}
            </Grid>
        </Grid>
    );
}

export default Allgames;
