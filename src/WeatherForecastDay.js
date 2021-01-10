import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  return (
    <div className="card-body" style={{ display: "inline-block" }}>
      <h4>{props.day}</h4>
      <WeatherIcon code={props.icon} />
      <p>{`Min: ${props.tempMin}°C`}</p>
      <p>{`Max: ${props.tempMax}°C`}</p>
      <p> {props.description}</p>
    </div>
  );
}
