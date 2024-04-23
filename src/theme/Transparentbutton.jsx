import React from "react";
import Button from "@mui/material/Button";

const Transparentbutton = ({ onClick, children }) => {
    return (
        <Button
            onClick={onClick}
            style={{
                backgroundColor: "transparent",
                border: "none",
                padding: 0,

                cursor: "pointer",
            }}
        >
            {children}
        </Button>
    );
};

export default Transparentbutton;
