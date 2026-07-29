import "./Header.css";
import logo from "../../assets/logo.svg";

export default function Header() {
  return (
    <header class="header">
      {/* Logo and Search Bar */}
      <div class="brand">
        <img src={logo} alt="Weatherly Logo" />

        <form>
          <input type="text" />
          <button>Search</button>
        </form>
      </div>

      <p>Your daily weather companion</p>
    </header>
  );
}
