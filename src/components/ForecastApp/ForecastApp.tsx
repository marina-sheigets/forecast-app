import { useEffect, useState } from "react";
import type { Weather } from "../../types/Weather";
import SearchBar from "../SearchBar/SearchBar";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import styles from "./ForecastApp.module.css";
import Loader from "../Loader/Loader";

const ForecastApp = () => {
  const [weather, setWeather] = useState<Weather>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const handleFetchWeather = (query: string) => {
    reset();

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${
        import.meta.env.VITE_WEATHER_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.cod !== 200 && res.cod !== "200") {
          throw new Error(res.message);
        }

        setWeather({
          dt: res.dt,
          max: Math.round(res.main.temp_max - 273.15),
          min: Math.round(res.main.temp_min - 273.15),
          temp: Math.round(res.main.temp - 273.15),
          timezone: res.name,
          weather: res.weather[0].main,
          wind_speed: res.wind.speed,
        });
      })
      .catch((e) => {
        setError(e.message || "Something went wrong");
        setWeather(undefined);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const reset = () => {
    setIsLoading(true);
    setError("");
  };

  useEffect(() => {
    handleFetchWeather("Kiev");
  }, []);

  return (
    <div className={styles.forecastApp}>
      <SearchBar handleFetchWeather={handleFetchWeather} />
      {isLoading ? <Loader /> : null}
      {error ? <h2>{error}</h2> : null}
      {weather ? <WeatherInfo weather={weather} /> : null}

      {/*
        <CityHistory /> */}
    </div>
  );
};

export default ForecastApp;
