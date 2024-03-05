import { render, screen, fireEvent } from "@testing-library/react";
import DeckView from "./DeckView";

test("renders DeckView", () => {
  render(<DeckView />);
  const linkElement = screen.getByText(/Shuffle Deck/i);
  expect(linkElement).toBeInTheDocument();
});
test("check hide view check button", () => {
  const { debug } = render(<DeckView />);
  fireEvent.click(screen.getByText(/Show Deck/i));
  const linkElement = screen.getByText(/Hide Deck/i);
  expect(linkElement).toBeInTheDocument();
});
