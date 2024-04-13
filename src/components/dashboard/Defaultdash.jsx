import { Paper } from "@mui/material";
import React from "react";
import Imageslider from "./slider/Imageslider";

function Defaultdash() {
    return (
        <Paper sx={{ backgroundColor: "black", display: "flex", justifyContent: "center" }}>
            <div style={{ height: "200px", width: "100%" }}>
                <Imageslider />
            </div>
        </Paper>
    );
}

export default Defaultdash;
