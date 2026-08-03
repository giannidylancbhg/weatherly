import CurrentWeather from "./CurrentWeather/CurrentWeather";
import Forecast from "./Forecast/Forecast";
import "./Weather.css";

export default function Weather() {
  return (
    <main className="weather-container">
      <CurrentWeather />
      <Forecast />
    </main>
  );
}
