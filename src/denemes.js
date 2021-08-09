import React from "react";
import ReactDOM from "react-dom";

function Denemes() {
  //   const people = ["Rowe", "Prevost", "Gare"];

  //   const peopleLis = people.map(
  //     (person, i) => (i === 1 ? <li key={"person_" + i}>{person}</li> : "naber    ")
  //     // expression goes here:
  //   );

  //   return <div className="App">{peopleLis}</div>;

  //   const friends = [
  //     {
  //       title: "Yummmmmmm",
  //       src: "https://content.codecademy.com/courses/React/react_photo-monkeyweirdo.jpg",
  //     },
  //     {
  //       title: "Hey Guys!  Wait Up!",
  //       src: "https://content.codecademy.com/courses/React/react_photo-earnestfrog.jpg",
  //     },
  //     {
  //       title: "Yikes",
  //       src: "https://content.codecademy.com/courses/React/react_photo-alpaca.jpg",
  //     },
  //   ];

  //   // New component class starts here:
  //   class Friend extends React.Component {
  //     render() {
  //       var friend = friends[0];
  //       return (
  //         <div>
  //           <h1>{friend.title}</h1>
  //           <img src={friend.src} />
  //         </div>
  //       );
  //     }
  //   }

  const fiftyFifty = Math.random() < 0.5;

  // New component class starts here:
  class TonightsPlan extends React.Component {
    scream() {
      alert("nabers");
    }
    render() {
      return fiftyFifty ? (
        <div>
          <h1>Tonight I'm going out WOOO</h1>
          <button onClick={this.scream}>Nabers</button>
        </div>
      ) : (
        <div>
          <h1>Tonight I'm going to bed WOOO</h1>
          <button onClick={this.scream}>Nabers</button>
        </div>
      );
    }
  }
  return <TonightsPlan />;
}
export default Denemes;
