import "./Weather.css";
import { useEffect, useState } from "react";
import CurrentWeather from "./CurrentWeather/CurrentWeather";
import Forecast from "./Forecast/Forecast";
import { getCurrentWeather } from "../../api/weatherApi";
import { faL } from "@fortawesome/free-solid-svg-icons";

export default function Weather() {
  return (
    <main className="weather-container">
      <CurrentWeather />
      <Forecast />
    </main>
  );
}
