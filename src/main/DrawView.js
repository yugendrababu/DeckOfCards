import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import { sortDeck } from "../util/util";

export default function DrawView({ deck, SetDeck, reset, setReset }) {
  const [value, setValue] = React.useState("");
  const [drawDeck, setDrawDeck] = React.useState([]);
  const handleOnChange = (event) => {
    const data = event.target.value;
    if (data.match(/[^0-9]/) || data > deck.length) {
      event.preventDefault();
    } else {
      setValue(data);
    }
  };
  const handleOnDrawCardClick = () => {
    SetDeck([...deck.toSpliced(0, value)]);
    setDrawDeck([...drawDeck, ...deck.slice(0, value)]);
  };

  const handleOnSortDrawnCardsClick = () => {
    setDrawDeck([...sortDeck(drawDeck)]);
  };

  React.useEffect(() => {
    if (reset) {
      setReset(false);
      setValue("");
      setDrawDeck([]);
    }
  }, [reset, setReset]);

  return (
    <React.Fragment>
      <Box sx={{ width: "100%", marginLeft: 1 }}>
        <Stack direction="row" spacing={2}>
          <TextField
            required
            id="outlined-required"
            inputProps={{
                "data-testid":"cardsInput"
            }}
            label="Enter no. of cards to draw"
            value={value}
            name="cardsInput"
            onChange={handleOnChange}
          />
          <Button variant="outlined" onClick={handleOnDrawCardClick}>
            {" "}
            draw cards
          </Button>
          <Button variant="outlined" onClick={handleOnSortDrawnCardsClick}>
            {" "}
            Sort drawn cards
          </Button>
        </Stack>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
           marginLeft: 1,
           marginTop:2,
          "& > :not(style)": {
            m: 1,
            width: 52,
            height: 52,
          },
        }}
      >
        {drawDeck.map((item) => (
          <Paper elevation={3} key={item.id}>
            {item.Suit.substring(0, 1)} <div>{item.Value}</div>
          </Paper>
        ))}
      </Box>
    </React.Fragment>
  );
}
