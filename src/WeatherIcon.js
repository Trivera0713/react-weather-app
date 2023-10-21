import React from "react";

export default function WeatherIcon(props) {
  console.log(props.code);
  const codeMapping = {
    "01d": "animatedIcons/day.svg",
    "01n": "animatedIcons/night.svg",
    "02d": "animatedIcons/cloudy-day-2.svg",
    "02n": "animatedIcons/cloudy-night-2.svg",
    "03d": "animatedIcons/cloudy-day-2.svg",
    "03n": "animatedIcons/cloudy-night-2.svg",
    "04d": "animatedIcons/cloudy.svg",
    "04n": "animatedIcons/cloudy.svg",
    "09d": "animatedIcons/rainy-1.svg",
    "09n": "animatedIcons/rainy-6.svg",
    "10d": "animatedIcons/rainy-4.svg",
    "10n": "animatedIcons/rainy-4.svg",
    "11d": "animatedIcons/thunder.svg",
    "11n": "animatedIcons/thunder.svg",
    "13d": "animatedIcons/snowy-1.svg",
    "13n": "animatedIcons/snowy-4.svg",
    "50d": "animatedIcons/cloudy.svg",
    "50n": "animatedIcons/cloudy.svg",
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
