import React from "react";
import Grid from "@mui/material/Grid";
import { Card, CardActionArea, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
function Domesticupcominggames() {
    const navigate = useNavigate();

    return (
        <Grid container spacing={1} p={2}>
            <Grid item xs={4}>
                {/* Card 1 */}
                <Card sx={{ backgroundColor: "transparent" }}>
                    <CardActionArea
                        onClick={() => navigate("/gurugramgameinfo")}
                    >
                        <CardMedia
                            component="img"
                            image="./StaticAssets/Images/Icons/Gurugram.png"
                            alt="Gurugram"
                        />
                    </CardActionArea>
                </Card>
                <Typography variant="h6">Gurugram</Typography>
                {/* Card 1 */}
            </Grid>
            <Grid item xs={4}>
                {/* Card 2 */}
                <Card sx={{ backgroundColor: "transparent" }}>
                    <CardActionArea onClick={() => navigate("/alwargameinfo")}>
                        <CardMedia
                            component="img"
                            image="./StaticAssets/Images/Icons/Alwar.png"
                            alt="Alwar"
                        />
                    </CardActionArea>
                </Card>
                <Typography variant="h6">Alwar</Typography>
                {/* Card 2 */}
            </Grid>
            <Grid item xs={4}>
                {/* Card 3 */}
                <Card sx={{ backgroundColor: "transparent" }}>
                    <CardActionArea onClick={() => navigate("/rewarigameinfo")}>
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

export default Domesticupcominggames;
