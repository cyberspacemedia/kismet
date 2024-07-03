import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Card, CardActionArea, CardMedia, Typography } from "@mui/material";
import { apiClient } from "../../config/Config";

function Domesticupcominggames() {
    const [gameData, setGameData] = useState([]);
    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await apiClient.post("upcomming_game");
                // console.log(response.data);
                setGameData(response.data.data);
            } catch (error) {
                console.error("API Error", error);
            }
        };
        fetchdata();
    }, []);

    return (
        <Grid
            container
            spacing={1}
            p={1}
            justifyContent="center"
            alignItems="center"
        >
            <Grid item xs={10}>
                {/* Card 1 */}
                <Card sx={{ backgroundColor: "transparent" }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image={`./StaticAssets/Images/Icons/${gameData.gameName}.png`}
                            alt={gameData.gameName}
                        />
                    </CardActionArea>
                </Card>
                <Typography variant="h5">{gameData.gameName}</Typography>
                {/* Card 1 */}
            </Grid>
        </Grid>
    );
}

export default Domesticupcominggames;
