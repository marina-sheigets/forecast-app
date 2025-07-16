import type { Weather } from "../../types/Weather";
import { getFormattedDate } from "../../utils/getFormattedDate";
import styles from "./WeatherInfo.module.css";
import { FaTemperatureArrowUp, FaTemperatureArrowDown } from "react-icons/fa6";

type WeatherInfoProps = {
  weather: Weather;
};

const WeatherInfo = ({ weather }: WeatherInfoProps) => {
  return (
    <div className={styles.weatherInfo}>
      <h1>{weather.timezone}</h1>
      <h1>{weather.temp} °C</h1>
      <p className={styles.date}>{getFormattedDate(weather.dt)}</p>
      <h2>{weather.weather} weather</h2>
      <p className={styles.temperatures}>
        <div>
          <FaTemperatureArrowUp />
          {weather.max} °C
        </div>
        |
        <div>
          <FaTemperatureArrowDown />
          {weather.min} °C
        </div>
      </p>
      <p>Wind: {weather.wind_speed} km/h</p>
    </div>
  );
};

export default WeatherInfo;
