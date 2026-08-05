import { createContext, useContext, useState, useEffect } from "react";
import { getCurrentWeather } from "../api/weatherApi";

const WeatherContext = createContext(undefined);

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(false);

  const search = async (city) => {
    try {
      setLoading(true);
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
    <WeatherContext.Provider value={{ search, weatherData, loading }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
