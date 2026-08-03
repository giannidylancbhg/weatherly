import "./WeatherHighlights.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";

export default function WeatherHighlights() {
  return (
    <section className="current-weather-highlights">
      {/* Humidity Highlight */}
      <article className="humidity highlight">
        <div className="highlight-header">
          <FontAwesomeIcon icon={faDroplet} />
          <h3>Humidity</h3>
        </div>

        <p className="highlight-value">95%</p>
      </article>

      {/* Wind Speed Highlight */}
      <article className="wind highlight">
        <div className="highlight-header">
          <FontAwesomeIcon icon={faWind} />
          <h3>Wind Speed</h3>
        </div>

        <p className="highlight-value">2 km/h</p>
      </article>

      {/* UV Index Highlight */}
      <article className="uv highlight">
        <div className="highlight-header">
          <FontAwesomeIcon icon={faSun} />
          <h3>UV Index</h3>
        </div>

        <p className="highlight-value">0 UV</p>
      </article>
    </section>
  );
}
