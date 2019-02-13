import React from "react";

const WeatherDisplay = ({ handleClick, city, temp }) => {
    return (
        <div className="temp-card">
            <h1 onClick={handleClick}>{temp} &#x2103;</h1>
            <h3 onClick={handleClick}>{city}</h3>
        </div>
    );
};

export default WeatherDisplay;
