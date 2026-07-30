import "./Header.css";
import logo from "../../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="header">
      <div className="brand">
        <img src={logo} alt="Weatherly Logo" />

        <form className="searchbar">
          <label className="search-input">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
            <input
              type="text"
              placeholder="Type a location"
              id="search-input"
            />
          </label>

          <button>Search</button>
        </form>
      </div>

      <p className="tagline">Your daily weather companion</p>
    </header>
  );
}
