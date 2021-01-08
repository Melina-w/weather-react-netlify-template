import React from "react";

export default function FormattedDate(props) {
  let days = ["Sun", "Mon", "Tues", "Wed", "Thrus", "Fri", "Sat"];
  let day = days[props.date.getDay()];
  let date = props.date.getDate();
  let months = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Novem",
    "Decem",
  ];
  let month = months[props.date.getMonth()];
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      {day} {date} {month},
      <p>
        {hours}: {minutes}
      </p>
    </div>
  );
}
