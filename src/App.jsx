import "./assets/styles/global.css";
import "./assets/styles/variable.css";
import Header from "./components/Header/Header";
import Weather from "./components/Weather/Weather";

function App() {
  return (
    <div className="app">
      <Header />
      <Weather />
    </div>
  );
}

export default App;
