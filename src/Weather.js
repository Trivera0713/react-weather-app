import React, { useState } from "react";
import axios from "axios";
import Dateformat from "./Dateformat";
import "./Weather.css";
import WeatherIcon from "./WeatherIcon";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function showWeather(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      feel: response.data.main.feels_like,
      icon: response.data.weather[0].icon,
      high: response.data.main.temp_max,
      low: response.data.main.temp_min,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className=" btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <div className="container-main">
          <h1>{props.defaultCity}</h1>
          <h4>
            {" "}
            <Dateformat date={weatherData.date} />{" "}
          </h4>
          <div className="row">
            <div className="col-6">
              <h2>{Math.round(weatherData.temperature)}°</h2>{" "}
              <span className="units">F|C</span>
              <span className="feel">
                Feels like {Math.round(weatherData.feel)}
              </span>
            </div>
            <div className="col-6">
              <WeatherIcon
                code={weatherData.icon}
                alt={weatherData.description}
              />
            </div>
            <div className="col-6">
              <ul className="hi-low">
                <li>{Math.round(weatherData.high)}°</li> |
                <li>{Math.round(weatherData.low)}°</li>
              </ul>
            </div>
            <div className="col-6">
              <p className="description"> {weatherData.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = `445905dadb3d2b0c6f1b916c9d0e3860`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(showWeather);

    return "Loading...";
  }
}
