import React from "react";
import theme from "../../../theme/Theme";
import { Grid, Button, Box } from "@mui/material";
function Jodigame() {
    const gameNumber = [];
    for (let i = 0; i <= 99; i++) {
        gameNumber.push(i);
    }
    return (
        <Box
            sx={{
                height: "75vh", // 80% of the viewport height
                overflowY: "auto", // Enable vertical scrolling
            }}
        >
            <Grid container justifyContent={"center"}>
                <Grid item xs={12}>
                    {gameNumber.map((number) => (
                        <Button
                            variant="contained"
                            sx={{ ...theme.buttons.squarenumberbutton }}
                            key={number}
                        >
                            {number}
                        </Button>
                    ))}
                </Grid>
            </Grid>
        </Box>
    );
}

export default Jodigame;
