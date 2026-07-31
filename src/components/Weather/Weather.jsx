import CurrentWeather from "./CurrentWeather/CurrentWeather";
import "./Weather.css";

export default function Weather() {
  return (
    <main className="weather-container">
      <CurrentWeather />
      <section className="forecast" style={{ flex: 1.2 }}>
        Forecast
      </section>
    </main>
  );
}
