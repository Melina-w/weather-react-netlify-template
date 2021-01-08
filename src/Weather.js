import React, { useState } from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import axios from "axios";

export default function Weather(props) {
  console.log(props);
  let [weatherData, setWeatherData] = useState({ ready: false });

  function handleSubmit(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].main,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      iconUrl: "http://openweathermap.org/img/wn/04d@2x.png",
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="search offset-1">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-10 col-9">
                  <input
                    type="search"
                    placeholder="Enter City"
                    id="search-form-input"
                  ></input>
                </div>
                <div className="col-lg-2 col-3">
                  <button type="submit">
                    {" "}
                    <i className="fas fa-search-location"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>

          <i className="fas fa-map-marker-alt" id="current-location-btn"></i>
        </div>
        <div className="container weather box"></div>

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

                <FormattedDate date={weatherData.date} />
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
  } else {
    let apiKey = "49e74429d3a2f98000aa1a8e998c37eb";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleSubmit);
    return "Loading...";
  }
}
