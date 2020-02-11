import React from "react";

function Quotes({ simpson }) {
  return (
    <div className="displaySimpson">
      <h1>{simpson.character}</h1>
      <img src={simpson.image} alt={simpson.character}></img>
      <p>{simpson.quote}</p>
    </div>
  );
}

export default Quotes;
