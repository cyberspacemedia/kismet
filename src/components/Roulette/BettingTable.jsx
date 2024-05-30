// src/components/BettingTable.js
import React, { useState } from "react";

const BettingTable = ({ onPlaceBet }) => {
    const [bet, setBet] = useState({ number: 0, amount: 0 });

    const handlePlaceBet = () => {
        if (bet.amount > 0) {
            onPlaceBet(bet);
        }
    };

    return (
        <div className="betting-table">
            <input
                type="number"
                min="0"
                max="36"
                value={bet.number}
                onChange={(e) => setBet({ ...bet, number: e.target.value })}
                placeholder="Number (0-36)"
            />
            <input
                type="number"
                min="1"
                value={bet.amount}
                onChange={(e) => setBet({ ...bet, amount: e.target.value })}
                placeholder="Bet Amount"
            />
            <button onClick={handlePlaceBet}>Place Bet</button>
        </div>
    );
};

export default BettingTable;
