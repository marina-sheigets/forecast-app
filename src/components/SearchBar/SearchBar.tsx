import { useRef } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if (inputRef.current?.value.trim() !== "") {
      const city = inputRef.current?.value;
      //fetchWeather(city);
    }
  };

  return (
    <div className={styles.searchBarContainer}>
      <input
        type="search"
        placeholder="Enter your city"
        className={styles.searchBar}
        ref={inputRef}
      />
      <button className={styles.searchButton} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
