import React, { useState } from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].main,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
    });
  }

  function search() {
    let apiKey = "49e74429d3a2f98000aa1a8e998c37eb";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
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
                    autoFocus="on"
                    onChange={handleCityChange}
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
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
