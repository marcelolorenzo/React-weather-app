import React from "react";

const DayCard = ({ data, degreeType }) => {
    const { temp, dt, iconId, desc } = data;

    const icon = `owf owf-${iconId} owf-5zx`;
    const newDate = new Date();
    newDate.setTime(dt * 1000);
    const displayDay = { weekday: "long" };
    const displayDate = { month: "short", day: "numeric" };
    const day = newDate.toLocaleString('en-us', displayDay);
    const date = newDate.toLocaleString('en-us', displayDate);

    const fahrenheit = Math.round(temp);
    const celsius = Math.round((fahrenheit - 32)* (5/9));


    return (
<div className="col-sm-2">
    <div className="card p-3">
        <h3 className="card-tittle">{day}</h3>
        <p className="text-muted">{date}</p>
        <i className={icon} style={{fontSize: "5rem"}}/>
        <h2>{degreeType === "celsius" ? `${celsius}℃` : ``}</h2>
         <div className="card body">
            <p className="card-text">{desc}</p>
        </div>
    </div>
</div>
    )
};

export default DayCard;