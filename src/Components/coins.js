import React from "react";
import { usePoints } from './pointsContext';

const Coins = () => {
    const { points } = usePoints();
    
    return (
        <div className="coins-container" style={{margin:"100px"}}>
            <h1>Your Coins</h1>
            <p>Total Points: {points}</p>
        </div>
    );
};

export default Coins;
