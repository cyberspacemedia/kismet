// src/components/GameControls.js
import React from "react";

const GameControls = ({ balance }) => {
    return (
        <div className="game-controls">
            <h2>Balance: ${balance}</h2>
        </div>
    );
};

export default GameControls;
