import styles from "./App.module.css";
import ForecastApp from "./components/ForecastApp/ForecastApp";

function App() {
  return (
    <div className={styles.app}>
      <ForecastApp />
    </div>
  );
}

export default App;
