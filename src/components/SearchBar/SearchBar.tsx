import { useRef } from "react";
import styles from "./SearchBar.module.css";

type SearchBarProps = {
  handleFetchWeather: (query: string) => void;
};
const SearchBar = ({ handleFetchWeather }: SearchBarProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if (inputRef.current && inputRef.current.value.trim() !== "") {
      handleFetchWeather(inputRef.current.value);
      inputRef.current.value = "";
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
