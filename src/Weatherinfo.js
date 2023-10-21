import React from "react";
import Dateformat from "./Dateformat";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="container-main">
      <h1>{props.data.city}</h1>
      <h4>
        {" "}
        <Dateformat date={props.data.date} />{" "}
      </h4>
      <div className="row">
        <div className="col-6">
          <WeatherTemperature fahrenheit={Math.round(props.data.temperature)} />
        <span className="feel">Feels like {Math.round(props.data.feel)}</span>
        </div>
        <div className="col-6">
          <WeatherIcon code={props.data.icon} alt={props.data.description} />
        </div>
        <div className="col-6">
          <ul className="hi-low">
            <li>{Math.round(props.data.high)}°</li> |
            <li>{Math.round(props.data.low)}°</li>
          </ul>
        </div>
        <div className="col-6">
          <p className="description"> {props.data.description}</p>
        </div>
      </div>
    </div>
  );
}
