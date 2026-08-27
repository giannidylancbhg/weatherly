const API_KEY = import.meta.env.VITE_API_KEY;

export const getCityList = async (city) => {
  const url = `//api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.length === 0) throw new Error("No results found");

  return data;
};
