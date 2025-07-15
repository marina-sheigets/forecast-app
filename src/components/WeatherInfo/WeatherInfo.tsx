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
      <p className={styles.date}>{getFormattedDate(weather.dt)}</p>
      <h2>{weather.weather.main} weather</h2>
      <p className={styles.temperatures}>
        <div>
          <FaTemperatureArrowUp />
          {weather.min} °C
        </div>
        |
        <div>
          <FaTemperatureArrowDown />
          {weather.max} °C
        </div>
      </p>
      <p>Wind: {weather.wind_speed} km/h</p>
    </div>
  );
};

export default WeatherInfo;
