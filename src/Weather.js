import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function showWeather(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      city: response.data.name,
      description: response.data.condition.description,
      feel: response.data.temperature.feels_like,
      icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
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
        <h1>{weatherData.city}</h1>
        <h4>Tuesday October 10</h4>
        <ul className="hi-low">
          <li> High 63°F</li> |<li>Low 30°</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <h2>{Math.round(weatherData.temperature)}</h2>
            <span className="units">F|C</span>
            <span className="feel">
              Feels like {Math.round(weatherData.feel)}
            </span>
          </div>
          <div className="col-6">
            <img src={weatherData.icon} alt={weatherData.description} />
            <p className="description"> {weatherData.description}</p>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "f68406t3o5c3f2a4369b987ab457dcba";
    let city = "Allentown";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(showWeather);

    return "Loading...";
  }
}
