import SearchBar from "../SearchBar/SearchBar";
import styles from "./ForecastApp.module.css";

const ForecastApp = () => {
  return (
    <div className={styles.forecastApp}>
      <SearchBar />
      {/* <WeatherInfo />
        <CityHistory /> */}
    </div>
  );
};

export default ForecastApp;
