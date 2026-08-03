import "./Forecast.css";
import exampleWeatherIcon from "../../../assets/icons/example-weather-icon.svg";

export default function Forecast() {
  const forecasts = [
    {
      time: "6:00 PM",
      temperature: 26,
      condition: "Moderate Rain",
      icon: exampleWeatherIcon,
    },
    {
      time: "9:00 PM",
      temperature: 25,
      condition: "Cloudy",
      icon: exampleWeatherIcon,
    },
    {
      time: "12:00 AM",
      temperature: 24,
      condition: "Light Rain",
      icon: exampleWeatherIcon,
    },
    {
      time: "3:00 AM",
      temperature: 24,
      condition: "Cloudy",
      icon: exampleWeatherIcon,
    },
    {
      time: "6:00 AM",
      temperature: 25,
      condition: "Sunny",
      icon: exampleWeatherIcon,
    },
  ];
  return (
    <section className="forecast-container">
      {forecasts.map((forecast) => (
        <article className="forecast-card">
          <div className="forecast-info">
            <time dateTime="" className="forecast-time">
              {forecast.time}
            </time>
            <p className="forecast-temperature">{forecast.temperature}&deg;c</p>
          </div>

          <div className="forecast-description">
            <img src={forecast.icon} alt="" className="forecast-icon" />
            <p className="forecast-condition">{forecast.condition}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
