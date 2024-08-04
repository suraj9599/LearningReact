import React from "react";
import "./MobileList.css";

export default function Mobilelist(props) {
  console.log(props);
  return (
    <div className="main">
      {console.log(props)}
      <img className="image" src={props.image} />
      <div>
        <h2>{props.title}</h2>
        <p>{props.price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}
