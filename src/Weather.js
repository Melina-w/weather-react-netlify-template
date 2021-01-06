import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      <div className="container weather box"></div>
      <div className="row">
        <div className="row col-5 weather-details offset-1">
          <div className="col-12"></div>
          <div>
            <p>Humidity: 19%</p>
            <p>Wind: 9km/h</p>
          </div>
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-12 selected-day">
              <h1>Today</h1>
            </div>
            <div className="col-6 selected-city">
              <p>Auckland</p>
              <p>Tuesday 29 Dec, 2020</p>
              <p>10:48 am</p>
            </div>
            <div className="col-6 current-degree">
              <img
                src="http://openweathermap.org/img/wn/04d@2x.png"
                alt="Mostly Cloudy"
              />
              <span> 20 C/ F</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
