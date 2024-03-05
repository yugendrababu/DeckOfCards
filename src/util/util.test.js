import { sortedDeck, unSortedDeck } from "./mock";
import { initialDeck, shuffleDeck, sortDeck } from "./util";


test("test for shuffle deck", () => {
  const deck = initialDeck;
  expect(deck[0]).not.toBe(shuffleDeck(deck)[0]);
});

test("test for sorted deck", () => {
    const deck = sortDeck(unSortedDeck);
    expect(deck).toEqual(sortedDeck);
  });
  

