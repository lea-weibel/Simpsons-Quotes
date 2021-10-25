import React from "react";

const Quotes = ({ quotes }) => {
  return (
    quotes && (
      <div>
        <p>"{quotes.quote}"</p>
        <img src={quotes.image} alt={quotes.character} />
        <p>- {quotes.character}</p>
      </div>
    )
  );
};

export default Quotes;
