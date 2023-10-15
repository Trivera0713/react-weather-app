import React from "react";

export default function Dateformat(props) {
  console.log(props.date);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "Novemeber",
    "Decemeber",
  ];
  let day = days[props.date.getDay()];
  let month = months[props.date.getMonth()];
  let date = props.date.getDate();
  let hours = props.date.getHours();
  let hour = hours % 12 || 12;
  let AmOrPm = hours >= 12 ? `pm` : `am`;
  let minutes = props.date.getMinutes();
  let year = props.date.getFullYear();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div>
      {day}, {month} {date}, {year} {hour}:{minutes}
      {AmOrPm}
    </div>
  );
}
