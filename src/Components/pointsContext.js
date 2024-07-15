import React, { createContext, useContext, useState, useEffect } from 'react';

const PointsContext = createContext();

export const usePoints = () => useContext(PointsContext);

export const PointsProvider = ({ children }) => {
    const [points, setPoints] = useState(0);

    useEffect(() => {
        const storedPoints = JSON.parse(localStorage.getItem('points')) || 0;
        setPoints(storedPoints);
    }, []);

    useEffect(() => {
        localStorage.setItem('points', JSON.stringify(points));
    }, [points]);

    const addPoints = (amount) => {
        setPoints(prevPoints => prevPoints + amount);
    };

    return (
        <PointsContext.Provider value={{ points, setPoints, addPoints }}>
            {children}
        </PointsContext.Provider>
    );
};
