import React from "react";
import "./Widget.css";
import {
  TiWeatherCloudy,
  TiWeatherDownpour,
  TiWeatherNight,
  TiWeatherPartlySunny,
  TiWeatherShower,
  TiWeatherSnow,
  TiWeatherStormy,
  TiWeatherSunny,
  TiWeatherWindyCloudy,
  TiWeatherWindy,
} from "../../node_modules/react-icons/ti";
import { WiHumidity } from "../../node_modules/react-icons/wi";
import { BsWind, BsSunset } from "../../node_modules/react-icons/bs";
const Widget = ({ data }) => {
  const { name } = data;
  const {
    main: { temp },
  } = data;
  const {
    wind: { speed },
  } = data;
  console.log(data);
  return (
    <>
      <div className="widget">
        <div className="weather-icon">
          <div className="weather-icon-center">
            <TiWeatherCloudy></TiWeatherCloudy>
          </div>
        </div>
        <div className="main-weather-info">
          <div className="place">{name}</div>
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>
          <div className="description">
            <div className="weather-condition">
              {new Date().toLocaleString()}
            </div>
          </div>
        </div>
        <div className="other-weather-info">
          <div className="sunset">
            <BsSunset></BsSunset> Sunset 6.30pm
          </div>
          <div className="humidity">
            <WiHumidity></WiHumidity>
          </div>
          <div className="wind">
            <BsWind></BsWind>
            {speed}km/h
          </div>
        </div>
      </div>
    </>
  );
};

export default Widget;
