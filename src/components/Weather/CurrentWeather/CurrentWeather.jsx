import "./CurrentWeather.css";
import weatherIconExample from "../../../assets/icons/example-weather-icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function CurrentWeather() {
  return (
    <section className="current-weather">
      <div className="current-weather-info">
        <img src={weatherIconExample} alt="" className="icon" />
        <h1 className="temperature">27&deg;c</h1>
        <p className="location">
          <FontAwesomeIcon icon={faLocationDot} />
          <span className="location-name">Liloan, Cebu</span>
          <span className="separator"> | </span>
          <span className="location-time">9:45 PM</span>
        </p>
      </div>

      <p className="weather-description">
        <span>Moderate rain</span> is expected today.
      </p>

      <div className="current-weather-highlights"></div>
    </section>
  );
}
