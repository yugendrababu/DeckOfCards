import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { initialDeck, shuffleDeck } from "../util/util";
import ShowDeck from "./ShowDeck";
import DrawView from "./DrawView";
import Snackbar from "@mui/material/Snackbar";
import Box from "@mui/material/Box";

export default function DeckView() {
  const [hidden, setHidden] = React.useState(true);
  const [deck, SetDeck] = React.useState([...shuffleDeck(initialDeck)]);
  const [reset, setReset] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOnHiddenClick = () => {
    if (deck.length !== 0) {
      setHidden(!hidden);
    }
  };
  const handleOnShuffleDeckClick = () => {
    SetDeck([...shuffleDeck(deck)]);
  };
  const handleOnResetClick = () => {
    SetDeck([...shuffleDeck(initialDeck)]);
    setReset(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  React.useEffect(() => {
    if (deck.length === 0) {
      setOpen(true);
    }
  }, [deck]);
  return (
    <React.Fragment>
      <Box sx={{ width: "100%", marginTop: 1, marginLeft: 1, marginBottom:1}}>
        <Stack direction="row" spacing={3}>
          <Button variant="outlined" onClick={handleOnHiddenClick}>
            {hidden ? "Show Deck" : "Hide Deck"}
          </Button>
          <Button variant="outlined" onClick={handleOnShuffleDeckClick}>
            {" "}
            Shuffle Deck
          </Button>
          <Button variant="outlined" onClick={handleOnResetClick}>
            Reset
          </Button>
        </Stack>
      </Box>
      <ShowDeck deck={deck} hidden={hidden}></ShowDeck>
      <div>---</div>
      <DrawView
        deck={deck}
        SetDeck={SetDeck}
        reset={reset}
        setReset={setReset}
      ></DrawView>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={open}
        onClose={handleClose}
        message="All cards are drawn. Please reset"
      />
    </React.Fragment>
  );
}
