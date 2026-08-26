import "./CurrentWeather.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import WeatherHighlights from "./WeatherHighlights/WeatherHighlights";
import { useWeather } from "../../../context/WeatherContext";
import LoadingSpinner from "../../UI/LoadingSpinner/LoadingSpinner";
import useScrollPosition from "../../../hooks/useScrollPosition";
import { formatCityTime } from "../../../utils/dateFormat";
import { useEffect, useState } from "react";

export default function CurrentWeather() {
  const { weatherData, loading } = useWeather();
  const scrollPosition = useScrollPosition();
  const [timestamp, setTimestamp] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimestamp(Date.now());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const time = formatCityTime(timestamp, weatherData?.timezone);

  return (
    <section
      className={`current-weather ${scrollPosition > 100 ? "current-weather-sticky" : ""}`}
    >
      {loading ? (
        <div className="loading">
          <LoadingSpinner size="100px" />
          <p className="text">Getting latest weather...</p>
        </div>
      ) : (
        <>
          <div className="current-weather-info">
            <img src={weatherData?.description?.icon} alt="" className="icon" />

            <h1 className="temperature">{weatherData?.temperature}&deg;c</h1>
            <p className="location">
              <FontAwesomeIcon icon={faLocationDot} size="sm" />
              <span className="location-name">{weatherData?.name}</span>
              <span className="separator"> | </span>
              <span className="location-time">{time}</span>
            </p>
          </div>
          <p className="weather-description">
            <span>{weatherData?.description?.text}</span> is expected today.
          </p>
          <WeatherHighlights />
        </>
      )}
    </section>
  );
}
