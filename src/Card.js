import React from "react";
import "./App.css";


const Card = (props) => {
  console.log(props);
  return (
    <div>
      <div className="card">
        <img
          src={props.img}
          alt="Avatar"
          style={{ width: "100%" }}
        ></img>
        <div className="container">
          <h4>
            <b>{props.name}</b>
          </h4>
          <p>{props.title}</p>
          <p>{props.children}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
