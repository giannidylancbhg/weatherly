import "./Header.css";
import logo from "../../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useWeather } from "../../context/WeatherContext";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";

export default function Header() {
  const [location, setLocation] = useState("");
  const [coordinates, setCoordinates] = useState({});
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { search } = useWeather();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location.trim() !== "") {
      search(location);
    } else {
      search("Liloan");
    }

    setLocation("");
  };

  const [city, setCity] = useState(null);
  const handleChange = async (e) => {
    setLocation(e.target.value);
  };

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(async () => {
      try {
        const API_KEY = import.meta.env.VITE_API_KEY;

        if (location.trim() === "") {
          setCity(null);
          return;
        }

        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.length === 0) throw new Error("No results found");

        setCity(data);
        console.log(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <header className="header">
      <div className="brand">
        <img src={logo} alt="Weatherly Logo" />

        <div className="search-container">
          <form className="searchbar" onSubmit={handleSubmit}>
            <label className="search-input">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className={`search-icon${location.trim() ? "search-has-text" : ""}`}
              />
              <input
                type="text"
                placeholder="Type a location"
                id="search-input"
                value={location}
                onChange={handleChange}
                list="city-names"
                autoComplete="off"
              />

              {/* <datalist id="city-names" className="city-list">
              <option value="Liloan"></option>
              <option value="Consolacion"></option>
            </datalist> */}
            </label>

            <button>Search</button>
          </form>

          {location &&
            (loading ? (
              <div className="city-list-loading">
                <LoadingSpinner />
              </div>
            ) : city?.length > 0 ? (
              <ul className="city-list">
                {city?.map((item, index) => (
                  <li key={`${item.lat}-${item.lon}`}>
                    <button
                      onClick={() => {
                        setSelectedIndex(index);
                      }}
                      className={`${index === selectedIndex ? "city-selected " : ""}`}
                    >
                      {item?.name}, {item?.state}
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="city-unavailable">{error}</div>
            ))}
        </div>
      </div>

      <p className="tagline">Your daily weather companion</p>
    </header>
  );
}
