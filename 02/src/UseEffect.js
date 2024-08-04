import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [clicked, setClicked] = useState();
  const [count, setCount] = useState(0);
  useEffect(() => {
    alert("We are in Use State");
  }, [count]); ////effect will be show for page reload and count state only
  ////dependency array [count,clicked]== effect will show for both state
  //empty dependency array [] ===effect wiil show for all states

  return (
    <div>
      <button onClick={() => setClicked("Subscribe")}>Subscribe</button>
      <br />
      <hr />
      <button onClick={() => setClicked("To")}>To</button>
      <br />
      <hr />
      <button onClick={() => setClicked("DropXoUT")}>DropXoUT</button>
      <h1>{clicked}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <h1>{count}</h1>
    </div>
  );
};

export default UseEffect;
