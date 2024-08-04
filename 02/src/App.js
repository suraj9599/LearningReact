import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleClickInc = () => {
    setCount(count + 1);
  };
  const handleClickDec = () => {
    setCount(count - 1);
  };
  return (
    <div className="app">
      <h2>{count}</h2>
      <button onClick={handleClickInc}>+</button>
      <button onClick={handleClickDec}>-</button>
    </div>
  );
}

export default App;
