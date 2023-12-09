import React, { useState } from "react";

export default function App() {
  const state = useState(0); // Concept of "Hook"
  console.log(state[0]); // Starting value 0 at index 0

  // Concept of "Destructuring" (st like tuple unpacking in python)
  const [count, setCount] = useState(0);
  console.log(count, setCount);

  // Declarative programming
  // var isDone = false;
  // const lineThrough = {textDecoration: "line-through"}
  // return <p style={isDone ? lineThrough : null}>Buy milk</p>

  // Imperative programming
  return (
    <div>
      <p id="milk">Buy milk</p>

      <button
        onClick={() => {
          document.getElementById("milk").style.textDecoration = "line-through";
        }}
      >
        Struck
      </button>

      <button
        onClick={() => {
          document.getElementById("milk").style.textDecoration = null;
        }}
      >
        Un-Struck
      </button>
      <br />
      <br />

      {/* Concept of "Hook" used when we're rendering the page like so, not refreshing. By not refreshing the page we can't process variables like counters, so we need to use a Hook instead. */}

      <div className="container">
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
      <br />
      <br />
    </div>
  );
  
}
