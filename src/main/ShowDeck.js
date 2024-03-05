import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import ScatterPlotIcon from "@mui/icons-material/ScatterPlot";

export default function ShowDeck({ deck, hidden }) {
  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 52,
            height: 52,
          },
        }}
      >
        {deck.map((item) =>
          hidden ? (
            <Paper
              key={item.id}
              elevation={3}
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 1,
                  width: 36,
                  height: 36,
                },
              }}
            >
              <ScatterPlotIcon></ScatterPlotIcon>{" "}
            </Paper>
          ) : (
            <Paper elevation={3} key={item.id}>
              {item.Suit.substring(0, 1)} <div>{item.Value}</div>
            </Paper>
          )
        )}
      </Box>
    </React.Fragment>
  );
}
