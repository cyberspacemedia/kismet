import { Paper } from "@mui/material";
import React from "react";
import Imageslider from "./slider/Imageslider";

function Defaultdash() {
    return (
        <Paper
            sx={{
                backgroundColor: "black",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <div style={{ width: "85%" }}>
                <Imageslider />
            </div>
        </Paper>
    );
}

export default Defaultdash;
