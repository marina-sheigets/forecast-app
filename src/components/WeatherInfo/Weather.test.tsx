import { render, screen } from "@testing-library/react";
import WeatherInfo from "./WeatherInfo";
import type { Weather } from "../../types/Weather";
import "@testing-library/jest-dom";

const mockedWeather: Weather = {
  timezone: "Europe/Kiev",
  dt: 1689458400,
  temp: 23.5,
  wind_speed: 12.3,
  weather: {
    id: 800,
    main: "Clear",
  },
  min: 18.0,
  max: 26.7,
};

jest.mock("../../utils/getFormattedDate", () => ({
  getFormattedDate: () => "Monday, July 15",
}));

describe("WeatherInfo Component", () => {
  it("renders timezone", () => {
    render(<WeatherInfo weather={mockedWeather} />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Europe/Kiev"
    );
  });

  it("renders formatted date", () => {
    render(<WeatherInfo weather={mockedWeather} />);
    expect(screen.getByText("Monday, July 15")).toBeInTheDocument();
  });

  it("renders weather description", () => {
    render(<WeatherInfo weather={mockedWeather} />);
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Clear weather"
    );
  });

  it("renders temperature icons and values", () => {
    render(<WeatherInfo weather={mockedWeather} />);
    expect(screen.getByText(/18/)).toBeInTheDocument();
    expect(screen.getByText(/26.7/)).toBeInTheDocument();
  });

  it("renders wind speed", () => {
    render(<WeatherInfo weather={mockedWeather} />);
    expect(screen.getByText(/Wind: 12.3 km\/h/)).toBeInTheDocument();
  });
});
