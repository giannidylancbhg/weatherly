import "./Header.css";
import logo from "../../assets/logo.svg";

export default function Header() {
  return (
    <header class="header">
      <div class="brand">
        <img src={logo} alt="Weatherly Logo" />

        <form className="searchbar">
          <input type="text" placeholder="Type a location" />
          <button>Search</button>
        </form>
      </div>

      <p className="tagline">Your daily weather companion</p>
    </header>
  );
}
