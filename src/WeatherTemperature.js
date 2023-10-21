import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function celsius() {
    return (props.fahrenheit - 32 * 5) / 9;
  }

  if (unit === `fahrenheit`) {
    return (
      <div className="WeatherTemperature">
        <h2>{Math.round(props.fahrenheit)}°</h2>
        <span className="units">
          F |
          <a href="/" onClick={showCelsius}>
            C
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <h2>{Math.round(celsius())}°</h2>
        <span className="units">
          <a href="/" onClick={showFahrenheit}>
            F
          </a>
          | C
        </span>
      </div>
    );
  }
}
