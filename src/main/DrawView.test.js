import { render, screen, fireEvent } from "@testing-library/react";
import DrawView from "./DrawView";
import { unSortedDeck } from "../util/mock";


test("renders drawview", () => {
  render(<DrawView deck={unSortedDeck} />);
  const linkElement = screen.getByText(/draw cards/i);
  expect(linkElement).toBeInTheDocument();
});
test("check hide view check button", () => {
  render(<DrawView deck={unSortedDeck}/>);
  const input = screen.getByTestId('cardsInput')
  fireEvent.change(input, {target: {value: '2'}})
  expect(input.value).toBe('2')
});


