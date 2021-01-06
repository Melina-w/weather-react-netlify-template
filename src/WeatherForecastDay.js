import React from "react";

export default function WeatherForecastDay(props) {
  return (
    <div classname="card-body" style={{ display: "inline-block" }}>
      <h4>{props.day}</h4>
      <img
        src="http://openweathermap.org/img/wn/04n@2x.png"
        alt="Weather-icon"
        className="day-current-icon"
        id="day-current-weather-icon"
      />

      <p>{`Min: ${props.tempMin}°C`}</p>
      <p>{`Max: ${props.tempMax}°C`}</p>
      <p> {props.description}</p>
    </div>
  );
}
