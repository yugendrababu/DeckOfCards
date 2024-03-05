import * as React from "react";
import "./App.css";
import DeckView from "./main/DeckView";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Deck of Cards</p>
      </header>
      <DeckView></DeckView>
    </div>
  );
}

export default App;
