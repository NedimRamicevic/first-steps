import React, { useState, useEffect } from "react";

// export function Clock() {
//   const [date, setDate] = useState(new Date());
//   const tick = () => setDate(new Date());
//   console.log("naber");

//   useEffect(() => {
//     setInterval(tick, 1000);
//   });

//   return (
//     <div>
//       <h1>{date.toLocaleTimeString()}</h1>
//     </div>
//   );
// }

// export class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { date: new Date() };
//   }
//   render() {
//     return (
//       <div>
//         {this.props.isPrecise
//           ? this.state.date.toISOString()
//           : this.state.date.toLocaleTimeString()}
//       </div>
//     );
//   }
//   startInterval() {
//     let delay;
//     if (this.props.isPrecise) {
//       delay = 100;
//     } else {
//       delay = 1000;
//     }
//     this.intervalID = setInterval(() => {
//       this.setState({ date: new Date() });
//     }, delay);
//   }
//   componentDidMount() {
//     this.startInterval();
//   }
//   componentDidUpdate(prevProps) {
//     if (this.props.isPrecise === prevProps.isPrecise) {
//       return;
//     }
//     clearInterval(this.intervalID);
//     this.startInterval();
//   }
//   componentWillUnmount() {
//     clearInterval(this.intervalID);
//   }
// }

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "nedim", count: 1 };
  }
  list = [
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
  componentDidMount() {
    this.TimerID = setInterval(() => {
      this.tick();
      console.log(this.state.count);
    }, 1000);
  }
  // componentWillUnmount() {
  //   clearInterval(this.TimerID);
  // }
  tick() {
    this.setState({
      name: this.list[(Math.random() * 10).toFixed()],
      count: this.state.count + 1,
    });
  }
  render() {
    return <h1>Hi I am {this.state.name}</h1>;
  }
}

// export function Counter() {
//   const list = [
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
//   const [counter, setCounter] = useState(1);
//   const [name, setname] = useState(new Date());

//   const tick = () => {
//     setname(new Date());
//   };
//   useEffect(() => {
//     setInterval(tick, 1000); // runs multiple times ???
//   });

//   return (
//     <div>
//       <h1>Hi I am {name.toISOString()}</h1>
//     </div>
//   );
// }

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return <div>{this.state.date.toISOString()}</div>;
  }
  componentDidMount() {
    const oneSecond = 1000;
    this.intervalID = setInterval(() => {
      this.setState({ date: new Date() });
    }, oneSecond);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
}
