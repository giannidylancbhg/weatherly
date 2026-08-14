import "./Forecast.css";
import exampleWeatherIcon from "../../../assets/icons/example-weather-icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { getForecast } from "../../../api/weatherApi";
import { WeatherProvider } from "../../../context/WeatherContext";
import { useWeather } from "../../../context/WeatherContext";

export default function Forecast() {
  const { forecastData } = useWeather();

  const countTodaysForecast = forecastData?.todaysForecast?.length ?? 0;

  console.log(forecastData);

  return (
    <WeatherProvider>
      <section className="forecast-container">
        <h3 className="forecast-heading">
          <FontAwesomeIcon icon={faClock} />
          <span>3-hour forecast</span>
        </h3>

        <div className="forecast-list">
          <div className="forecast-title">
            <h4>Today's Forecast</h4>
            <p>{forecastData.currentCityDay}</p>
          </div>

          {forecastData?.todaysForecast?.map((item) => (
            <article className="forecast-card" key={item?.timestamp}>
              <div className="forecast-info">
                <time dateTime="" className="forecast-time">
                  {item?.time}
                </time>
                <p className="forecast-temperature">
                  {item?.temperature}&deg;c
                </p>
              </div>
              <div className="forecast-description">
                <img src={item?.icon} alt="" className="forecast-icon" />
                <p className="forecast-condition">{item?.description}</p>
              </div>
            </article>
          ))}

          {countTodaysForecast == 3 && (
            <div className="forecast-end end-v3"></div>
          )}

          {countTodaysForecast == 6 && (
            <div className="forecast-end end-v6"></div>
          )}

          {countTodaysForecast == 5 && (
            <div className="forecast-end end-v5"></div>
          )}

          {countTodaysForecast == 8 && (
            <div className="forecast-end end-v8"></div>
          )}
        </div>
      </section>
    </WeatherProvider>
  );
}
