import "./CurrentWeather.css";
import weatherIconExample from "../../../assets/icons/example-weather-icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import WeatherHighlights from "./WeatherHighlights/WeatherHighlights";
import { useWeather } from "../../../context/WeatherContext";
import LoadingSpinner from "../../UI/LoadingSpinner/LoadingSpinner";
import { useEffect, useState } from "react";
import useScrollPosition from "../../../hooks/useScrollPosition";

export default function CurrentWeather() {
  const { weatherData, loading } = useWeather();

  const scrollPosition = useScrollPosition();

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error, {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  function success(position) {
    console.log(
      "Latitude:",
      position.coords.latitude,
      "Longitude:",
      position.coords.longitude,
      "Accuracy",
      position.coords.accuracy,
    );
  }

  function error() {
    alert("Sorry, no position available.");
  }

  // useEffect(() => {
  //   getLocation();
  // }, []);

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
