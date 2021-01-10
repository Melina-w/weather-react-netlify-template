import "./App.css";
import "./Weather.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Auckland" />
        <div className="openSource">
          This project was coded by Melina Waigant and it is {""}
          <a
            href="https://github.com/Melina-w/weather-react-netlify-template"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
