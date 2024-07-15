import React, { useState } from "react";
import { usePoints } from './pointsContext';

const Coins = () => {
    const { points } = usePoints();
    const [photo, setPhoto] = useState(null);

    const handlePhotoChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setPhoto(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="coins-container" style={{ margin: "100px" }}>
            <h1>Your Coins</h1>
            <p>Total Points: {points}</p>
            {points >= 50 && (
                <div style={{ width: '45%', border: '1px solid #ccc', padding: '20px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
                    <h2>Upload Photo</h2>
                    <input type="file" accept="image/*" onChange={handlePhotoChange} />
                    {photo && <img src={photo} alt="Your photo will appear here" style={{ maxWidth: '100%', display: 'block', margin: '0 auto' }} />}
                </div>
            )}
        </div>
    );
};

export default Coins;
