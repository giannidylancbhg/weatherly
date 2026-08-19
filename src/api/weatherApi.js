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

  const lists = data.list.map((item) => ({
    timestamp: item.dt,
    time: item.dt_txt,
    dateTime: item.dt_txt,
    temperature: Math.floor(item.main.temp),
    description: item.weather[0].description,
    icon: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
  }));

  const currentCityDate = new Date(Date.now() + data?.city?.timezone * 1000)
    .toISOString()
    .split("T")[0];

  const currentCityDay = new Date(
    Date.now() + data?.city?.timezone * 1000,
  ).toLocaleDateString("en-US", { weekday: "long", timeZone: "UTC" });

  const todaysForecast = lists
    .filter((item) => item.time.startsWith(currentCityDate))
    .map((item) => {
      const dateTimeSplit = item.time.split(" ")[1];
      const timeSplit = dateTimeSplit.split(":");
      const hours = Number(timeSplit[0]);
      const minutes = timeSplit[1];

      return {
        ...item,
        time: `${hours % 12 || 12}:${minutes} ${hours >= 12 ? "PM" : "AM"}`,
      };
    });

  return {
    city: data.city.name,
    timezone: data.city.timezone,
    currentCityDay,
    todaysForecast,
  };
};
