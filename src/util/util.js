const suits = ["Spades", "Diamonds", "Club", "Heart"];
const suitsWeight = {
  Club: 1,
  Spades: 2,
  Heart: 3,
  Diamonds: 4,
};
const values = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
];
let deck = [];
let id = 0;
const createDeck = () => {
  for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
      let card = { id: id, Value: values[x], Suit: suits[i] };
      id++;
      if (values[x] === "Ace") {
        card.weight = 14;
      } else {
        card.weight = x + 1;
      }

      deck.push(card);
    }
  }
  return deck;
};

export const initialDeck = createDeck();

export const shuffleDeck = (deck) => {
  let m = deck.length,
    t,
    i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = deck[m];
    deck[m] = deck[i];
    deck[i] = t;
  }

  return deck;
};
export const sortDeck = (deck) => {
  const groupedDeck = {};
  let sortedDeck = [];
  deck.forEach((element) => {
    const key = `${element.Suit}`;
    if (groupedDeck?.hasOwnProperty(key)) {
      groupedDeck[key].push(element);
    } else {
      groupedDeck[key] = [];
      groupedDeck[key].push(element);
    }
  });
  const keys = Object.keys(groupedDeck);
  keys.sort((a, b) => {
    if (suitsWeight[a] < suitsWeight[b]) {
      return 1;
    } else if (suitsWeight[a] > suitsWeight[b]) {
      return -1;
    }
    return 0;
  });
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    const unSortedSubDeck = groupedDeck[key];
    unSortedSubDeck.sort((a, b) => {
      if (a.weight < b.weight) {
        return 1;
      } else if (a.weight > b.weight) {
        return -1;
      }
      return 0;
    });
    sortedDeck = [...unSortedSubDeck, ...sortedDeck];
  }
  return sortedDeck
};
