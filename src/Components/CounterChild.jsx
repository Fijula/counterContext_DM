import { useContext } from "react";
import { ContextCounter } from "../Context/ContextCounter";

function CounterChild() {
  const { count, increment, decrement } = useContext(ContextCounter);
  return (
    <div>
      <h1 style={{ color: "grey" }}>
        Counter : <span style={{ color: "black" }}>{count}</span>
      </h1>
      <button
        style={{ backgroundColor: "lightgrey", margin: "10px" }}
        onClick={increment}
      >
        Increment
      </button>
      <button style={{ backgroundColor: "lightgrey" }} onClick={decrement}>
        Decrement
      </button>
    </div>
  );
}

export default CounterChild;
