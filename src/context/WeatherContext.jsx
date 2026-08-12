import { createContext, useContext, useState, useEffect } from "react";
import { getCurrentWeather, getForecast } from "../api/weatherApi";

const WeatherContext = createContext(undefined);

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState({});
  const [forecastData, setForecastData] = useState({});
  const [loading, setLoading] = useState(false);

  const search = async (city) => {
    try {
      setLoading(true);
      const weatherData = await getCurrentWeather(city);
      setWeatherData(weatherData);
      const forecastData = await getForecast(city);
      setForecastData(forecastData);
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
    <WeatherContext.Provider
      value={{ search, weatherData, forecastData, loading }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
