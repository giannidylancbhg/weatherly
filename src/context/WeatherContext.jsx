import { createContext, useContext, useState, useEffect } from "react";
import { getCurrentWeather, getForecast } from "../api/weatherApi";

const WeatherContext = createContext(undefined);

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorCurrentWeather, setErrorCurrentWeather] = useState(null);
  const [errorForecast, setErrorForecast] = useState(null);

  const search = async (coordinates) => {
    setWeatherData(null);
    setForecastData(null);
    setErrorCurrentWeather(null);
    setErrorForecast(null);
    setLoading(true);

    // Get Current Weather Data
    try {
      const weatherData = await getCurrentWeather(coordinates);
      setWeatherData(weatherData);
    } catch (error) {
      setErrorCurrentWeather(error.message);
    }

    // Get Forecast Data
    try {
      const forecastData = await getForecast(coordinates);
      setForecastData(forecastData);
    } catch (error) {
      setErrorForecast(error.message);
    }

    setLoading(false);
  };

  useEffect(() => {
    search({ lat: 10.3998487, lon: 123.998762 });
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        search,
        weatherData,
        forecastData,
        loading,
        errorCurrentWeather,
        errorForecast,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
