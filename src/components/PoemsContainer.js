import React from "react";
import Poem from "./Poem";

function PoemsContainer({poems, setPoems}) {
  console.log(poems)
  return (
    <div className="poems-container">
      {poems.map((element) => {
        return( <Poem key={element.id} setPoems={setPoems} poems={element} />)
      })}
    </div>
  );
}

export default PoemsContainer;
