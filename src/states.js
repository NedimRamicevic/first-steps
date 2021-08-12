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

// export class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { name: "nedim", count: 1 };
//   }
//   list = [
//     "neim",
//     "nedim",
//     "sefa",
//     "ferdi",
//     "yunus",
//     "neim",
//     "nedim",
//     "sefa",
//     "ferdi",
//     "yunus",
//     "naber",
//   ];
//   componentDidMount() {
//     this.TimerID = setInterval(() => {
//       this.tick();
//       console.log((Math.random() * 10).toFixed(), "count : ", this.state.count);
//     }, 1000);
//   }
//   componentWillUnmount() {
//     clearInterval(this.TimerID);
//   }
//   tick() {
//     this.setState({
//       name: this.list[(Math.random() * 10).toFixed()],
//       count: this.state.count + 1,
//     });
//   }
//   render() {
//     return <h1>Hi I am {this.state.name}</h1>;
//   }
// }
export function Counter() {
  const list = [
    "neim",
    "nedim",
    "sefa",
    "ferdi",
    "yunus",
    "neim",
    "nedim",
    "sefa",
    "ferdi",
    "yunus",
    "naber",
  ];
  const [counter, setCounter] = useState(1);
  const [name, setname] = useState("nedim");
  const tick = () => {
    setname(list[counter]);
    setCounter(counter === 10 ? 0 : counter + 1);
    console.log("xxxxxxxx", counter);
  };
  useEffect(() => {
    setInterval(tick, 1000);
  });

  return (
    <div>
      <h1>Hi I am {name}</h1>
    </div>
  );
}
