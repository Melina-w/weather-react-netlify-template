import React, { useState } from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import DailyForecastData from "./DailyForecastData";

let apiKey = "49e74429d3a2f98000aa1a8e998c37eb";

let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

export default function Weather() {
  let [forecastData, setForecastData] = useState([]);
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState();

  function handleResponse(response) {
    let description = response.data.weather[0].main;

    let body = document.querySelector("body");
    if (description.toLowerCase() === "clear") {
      body.classList.remove("bad-weather-background");
      body.classList.add("good-weather-background");
    } else {
      body.classList.remove("good-weather-background");
      body.classList.add("bad-weather-background");
    }
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      wind: Math.round(response.data.wind.speed),
      description: description,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
    });
  }

  function handleForecastResponse(response) {
    let firstItem = response.data.list[0];
    //dt is in seconds & new date needs miliseconds.
    let date = new Date(firstItem.dt * 1000);
    let currentDay = date.getDay();
    let forecastInfo = [];
    response.data.list.forEach(function (dataDay) {
      let date = new Date(dataDay.dt * 1000);
      let day = date.getDay();
      //check if the day changed to skip repeated days in the response.

      if (day !== currentDay) {
        currentDay = day;

        let dayData = {
          day: days[day],
          icon: dataDay.weather[0].icon,
          tempMin: Math.round(dataDay.main.temp_min),
          tempMax: Math.round(dataDay.main.temp_max),
          description: dataDay.weather[0].description,
        };
        forecastInfo.push(dayData);
      }
    });
    setForecastData(forecastInfo);
  }

  function search() {
    if (city === undefined) {
      findCurrentLocation();
    }
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    let apiUrlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    axios.get(apiUrlForecast).then(handleForecastResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  function updateCurrentLocation(currentPosition) {
    let lat = currentPosition.coords.latitude;
    let long = currentPosition.coords.longitude;

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
    let apiForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    axios.get(apiForecastUrl).then(handleForecastResponse);
  }
  function findCurrentLocation() {
    navigator.geolocation.getCurrentPosition(updateCurrentLocation);
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
          <i
            className="fas fa-map-marker-alt"
            id="current-location-btn"
            onClick={findCurrentLocation}
          ></i>
        </div>
        <div className="container weather box"></div>
        <WeatherInfo data={weatherData} />
        <DailyForecastData Data={forecastData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
