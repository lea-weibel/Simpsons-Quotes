import React from "react";
import "./App.css";
import Quotes from "./Quotes";
import axios from "axios";

const testQuote = {
  quote: "By chilling my loins I increase the chances of impregnating my wife.",
  character: "Apu Nahasapeemapetilon",
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
  characterDirection: "Left",
};

function App() {
  const [quotes, setQuotes] = React.useState(testQuote);

  const getQuotes = () => {
    // Send the request
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        setQuotes(data[0]);
      });
  };

  return (
    <div className="App">
      <Quotes quotes={quotes} />
      <button type="button" onClick={getQuotes}>
        Get new quote
      </button>
    </div>
  );
}

export default App;
