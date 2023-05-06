import { useState } from "react";
import CounterChild from "../Components/CounterChild";
import { createContext } from "react";

export const ContextCounter = createContext();

export const ContextProvider = () => {
  const [count, setCount] = useState(5);
  const increment = () => {
    setCount((prev) => (prev == 10 ? 10 : prev + 1));
  };
  const decrement = () => {
    setCount((prev) => (prev == 0 ? 0 : prev - 1));
  };

  return (
    <ContextCounter.Provider value={{ count, increment, decrement }}>
      <CounterChild />
    </ContextCounter.Provider>
  );
};
