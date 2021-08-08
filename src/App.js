import "./App.css";
import Card from "./Card";
import faker from "faker";

function App() {
  return (
    <div className="App">
      <Card
        name={`${faker.name.firstName()} ${faker.name.lastName()}`}
        title={faker.name.jobTitle()}
        img={faker.image.avatar()}
      />
      <Card
        name={`${faker.name.firstName()} ${faker.name.lastName()}`}
        title={faker.name.jobTitle()}
        img={faker.image.avatar()}
      />
      <Card
        name={`${faker.name.firstName()} ${faker.name.lastName()}`}
        title={faker.name.jobTitle()}
        img={faker.image.avatar()}
      />
      <Card
        name={`${faker.name.firstName()} ${faker.name.lastName()}`}
        title={faker.name.jobTitle()}
        img={faker.image.avatar()}
      />
      <Card
        name={`${faker.name.firstName()} ${faker.name.lastName()}`}
        title={faker.name.jobTitle()}
        img={faker.image.avatar()}
      />
      <Card
        name={`${faker.name.firstName()} ${faker.name.lastName()}`}
        title={faker.name.jobTitle()}
        img={faker.image.avatar()}
      />
    </div>
  );
}

export default App;
