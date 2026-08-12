import { icon } from "@fortawesome/fontawesome-svg-core";

const API_KEY = import.meta.env.VITE_API_KEY;

export const getCurrentWeather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) throw new Error("City weather is not found.");

  const iconURL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  return {
    name: data.name,
    temperature: Math.floor(data.main.temp),
    description: {
      icon: iconURL,
      text: data.weather[0].description,
    },
    highlights: {
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      pressure: data.main.pressure,
    },
  };
};

export const getForecast = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) throw new Error("City forecast is not found.");

  return {
    city: data.city.name,
    lists: data.list.map((item) => ({
      timestamp: item.dt,
      time: item.dt_txt,
      temperature: Math.floor(item.main.temp),
      description: item.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
    })),
  };
};
