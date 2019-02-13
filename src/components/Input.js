import React from "react";

const Input = ({ getTemperature }) => {
    return (
        <form onSubmit={getTemperature}>
            <input
                className="temp-form"
                type="text"
                name="city"
                placeholder="Search for city..."
            />
            <button className="form-btn">Get temperature</button>
        </form>
    );
};

export default Input;
