import "./WeatherHighlights.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faGaugeSimpleHigh } from "@fortawesome/free-solid-svg-icons";
import { useWeather } from "../../../../context/WeatherContext";
import { formatWithCommas } from "../../../../utils/formatNumber";

export default function WeatherHighlights() {
  const { weatherData, loading } = useWeather();

  return (
    <section className="current-weather-highlights">
      {/* Humidity Highlight */}
      <article className="humidity highlight">
        <div className="highlight-header">
          <FontAwesomeIcon icon={faDroplet} />
          <h3>Humidity</h3>
        </div>

        <p className="highlight-value">{weatherData?.highlights?.humidity}%</p>
      </article>

      {/* Wind Speed Highlight */}
      <article className="wind highlight">
        <div className="highlight-header">
          <FontAwesomeIcon icon={faWind} />
          <h3>Wind Speed</h3>
        </div>

        <p className="highlight-value">
          {weatherData?.highlights?.windSpeed} km/h
        </p>
      </article>

      {/* Pressure Highlight */}
      <article className="uv highlight">
        <div className="highlight-header">
          <FontAwesomeIcon icon={faGaugeSimpleHigh} />
          <h3>Pressure</h3>
        </div>

        <p className="highlight-value">
          {formatWithCommas(weatherData?.highlights?.pressure)} hpa
        </p>
      </article>
    </section>
  );
}
