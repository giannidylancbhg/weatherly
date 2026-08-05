import "./CurrentWeather.css";
import weatherIconExample from "../../../assets/icons/example-weather-icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import WeatherHighlights from "./WeatherHighlights/WeatherHighlights";
import { useWeather } from "../../../context/WeatherContext";

export default function CurrentWeather() {
  const { weatherData, loading } = useWeather();

  return (
    <section className="current-weather">
      <div className="current-weather-info">
        <img src={weatherIconExample} alt="" className="icon" />
        <h1 className="temperature">{weatherData.temperature}&deg;c</h1>
        <p className="location">
          <FontAwesomeIcon icon={faLocationDot} size="sm" />
          <span className="location-name">Liloan, Cebu</span>
          <span className="separator"> | </span>
          <span className="location-time">9:45 PM</span>
        </p>
      </div>

      <p className="weather-description">
        <span>Moderate rain</span> is expected today.
      </p>

      <WeatherHighlights />
    </section>
  );
}
