import React from "react";
import WeatherForecastDay from "./WeatherForecastDay";

export default function DailyForecastData(props) {
  let dailyData = [];
  props.Data.forEach(function (dataDay) {
    dailyData.push(
      <WeatherForecastDay
        key={dataDay.day}
        day={dataDay.day}
        icon={dataDay.icon}
        tempMin={dataDay.tempMin}
        tempMax={dataDay.tempMax}
        description={dataDay.description}
      />
    );
  });
  return <div className="container days-forecast">{dailyData} </div>;
}
