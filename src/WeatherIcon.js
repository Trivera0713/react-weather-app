import React from "react";

export default function WeatherIcon(props) {
  console.log(props.code);
  const codeMapping = {
    "clear-sky-day": "animatedIcons/day.svg",
    "clear-sky-night": "animatedIcons/night.svg",
    "few-clouds-day": "animatedIcons/cloudy-day-2.svg",
    "few-clouds-night": "animatedIcons/cloudy-night-2.svg",
    "scattered-clouds-day": "animatedIcons/cloudy.svg",
    "scattered-clouds-night": "animatedIcons/cloudy.svg",
    "shower-rain-day": "animatedIcons.rainy-1.svg",
    "shower-rain-night": "animatedIcons/rainy-6.svg",
    "rain-day": "animatedIcons/rain-4.svg",
    "rain-night": "animated/Icons/rainy-4.svg",
    "thunderstorm-day": "animatedIcons.thunder.svg",
    "thunderstorm-night": "animatedIcons.thunder.svg",
    "snow-day": "animatedIcons/snowy-1.svg",
    "snow-night": "animatedIcons/snowy-4.svg",
    "mist-day": "animatedIcons/cloudy.svg",
    "mist-night": "animatedIcons/cloudy.svg",
  };
  return (
    <div className="weatherIcons">
      <img
        src={codeMapping[props.code]}
        alt={props.alt}
        className="weathericon"
      />
    </div>
  );
}
