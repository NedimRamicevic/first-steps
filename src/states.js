import React, { useState, useEffect } from "react";

export function Clock() {
  const [date, setDate] = useState(new Date());
  const tick = () => setDate(new Date());

  useEffect(() => {
    setInterval(tick, 1000);
  });

  return (
    <div>
      <h1>{date.toLocaleTimeString()}</h1>
    </div>
  );
}
export function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Flavio");

  useEffect(() => {
    console.log(`Hi ${name} you clicked ${count} times`);
  });

  return (
    <div>
      <p>
        Hi {name} you clicked {count} times
      </p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setName(name === "Flavio" ? "Roger" : "Flavio")}>
        Change name
      </button>
    </div>
  );
}
