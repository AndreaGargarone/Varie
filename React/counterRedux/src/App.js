import React from "react";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

export default function App() {
  let counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
