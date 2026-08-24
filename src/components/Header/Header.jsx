import "./Header.css";
import logo from "../../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faL, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { useWeather } from "../../context/WeatherContext";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";
import useAutocompleteSearch from "../../hooks/useAutocompleteSearch.jsx";

export default function Header() {
  const [location, setLocation] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [focus, setFocus] = useState(false);
  const { search } = useWeather();

  const { cityList, coordinates, loading, error, setCoordinates } =
    useAutocompleteSearch(location);

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

  const inputRef = useRef(null);
  const handleKeyDown = (e) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) => (prev < cityList.length - 1 ? prev + 1 : 0));
        break;

      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : cityList.length - 1));
        break;

      case "Enter":
        e.preventDefault();
        handleCityClick(selectedIndex);
        break;

      case "Escape":
        e.preventDefault();
        setFocus(false);
        setSelectedIndex(0);
        inputRef.current.blur();
        break;
    }
  };

  console.log(cityList.length);

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
                onChange={(e) => setLocation(e.target.value)}
                list="city-names"
                autoComplete="off"
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                onKeyDown={handleKeyDown}
                ref={inputRef}
              />
            </label>

            <button
              disabled={!location.trim() || cityList.length === undefined}
            >
              Search
            </button>
          </form>

          {location &&
            (loading ? (
              <div className="city-list-loading">
                <LoadingSpinner />
              </div>
            ) : cityList?.length > 0 ? (
              focus && (
                <ul className="city-list">
                  {cityList?.map((item, index) => (
                    <li key={`${item.lat}-${item.lon}`}>
                      <button
                        onMouseDown={() => handleCityClick(index)}
                        className={`${index === selectedIndex ? "city-selected " : ""}`}
                      >
                        {item?.name}
                        {item?.state ? "," : ""} {item?.state}
                      </button>
                    </li>
                  ))}
                </ul>
              )
            ) : (
              focus && <div className="city-unavailable">{error}</div>
            ))}
        </div>
      </div>

      <p className="tagline">Your daily weather companion</p>
    </header>
  );
}
