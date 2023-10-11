import React from "react";

export default function Weather() {
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
      <h1> Allentown</h1>
      <h4>Tuesday, October 10, 8:00pm</h4>
      <ul className="hi-low">
        <li>Day 66°F</li>
        <li> Night 39°F</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <h2>53°</h2>
          <span className="units">F|C</span>
          <span className="feel">Feels like 53°</span>
        </div>
        <div className="col-6">
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night.png"
            alt=" Clear"
          />
          <p className="description"> Clear</p>
        </div>
      </div>
    </div>
  );
}
