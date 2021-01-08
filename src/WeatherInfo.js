import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  let weatherData = props.data;
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="row col-5 weather-details offset-1">
          <div className="col-12"></div>
          <div>
            <p>Humidity: {weatherData.humidity} %</p>
            <p>Wind: {weatherData.wind}km/h</p>
            <p className="text-capitalize">{weatherData.description}</p>
          </div>
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-12 selected-day">
              <h1>Today</h1>
            </div>
            <div className="col-6 selected-city">
              <p>{weatherData.city}</p>

              <FormattedDate date={props.data.date} />
            </div>
            <div className="col-6 current-degree">
              <img src={weatherData.iconUrl} alt={weatherData.description} />
              <span className="temperature">
                {" "}
                {weatherData.temperature} °C/ °F
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
