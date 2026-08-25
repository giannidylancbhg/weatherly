import { createContext, useContext, useState, useEffect, useRef } from "react";
import { getCurrentWeather, getForecast } from "../api/weatherApi";
import useGeolocation from "../hooks/useGeolocation";

const WeatherContext = createContext(undefined);

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorCurrentWeather, setErrorCurrentWeather] = useState(null);
  const [errorForecast, setErrorForecast] = useState(null);

  const { coordinates } = useGeolocation();

  const searchID = useRef(0);
  const search = async (coordinates) => {
    setWeatherData(null);
    setForecastData(null);
    setErrorCurrentWeather(null);
    setErrorForecast(null);
    setLoading(true);
    const currentSearchID = ++searchID.current;

    // Get Current Weather Data
    try {
      const weatherData = await getCurrentWeather(coordinates);
      if (currentSearchID !== searchID.current) return;

      setWeatherData(weatherData);
    } catch (error) {
      setErrorCurrentWeather(error.message);
    }

    // Get Forecast Data
    try {
      const forecastData = await getForecast(coordinates);
      if (currentSearchID !== searchID.current) return;

      setForecastData(forecastData);
    } catch (error) {
      setErrorForecast(error.message);
    }

    if (currentSearchID === searchID.current) setLoading(false);
  };

  useEffect(() => {
    if (coordinates) {
      search({ lat: coordinates.lat, lon: coordinates.lon });
      return;
    }

    search({ lat: 10.3998487, lon: 123.998762 });
  }, [coordinates]);

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
