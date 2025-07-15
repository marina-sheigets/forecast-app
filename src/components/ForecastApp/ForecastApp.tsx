import type { Weather } from "../../types/Weather";
import SearchBar from "../SearchBar/SearchBar";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import styles from "./ForecastApp.module.css";

const ForecastApp = () => {
  const mockedWeather: Weather = {
  timezone: "Europe/Kiev",
  dt: 1689458400,
  temp: 23.5,
  wind_speed: 5.2,
  weather: {
    id: 800,
    main: "Clear",
  },
  min: 18.0,
  max: 26.7,
};
  return (
    <div className={styles.forecastApp}>
      <SearchBar />
      <WeatherInfo weather={mockedWeather}/>
      {/*
        <CityHistory /> */}
    </div>
  );
};

export default ForecastApp;
