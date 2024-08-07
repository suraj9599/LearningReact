import "./App.css";
import { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  }
  if (action.type === "DECREMENT") {
    return state - 1;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>{state}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        -
      </button>
    </div>
  );
}

export default App;
