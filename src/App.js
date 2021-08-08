import "./App.css";
import React, { useState } from "react";
import Card from "./Card";
import faker from "faker";

function App() {
  const [name, setName] = useState("naber lan");
  const btns = (
    <div>
      <button className="btnYes" onClick={setNewName}>
        Yes
      </button>
      <button className="btnNo">No</button>
    </div>
  );
  function setNewName() {
    setName(`${faker.name.firstName()} ${faker.name.lastName()}`);
  }
  const chaneInput = (name) => setName(name.target.value);
  return (
    <div className="App">
      <Card
        name={name}
        title={faker.name.jobTitle()}
        img={faker.image.avatar()}
        onChangeInput={chaneInput}
      >
        {btns}
      </Card>
      <Card
        name={`${faker.name.firstName()} ${faker.name.lastName()}`}
        title={faker.name.jobTitle()}
        img={faker.image.avatar()}
      >
        {btns}
      </Card>
    </div>
  );
}

export default App;
