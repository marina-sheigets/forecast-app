import { render, screen, fireEvent } from "@testing-library/react";
import CityHistory from "./CityHistory";
import type { HistoryItem } from "../../types/HistoryItem";
import "@testing-library/jest-dom";

const weather = {
  timezone: "Europe/Kiev",
  dt: 1689458400,
  temp: 23.5,
  wind_speed: 12.3,
  weather: "Clear",
  min: 18.0,
  max: 26.7,
};

const mockCities: HistoryItem[] = [
  {
    id: "1",
    timezone: "Europe/Kyiv",
    searchedAt: new Date(),
    weather: weather,
  },
  {
    id: "2",
    timezone: "America/New_York",
    searchedAt: new Date(),
    weather: weather,
  },
];

describe("CityHistory", () => {
  let props: {
    cities: HistoryItem[];
    onCitySelect: jest.Mock;
    onUndoRemove: jest.Mock;
    onCityRemove: jest.Mock;
    lastRemovedItem: HistoryItem | null;
  };

  beforeEach(() => {
    props = {
      cities: mockCities,
      onCitySelect: jest.fn(),
      onUndoRemove: jest.fn(),
      onCityRemove: jest.fn(),
      lastRemovedItem: null,
    };
  });

  it("does not render if cities array is empty", () => {
    props.cities = [];
    const { container } = render(<CityHistory {...props} />);
    expect(container.firstChild).toBeNull();
  });

  it("renders 'See the history' button", () => {
    render(<CityHistory {...props} />);
    expect(screen.getByText(/see the history/i)).toBeInTheDocument();
  });

  it("shows history when button is clicked", () => {
    render(<CityHistory {...props} />);
    fireEvent.click(screen.getByText(/see the history/i));

    expect(screen.getByText(/recent searches/i)).toBeInTheDocument();
    expect(screen.getByText("Europe/Kyiv")).toBeInTheDocument();
  });

  it("calls onCitySelect when a city is clicked", () => {
    render(<CityHistory {...props} />);
    fireEvent.click(screen.getByText(/see the history/i));
    fireEvent.click(screen.getByText("Europe/Kyiv"));

    expect(props.onCitySelect).toHaveBeenCalledWith(mockCities[0]);
  });

  it("calls onCityRemove when × is clicked", () => {
    render(<CityHistory {...props} />);
    fireEvent.click(screen.getByText(/see the history/i));

    const removeButtons = screen.getAllByText("×");
    fireEvent.click(removeButtons[0]);

    expect(props.onCityRemove).toHaveBeenCalledWith("1");
  });

  it("shows undo message when lastRemovedItem is provided", () => {
    props.lastRemovedItem = {
      id: "3",
      timezone: "Asia/Tokyo",
      searchedAt: new Date(),
      weather: weather,
    };

    render(<CityHistory {...props} />);
    fireEvent.click(screen.getByText(/see the history/i));

    expect(screen.getByText(/city "asia\/tokyo" removed/i)).toBeInTheDocument();
    expect(screen.getByText(/undo/i)).toBeInTheDocument();
  });

  it("calls onUndoRemove when 'Undo' button is clicked", () => {
    props.lastRemovedItem = {
      id: "3",
      timezone: "Asia/Tokyo",
      searchedAt: new Date(),
      weather: weather,
    };

    render(<CityHistory {...props} />);
    fireEvent.click(screen.getByText(/see the history/i));
    fireEvent.click(screen.getByText(/undo/i));

    expect(props.onUndoRemove).toHaveBeenCalled();
  });
});
