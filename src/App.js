import "./App.css";
import Search from "./Search";
import Weather from "./Weather";
import DailyForecastData from "./DailyForecastData";

export default function App() {
  let Data = [
    {
      day: "Wednesday",
      tempMin: "19",
      tempMax: "20",
      description: "Overcast Clouds",
    },
    {
      day: "Thursday",
      tempMin: "17",
      tempMax: "22",
      description: "Overcast Clouds",
    },
    {
      day: "Friday",
      tempMin: "18",
      tempMax: "22",
      description: "Overcast Clouds",
    },
    {
      day: "Saturday",
      tempMin: "15",
      tempMax: "25",
      description: "Overcast Clouds",
    },
    {
      day: "Sunday",
      tempMin: "11",
      tempMax: "30",
      description: "Sunny",
    },
  ];
  return (
    <div className="App">
      <div className="container">
        <Search />
        <Weather />
        <DailyForecastData Data={Data} />
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
