const API_KEY = import.meta.env.VITE_API_KEY;

export const getCurrentWeather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  console.log(response);

  if (!response.ok) {
    throw new Error("City is not found.");
  }

  return {
    name: data.name,
    temperature: Math.floor(data.main.temp),
    description: {
      icon: data.weather[0].icon,
      text: data.weather[0].description,
    },
    highlights: {
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      pressure: data.main.pressure,
    },
  };
};
