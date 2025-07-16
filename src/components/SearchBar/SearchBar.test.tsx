import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchBar from "./SearchBar";

jest.mock("./SearchBar.module.css", () => ({
  __esModule: true,
  default: {
    searchBarContainer: "searchBarContainer",
    input: "input",
    button: "button",
  },
}));

const props = {
  handleFetchWeather: jest.fn(),
};

describe("SearchBar Component", () => {
  test("renders input and button", () => {
    render(<SearchBar {...props} />);

    expect(screen.getByPlaceholderText(/enter your city/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /search/i })).toBeInTheDocument();
  });

  test("does nothing when input is empty", () => {
    render(<SearchBar {...props} />);
    const button = screen.getByRole("button", { name: /search/i });

    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    fireEvent.click(button);

    expect(consoleSpy).not.toHaveBeenCalled();
    consoleSpy.mockRestore();
  });
});
