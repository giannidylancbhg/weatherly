import "./Header.css";
import logo from "../../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useWeather } from "../../context/WeatherContext";

export default function Header() {
  const [location, setLocation] = useState("");
  const { search } = useWeather();

  const handleSubmit = (e) => {
    e.preventDefault();
    search(location);
    setLocation("");
  };

  return (
    <header className="header">
      <div className="brand">
        <img src={logo} alt="Weatherly Logo" />

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
              onChange={(e) => setLocation(e.target.value)}
            />
          </label>

          <button>Search</button>
        </form>
      </div>

      <p className="tagline">Your daily weather companion</p>
    </header>
  );
}
