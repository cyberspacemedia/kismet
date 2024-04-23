import React from "react";
import Grid from "@mui/material/Grid";
import { Card, CardActionArea, CardMedia, Typography } from "@mui/material";

function Allgames() {
    return (
        <Grid
            container
            spacing={1}
            justifyContent="center"
            justifyItems={"center"}
            sx={{ width: "90%", margin: "0 auto" }}
        >
            <Grid item xs={3}>
                {/* Card 1 */}
                <Card sx={{ backgroundColor: "transparent" }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image="./StaticAssets/Images/moblogo.png"
                            alt="green iguana"
                        />
                    </CardActionArea>
                </Card>
                <Typography variant="caption">Faridabad</Typography>
                {/* Card 1 */}
            </Grid>
            <Grid item xs={3}>
                {/* Card 2 */}
                <Card sx={{ backgroundColor: "transparent" }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image="./StaticAssets/Images/moblogo.png"
                            alt="green iguana"
                        />
                    </CardActionArea>
                </Card>
                <Typography variant="caption">Gurgaon</Typography>
                {/* Card 2 */}
            </Grid>
            <Grid item xs={3}>
                {/* Card 3 */}
                <Card sx={{ backgroundColor: "transparent" }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image="./StaticAssets/Images/moblogo.png"
                            alt="green iguana"
                        />
                    </CardActionArea>
                </Card>
                <Typography variant="caption">Gali</Typography>
                {/* Card 3 */}
            </Grid>
            <Grid item xs={3}>
                {/* Card 4 */}
                <Card sx={{ backgroundColor: "transparent" }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image="./StaticAssets/Images/moblogo.png"
                            alt="green iguana"
                        />
                    </CardActionArea>
                </Card>
                <Typography variant="caption">Dubai</Typography>
                {/* Card 4 */}
            </Grid>
        </Grid>
    );
}

export default Allgames;
