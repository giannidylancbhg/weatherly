import "./assets/styles/global.css";
import "./assets/styles/variable.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ScrollToTopButton from "./components/UI/ScrollToTopButton/ScrollToTopButton";
import Weather from "./components/Weather/Weather";
import { WeatherProvider } from "./context/WeatherContext";
import useScrollPosition from "./hooks/useScrollPosition";

function App() {
  const scrollPosition = useScrollPosition();

  return (
    <div className="app">
      <WeatherProvider>
        <Header />
        <Weather />
      </WeatherProvider>
      <Footer />

      {scrollPosition > 100 ? <ScrollToTopButton /> : <></>}
    </div>
  );
}

export default App;
