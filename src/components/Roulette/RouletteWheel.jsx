import { Grid } from "@mui/material";
import React from "react";

function RouletteWheel() {
    return (
        <Grid container justifyContent={"center"} alignItems={"center"}>
            <Grid item xs={12}>
                <img
                    src="/StaticAssets/Images/Roulettewheel.png"
                    alt="Roulette Wheel"
                    style={{ objectFit: "contain" }}
                />
            </Grid>
        </Grid>
    );
}

export default RouletteWheel;
