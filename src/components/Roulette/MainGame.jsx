import React, { useState } from "react";
import { Grid, Button } from "@mui/material";
import "./MainGame.css"; // Import CSS file for styles

function MainGame() {
    const [isSpinning, setIsSpinning] = useState(false);

    const handleSpin = () => {
        setIsSpinning(true);
        setTimeout(() => {
            setIsSpinning(false);
        }, 5000); // 5000 milliseconds = 5 seconds
    };

    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            mt={2}
            spacing={1}
        >
            <Grid
                item
                xs={12}
                container
                justifyContent="center"
                alignItems="center"
                className={isSpinning ? "spinning" : ""}
            >
                <img
                    src="/StaticAssets/Images/Roulettewheel.png"
                    alt="Roulette Wheel"
                    style={{
                        width: "100%",
                        maxWidth: "90%",
                        height: "auto",
                        objectFit: "contain",
                    }}
                />
            </Grid>
            <Grid
                item
                xs={12}
                container
                justifyContent="center"
                alignItems="center"
            >
                <Button
                    variant="outlined"
                    color="primary"
                    disabled={isSpinning}
                    onClick={handleSpin}
                >
                    SPIN
                </Button>
            </Grid>
        </Grid>
    );
}

export default MainGame;
