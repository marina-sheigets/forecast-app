import { useState } from "react";
import styles from "./CityHistory.module.css";
import { MdHistory } from "react-icons/md";
import type { HistoryItem } from "../../types/HistoryItem";

type CityHistoryProps = {
  cities: HistoryItem[];
  onCitySelect: (city: HistoryItem) => void;
};

const CityHistory = ({ cities, onCitySelect }: CityHistoryProps) => {
  const [isHistoryShowed, setIsHistoryShowed] = useState(false);

  const handleToggleHistoryVisibility = () => {
    setIsHistoryShowed(!isHistoryShowed);
  };

  if (cities.length === 0) {
    return null;
  }

  return (
    <>
      <div
        className={styles.seeHistoryButton}
        onClick={handleToggleHistoryVisibility}
      >
        <MdHistory /> See the history
      </div>

      {isHistoryShowed && (
        <div
          className={styles.historyPopupContainer}
          onClick={handleToggleHistoryVisibility}
        >
          <div
            className={styles.cityHistory}
            onClick={(e) => e.stopPropagation()} // prevent closing
          >
            <div className={styles.header}>
              <h3>Recent Searches ({cities.length})</h3>
            </div>
            <div className={styles.content}>
              {cities.length > 0 ? (
                <div className={styles.cityList}>
                  {cities.map((city) => (
                    <div key={city.id} className={styles.cityItem}>
                      <div
                        className={styles.cityInfo}
                        onClick={() => onCitySelect(city)}
                      >
                        <div className={styles.cityName}>{city.timezone}</div>
                        <div className={styles.cityMeta}>
                          {city.weather && (
                            <span className={styles.temperature}>
                              {city.weather.temp} °C
                            </span>
                          )}
                        </div>
                      </div>
                      <button
                        className={styles.removeButton}
                        title="Remove from history"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className={styles.emptyState}>
                  <p>No recent searches</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CityHistory;
