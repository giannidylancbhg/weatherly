import "./assets/styles/global.css";
import "./assets/styles/variable.css";
import Header from "./components/Header/Header";
import Weather from "./components/Weather/Weather";
import { WeatherProvider } from "./context/WeatherContext";

function App() {
  return (
    <div className="app">
      <WeatherProvider>
        <Header />
        <Weather />
      </WeatherProvider>
    </div>
  );
}

export default App;
