import { useEffect, useState } from "react";
import CurrentWeather from "./CurrentWeather/CurrentWeather";
import Forecast from "./Forecast/Forecast";
import { getCurrentWeather } from "../../api/weatherApi";
import "./Weather.css";
import { faL } from "@fortawesome/free-solid-svg-icons";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(true);

  const search = async (city) => {
    try {
      const data = await getCurrentWeather(city);
      setWeatherData(data);
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    search("Liloan");
  }, []);

  return (
    <main className="weather-container">
      {loading ? "Loading" : ""}
      <CurrentWeather />
      <Forecast />
    </main>
  );
}
