import "./CurrentWeather.css";
import weatherIconExample from "../../../assets/icons/example-weather-icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import WeatherHighlights from "./WeatherHighlights/WeatherHighlights";
import { useWeather } from "../../../context/WeatherContext";
import LoadingSpinner from "../../UI/LoadingSpinner/LoadingSpinner";

export default function CurrentWeather() {
  const { weatherData, loading } = useWeather();

  return (
    <section className="current-weather">
      {!loading ? (
        <div className="loading">
          <LoadingSpinner size="100px" />
          <p className="text">Getting latest weather...</p>
        </div>
      ) : (
        <>
          <div className="current-weather-info">
            <img src={weatherData?.description?.icon} alt="" className="icon" />

            <h1 className="temperature">{weatherData.temperature}&deg;c</h1>
            <p className="location">
              <FontAwesomeIcon icon={faLocationDot} size="sm" />
              <span className="location-name">{weatherData.name}</span>
              <span className="separator"> | </span>
              <span className="location-time">9:45 PM</span>
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
