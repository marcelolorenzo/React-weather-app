import React from "react";

const DegreeToggle = ({ updateForecastDegree, degreeType}) => {

    return (
        <div className="mb-3">
            <div className="form-check form-check-inline">
                <input
                 type="radio" 
                 className="form-check-input" 
                 name="degree-type"
                 id="celsius"
                 value="celsius"
                 onChange={updateForecastDegree}
                 checked={degreeType === "celsius"}
                />
                <label htmlFor="celsius">Celsius</label>
            </div>
        </div>
    )
}

export default DegreeToggle; 