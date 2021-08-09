import React from "react";
import ReactDOM from "react-dom";

function Denemes() {
  const people = ["Rowe", "Prevost", "Gare"];

  const peopleLis = people.map(
    (person, i) => (i === 1 ? <li key={"person_" + i}>{person}</li> : "naber")
    // expression goes here:
  );

  return <div className="App">{peopleLis}</div>;
}
export default Denemes;
