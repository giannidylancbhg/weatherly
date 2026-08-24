import "./Header.css";
import logo from "../../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useWeather } from "../../context/WeatherContext";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";

export default function Header() {
  const [location, setLocation] = useState("");
  const { search } = useWeather();

  const [cityList, setCityList] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [coordinates, setCoordinates] = useState({});

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = (coordinates) => {
    search(coordinates);
    setLocation("");
    setSelectedIndex(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (location.trim() !== "") handleSearch(coordinates);
    else handleSearch({ lat: 10.3998487, lon: 123.998762 });
  };

  const handleCityClick = (index) => {
    const coordinates = {
      lat: cityList[index]?.lat,
      lon: cityList[index]?.lon,
    };

    setCoordinates({ lat: cityList[index]?.lat, lon: cityList[index]?.lon });
    handleSearch(coordinates);
  };

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(async () => {
      try {
        const API_KEY = import.meta.env.VITE_API_KEY;

        if (location.trim() === "") {
          setCityList(null);
          setSelectedIndex(0);
          return;
        }

        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.length === 0) throw new Error("No results found");

        setCityList(data);
        setCoordinates({
          lat: data[0]?.lat,
          lon: data[0]?.lon,
        });
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [location]);

  console.log(cityList);

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
            </label>

            <button disabled={!location.trim() || cityList === null}>
              Search
            </button>
          </form>

          {location &&
            (loading ? (
              <div className="city-list-loading">
                <LoadingSpinner />
              </div>
            ) : cityList?.length > 0 ? (
              <ul className="city-list">
                {cityList?.map((item, index) => (
                  <li key={`${item.lat}-${item.lon}`}>
                    <button
                      onClick={() => handleCityClick(index)}
                      className={`${index === selectedIndex ? "city-selected " : ""}`}
                    >
                      {item?.name}
                      {item?.state ? "," : ""} {item?.state}
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
