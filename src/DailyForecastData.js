import React from "react";
import WeatherForecastDay from "./WeatherForecastDay";

export default function DailyForecastData(props) {
  let dailyData = [];
  props.Data.forEach(function (dataDay) {
    dailyData.push(
      <WeatherForecastDay
        day={dataDay.day}
        tempMin={dataDay.tempMin}
        tempMax={dataDay.tempMax}
        description={dataDay.description}
      />
    );
  });
  return <div className="container days-forecast">{dailyData} </div>;
}
